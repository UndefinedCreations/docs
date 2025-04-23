---
title: Command Registration
description: The official docs for the Stellar Command API.
---

# Command Registration {#command-registration}

To be able to use any command, you will have to register it. The `register` method takes in two parameters:

1. The `JavaPlugin` instance for this command to be registered in.
2. The prefix this command will be registered in.

These two can be omitted if already set in [StellarConfig](./config.md).

Commands are registered under two names: the base command name (/admin) and the command name with its prefix (/staffplugin:admin).

::: tabs key:kotlin-java
== Java
```Java
public class Main extends JavaPlugin {
    @Override
    public void onEnable() {
        new StellarCommand("admin")
                .register(this, "myserver");
    }
}
```
== Kotlin
```Kotlin
class Main : JavaPlugin() {
    override fun onEnable() {
        StellarCommand("admin")
            .register(this, "myserver")
    }
}
```
:::