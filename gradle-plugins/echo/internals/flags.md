---
title: Flags
description: The official docs for the Echo Plugin.
---

# Flags

You are able to set flags to determine how `BuildTools` installs the SpigotMC server JAR. Under is a list of flags used for `BuildTools`, and for Echo specific.

## mojangMappings

When using NMS there are two primary mappings used: `Spigot` and `Mojang`. 
By default, it uses `Mojang` mappings. You are able to modify it as such:

::: code-group
```Groovy [Groovy DSL]
TODO
```
```Kotlin [Kotlin DSL]
echo("1.21.4", mojangMappings = false) // SpigotMC Mappings
```
:::

## generateSource & generateDocs

::: tip
Sources and JavaDoc are only generated for Bukkit.
:::

These flags are quite similar; however, generateSource additionally includes the full source code of the server JAR — that is, the original Java files instead of compiled .class files. In contrast, generateDocs only generates the JavaDocs.

By default, both of them are enabled. You can modify that as such:

::: code-group
```Groovy [Groovy DSL]
TODO
```
```Kotlin [Kotlin DSL]
echo("1.21.4",
    generateSource = false,
    generateDocs = false
)
```
:::

## printDebug

The `printDebug` flag prints all the output in real-time received from `BuildTools`. This makes it easy to debug any problems.
By default, it will be `false` meaning it won't print anything, and you change that as such:

::: code-group
```Groovy [Groovy DSL]
TODO
```
```Kotlin [Kotlin DSL]
echo("1.21.4", printDebug = true)
```
:::