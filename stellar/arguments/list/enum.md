---
title: Enum Argument
description: The official docs for the Stellar Command API.
---

# Enum Argument {#enum}

The `EnumArgument` is an extension of `ListArgument`, using a `StringArgument` as a base, that adds a list of suggestions based on the `Enum` provided.

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("get-uuid")
    .addOnlinePlayersArgument("target")
    .addExecution(context -> {
        Player target = context.getArgument("target");
        context.getSender().sendMessage(target.getUniqueId().toString());
    });
```
== Kotlin
```Kotlin
StellarCommand("enum")
    .addEnumArgument<PotionEffectType>("type")
    .addExecution<Player> {
        sender.sendMessage(getArgument<PotionEffectType>("type").name)
    }
```
:::

![Enum Argument](https://cdn.lutto.dev/stellar/gifs/list/enum.gif)

## Parameters

Here is a list of all parameters:

* `name` - The name of the argument.
* `enum` - A `KClass` of the `Enum` used.
* `converter` - A function providing a `CommandSender` and an `Enum` instance from the `enum` parameter, returning the `Suggestion` sent to the player.
* If the `Suggestion` is null, then it will be filtered out (default: uses the `name` property.
* This is useful when you wish to get the argument input and process the information yourself.
* `parse` - A function providing a `CommandSender` and the argument input, returning the parsed `Enum` (default: `enum.valueOf(input.uppercase())`).
* `async` - Whether the _suggestions_ should be gotten asynchronously (default: `false`).

## Enum Formatting

Additionally, the `addEnumArgument` method also allows you to pass in an instance of the `EnumFormatting` enum class. The `EnumFormatting` enum contains a list of functions that dictate how the `Enum` should be converted to its `String` form. There are currently four possible values:
* `Lowercase`
* `Uppercase`
* `Capitalized` - Which alters the name into its capitalized version, where the first character is [uppercase] and the rest is [lowercase].
* `None`