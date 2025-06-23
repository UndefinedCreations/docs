---
title: Nova Importing
description: The official docs for the Echo Plugin.
---

# Importing {#nova-importing}

To use Nova in your project, we will first need to import the plugin.

[![](https://img.shields.io/gradle-plugin-portal/v/com.undefinedcreations.nova)](https://plugins.gradle.org/plugin/com.undefinedcreations.nova)

We will add the plugin under the `plugins` tab in your `build.gradle`.

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
id 'com.undefinedcreations.nova' version 'LASTEST-VERSION'
```
== Kotlin DSL
```kotlin
id("com.undefinedcreations.nova") version "LASTEST-VERSION"
```
:::

After that you have added this, reload your `build.gradle`