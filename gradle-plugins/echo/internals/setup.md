---
title: Accessing Server Internals
description: The official docs for the Echo Plugin.
---

# Accessing Server Internals

> [!Important]
> `BuildTools` is a tool created by the SpigotMC team to build a server jar with Spigot and Bukkit changes, which you can read more about [here](https://www.spigotmc.org/wiki/buildtools/).

Echo will automatically download, and import that server JAR using `BuildTools`.
You can initiate this process by using `echo` method in the `dependencies` block:

::: code-group
```Groovy [Groovy DSL]
TODO
```
```Kotlin [Kotlin DSL]
echo("1.21.4")
```
:::

It will subsequently download and import the server internals with Spigot and Bukkit applied to it. This does not include any PaperMC modifications to the server JAR, and if you do need those, check out [their plugin](https://docs.papermc.io/paper/dev/userdev/).