---
title: Mirror Argument
description: The official docs for the Stellar Command API.
---

# Mirror Argument {#mirror}

Must be one of the following: `none`, `clockwise_90`, `counterclockwise_90` and `180`. It returns `StructureRotation`. Example:

```Kotlin
StellarCommand("structure")
    .addArgument("spawn")
    .addStructureRotationArgument(name = "rotation")
    .addExecution<Player> {
        val rotation = getArgument<StructureRotation>("rotation")
        spawnStructure(rotation) // custom method
    }
```

![Structure Rotation Argument](./structure-rotation.gif)