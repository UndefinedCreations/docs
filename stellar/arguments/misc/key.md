---
title: NamespacedKey Argument
description: The official docs for the Stellar Command API.
---

# NamespacedKey Argument {#uuid}

Must be a valid `NamespacedKey`, which it returns. Example:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("key")
    .addNamespacedKeyArgument("key")
    .addExecution<Player>(Player.class, context -> {
        NamespacedKey key = context.getArgument<NamespacedKey>("key");
        currentKey = key; // separate variable
    };
```
== Kotlin
```Kotlin
StellarCommand("key")
    .addNamespacedKeyArgument(name = "key")
    .addExecution<Player> {
        val key = getArgument<NamespacedKey>("key")
        currentKey = key // separate variable
    }
```
:::

![Namespaced Key Argument](https://cdn.lutto.dev/stellar/gifs/misc/key.gif)