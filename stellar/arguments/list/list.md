---
title: List Argument
description: The official docs for the Stellar Command API.
---

# List Argument {#list}

The `ListArgument` wraps around a `AbstractStellarArgument` and adds a list of suggestions based on the list provided. Examples:

:::code-group
```Java
new StellarCommand("list")
    .addListArgument(new StringArgument("name", StringType.WORD), list)
    .addExecution(() -> { context ->
        context.getSender().sendMessage(context.getArgument<String>("name"))
    })
```
```Kotlin
StellarCommand("list")
    .addListArgument(StringArgument("name", StringType.WORD), list)
    .addExecution<Player> {
        sender.sendMessage(getArgument<String>("name"))
    }
```
:::

There are also available methods to create preset lists. These include `addListArgument("name", list)`, which uses a `StringArgument` (as the example above) as a base.

## Parameters

There are also additional parameters, here they all are:

* `base` - The `AbstractStellarArgument` it wraps around.
* `list` - A function providing a `CommandContext` and returning the list used in the argument.
* `converter` - A function providing a `CommandSender` and a value from theq list, returning the `Suggestion` shown in-game. This is used to convert each element in the list ot a suggestion viewable in-game (default: uses `toString()`).
* `parse` - A function providing a `CommandSender` and the value returned from the `AbstractStellarArgument`, returning the argument parsed from the `base` argument.
* `async` - Whether the _suggestions_ should be gotten asynchronously (default: `false`).