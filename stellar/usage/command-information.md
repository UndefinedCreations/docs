---
title: Command Information
description: The official docs for the Stellar Command API.
---

# Command Information {#command-information}

Bukkit has a default command on any server, the `/help <commandname>` command. Using this command, you can get information about any command, which you can customize in the command itself. There are two _default_ values you can easily modify, and then you can also add any custom information you wish.

## Description

The first piece of information you can easily set is the description of the command, this is a short text about what the command is about. You can change using the `setDescription` method:

:::tabs key:kotlin-java
== Kotlin
```Kotlin
StellarCommand("message")
    .setDescription("You can message others using this command!")
```
== Java
```Java
new StellarCommand("message")
    .setDescription("You can message others using this command!");
```
:::

## Usage text

This is the second piece of information you can easily set. It is a short text about how the command works, and it's common to use the default minecraft command syntax for this: https://minecraft.wiki/w/Commands#Syntax. You can set the usage text using the `setUsage` method:

:::tabs key:kotlin-java
== Kotlin
```Kotlin
StellarCommand("message")
    .setUsage("message <target> [text]")
```
== Java
```Java
new StellarCommand("message")
    .setUsage("message <target> [text]");
```
:::

## Custom Information

You can easily add custom information by using the `setInformation` method, which takes in a name and some text:

:::tabs key:kotlin-java
== Kotlin
```Kotlin
StellarCommand("message")
    .setInformation(
        name = "Times used",
        text = timesUsed.toString()
    )
```
== Java
```Java
new StellarCommand("message")
    .setInformation(
        "Times used",
        timesUsed.toString()
    );
```
:::