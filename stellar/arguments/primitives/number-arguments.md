---
title: Number Arguments
description: The official docs for the Stellar Command API.
---

# Number Arguments {#number-arguments}

There are four number arguments: `IntegerArgument`, `LongArgument`, `FloatArgument`, `DoubleArgument`. They respectively return those number types.

::: code-group
```kt [Integer]
StellarCommand("server")
    .addIntegerArgument("int")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Int>("int"))
    }
```
```kt [Long]
StellarCommand("server")
    .addLongArgument("long")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Long>("long"))
    }
```
```kt [Float]
StellarCommand("server")
    .addFloatArgument("float")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Float>("float"))
    }
```
```kt [Double]
StellarCommand("server")
    .addDoubleArgument("double")
    .addExecution<Player> {
        sender.sendMessage(getArgument<double>("double"))
    }
```
:::