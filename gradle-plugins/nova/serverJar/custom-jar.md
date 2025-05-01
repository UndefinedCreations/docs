---
title: Nova Custom Jar
description: The official docs for the Echo Plugin.
---

# Custom Jar {#nova-custom-jar}
`Nova` also allows you to run a custom `jar` instead of one of the presets. To be able to use this you need the path of the jar. When you have this inside the `runServer` task add `customJar("PATH")`. Below you will see an example.

::: code-group
```groovy [Groovy DSL]
runServer {
    customJar("PATH")
}
```
```kotlin [Kotlin DSL]
runServer {
    customJar("PATH")
}
```
:::

There is also an option, this option is called `alwaysReplace`. When this is enabled it will replace the jar inside the server every time on startup. By default, this is on `false`. Below is an example.

::: code-group
```groovy [Groovy DSL]
runServer {
    customJar(
        "PATH",
        alwaysReplace = true
    )
}
```
```kotlin [Kotlin DSL]
runServer {
    customJar(
        "PATH",
        alwaysReplace = true
    )
}
```
:::