---
title: Game Mode Argument
description: The official docs for the Stellar Command API.
---

# Game Mode Argument {#game-mode}

Must be one of the following: `survival`, `creative`, `adventure` or `spectator`. It returns the `GameMode` enum.

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("gamemode")
    .addGameModeArgument("mode")
    .addExecution(Player.class, context -> {
        GameMode mode = context.getArgument<GameMode>("mode")
        sender.gamemode = mode
    });
```
== Kotlin
```Kotlin
StellarCommand("gamemode")
    .addGameModeArgument("mode")
    .addExecution<Player> {
        val mode = getArgument<GameMode>("mode")
        sender.gamemode = mode
    }
```
:::

<ArgumentParser placeholder="survival" regex="^(survival|creative|adventure|spectator)$" />

![GameMode Argument](https://cdn.lutto.dev/stellar/gifs/entities/gamemode.gif)