---
title: Boolean Argument
description: The official docs for the Stellar Command API.
---

# Boolean Argument {#boolean}

:::tip
Is available from Minecraft Version: 1.13.
:::

The `BooleanArgument` allows you to input a `boolean`. Example:

:::code-group
```Java
new StellarCommand("server")
    .addBooleanArgument("boolean")
    .addExecution(() -> { context ->
        context.getSender().sendMessage(context.getArgument<Boolean>("bool"));
    });
```
```Kotlin
StellarCommand("server")
    .addBooleanArgument("boolean")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Boolean>("bool"))
    }
```
:::

![Boolean Argument](./boolean.gif)