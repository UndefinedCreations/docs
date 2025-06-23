---
title: Nova No GUI
description: The official docs for the Echo Plugin.
---

# No GUI
When running `spigot` and `paper` servers run they create a GUI. `No GUI` will disable this. By default, it's on. You can toggle this by adding `noGui(false)`.
See below for example

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    noGui(false)
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    noGui(false)
}
```
:::