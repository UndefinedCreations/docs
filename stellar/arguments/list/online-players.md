---
title: Online Players Argument
description: The official docs for the Stellar Command API.
---

# Online Players Argument {#online-players}

The `OnlinePlayersArgument` is an extension of [ListArgument] using [StringArgument] as a base. It lists the currently online players using `Bukkit.getServer().getOnlinePlayers`.

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("get-uuid")
    .addOnlinePlayersArgument("target")
    .addExecution(Player.class, context -> {
        context.getSender().sendMessage(context.getArgument<Player>("target").getUUID().toString())
    });
```
== Kotlin
```Kotlin
StellarCommand("get-uuid")
    .addOnlinePlayersArgument("target")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Player>("target").uuid.toString())
    }
```
:::

## Parameters

Here is a list of all parameters:

* `name` - The name of the argument.
* `filter` - A function passing in a `Player` and returning a `boolean`. It filters any players that return `false`.
* `async` - Whether the _suggestions_ should be gotten asynchronously (default: `false`).