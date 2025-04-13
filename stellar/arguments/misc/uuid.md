---
title: UUID Argument
description: The official docs for the Stellar Command API.
---

# UUID Argument {#uuid}

Must be a valid `UUID`, which it returns. Example:

:::code-group
```Java
new StellarCommand("uuid")
    .addUUIDArgument("uuid")
    .addExecution<Player>(() -> { context ->
        UUID uuid = getArgument<UUID>("uuid");
        currentUUID = uuid; // separate variable
    };
```
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