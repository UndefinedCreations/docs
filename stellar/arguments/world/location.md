---
title: Location Argument
description: The official docs for the Stellar Command API.
---

# Location Argument {#location}

Returns `Location` and the syntax can vary depending on what  `LocationType` has been set. There are four types of `LocationType`: `LOCATION_3D`, `LOCATION_2D`, `PRECISE_LOCATION_3D` and `PRECISE_LOCATION_2D`. Examples:

::: code-group
```kotlin [Location 3D]
StellarCommand("teleport-to")
    .addLocationArgument(
        name = "location",
        type = LocationType.LOCATION_3D // Default
    )
    .addExecution<Player> {
        val location = getArgument<Location>("location")
        sender.teleport(location)
    }
```
```kotlin [Location 2D]
StellarCommand("teleport-to")
    .addLocationArgument(
        name = "location",
        type = LocationType.LOCATION_2D
    )
    .addExecution<Player> {
        val location = getArgument<Location>("location")
        val currentY = sender.location.y
        sender.teleport(location.apply { y = currentY })
    }
```
```kotlin [Precise Location 3D]
StellarCommand("teleport-to")
    .addLocationArgument(
        name = "location",
        type = LocationType.PRECISE_LOCATION_3D
    )
    .addExecution<Player> {
        val location = getArgument<Location>("location")
        sender.teleport(location)
    }
```
```kotlin [Precise Location 2D]
StellarCommand("teleport-to")
    .addLocationArgument(
        name = "location",
        type = LocationType.PRECISE_LOCATION_2D
    )
    .addExecution<Player> {
        val location = getArgument<Location>("location")
        val currentY = sender.location.y
        sender.teleport(location.apply { y = currentY })
    }
```
:::