---
title: Rotation Argument
description: The official docs for the Stellar Command API.
---

# Rotation Argument {#rotation}

Must be a rotation consisting of yaw and pitch, which returns a `Location` only containing yaw and pitch. Example:

```Kotlin
StellarCommand("set-rotation")
    .addRotationArgument("rotation")
    .addExecution<Player> {
        val rotation = getArgument<Location>("rotation")
        sender.teleport(sender.location.apply { yaw = rotation.yaw; pitch = rotation.pitch })
    }
```