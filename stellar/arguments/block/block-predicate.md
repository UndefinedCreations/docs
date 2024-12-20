---
title: Block Predicate
description: The official docs for the Stellar Command API.
---

# Block Predicate {#block-predicate}

Returns `Predicate<Block>`, using [this syntax](https://minecraft.wiki/w/Argument_types#minecraft:block_predicate). Example:

```kotlin
StellarCommand("isblock")
    .addBlockPredicateArgument(name = "predicate")
    .addExecution<Player> {
        val data = getArgument<Predicate<Block>>("predicate")
        val isBlock = data.test(block)
        sender.sendMessage(isBlock.toString())
    }
```