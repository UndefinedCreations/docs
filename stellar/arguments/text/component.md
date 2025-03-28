---
title: Component Argument
description: The official docs for the Stellar Command API.
---

# Component Argument {#component}

Must be a valid JSON text component, returns `net.kyori.adventure.text.Component`. Example:

```Kotlin
val audience = BukkitAudiences.create(this)
    StellarCommand("send-to-self")
        .addComponentArgument(name = "component")
        .addExecution<Player> {
            val component = getArgument<Component>("component")
            audience.sender(sender).sendMessage(component)
        }
```