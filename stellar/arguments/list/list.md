---
title: List Argument
description: The official docs for the Stellar Command API.
---

# List Argument {#list}

A list argument allows you to add a list of values the player can choose from. It will get the name and parsing from the type entered. Examples:

```Kotlin
StellarCommand("list")
    .addFloatArgument("num_two")
    .addExecution<Player> {
        val operation = getArgument<Operation>("operation")
        val numOne = getArgument<Float>("num_one")
        val numTwo = getArgument<Float>("num_two")
        val result = operation.apply(numOne, numTwo)
        sender.sendMessage("The final result is: $result")
    }
```

There are also available methods to create preset lists.
TODO. not doing currently as changes will be made.