---
title: Axis Argument
description: The official docs for the Stellar Command API.
---

# Axis Argument {#axis}

Any non-repeating combination of the characters 'x', 'y', and 'z'. Returns `EnumSet<Axis>`. Example:

```kotlin
StellarCommand("test")
    .addAxisArgument(name = "axis")
    .addExecution<Player> {
        val axes = getArgument<EnumSet<Axis>>("axis")
        sender.sendMessage(axes.joinToString(", ") { it.name })
    }
```