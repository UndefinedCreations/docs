---
title: List Argument
description: The official docs for the Stellar Command API.
---

# List Argument {#list}

The `ListArgument` wraps around a `AbstractStellarArgument` and adds a list of suggestions based on the list provided. Examples:

:::tabs key:kotlin-java
== Java
```Java
List<String> list = new ArrayList<>();
list.add("minecraft:a");
list.add("minecraft:b");
list.add("minecraft:c");
new StellarCommand("list")
    .addListArgument("name", list, (sender, string) -> string.replaceFirst("[a-zA-Z]:", ""))
    .addExecution(Player.class, context -> {
        String name = context.getArgument("name");
        context.getSender().sendMessage(name);
    });
```
== Kotlin
```Kotlin
val list = listOf("minecraft:a", "minecraft:b", "minecraft:c")
StellarCommand("list")
    .addListArgument("name", list, { it.replaceFirst("[a-zA-Z]:", "") })
    .addExecution<Player> {
        val name: String by args
        sender.sendMessage(name)
    }
```
:::


There are also available methods to create preset lists. These include `addListArgument("name", list)`, which uses a `StringArgument` (as the example above) as a base.

## Parameters

There are also additional parameters, here they all are:

* `base` - The `AbstractStellarArgument` it wraps around.
* `list` - A function providing a `CommandContext` and returning the list used in the argument.
* `converter` - A function providing a `CommandSender` and a value from the list, returning the `Suggestion` shown in-game. This is used to convert each element in the list ot a suggestion viewable in-game (default: uses `toString()`).
* `parse` - A function providing a `CommandSender` and the value returned from the `AbstractStellarArgument`, returning the argument parsed from the `base` argument.
* `async` - Whether the _suggestions_ should be gotten asynchronously (default: `false`).