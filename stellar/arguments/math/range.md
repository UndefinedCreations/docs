---
title: Range Argument
description: The official docs for the Stellar Command API.
---

# Range Argument

Must bee a valid integer range (e.g. 0..5), which returns `IntRange`. This currently only works with the Kotlin `IntRange`, which you can still use in Java if you import Kotlin in your project. Example:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("roll")
    .addRangeArgument("range")
    .addExecution<Player>(Player.class, context -> {
        IntRange range = context.getArgument<IntRange>("range");
        context.getSender().sendMessage("The random roll was: ${range.random()}");
    });
```
== Kotlin
```Kotlin
StellarCommand("roll")
    .addRangeArgument("range")
    .addExecution<Player> {
        val range = getArgument<IntRange>("range")
        sender.sendMessage("The random roll was: ${range.random()}")
    }
```
:::

![IntRange Argument](https://cdn.lutto.dev/stellar/gifs/math/int_range.gif)