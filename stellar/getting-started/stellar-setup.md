---
title: Stellar Setup
description: The official docs for the Stellar Command API.
---

# Stellar Setup {#stellar-setup}

To use the Stellar API in your project, we first need to import this into the project.

Platform under should be replaced either by spigot or paper. Here is a table of all the versions that are officially supported by Stellar:
| Version         | Spigot | Paper |
|-----------------|--------|-------|
| Latest - 1.16.5 | ✅     | ✅   |
| 1.16.4 - 1.13   | ✅     | ❌   |

## Gradle (recommended)

First add the repository:

::: code-group
```groovy [Groovy DSL]
maven {
    name = "undefined-repo"
    url = "https://repo.undefinecreations.com/releases"
}
```
```kts [Kotlin DSL]
maven {
    name = "undefined-repo"
    url = uri("https://repo.undefinecreations.com/releases")
}
```
:::

Then add the library to your dependencies:

::: code-group
```groovy [build.gradle]
implementation "com.undefined:stellar:(latest version):platform"
```
```kts [build.gradle.kts]
implementation("com.undefined:stellar:(latest version):(platform)")
```
:::

## Maven

First add the repository:
```xml
<repository>
    <id>stellar</id>
    <name>Stellar Repository</name>
    <url>https://repo.undefinedcreation.com/releases</url>
</repository>
```

Then add the library to your dependencies:
```xml
<dependency>
    <groupId>com.undefined</groupId>
    <artifactId>stellar</artifactId>
    <version>(latest version)</version>
    <classifier>(platform)</classifier>
</dependency>
```