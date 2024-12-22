---
title: Range Argument
description: The official docs for the Stellar Command API.
---

# Range Argument {#range}

Must bee a valid integer range (e.g. 0..5), which returns `IntRange`. Example:

```kotlin
StellarCommand("roll")
    .addRangeArgument("range")
    .addExecution<Player> {
        val range = getArgument<IntRange>("range")
        sender.sendMessage("The random roll was: ${range.random()}")
    }
```