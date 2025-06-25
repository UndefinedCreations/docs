---
title: Nova Input Task
description: The official docs for the Echo Plugin.
---

# Input Task
The input task is the task that `Nova` will try and get the plugin jar from. By default, it will first check for `remap` task then `shadow` lastly `jar`.
To change the input task you can add `inputTask(customTask)`.
See below for an example

::: tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    inputTask(customTask)
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    inputTask(customTask)
}
```
:::