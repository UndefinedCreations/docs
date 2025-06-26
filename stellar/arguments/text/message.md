---
title: Component Argument
description: The official docs for the Stellar Command API.
---

# Message Argument

Is a phrase, like `StringArgument` with `StringType.PHRASE`, it replaces target selectors (@e, @s, etc.) with their actual result. It returns a `net.kyori.adventure.text.Component`. Example:

```Kotlin
val audience = BukkitAudiences.create(this)
StellarCommand("send-to-self")
    .addMessageArgument(name = "message")
    .addExecution<Player> {
        val component = getArgument<Component>("message")
        audience.sender(sender).sendMessage(component)
    }
```

![Message Argument](https://cdn.lutto.dev/stellar/gifs/text/message.gif)