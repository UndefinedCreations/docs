---
title: Nova ServerType
description: The official docs for the Echo Plugin.
---

# ServerType {#nova-server-type}
`Nova` makes it really easy to change `ServerTypes`. When we change this value it will change the server to use a different server `jar`.
By default, we support 8 different server jars. Below you will see all of them.

```
SPIGOT
PAPERMC
PUFFERFISH
PURPUR
ADVANCED_SLIME_PAPER
BUNGEECORD
WATERFALL
VELOCITY
FOLIA
```

Let's have a look on how to change we can server type. Inside the `runServer` task we can set the server type by doing this `serverType(ServerType.TYPE)`. 
By default, it set to run a `Spigot` server. Below you can see how to change this to a `Paper` server.

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    serverType(ServerType.PAPERMC)
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    serverType(ServerType.PAPERMC)
}
```
:::
