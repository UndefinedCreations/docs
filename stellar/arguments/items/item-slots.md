---
title: Item Slots
description: The official docs for the Stellar Command API.
---

# Item Slots {#item-slots}

Returns an int of a specific slot in any type of inventory . You can use `ItemSlotArgument` for the selection of _one_ slot, and `ItemSlotsArgument` for multiple slots. Examples:

::: code-group
```Java [Java Slot]
new StellarCommand("clear-item")
    .addItemSlotArgument("slot")
    .addExecution(Player.class, () -> { context ->
        int slot = (int) context.getArgument("slot")
        context.getSendern().getInventory().setItem(slot, null)
    }
```
```Java [Java Slots]
new StellarCommand("cleari-tems")
    .addItemSlotArgument("slots", multiple = true)
    .addExecution(Player.class, () -> { context ->
        int slots = getArgument<List<Integer>>("slots")
        for (slot in slots) context.getSendern().getInventory().setItem(slot, null)
    }
```
```Kotlin [Kotlin Slot]
StellarCommand("clear-item")
    .addItemSlotArgument(name = "slot")
    .addExecution<Player> {
        val slot = getArgument<Int>("slot")
        sender.inventory.setItem(slot, null)
    }
```
```Kotlin [Kotlin Slots]
StellarCommand("clear-items")
    .addItemSlotArgument(name = "slots", multiple = true)
    .addExecution<Player> {
        val slots = getArgument<List<Int>>("slots")
        for (slot in slots) sender.inventory.setItem(slot, null)
    }
```
:::

<ArgumentParser placeholder="eyes" regex="^[a-zA-Z]+.[a-zA-Z0-9]+$" />

![Item Slot Argument](https://cdn.lutto.dev/stellar/gifs/items/item_slot.gif)