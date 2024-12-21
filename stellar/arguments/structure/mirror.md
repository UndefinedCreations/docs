---
title: Mirror Argument
description: The official docs for the Stellar Command API.
---

# Mirror Argument {#mirror}

Must be one of the following: `none`, `front_back` and `left_right`. It returns `Mirror`. Example:

```kotlin
StellarCommand("structure")
    .addArgument("spawn")
    .addMirrorArgument(name = "mirror")
    .addExecution<Player> {
        val mirror = getArgument<Mirror>("mirror")
        spawnStructure(mirror) // custom method
    }
```