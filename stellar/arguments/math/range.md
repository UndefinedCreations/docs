---
title: Range Argument
description: The official docs for the Stellar Command API.
---

# Range Argument {#range}

Must bee a valid integer range (e.g. 0..5), which returns `IntRange`. This currently only works with the Kotlin `IntRange`, which you can still use in Java if you import Kotlin in your project. Example:

:::code-group
```Java
new StellarCommand("roll")
    .addRangeArgument("range")
    .addExecution<Player>(() -> { context ->
        IntRange range = context.getArgument<IntRange>("range");
        context.getSender().sendMessage("The random roll was: ${range.random()}");
    });
```
```Kotlin
StellarCommand("roll")
    .addRangeArgument("range")
    .addExecution<Player> {
        val range = getArgument<IntRange>("range")
        sender.sendMessage("The random roll was: ${range.random()}")
    }
```
:::