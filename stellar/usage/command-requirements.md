---
title: Command Requirements
description: The official docs for the Stellar Command API.
---

# Command Requirements {#command-requirements}

When creating a command, you often want to limit who can use it. This can be done by using permission requirements, level requirements and completely custom requirement executions. You can add requirements to both base commands and arguments.

How commands works, is that the server sends the client a list of commands on specific actions, and will filter out any that do not fill in the requirements. You can force this information being sent using `Player.updateCommands()`.

## Permission & Level Requirements

You can add string permissions, such as "example.user.test", or level permissions. For more information on level permissions, see https://minecraft.wiki/w/Permission_level. To add such permissions, use the `addRequirement` method:

```kotlin
StellarCommand("test")
    .addRequirement(3)
    .addRequirement("example.user.test")
```

## Custom Requirements

To add custom requirements, also the `addRequirement` method which is an extension function based on the generic type `T`:

```kotlin
StellarCommand("test")
    .addRequirement<Player> {
        hasPlayedBefore()
    }
```