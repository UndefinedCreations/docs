---
title: Build Tools Caching
description: The official docs for the Echo Plugin.
---

# Caching {#build-tools-caching}

We cache information inside your gradle home, you can find this folder here `C:\Users\USER\.gradle`.
We do this to make the start-up time as small as possible. We will show you what we are caching inside of this page.

All the files and folders are inside the `undefined\echo` folders in your gradle home.

# BuildTools Jar {#build-tools-caching-jar}

When we download the `BuildTools` jar we cache the version of the jar inside `buildToolsVersion.json`. 
When the project loads up we check if this jar is up to date with the latest version. If not we update the jar by downloading the new version.

# Builds {#build-tools-caching-builds}

When a minecraft version start being build we create a new folder. Inside this folder we start the building process. Any logs files will end up here as well.
When the project tries to import `echo` with a version selected we check this folder for the server jar. If we find the jar we know that it has been build so we only load it. If not we start the build process.