---
title: Command Information
description: The official docs for the Stellar Command API.
---

# Command Information {#command-information}

Bukkit has a default command in any server, the `/help <commandname>` command. Using this command, you can get information about any command, which you can customize in the command itself. There are two default values you can easily modify, and then you can also add any custom information you wish.

## Description

The first is the description of the command, this is a short text about what the command is about. You can change using the `setDescription` method:

```kt
StellarCommand("message")
    .setDescription("You can message others using this command!")
```

## Usage text

This is a short text about how the command works, it's common practice to use the default minecraft command syntax for this: https://minecraft.wiki/w/Commands#Syntax. You can set the usage text using the `setUsage` method:

```kt
StellarCommand("message")
    .setUsage("message <target> [text]")
```

## Custom Information

You can easily add custom information by using the `setInformation` method:

```kt
StellarCommand("message")
    .setInformation(
        name = "Times used",
        text = timesUsed.toString()
    ) // Custom variable
```