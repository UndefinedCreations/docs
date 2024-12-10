---
title: Stellar Setup
description: The official docs for the Stellar Command API.
---

# Stellar Setup {#stellar-setup}

To use the Stellar API in your project, we first need to import this into the project.

## Gradle

First add the repository:
```groovy
maven {
    name "undefinedcreationStellar"
    url "https://repo.undefinedcreation.com/stellar"
}
```

Then add the library to your dependencies:
```groovy
implementation "com.undefined:stellar:(latest version)"
```

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