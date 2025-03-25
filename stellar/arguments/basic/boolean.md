---
title: Boolean Argument
description: The official docs for the Stellar Command API.
---

# Boolean Argument {#boolean}

:::info
Since: 1.13.
:::

The `BooleanArgument` allows you to input a `boolean`. Example:

```kotlin
StellarCommand("server")
    .addBooleanArgument("bool")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Boolean>("bool"))
    }
```