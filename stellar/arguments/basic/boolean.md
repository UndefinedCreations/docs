---
title: Boolean Argument
description: The official docs for the Stellar Command API.
---

# Boolean Argument {#boolean}

The `BooleanArgument` allows you to input a `boolean`. Example:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("server")
    .addBooleanArgument("boolean")
    .addExecution(Player.class, context -> {
        context.getSender().sendMessage(context.getArgument<Boolean>("bool"));
    });
```
== Kotlin
```Kotlin
StellarCommand("server")
    .addBooleanArgument("boolean")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Boolean>("bool"))
    }
```
:::
![Boolean Argument](https://cdn.lutto.dev/stellar/gifs/basic/boolean.gif)