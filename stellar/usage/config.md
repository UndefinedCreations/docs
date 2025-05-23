---
title: Stellar Config
description: The official docs for the Stellar Command API.
---

# Command Stellar Config {#config}

Stellar will default to certain values from the `StellarConfig` class. These values are usually still modifiable for each command and act as a default. 

These are all the current values:
- The `JavaPlugin` instance, mostly used for command registration and unregistration.
- The `MiniMessage` instance used by string parsing.
- The prefix commands will be registered in, e.g. <u>minecraft</u>:data.

You can set these default values as such:
::: tabs key:kotlin-java
== Java
```Java
StellarConfig.INSTANCE
        .setPlugin(this)
        .setPrefix("example")
        .setMiniMessage(this.miniMessage);
```
== Kotlin
```Kotlin
StellarConfig
    .setPlugin(this)
    .setPrefix("example")
    .setMiniMessage(this.miniMessage)
```
:::

## JavaPlugin

When registering/unregistering a command or anywhere else you might need to specify a `JavaPlugin` instance, you will have the option to omit the plugin instance, and it'll default to the one specified in `StellarConfig`.

::: tabs key:kotlin-java
== Java
```Java
StellarConfig.INSTANCE
        .setPlugin(this);
 
new StellarCommand("test")
        .register();
```
== Kotlin
```Kotlin
StellarConfig
    .setPlugin(this)

StellarCommand("test")
    .register()
```
:::

## MiniMessage

Whenever you have to provide a `String` message, it is most likely being parsed by `MiniMessage`. The instance being used is by default `MiniMessage.miniMessage()`, but can easily be modified with the use of `StellarConfig.setMiniMessage()`.

::: tabs key:kotlin-java
== Java
```Java
final MiniMessage miniMessage = MiniMessage.builder()
        /* minimessage configuration */
        .build();
StellarConfig.INSTANCE.setMiniMessage(miniMessage);

new StellarCommand("test")
        .addMessageCooldown(
                5,
                TimeUnit.SECONDS,
                (context, remaining) -> "You cannot use this command right now! Please wait " + remaining + " more seconds."
        )
        .register();
```
== Kotlin
```Kotlin
val miniMessage = MiniMessage.builder()
    /* minimessage configuration */
    .build()
setMiniMessage(miniMessage)

StellarCommand("test")
    .addMessageCooldown(5, TimeUnit.SECONDS) { remaining ->
        "You cannot use this command right now! Please wait $remaining more seconds."
    }
    .register()
```
:::

## Prefix

Any command you register will be registered under two names: the base command name (/admin) and the command name with its prefix (/staffplugin:admin). This prefix is by default the name of your plugin, but can be modified in the `StellarConfig`, or on command register.

::: tabs key:kotlin-java
== Java
```Java
StellarConfig.INSTANCE.setPrefix("myserver");

new StellarCommand("admin")
        /* command logic */
        .register(); // or can be specified here
```
== Kotlin
```Kotlin
StellarConfig.setPrefix("myserver")

StellarCommand("admin")
    /* command logic */
    .register() // or can be specified here
```
:::