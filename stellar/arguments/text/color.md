---
title: Color Argument
description: The official docs for the Stellar Command API.
---

# Color Argument {#color}

Must be a team color, returns `net.kyori.adventure.text.format.Style`. Example:

```Kotlin
StellarCommand("choose")
    .addColorArgument(name = "color")
    .addExecution<Player> {
        val color = getArgument<Style>("color")
        sender.sendMessage("Color chosen: ${color.color()!!.asHexString()}")
    }
```

![Color Argument](./color.gif)