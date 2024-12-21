---
title: Height Map
description: The official docs for the Stellar Command API.
---

# Height Map {#height-map}

Must be one of `world_surface`, `motion_blocking`, `motion_blocking_no_leaves`, and `ocean_floor`. It returns a `HeighMap` enum, which defines _how_ to calculate the highest y block. Example:

```kotlin
StellarCommand("top")
    .addHeightMapArgument(name = "height_map")
    .addExecution<Player> {
        val environment = getArgument<HeightMap>("height_map")
        val highestYBlock = sender.world.getHighestBlockAt(sender.location, environment)
        sender.teleport(highestYBlock.location)
    }
```