---
title: Remap Set Up
description: The official docs for the Echo Plugin.
---

# Remap Setup {#remap-setup}

When using `Mojang` mapped NMS you will likely need to remap it into `Spigot` mappings — when running a SpigotMC server for example — which is why the `remap` task exists.

The `remap` task will remap any code into either `Mojang`, `Spigot` or `obfuscated` mappings.

For the task to function, the `minecraftVersion` needs to be set, which can be done by configuring the task:

> [!IMPORTANT]
> If you are already using the Echo to access server internals, this setup is not required as it will automatically use the Minecraft version used there.

::: code-group
```Groovy [Groovy DSL]
tasks {
    remap {
        minecraftVersion("1.21.4")
    }
}
```
```Kotlin [Kotlin DSL]
tasks {
    remap {
        minecraftVersion("1.21.4")
    }
}
```
:::