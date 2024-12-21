---
title: Score Holders
description: The official docs for the Stellar Command API.
---

# Score Holders {#score-holders}

Returns a `String` representing a score holder, being a player's name or an entity's UUID that has scores in an objective. The player name doesn’t need to belong to an actual player. The executions only run when there is a valid player. [Click here](https://minecraft.wiki/w/Argument_types#minecraft:score_holder) for more syntax information, and click here for more information on [score holders](https://minecraft.fandom.com/wiki/Scoreboard#Objectives). Examples:

::: code-group
```kotlin [Single]
StellarCommand("objective")
    .addScoreHolderArgument(name = "holder")
    .addExecution<Player> {
        val holder = getArgument<String>("holder")
        val item = ItemStack(Material.DIAMOND)
        Bukkit.getPlayer(holder)?.inventory?.addItem(item)
    }
```
```kotlin [Multiple]
StellarCommand("objective")
    .addScoreHolderArgument(name = "holders")
    .addExecution<Player> {
        val holders = getArgument<List<String>>("holders")
        val item = ItemStack(Material.DIAMOND)
        for (holder in holders) {
            Bukkit.getPlayer(holder)?.inventory?.addItem(item)
        }
    }
```
:::