---
title: Nova Local plugins
description: The official docs for the Nova Gradle Plugin.
---

# Local plugins

You can also automatically add local plugins as such:

::: tabs key:groovy-kotlin
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

You can also choose to override the plugin on each startup.

::: tabs key:groovy-kotlin
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
    filePlugin(File("PLUGIN_PATH"), override = true)
}
```
:::