---
title: Nova Custom Jar
description: The official docs for the Nova Gradle Plugin.
---

# Custom Jar

Nova also allows you to run a custom JAR instead of one of the presets. You can use a custom JAR using the `customJar` method as such:

:::tabs key:groovy-kotlin
== Groovy DSL
``` Groovy 
runServer {
    customJar("PATH")
}
```
== Kotlin DSL
``` Kotlin
runServer {
    customJar("PATH")
}
```
:::

By default, the JAR inside the `run` folder will be reused every time the server starts. You can force the JAR to be replaced/updated every time using the `alwaysReplace` parameter:

:::tabs key:groovy-kotlin
== Groovy DSL
``` Groovy
runServer {
    customJar(
        "PATH",
        alwaysReplace = true
    )
}
```
== Kotlin DSL
``` Kotlin
runServer {
    customJar(
        "PATH",
        alwaysReplace = true
    )
}
```
:::