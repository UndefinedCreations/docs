---
title: Loot Table
description: The official docs for the Stellar Command API.
---

# Loot Table {#loot-table}

This argument must be in a valid [SNBT format](https://minecraft.wiki/w/NBT_format#SNBT_format) or a valid loot table key. If the SNBT table doesn't exist, it will create a new one. It returns `LootTable`. Example:

```kotlin
StellarCommand("loot-table")
    .addArgument("get")
    .addLootTableArgument(name = "table")
    .addExecution<Player> {
        val table = getArgument<LootTable>("table")
        selectedLootTable = table
    }
```