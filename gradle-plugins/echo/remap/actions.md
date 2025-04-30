---
title: Remap Actions
description: The official docs for the Echo Plugin.
---

# Remap Actions {#remap-actions}
A remap action is the action that the task will take. By default, it is set to `MOJANG_TO_SPIGOT`. This means it will remap all `Mojang` mappings to `Spigot`.
Let's have a quick look at all the possible actions.

```kotlin
MOJANG_TO_SPIGOT
MOJANG_TO_OBF
OBF_TO_MOJANG
OBF_TO_SPIGOT
SPIGOT_TO_MOJANG
SPIGOT_TO_OBF
```

To change the remap action we go into the remap task body and add `action(RemapTask.Action.MOJANG_TO_OBF)`. You can change action by changing the enum.

::: code-group
```groovy [Groovy DSL]
remap {
    minecraftVersion("1.21.4")
    action(RemapTask.Action.MOJANG_TO_OBF)
}
```
```kotlin [Kotlin DSL]
remap {
    minecraftVersion("1.21.4")
    action(RemapTask.Action.MOJANG_TO_OBF)
}
```
:::