---
title: Item Predicate
description: The official docs for the Stellar Command API.
---

# Item Predicate {#item-predicate}

Returns `Predicate<ItemStack>`, which players can specify with this syntax: `<item_id>[<list of components>]`. For more information: https://minecraft.wiki/w/Argument_types#minecraft:item_predicate. Example:

```Kotlin
StellarCommand("isItem")
    .addItemArgument(name = "item")
    .addExecution<Player> {
        val predicate = getArgument<Predicate<ItemStack>("item")
        val isItem = predicate.test(ItemStack(material))
        sender.sendMessage(isItem)
    }
```