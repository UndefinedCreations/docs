---
title: Nova Eula
description: The official docs for the Nova Gradle Plugin.
---

# Mojang EULA

Nova allows you to automatically accept the mojang EULA with the `acceptMojangEula` method. This parameter allows you to run your server without editing the `eula.txt`.

::: tabs key:kotlin-java
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
