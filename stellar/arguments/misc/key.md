---
title: NamespacedKey Argument
description: The official docs for the Stellar Command API.
---

# NamespacedKey Argument {#uuid}

Must be a valid `NamespacedKey`, which it returns. Example:

:::code-group
```Java
new StellarCommand("key")
    .addNamespacedKeyArgument("key")
    .addExecution<Player>(() -> { context ->
        NamespacedKey key = context.getArgument<NamespacedKey>("key");
        currentKey = key; // separate variable
    };
```
```Kotlin
StellarCommand("key")
    .addNamespacedKeyArgument(name = "key")
    .addExecution<Player> {
        val key = getArgument<NamespacedKey>("key")
        currentKey = key // separate variable
    }
```
:::