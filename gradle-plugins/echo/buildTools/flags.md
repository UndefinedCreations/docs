---
title: Build Tools Flags
description: The official docs for the Echo Plugin.
---

# BuildTools Flags {#build-tools-flags}
When we build `BuildTools` we are able to set flags for when it does build. We will explore and see all the possible flags inside of this page.



# mojangMapping {#build-tools-flags-mojangMapping}
When using NMS there are two main mappings used. `Spigot` and `Mojang` mappings. 
By default, it will be set to be build `Mojang` mappings. We will be able to change this by changing the `mojangMapping` flag.
We can switch to `Spigot` mapping by adding `mojangMappings = false`

```kotlin
echo("1.21.4", mojangMappings = false)
```

# generateSource & generateDocs {#build-tools-flags-source-docs}
These two flag are very similar when these flags are enabled `BuildTools` will build with source jar / java documentation with it. 
By default, both of them are set to be enabled. We are able to turn this off by changing `generateSource = false` and `generateDocs false`


::: info
It will only generate sources and documentation for Bukkit, not Spigot
:::


```kotlin
echo("1.21.4",
    generateSource = false,
    generateDocs = false
)
```

# printDebug {#build-tools-flags-printDebug}
Print debug will print all the outputs when building `BuildTools`. This will make it easy for us to debug when things go wrong.
By default, it will be set to false meaning it won't print anything. We are able to toggle this by changing `printDebug = true`

```kotlin
echo("1.21.4", printDebug = true)
```