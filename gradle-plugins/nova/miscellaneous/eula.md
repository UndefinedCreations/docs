---
title: Nova Eula
description: The official docs for the Echo Plugin.
---

# Mojang eula
`Nova` allows you to automatically accept the mojang eula. This can be done by adding `acceptMojangEula()`. 

::: warning
Keep in mind when you have added this into gradle you have accepted the [eula](https://www.minecraft.net/en-us/eula)
:::

See below for an example

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    acceptMojangEula()
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    acceptMojangEula()
}
```
:::
