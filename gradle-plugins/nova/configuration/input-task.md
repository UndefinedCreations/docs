---
title: Nova Input Task
description: The official docs for the Nova Gradle Plugin.
---

# Input Task

The input task is the task that Nova will try and get the primary plugin JAR from. By default, it will first check for the `remap` task then the `shadow` task, and lastly the `jar` task.

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