---
title: Nova Input Task
description: The official docs for the Echo Plugin.
---

# Input Task
The input task is the task that `Nova` will try and get the plugin jar from. By default, it will first check for `remap` task then `shadow` lastly `jar`.
To change the input task you can add `inputTask(customTask)`.
See below for an example

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    inputTask(customTask)
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    inputTask(customTask)
}
```
:::