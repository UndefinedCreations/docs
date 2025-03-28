---
title: Item Slots
description: The official docs for the Stellar Command API.
---

# Item Slots {#item-slots}

Returns an int of a specific slot in any type of inventory . You can use `ItemSlotArgument` for the selection of _one_ slot, and `ItemSlotsArgument` for multiple slots. Examples:

::: code-group
```Kotlin [Slot]
StellarCommand("clearitem")
    .addItemSlotArgument(name = "slot")
    .addExecution<Player> {
        val slot = getArgument<Int>("slot")
        sender.inventory.setItem(slot, null)
    }
```
```Kotlin [Slots]
StellarCommand("clearitems")
    .addItemSlotsArgument(name = "slots")
    .addExecution<Player> {
        val slots = getArgument<List<Int>>("slots")
        for (slot in slots) sender.inventory.setItem(slot, null)
    }
```
:::