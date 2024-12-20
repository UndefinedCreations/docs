---
title: Block Data
description: The official docs for the Stellar Command API.
---

# Block Data {#block-data}

Returns `BlockData`, with this syntax: `block_id[block_states]{data_tags}`. For more information about the syntax see [wiki](https://minecraft.wiki/w/Argument_types#minecraft:block_state). Example:

```kotlin
StellarCommand("spawn")
    .addBlockDataArgument(name = "block")
    .addExecution<Player> {
        val data = getArgument<BlockData>("block")
        sender.world.setBlockData(
            sender.location.subtract(0.0, -1.0, 0.0),
            data
        )
    }
```