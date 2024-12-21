---
title: Dimension Argument
description: The official docs for the Stellar Command API.
---

# Dimension Argument {#dimension}

The `DimensionArgument` must be: `overworld`, `the_nether` or `the_end`. It returns an `Environment` enum. Example:

```kotlin
StellarCommand("isNether")
    .addDimensionArgument(name = "dimension")
    .addExecution<Player> {
        val environment = getArgument<Environment>("dimension")
        val isNether = environment == Environment.NETHER
        sender.sendMessage(isNether.toString())
    }
```