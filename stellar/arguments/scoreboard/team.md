---
title: Team Argument
description: The official docs for the Stellar Command API.
---

# Team Argument {#team}

Returns `Team`, must be an unquoted string, executions only run when there is a valid player. Example:

```Kotlin
StellarCommand("setcolor")
    .addTeamArgument(name = "team")
    .addColorArgument(name = "color")
    .addExecution<Player> {
        val team = getArgument<Team>("team")
        val color = getArgument<Style>("color")
        team.color = color
    }
```