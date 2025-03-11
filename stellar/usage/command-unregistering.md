---
title: Command Unregistering
description: The official docs for the Stellar Command API.
---

# Command Unregistering {#command-unregistering}

You can unregister any commands registered by other plugins, the server or your own plugin. This can come in useful whenever you wish to override or remove other commands. For example, if you want to override the /enchant command, you need to first unregister the command, then add your own custom implementation.

You can unregister other command using the `unregisterCommand` method:

```kotlin
override fun onEnable() {
    unregisterCommand("enchant") // this is entirely public

    StellarCommand("enchant")
        /* code logic */
        .register(this)
}
```