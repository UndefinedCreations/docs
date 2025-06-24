---
title: Environment Argument
description: The official docs for the Stellar Command API.
---

# Environment Argument

The `EnvironmentArgument` must be: `overworld`, `the_nether` or `the_end`. It returns an `Environment` enum. Example:

```Kotlin
StellarCommand("isNether")
    .addDimensionArgument(name = "dimension")
    .addExecution<Player> {
        val environment = getArgument<Environment>("dimension")
        val isNether = environment == Environment.NETHER
        sender.sendMessage(isNether.toString())
    }
```

![Environment Argument](https://cdn.lutto.dev/stellar/gifs/world/environment.gif)