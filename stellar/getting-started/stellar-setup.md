---
title: Stellar Setup
description: The official docs for the Stellar Command API.
---

# Stellar Setup {#stellar-setup}

To use the Stellar API in your project, we first need to import this into the project.

## Gradle (recommended)

First add the repository:

::: code-group
```groovy [build.gradle]
maven {
    url = "https://repo.undefinecreation.com/stellar"
}
```
```kts [build.gradle.kts]
maven {
    url = uri("https://repo.undefinecreation.com/stellar")
}
```
:::

Then add the library to your dependencies:

::: code-group
```groovy [build.gradle]
implementation "com.undefined:stellar:(latest version)"
```
```kts [build.gradle.kts]
implementation("com.undefined:stellar:(latest version)")
```
:::

## Maven

First add the repository:
```xml
<repository>
    <id>stellar</id>
    <name>Stellar Repository</name>
    <url>https://repo.undefinedcreation.com/stellar</url>
</repository>
```

Then add the library to your dependencies:
```xml
<dependency>
    <groupId>com.undefined</groupId>
    <artifactId>stellar</artifactId>
    <version>(latest version)</version>
</dependency>
```