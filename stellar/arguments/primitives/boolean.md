---
title: Boolean Argument
description: The official docs for the Stellar Command API.
---

# Boolean Argument {#boolean}

The `BooleanArgument` returns, well, a boolean, it's as simple as that. Example:

```kotlin
StellarCommand("server")
    .addBooleanArgument("bool")
    .addExecution<Player> {
        sender.sendMessage(getArgument<Boolean>("bool"))
    }
```