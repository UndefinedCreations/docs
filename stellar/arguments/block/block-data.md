---
title: Block Data
description: The official docs for the Stellar Command API.
---

# Block Data {#block-data}

Returns `BlockData`, with this syntax: `block_id[block_states]{data_tags}`. For more information about the syntax see [wiki](https://minecraft.wiki/w/Argument_types#minecraft:block_state). Example:

:::code-group
```Java
new StellarCommand("spawn")
    .addBlockDataArgument("block")
    .addExecution(() -> { context ->
        BlockData data = context.getArgument<BlockData>("block")
        context.getSender().getWorld().setBlockData(
            context.getSender().getLocation().subtract(0.0, -1.0, 0.0),
            data
        )
    })
```
```Kotlin
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
:::

<ArgumentParser placeholder="minecraft:stone" regex="^(minecraft:[a-zA-Z]+|[a-zA-Z]+)(\[([a-zA-Z]+=\S+)?\])?$" />

![Block Data Argument](https://cdn.lutto.dev/stellar/gifs/block/block_data.gif)