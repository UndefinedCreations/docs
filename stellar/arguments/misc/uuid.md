---
title: UUID Argument
description: The official docs for the Stellar Command API.
---

# UUID Argument

Must be a valid `UUID`, which it returns. Example:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("uuid")
    .addUUIDArgument("uuid")
    .addExecution<Player>(Player.class, context -> {
        UUID uuid = getArgument<UUID>("uuid");
        currentUUID = uuid; // separate variable
    };
```
== Kotlin
```Kotlin
StellarCommand("uuid")
    .addUUIDArgument(name = "uuid")
    .addExecution<Player> {
        val uuid = getArgument<UUID>("uuid")
        currentUUID = uuid // separate variable
    }
```
:::

![UUID Argument](https://cdn.lutto.dev/stellar/gifs/misc/uuid.gif)