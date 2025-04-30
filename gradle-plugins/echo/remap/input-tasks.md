---
title: Remap Input Tasks
description: The official docs for the Echo Plugin.
---

# Input Tasks {#remap-input-tasks}
The input tasks is the tasks that remap will get the jar from that it needs to remap.

When no tasks are specified it will first check for `shadowJar`. If remap can't find `shadowJar` it will resort to use `jar`. Of course, you can choose your own input task.
You can choose this task by adding `inputTask(CUSTOM_TASK)`

::: code-group
```groovy [Groovy DSL]
remap {
    minecraftVersion("1.21.4")
    inputTask(CUSTOM_JAR)
}
```
```kotlin [Kotlin DSL]
remap {
    minecraftVersion("1.21.4")
    inputTask(CUSTOM_JAR)
}
```
:::