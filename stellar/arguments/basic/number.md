---
title: Number Arguments
description: The official docs for the Stellar Command API.
---

# Number Arguments {#number}

:::info
Is available from Minecraft Version: 1.13.
:::

There are four number arguments: `IntegerArgument`, `LongArgument`, `FloatArgument`, `DoubleArgument`. They respectively return those number types.

Java examples:
:::code-group
```Java [Integer]
new StellarCommand("server")
    .addIntegerArgument("int")
    .addExecution(() -> { context ->
        context.getSender().sendMessage(context.get("int").toString()); // should be converter to context["int"] if possible
    });
```
```Java [Long]
new StellarCommand("server")
    .addLongArgument("long")
    .addExecution(() -> { context ->
        context.getSender().sendMessage(context.get("long").toString())
    })
```
```Java [Float]
new StellarCommand("server")
    .addFloatArgument("float")
    .addExecution(() -> { context ->
        context.getSender().sendMessage(context.get("float").toString())
    })
```
```Java [Double]
new StellarCommand("server")
    .addDoubleArgument("double")
    .addExecution(() -> { context ->
        context.getSender().sendMessage(context.get("double").toString())
    })
```
:::

Kotlin examples:
::: code-group
```Kotlin [Integer]
StellarCommand("server")
    .addIntegerArgument("int")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Int>("int"))
    }
```
```Kotlin [Long]
StellarCommand("server")
    .addLongArgument("long")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Long>("long"))
    }
```
```Kotlin [Float]
StellarCommand("server")
    .addFloatArgument("float")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Float>("float"))
    }
```
```Kotlin [Double]
StellarCommand("server")
    .addDoubleArgument("double")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Double>("double"))
    }
```
:::