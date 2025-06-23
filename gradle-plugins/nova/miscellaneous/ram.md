---
title: Nova Allowed Ram
description: The official docs for the Echo Plugin.
---

# Allowed Ram
When running a server it will use RAM on your system. By default `Nova` will only allow 2 gigabytes per active server. 
You can change this value by running `allowedRam(amount, RamAmount)`. [`RamAmount`](https://github.com/UndefinedCreations/Nova/blob/master/plugin/nova/src/main/kotlin/com/undefinedcreations/nova/RamAmount.kt) is the ram type. They are `Gigabyte` and `Megabyte`
See below for an example.

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    ramAmount(4, RamAmount.GIGABYTE)
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    ramAmount(4, RamAmount.GIGABYTE)
}
```
:::