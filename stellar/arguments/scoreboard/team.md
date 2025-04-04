---
title: Team Argument
description: The official docs for the Stellar Command API.
---

# Team Argument {#team}

Returns `Team`, must be an unquoted string, executions only run when there is a valid player. Example:

:::code-group
```Java
new StellarCommand("setcolor")
    .addTeamArgument("team")
    .addColorArgument("color")
    .addExecution<Player>(() -> { context ->
        Team team = getArgument<Team>("team");
        Style color = getArgument<Style>("color");
        team.setColor(color);
    });
```
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
:::