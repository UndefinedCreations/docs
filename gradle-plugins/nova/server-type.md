---
title: Nova Server Types
description: The official docs for the Nova Gradle Plugin.
---

# Server Types {#nova-server-type}

Nova makes it really easy to change what server you are running on.

By default, we support 8 different server JARs:

- `SPIGOT`
- `PAPERMC`
- `PUFFERFISH`
- `PURPUR`
- `ADVANCED_SLIME_PAPER`
- `BUNGEECORD`
- `WATERFALL`
- `VELOCITY`
- `FOLIA`

You can also use a custom JAR, which is shown in the next page.

You can change the server type by using the `serverType` method as such:

:::tabs key:groovy-kotlin
== Groovy DSL
``` Groovy 
runServer {
    minecraftVersion("1.21.4")
    serverType(ServerType.PAPERMC)
}
```
== Kotlin DSL
``` Kotlin
runServer {
    minecraftVersion("1.21.4")
    serverType(ServerType.PAPERMC)
}
```
:::

> [!Important]
> By default, the server type is set to SpigotMC.
