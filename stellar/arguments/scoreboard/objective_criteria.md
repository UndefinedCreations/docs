---
title: Objective Argument
description: The official docs for the Stellar Command API.
---

# Objective Argument

Must be a scoreboard objective criterion, returning `Criteria`. Example:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("objective")
    .addArgument("create")
    .addStringArgument("objective")
    .addObjectiveCriteriaArgument("criterion")
    .addExecution<Player>(Player.class, context -> {
        String name = getArgument<String>("objective");
        Criteria criteria = getArgument<Criteria>("criterion");
        Bukkit.getScoreboardManager()!!.mainScoreboard.registerNewObjective(name, criteria, name);
    });
```
== Kotlin
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

![Objective Criteria Argument](https://cdn.lutto.dev/stellar/gifs/scoreboard/objective_criteria.gif)