---
title: Remap Actions
description: The official docs for the Echo Plugin.
---

# Remap Actions {#remap-actions}

A remap action is the action that will remap the code. By default, it is `MOJANG_TO_SPIGOT`,  meaning it will remap all `Mojang` mappings to `Spigot`. Under is a list of all possible actions:

- `MOJANG_TO_SPIGOT`
- `MOJANG_TO_OBF`
- `OBF_TO_MOJANG`
- `OBF_TO_SPIGOT`
- `SPIGOT_TO_MOJANG`
- `SPIGOT_TO_OBF`

You can modify the action using the `action` method inside the `remap` task configuration block:

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