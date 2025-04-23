---
title: Command Unregistering
description: The official docs for the Stellar Command API.
---

# Command Unregistration {#command-unregistration}

You can unregister any commands registered by other plugins, the server or your own plugin. This can come in useful whenever you wish to override or remove other commands. For example, if you want to override the /enchant command, you need to first unregister the command, then add your own custom implementation.

You can unregister other command using the `unregisterCommand` method in `CommandUtil`:

:::tabs key:kotlin-java
== Java
```Java
@Override
public void onEnable() {
    CommandUtil.unregisterCommand("enchant", this) // You can also omit the plugin if set in StellarConfig

    new StellarCommand("enchant")
        /* code logic */
        .register(this)
}
```
== Kotlin
```Kotlin
override fun onEnable() {
    CommandUtil.unregisterCommand(
        name = "enchant",
        plugin = this // You can also omit the plugin if set in StellarConfig
    )

    StellarCommand("enchant")
        /* code logic */
        .register(this)
}
```
:::

Commands are stored in two places, the Vanilla `CommandDispatcher`, and the Bukkit command map. It first attempts to unregister the command from the vanilla `CommandDispatcher`, then it attempts to unregister it from the Bukkit command map, and remove it from the /help command, which it does within a `BukkitTask` — which is why you need to pass in the `JavaPlugin` instance.