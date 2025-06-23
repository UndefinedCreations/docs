---
title: Nova Online plugins
description: The official docs for the Echo Plugin.
---

# Online plugins
`Nova` can also install plugins from `spigotmc`, `paperHangar` and `modrinth`. 
The most way to add plugins is to add `plugins("link1", "link2")`.
Below is an example to install `Luckperms` and `ViaVersion`

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    plugins(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        "https://modrinth.com/plugin/viaversion"
    )
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    plugins(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        "https://modrinth.com/plugin/viaversion"
    )
}
```
:::

This easy way will only install it once. If you want a plugin that will be overwritten every time on start you can do this. See below

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        true
    )
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        true
    )
}
```
:::

You can also pass a `List` and an `overwrite`. See below for an example.

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        listOf(
            "https://www.spigotmc.org/resources/luckperms.28140/",
            "https://modrinth.com/plugin/viaversion"
        ),
        true
    )
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    plugin(
        listOf(
            "https://www.spigotmc.org/resources/luckperms.28140/",
            "https://modrinth.com/plugin/viaversion"
        ),
        true
    )
}
```
:::