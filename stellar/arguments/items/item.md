---
title: Item Argument
description: The official docs for the Stellar Command API.
---

# Item Argument {#item}

Returns an `ItemStack`, which players can specify with this syntax: `<item_id>[<list of components>]`. Example:

```Kotlin
StellarCommand("give")
    .addItemArgument(name = "item")
    .addExecution<Player> {
        val item = getArgument<ItemStack>("item")
        sender.inventory.addItem(item)
    }
```