---
title: Command Requirements
description: The official docs for the Stellar Command API.
---

# Command Requirements {#command-requirements}

When creating a command, you often want to limit who can use it. This can be done by using permission requirements, level requirements and completely custom requirement executions. You can add requirements to both base commands and arguments.

To fully understand requirement, we need to learn a bit about how commands work. 

The server sends the client a list of commands at certain times (op, bukkit string permission change, player join), and will filter out any that do not fill in the requirements. You can send this information manually using `Player.updateCommands()`.

## Permission & Level Requirements

You can add bukkit string permissions (example.user.test), or level permissions, from 0-4. For more information on level permissions, see https://minecraft.wiki/w/Permission_level. To add such permissions, use the `addRequirement` method:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addRequirement(PermissionLevel.ADMIN) // named as in https://minecraft.wiki/w/Permission_level
    .addRequirement("example.user.test");
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addRequirement(PermissionLevel.ADMIN) // named as in https://minecraft.wiki/w/Permission_level
    .addRequirement("example.user.test")
```
:::

## Custom Requirements

To add custom requirements, you can also use the `addRequirement` method:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addRequirement(Player.class, sender -> {
        sender.hasPlayedBefore()
    });
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addRequirement<Player> {
        this.hasPlayedBefore()
    }
```
:::