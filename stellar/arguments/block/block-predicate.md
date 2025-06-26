---
title: Block Predicate
description: The official docs for the Stellar Command API.
---

# Block Predicate {#block-predicate}

Returns `Predicate<Block>`, using [this syntax](https://minecraft.wiki/w/Argument_types#minecraft:block_predicate). Example:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("isblock")
    .addBlockPredicateArgument("predicate")
    .addExecution(Player.class, context -> { 
        Predicate<Block> data = context.getArgument<Predicate<Block>>("predicate")
        boolean isBlock = data.test(block)
        sender.sendMessage(isBlock.toString())
    });
```
== Kotlin
```Kotlin
StellarCommand("isblock")
    .addBlockPredicateArgument(name = "predicate")
    .addExecution<Player> {
        val data = getArgument<Predicate<Block>>("predicate")
        val isBlock = data.test(block)
        sender.sendMessage(isBlock.toString())
    }
```
:::

<ArgumentParser placeholder="#minecraft:stone" regex="^[#]?(minecraft:[a-zA-Z]+|[a-zA-Z]+)(\[([a-zA-Z]+=\S+)?\])?$" />

![Block Predicate Argument](https://cdn.lutto.dev/stellar/gifs/block/block_predicate.gif)