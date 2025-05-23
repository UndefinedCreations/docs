---
title: Remap New Jar
description: The official docs for the Echo Plugin.
---

# Create New Jar {#remap-new-jar}

When this option is enabled the task will create a new JAR instead of replacing the default JAR from the input task inside of `build/libs`. It will call the jar `PROJECT-remapped.jar`. By default, it replaces the JAR, i.e. it's false. Example: 

::: code-group
```groovy [Groovy DSL]
remap {
    minecraftVersion("1.21.4")
    createNewJar(true)
}
```
```kotlin [Kotlin DSL]
remap {
    minecraftVersion("1.21.4")
    createNewJar(true)
}
```
:::