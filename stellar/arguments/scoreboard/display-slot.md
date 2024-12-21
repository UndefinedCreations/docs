---
title: Display Slot Argument
description: The official docs for the Stellar Command API.
---

# Display Slot Argument {#display-slot}

Must be a scoreboard display slot. Returns `DisplaySlot`. Example:

```kotlin
val scoreboardManager = Bukkit.getScoreboardManager()!!.mainScoreboard
val objective = scoreboardManager.registerNewObjective("health", Criteria.HEALTH, "health")
StellarCommand("displaySlot")
    .addDisplaySlotArgument(name = "slot")
    .addExecution<Player> {
        val slot = getArgument<DisplaySlot>("slot")
        objective.displaySlot = slot
    }
```