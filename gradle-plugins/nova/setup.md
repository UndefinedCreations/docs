---
title: Nova Setup
description: The official docs for the Echo Plugin.
---

# Nova Setup {#nova-setup}
To start the set-up of nova we will need to set the `minecraftVersion`. We can do this by going under the `tasks` in your `build.gradle` and adding `runServer`.

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
tasks {
    runServer {
        
    }
}
```
== Kotlin DSL
```kotlin
tasks {
    runServer {
        
    }
}
```
:::


After that we have added the `runServer` task we will modify the `minecraftVersion`. This is the version the server will run.
Below you will see an example for minecraft version 1.21.4

::: info
If you are using [`Echo`](/gradle-plugins/echo/importing) and [`BuildTools`](/gradle-plugins/echo/buildTools/build-tools.md) is enable with a valid `minecraftVersion`, `Nova` will automatically grad that version select. This means you won't need to set the version again here.
:::

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
tasks {
    runServer {
        minecraftVersion("1.21.4")
    }
}
```
== Kotlin DSL
```kotlin
tasks {
    runServer {
        minecraftVersion("1.21.4")
    }
}
```
:::