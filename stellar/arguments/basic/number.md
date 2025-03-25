---
title: Number Arguments
description: The official docs for the Stellar Command API.
---

# Number Arguments {#number}

:::info
Since: 1.13.
:::

There are four number arguments: `IntegerArgument`, `LongArgument`, `FloatArgument`, `DoubleArgument`. They respectively return those number types.

::: code-group
```kotlin [Integer]
StellarCommand("server")
    .addIntegerArgument("int")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Int>("int"))
    }
```
```kotlin [Long]
StellarCommand("server")
    .addLongArgument("long")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Long>("long"))
    }
```
```kotlin [Float]
StellarCommand("server")
    .addFloatArgument("float")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Float>("float"))
    }
```
```kotlin [Double]
StellarCommand("server")
    .addDoubleArgument("double")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Double>("double"))
    }
```
:::