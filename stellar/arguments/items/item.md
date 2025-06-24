---
title: Item Argument
description: The official docs for the Stellar Command API.
---

# Item Argument

Returns an `ItemStack`, which players can specify with this syntax: `<item_id>[<list of components>]`. Example:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("give")
    .addItemArgument(name = "item")
    .addExecution(Player.class, context -> {
        ItemStack item = context.getArgument<ItemStack>("item")
        context.getSender().getInventory().addItem(item)
    });
```
== Kotlin
```Kotlin
StellarCommand("give")
    .addItemArgument(name = "item")
    .addExecution<Player> {
        val item = getArgument<ItemStack>("item")
        sender.inventory.addItem(item)
    }
```
:::

<ArgumentParser placeholder="minecraft:diamond_sword[damage=2000]" regex="^([a-zA-Z_]+:)?[a-zA-Z_]+(\[([a-zA-Z_]+=[a-zA-Z0-9_!#]+)?(,[a-zA-Z_]+=[a-zA-Z0-9_!#]+)?\])*$" />

![Item Argument](https://cdn.lutto.dev/stellar/gifs/items/item.gif)