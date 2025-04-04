---
title: Display Slot Argument
description: The official docs for the Stellar Command API.
---

# Display Slot Argument {#display-slot}

Must be a scoreboard display slot. Returns `DisplaySlot`. Example:

:::code-group
```Java
Scoreboard scoreboardManager = Bukkit.getScoreboardManager()!!.mainScoreboard;
Objective objective = scoreboardManager.registerNewObjective(
    "health",
    Criteria.HEALTH,
    "health"
);

new StellarCommand("displaySlot")
    .addDisplaySlotArgument("slot")
    .addExecution<Player>(() -> { context ->
        val slot = context.getArgument<DisplaySlot>("slot");
        objective.setDisplaySlot(slot);
    });
```
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