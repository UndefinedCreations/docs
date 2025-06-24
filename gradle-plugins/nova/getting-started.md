---
title: Nova Getting Started
description: The official docs for the Nova Gradle Plugin.
---

# Installation {#nova-importing}

[![](https://img.shields.io/gradle-plugin-portal/v/com.undefinedcreations.nova)](https://plugins.gradle.org/plugin/com.undefinedcreations.nova)

To use Nova in your project, start by adding the plugin under the plugins block in your `build.gradle` file:

::: tabs key:groovy-kotlin
== Groovy DSL
``` Groovy 
id 'com.undefinedcreations.nova' version 'LATEST-VERSION'
```
== Kotlin DSL
``` Kotlin
id("com.undefinedcreations.nova") version "LATEST-VERSION"
```
:::

::: tip
If you are using [`Echo`](/gradle-plugins/echo/importing) and [`BuildTools`](/gradle-plugins/echo/buildTools/build-tools.md) is enable with a valid `minecraftVersion`, `Nova` will automatically grad that version select. This means you won't need to set the version again here.
:::

To begin setting up Nova, set the `minecraftVersion` by modifying the `runServer` task configurations under the tasks block in your `build.gradle`:

::: tabs key:groovy-kotlin
== Groovy DSL
``` Groovy
tasks {
    runServer {
        minecraftVersion("1.21.4")
    }
}
```
== Kotlin DSL
``` Kotlin
tasks {
    runServer {
        minecraftVersion("1.21.4")
    }
}
```
:::

The `minecraftVersion`, as the name suggests, determines what Minecraft version the server will run.