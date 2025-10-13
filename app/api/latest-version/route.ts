import { NextResponse } from "next/server";

// GET /api/latest-version?groupId=com.undefined&artifactId=stellar&type=release|version
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const groupId = searchParams.get("groupId");
  const artifactId = searchParams.get("artifactId");
  const type = searchParams.get("type") || "release"; // default to release
  const hostType = searchParams.get("host") || "undefined"

  if (!groupId || !artifactId) {
    return NextResponse.json(
      { error: "Missing groupId or artifactId" },
      { status: 400 }
    );
  }

  const path = groupId.replace(/\./g, "/");

  var host = hostType == "gradle" ? "https://plugins.gradle.org/m2" : "https://repo.undefinedcreations.com/releases"
  const metadataUrl = `${host}/${path}/${artifactId}/maven-metadata.xml`;

  try {
    const res = await fetch(metadataUrl);
    if (!res.ok) {
      return NextResponse.json(
        { error: `Metadata not found (${res.status})` },
        { status: 404 }
      );
    }

    const xml = await res.text();

    const latestMatch = xml.match(/<latest>([^<]+)<\/latest>/);
    const releaseMatch = xml.match(/<release>([^<]+)<\/release>/);
    const versionMatches = Array.from(xml.matchAll(/<version>([^<]+)<\/version>/g))
      .map((m) => m[1]);

    const latestVersion = latestMatch?.[1] || versionMatches.at(-1);
    const latestRelease = releaseMatch?.[1] || versionMatches.at(-1);

    let versionToUse = type === "release" ? latestRelease : latestVersion;

    if (!versionToUse) {
      return NextResponse.json(
        { error: "No version info found in metadata" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      version: versionToUse,
      versions: versionMatches,
      type,
      source: metadataUrl,
    });
  } catch (err: any) {
    console.error("Error fetching maven metadata:", err);
    return NextResponse.json(
      { error: err.message || "Failed to fetch version" },
      { status: 500 }
    );
  }
}
