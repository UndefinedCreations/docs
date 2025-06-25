---
title: Nova Online plugins
description: The official docs for the Echo Plugin.
---

# Online plugins

Nova can automatically download plugins from SpigotMC, Paper Hangar and Modrinth. 

The simplest way to add plugins is to use the `plugins` method:

::: tabs key:groovy-kotlin
== Groovy DSL
``` Groovy 
runServer {
    minecraftVersion("1.21.4")
    plugins(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        "https://modrinth.com/plugin/viaversion"
    )
}
```
== Kotlin DSL
``` Kotlin
runServer {
    minecraftVersion("1.21.4")
    plugins(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        "https://modrinth.com/plugin/viaversion"
    )
}
```
:::

The `plugins` method will automatically detect which platform it should download from.

This method will download it once, then reuse that same plugin. You can force download on each startup by using the `plugin` method instead:

::: tabs key:groovy-kotlin
== Groovy DSL
::: code-group
``` Groovy [Single]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        true // override
    )
}
```
``` Groovy [List]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        [
            "https://www.spigotmc.org/resources/luckperms.28140/",
            "https://modrinth.com/plugin/viaversion"
        ],
        true // override
    )
}
```
== Kotlin DSL
``` Kotlin [Single]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        override = true
    )
}
```
``` Kotlin [List]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        listOf(
            "https://www.spigotmc.org/resources/luckperms.28140/",
            "https://modrinth.com/plugin/viaversion"
        ),
        override = true
    )
}
```
:::