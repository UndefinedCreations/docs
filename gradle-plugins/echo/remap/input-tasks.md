---
title: Input Tasks
description: The official docs for the Echo Plugin.
---

# Input Tasks {#input-tasks}

Input tasks are the tasks that the task will depend on and get the JAR from.

If no input tasks are given, it will default to the `shadowJar` task if it exists, otherwise on the `jar` task.
You can choose this task by using the `inputTask` method inside the task's configuration block.

::: code-group
```Groovy [Groovy DSL]
remap {
    minecraftVersion("1.21.4")
    inputTask(CUSTOM_JAR)
}
```
```Kotlin [Kotlin DSL]
remap {
    minecraftVersion("1.21.4")
    inputTask(CUSTOM_JAR)
}
```
:::