---
title: Game Mode Argument
description: The official docs for the Stellar Command API.
---

# Game Mode Argument {#game-mode}

Must be one of the following: `survival`, `creative`, `adventure` or `spectator`. It returns the `Gamemode` enum.

```kotlin
StellarCommand("gamemode")
    .addGamemodeArgument("mode")
    .addExecution<Player> {
        val mode = getArgument<GameMode>("mode")
        sender.gamemode = mode
    }
```