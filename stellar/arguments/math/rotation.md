---
title: Rotation Argument
description: The official docs for the Stellar Command API.
---

# Rotation Argument {#rotation}

Must be a rotation consisting of yaw and pitch, which returns a `Location` only containing yaw and pitch. Example:

:::code-group
```Java
new StellarCommand("set-rotation")
    .addRotationArgument("rotation")
    .addExecution<Player>(() -> { context ->
        Location rotation = context.getArgument<Location>("rotation");
        Location newLocation = context.getSender().getLocation().clone();
        newLocation.setYaw(rotation.getYaw());
        newLocation.setPitch(rotation.getPitch());
        context.getSender().teleport(newLocation);
    });
```
```Kotlin
StellarCommand("set-rotation")
    .addRotationArgument("rotation")
    .addExecution<Player> {
        val rotation = getArgument<Location>("rotation")
        sender.teleport(sender.location.apply { yaw = rotation.yaw; pitch = rotation.pitch })
    }
```
:::

![Rotation Argument](https://cdn.lutto.dev/stellar/gifs/math/rotation.gif)