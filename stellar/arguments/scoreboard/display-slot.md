---
title: Display Slot Argument
description: The official docs for the Stellar Command API.
---

# Display Slot Argument {#display-slot}

Must be a scoreboard display slot. Returns `DisplaySlot`. Example:

:::tabs key:kotlin-java
== Java
```Java
Scoreboard scoreboardManager = Bukkit.getScoreboardManager()!!.mainScoreboard;
Objective objective = scoreboardManager.registerNewObjective(
    "health",
    Criteria.HEALTH,
    "health"
);

new StellarCommand("displaySlot")
    .addDisplaySlotArgument("slot")
    .addExecution<Player>(Player.class, context -> {
        val slot = context.getArgument<DisplaySlot>("slot");
        objective.setDisplaySlot(slot);
    });
```
== Kotlin
```Kotlin
val scoreboardManager = Bukkit.getScoreboardManager()!!.mainScoreboard
val objective = scoreboardManager.registerNewObjective(
    "health",
    Criteria.HEALTH,
    "health"
)
StellarCommand("displaySlot")
    .addDisplaySlotArgument(name = "slot")
    .addExecution<Player> {
        val slot = getArgument<DisplaySlot>("slot")
        objective.displaySlot = slot
    }
```
:::

![Display Slot Argument](https://cdn.lutto.dev/stellar/gifs/scoreboard/display_slot.gif)