---
title: Objective Argument
description: The official docs for the Stellar Command API.
---

# Objective Argument {#objective}

Returns a scoreboard `Objective`. Example:

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