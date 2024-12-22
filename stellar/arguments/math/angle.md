---
title: Angle Argument
description: The official docs for the Stellar Command API.
---

# Angle Argument {#loot-table}

A yaw angle, in floating-point number, ranging from -180.0 (north) to 179.9 (just west of north). Returns `Float`. Example:

```kotlin
StellarCommand("setangle")
    .addAngleArgument(name = "angle")
    .addExecution<Player> {
        val angle = getArgument<Float>("angle")
        sender.teleport(
            sender.location.apply { yaw = angle }
        )
    }
```