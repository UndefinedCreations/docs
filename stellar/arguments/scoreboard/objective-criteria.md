---
title: Objective Argument
description: The official docs for the Stellar Command API.
---

# Objective Argument {#objective}

Must be a scoreboard objective criterion, returning `Criteria`. Example:

:::code-group
```Java
new StellarCommand("objective")
    .addArgument("create")
    .addStringArgument("objective")
    .addObjectiveCriteriaArgument("criterion")
    .addExecution<Player>(() -> { context ->
        String name = getArgument<String>("objective");
        Criteria criteria = getArgument<Criteria>("criterion");
        Bukkit.getScoreboardManager()!!.mainScoreboard.registerNewObjective(name, criteria, name);
    });
```
```Kotlin
StellarCommand("objective")
    .addArgument("create")
    .addStringArgument(name = "objective")
    .addObjectiveCriteriaArgument(name = "criterion")
    .addExecution<Player> {
        val name = getArgument<String>("objective")
        val criteria = getArgument<Criteria>("criterion")
        Bukkit.getScoreboardManager()!!.mainScoreboard.registerNewObjective(name, criteria, name)
    }
```
:::