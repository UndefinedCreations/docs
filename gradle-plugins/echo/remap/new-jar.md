---
title: Remap New Jar
description: The official docs for the Echo Plugin.
---

# Create New Jar {#remap-new-jar}
When this option is enable it will create a new jar instead of replacing the jar inside of `build\lib`. It will call the jar `PROJECT-remapped.jar`. 
By default, its is set to false making it replace the other jar. 

To modify this you can add `createNewJar(true)` to the remap body

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