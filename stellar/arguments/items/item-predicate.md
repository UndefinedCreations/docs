---
title: Item Predicate
description: The official docs for the Stellar Command API.
---

# Item Predicate {#item-predicate}

Returns `Predicate<ItemStack>`, which players can specify with this syntax: `<item_id>[<list of components>]`. For more information: https://minecraft.wiki/w/Argument_types#minecraft:item_predicate. Example:

:::code-group
```Java
new StellarCommand("isItem")
    .addItemArgument("item")
    .addExecution(() -> { context ->
        Predicate<Block> predicate = context.getArgument<Predicate<ItemStack>("item")
        boolean isItem = predicate.test(new ItemStack(material))
        context.getSender().sendMessage(isItem)
    }
```
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

<ArgumentParser placeholder="#diamond[]" regex="^[#]?(minecraft:[a-zA-Z]+|[a-zA-Z]+)(\[([a-zA-Z]+=\S+)?\])?$" />

![Item Predicate Argument](https://cdn.lutto.dev/stellar/gifs/items/item_predicate.gif)