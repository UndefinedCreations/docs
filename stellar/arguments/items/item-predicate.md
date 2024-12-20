---
title: Item Predicate
description: The official docs for the Stellar Command API.
---

# Item Predicate {#item-predicate}

Returns `Predicate<ItemStack>`, which people can modify be specifying material and components (`<item_type>[<list of tests>]`). For more information: https://minecraft.wiki/w/Argument_types#minecraft:item_predicate. Example:

```kotlin
StellarCommand("isItem")
    .addItemArgument(name = "item")
    .addExecution<Player> {
        val predicate = getArgument<Predicate<ItemStack>("item")
        val isItem = predicate.test(ItemStack(material))
        sender.sendMessage(isItem)
    }
```