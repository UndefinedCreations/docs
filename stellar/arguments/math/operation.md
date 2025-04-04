---
title: Operation Argument
description: The official docs for the Stellar Command API.
---

# Operation Argument {#operation}

Must be an arithmetic operator, such as = or +=. Returns an `Operation` enum, and use the `apply` method to calculate the new value from two numbers. Example:

:::code-group
```Java
new StellarCommand("calculate")
    .addOperationArgument("operation")
    .addFloatArgument("num_one")
    .addFloatArgument("num_two")
    .addExecution<Player>(() -> { context ->
        Operation operation = context.getArgument<Operation>("operation");
        float numOne = (float) context.getArgument("num_one");
        float numTwo = (float) context.getArgument("num_two");
        float result = operation.apply(numOne, numTwo);
        context.getSender().sendMessage("The final result is: $result");
    });
```
```Kotlin
StellarCommand("calculate")
    .addOperationArgument(name = "operation")
    .addFloatArgument("num_one")
    .addFloatArgument("num_two")
    .addExecution<Player> {
        val operation = getArgument<Operation>("operation")
        val numOne = getArgument<Float>("num_one")
        val numTwo = getArgument<Float>("num_two")
        val result = operation.apply(numOne, numTwo)
        sender.sendMessage("The final result is: $result")
    }
```
:::