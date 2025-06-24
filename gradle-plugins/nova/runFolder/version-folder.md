---
title: Nova Version Folder
description: The official docs for the Echo Plugin.
---

# Per Version Folder {#nova-version-folder}

When a server is created it will automatically create a folder. When this option is enabled it will create a folder for every `minecraftVersion`. 
This will make the folder structure like this `run/1.21.4/spigot` if running a spigot server.

By default, this option is set to `false`. You can modify this by adding `perVersionFolder(true)`. Below you will see an example.

::: tabs key:groovy-kotlin
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    perVersionFolder(true)
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    perVersionFolder(true)
}
```
:::