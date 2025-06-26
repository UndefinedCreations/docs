---
title: Style Argument
description: The official docs for the Stellar Command API.
---

# Style Argument

A valid JSON text component, and only returns its `net.kyori.adventure.text.format.Style`. Example:

```Kotlin
val audience = BukkitAudiences.create(this)
StellarCommand("reminder")
    .addStyleArgument(name = "style")
    .addExecution<Player> {
        val style = getArgument<Style>("style")
        val message = Component.text("This is a reminder").style(style)
        audience.sender(sender).sendMessage(message)
    }
```

![Style Argument](https://cdn.lutto.dev/stellar/gifs/text/style.gif)