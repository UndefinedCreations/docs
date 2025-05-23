---
title: Height Map
description: The official docs for the Stellar Command API.
---

# Height Map {#height-map}

Must be one of `world_surface`, `motion_blocking`, `motion_blocking_no_leaves`, and `ocean_floor`. It returns a `HeighMap` enum, which defines _how_ to calculate the highest y block. Example:

```Kotlin
StellarCommand("top")
    .addHeightMapArgument(name = "height_map")
    .addExecution<Player> {
        val environment = getArgument<HeightMap>("height_map")
        val highestYBlock = sender.world.getHighestBlockAt(sender.location, environment)
        sender.teleport(highestYBlock.location.add(0.0, 1.0, 0.0))
    }
```

![Height Map Argument](https://cdn.lutto.dev/stellar/gifs/world/height_map.gif)