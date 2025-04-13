---
title: Objective Argument
description: The official docs for the Stellar Command API.
---

# Objective Argument {#objective}

Returns a scoreboard `Objective`. Example:

:::code-group
```Java
new StellarCommand("setamount")
    .addObjectiveArgument("objective")
    .addIntegerArgument("amount")
    .addExecution<Player>(() -> { context ->
        Objective objective = getArgument<Objective>("objective");
        int amount = (int) getArgument("amount");
        objective.getScore("amount").setScore(amount);
    });
```
```Kotlin
StellarCommand("setamount")
    .addObjectiveArgument(name = "objective")
    .addIntegerArgument(name = "amount")
    .addExecution<Player> {
        val objective = getArgument<Objective>("objective")
        val amount = getArgument<Int>("amount")
        objective.getScore("amount").score = amount
    }
```
:::

![Objective Argument](https://cdn.lutto.dev/stellar/gifs/scoreboard/objective.gif)