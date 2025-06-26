---
title: Nova No GUI
description: The official docs for the Nova Gradle Plugin.
---

# No GUI

When running `SpigotMC` and `PaperMC` servers run they open a GUI. By default, the `noGui` option is enabled.

::: tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    noGui(false) // opens a gui
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    noGui(false) // opens a gui
}
```
:::