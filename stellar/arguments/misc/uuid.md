---
title: UUID Argument
description: The official docs for the Stellar Command API.
---

# UUID Argument {#uuid}

Must be a valid `UUID`, which it returns. Example:

```Kotlin
StellarCommand("uuid")
    .addUUIDArgument(name = "uuid")
    .addExecution<Player> {
        val uuid = getArgument<UUID>("uuid")
        currentUUID = uuid // separate variable
    }
```