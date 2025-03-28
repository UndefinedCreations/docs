---
title: Custom Argument
description: The official docs for the Stellar Command API.
---

# Custom Argument {#custom}

A custom argument is reusable class argument. It acts as a wrapper around the type argument. A custom argument can be made as such:

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