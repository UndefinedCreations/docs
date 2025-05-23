---
title: Item Predicate
description: The official docs for the Stellar Command API.
---

# Item Predicate {#item-predicate}

Returns `Predicate<ItemStack>`, which players can specify with this syntax: `<item_id>[<list of components>]`. For more information: https://minecraft.wiki/w/Argument_types#minecraft:item_predicate. Example:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("isItem")
    .addItemArgument("item")
    .addExecution(Player.class, context -> {
        Predicate<Block> predicate = context.getArgument<Predicate<ItemStack>("item")
        boolean isItem = predicate.test(new ItemStack(material))
        context.getSender().sendMessage(isItem)
    });
```
== Kotlin
```Kotlin
StellarCommand("isItem")
    .addItemArgument(name = "item")
    .addExecution<Player> {
        val predicate = getArgument<Predicate<ItemStack>("item")
        val isItem = predicate.test(ItemStack(material))
        sender.sendMessage(isItem)
    }
```
:::

<ArgumentParser placeholder="#diamond[]" regex="^[#]?([a-zA-Z_]+:)?[a-zA-Z_]+(\[([a-zA-Z_]+=[a-zA-Z0-9_!#]+)?(,[a-zA-Z_]+=[a-zA-Z0-9_!#]+)?\])*$" />

![Item Predicate Argument](https://cdn.lutto.dev/stellar/gifs/items/item_predicate.gif)