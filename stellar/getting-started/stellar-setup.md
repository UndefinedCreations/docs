---
title: Stellar Setup
description: The official docs for the Stellar Command API.
---

# Stellar Setup {#stellar-setup}

To use the Stellar API in your project, we first need to import this into the project.

Here is a list of platforms:

|     Version     | Spigot | Paper |
|:---------------:|:------:|:-----:|
| 1.20.6 - Latest |   ✅    |   ✅   |
|  1.13 - 1.20.6  |   ✅    |   ❌   |

:::tip
Paper can still be used on older versions, with the SpigotMC module.
:::

## Accessing the API

First add the repository:

::: tabs key:gradle-maven
== Gradle Groovy DSL
```groovy
maven {
    name = "undefined-repo"
    url = "https://repo.undefinecreations.com/releases"
}
```
== Gradle Kotlin DSL
```kts
maven {
    name = "undefined-repo"
    url = uri("https://repo.undefinecreations.com/releases")
}
```
== Maven
```xml
<repository>
    <id>stellar</id>
    <name>Stellar Repository</name>
    <url>https://repo.undefinedcreation.com/releases</url>
</repository>
```
:::

Then add the library to your dependencies:

::: tabs key:gradle-maven
== Gradle Groovy DSL
```groovy
compile "com.undefined:stellar:(latest version):platform" // or implementation if shadowing
```
== Gradle Kotlin DSL
```kts
compileOnly("com.undefined:stellar:(latest version):(platform)") // or implementation if shadowing
```
== Maven
```xml
<dependency>
    <groupId>com.undefined</groupId>
    <artifactId>stellar</artifactId>
    <version>(latest version)</version>
    <classifier>(platform)</classifier>
    <scope>provided</scope> // should be removed if shadowing
</dependency>
```
:::

## Using Stellar

To actually use Stellar, you have two options:

1. Adding the plugin on your server
2. Shadowing the dependency.

### Adding the plugin to your server

Another option is to add the Stellar plugin to your server. This is a good option for when you have multiple plugins that use Stellar. You can get the latest JAR from the GitHub releases: https://github.com/UndefinedCreations/Stellar/releases.

### Shadowing the dependency

Shadowing means that you stellar will be included in the built JAR. If you use Gradle, it's suggested to use [the gradleup shadow plugin](https://gradleup.com/shadow/getting-started/), and if you are using Maven it's suggested to use [the maven shade plugin](https://maven.apache.org/plugins/maven-shade-plugin/usage.html).

> [!IMPORTANT]
> You should modify your Gradle dependency to `implementation` instead of `compile`/`compileOnly` and remove the `scope` block from your Maven dependency.