"use client";

import { useEffect, useState } from "react";
import { BiError } from "react-icons/bi";
import Spinner from "./spinner";

type Props = {
  groupId: string;
  artifactId: string;
  type?: "release" | "version";
  host?: "undefinedcreations" | "gradle"
};

export default function LatestVersion({
  groupId,
  artifactId,
  type = "release",
  host = "undefinedcreations"
}: Props) {
  const [version, setVersion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!groupId || !artifactId) return;

    const fetchVersion = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/latest-version?groupId=${groupId}&artifactId=${artifactId}&type=${type}&host=${host}`
        );
        const data = await res.json();

        if (data.version) setVersion(data.version);
        else setError(data.error || "Version not found");
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, [groupId, artifactId, type]);

  if (loading)
    return (
      <p className="flex flex-row gap-2 items-center">
        <Spinner /> Finding {type}...
      </p>
    );

  if (error)
    return (
      <p className="text-red-500 flex flex-row gap-2 items-center">
        <BiError /> {error}
      </p>
    );

  return (
    <div className="flex flex-col items-start space-y-1 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md w-fit">
      <span className="text-xs text-neutral-400 uppercase tracking-wider">
        {type === "release" ? "Latest Release" : "Latest Snapshot"}
      </span>
      <span className="text-md font-semibold text-white">{version}</span>
    </div>
  );
}