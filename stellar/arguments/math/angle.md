---
title: Angle Argument
description: The official docs for the Stellar Command API.
---

# Angle Argument {#loot-table}

A yaw angle, in floating-point number, ranging from -180.0 (north) to 179.9 (just west of north). Returns `Float`. Example:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("setangle")
    .addAngleArgument("angle")
    .addExecution(Player.class, context -> {
        float angle = (float) context.getArgument("angle");
        Location newLocation = context.getSender().location;
        newLocation.yaw = angle;
        context.getSender.teleport(newLocation);
    });
```
== Kotlin
```Kotlin
StellarCommand("setangle")
    .addAngleArgument(name = "angle")
    .addExecution<Player> {
        val angle = getArgument<Float>("angle")
        sender.teleport(
            sender.location.clone().apply { yaw = angle }
        )
    }
```
:::

![Angle Argument](https://cdn.lutto.dev/stellar/gifs/math/angle.gif)