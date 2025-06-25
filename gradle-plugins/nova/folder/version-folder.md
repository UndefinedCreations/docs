---
title: Nova Version Folder
description: The official docs for the Nova Gradle Plugin.
---

# Per Version Folder {#nova-version-folder}

When a server is created it will automatically create the run folder. If no custom path folder is selected, you can enable the generation of version sub-folders, e.g. `run/1.21.4/spigot`. 

By default, this option is set to `false`. You can modify this by adding `perVersionFolder(true)`:

::: tabs key:groovy-kotlin
== Groovy DSL
``` Groovy
runServer {
    minecraftVersion("1.21.4")
    perVersionFolder(true)
}
```
== Kotlin DSL
``` Kotlin
runServer {
    minecraftVersion("1.21.4")
    perVersionFolder(true)
}
```
:::