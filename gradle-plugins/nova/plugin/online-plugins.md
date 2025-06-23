---
title: Nova Online plugins
description: The official docs for the Echo Plugin.
---

# Online plugins
`Nova` can also install plugins from `spigotmc`, `paperHangar` and `modrinth`. 
The most way to add plugins is to add `plugins("link1", "link2")`.
Below is an example to install `Luckperms` and `ViaVersion`

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    plugins(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        "https://modrinth.com/plugin/viaversion"
    )
}
```
== Kotlin DSL
```kotlin
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

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    plugin(
        "https://www.spigotmc.org/resources/luckperms.28140/",
        true
    )
}
```
== Kotlin DSL
```kotlin
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

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
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
== Kotlin DSL
```kotlin
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