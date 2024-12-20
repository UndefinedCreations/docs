---
title: Item Argument
description: The official docs for the Stellar Command API.
---

# Item Argument {#item}

Returns an item, which people can modify be specifying material and components (`<item_id>[<list of components>]`). Example:

```kotlin
StellarCommand("give")
    .addItemArgument(name = "item")
    .addExecution<Player> {
        val item = getArgument<ItemStack>("item")
        sender.inventory.addItem(item)
    }
```