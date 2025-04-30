---
title: Remap Set Up
description: The official docs for the Echo Plugin.
---

# Remap Setup {#remap-setup}
When using `Mojang` mapped NMS we need to remap it into `Spigot` mapping. Lucky we made a custom gradle task that does that for you. This task is called `remap`

To start the set-up this task we need to set the `minecraftVersion`. We can do this by under the `tasks` tab in your `build.gradle` adding `remap`.
After that we add `minecraftVersion(VERSION)` inside the body. Below you will see a explain for mineshaft version 1.21.4 

::: info
If you are using the automatic `BuildTools` builder and importer you don't need to do this. It will grad the version that you have selected for `BuildTools`
:::

::: code-group
```groovy [Groovy DSL]
tasks {
    remap {
        minecraftVersion("1.21.4")
    }
}
```
```kotlin [Kotlin DSL]
tasks {
    remap {
        minecraftVersion("1.21.4")
    }
}
```
:::