---
title: Entity Argument
description: The official docs for the Stellar Command API.
---

# Entity Argument {#entity}

The `EntityArgument` allows for the selection of a single entity, or multiple entities. It also includes the use of target selectors (@a, @e, etc.). You can customize the argument using the `EntityDisplayType` enum. Examples:

::: code-group
```Java
new StellarCommand("select")
    .addEntityArgument("target", EntityDisplayType.ENTITY)
```
```Kotlin
StellarCommand("select")
    .addEntityArgument(
        name = "target",
        type = EntityDisplayType.ENTITY
    )
```
:::

![Entity Argument](https://cdn.lutto.dev/stellar/gifs/entities/entity.gif)

## Entity vs Entities & Player vs Players

::: warning
The player argument never hides the entity selectors. They are still suggested, just not usable on execution.
:::

By using the `ENTITY`/`PLAYER` enums, you limit the use of the selector to make people _only be able_ to select one player, but it doesn't visually force you, the command simply fails. Here is an example of a target selector that only allows for one entity: `@e[limit=1]`.