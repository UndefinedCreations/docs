---
title: Caching
description: The official docs for the Echo Plugin.
---

# Caching {#caching}

Information is cached in the `/undefined/echo` directory inside your [Gradle Home](https://docs.gradle.org/current/userguide/gradle_directories.html#gradle_user_home) (usually `~/.gradle` or `C:\Users\<USERNAME>\.gradle`).

## Server JAR

When `BuildTools` itself is installed, its version is cached inside a file called `buildToolsVersion.json`. When the project loads up, the cached `BuildTools` version is double-checked.

Any installed Server JARs are cached inside their own individual directory. Any log files will end up here as well.

## Cleaning Cache

To clean the cache, you have two options:

1. Run the `cleanCache` task in Gradle. This will clean the entire cache, which might not be useful if you don't want to rebuild a number of versions.
2. Manually delete cached files and folders in `GRADLE_HOME/undefined/echo`. This is a dangerous process and could cause issues.