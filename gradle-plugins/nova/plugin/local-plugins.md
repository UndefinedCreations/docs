---
title: Nova Local plugins
description: The official docs for the Echo Plugin.
---

# Local plugins
If you have a local plugin you want to add to your server can you of course add them into the `plugins` folder you self, or you can give `Nova` a path to the local jar.
See below for an example

:::tabs key:groovy-kotlin
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    filePlugin(File("PLUGIN_PATH"))
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    filePlugin(File("PLUGIN_PATH"))
}
```
:::

You can also choose to overwrite the plugin every time on started.
See below for an example

:::tabs key:groovy-kotlin
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    filePlugin(File("PLUGIN_PATH"), true)
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    filePlugin(File("PLUGIN_PATH"), true)
}
```
:::