---
title: Entity Anchor Argument
description: The official docs for the Stellar Command API.
---

# Entity Anchor {#entity-anchor}

The `EntityAnchorArgument` must be a string of either `eyes` or `feet` and returns the enum `Anchor`. The `Anchor` enum handles adding the offset that the difference between teh eyes and feet have by using the `apply` methods:

:::code-group
```Java
new StellarCommand("calculate")
    .addEntityAnchor(name = "anchor")
    .addExecution(Player.class, () -> { context ->
        Anchor anchor = context.getArgument<Anchor>("anchor")    
        context.getSender().sendMessage(
            anchor.apply(sender) // returns location from eyes
            // or anchor.apply(location, sender)
        )
    })
```
```Kotlin
StellarCommand("calculate")
    .addEntityAnchor(name = "anchor")
    .addExecution<Player> {
        val anchor = getArgument<Anchor>("anchor")    
        sender.sendMessage(
            anchor.apply(sender) // returns location from eyes
            // or anchor.apply(location, sender)
        )
    }
```
:::

![Entity Anchor Argument](./entity_anchor.gif)