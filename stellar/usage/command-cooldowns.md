---
title: Command Cooldowns
description: The official docs for the Stellar Command API.
---

# Command Cooldowns {#command-cooldowns}

::: warning
Command cooldowns only work for players. 
:::

You might want to spam-proof your commands, which is where the command cooldown system comes into play. Stellar will automatically handle the checking of cooldowns, while allowing you to customize it as much as you want.

You can either set add cooldowns with a duration and an execution, or with a duration and a message.

::: tip
If you omit the `TimeUnit` in any cooldown method, and it will default to milliseconds.
:::

## Cooldown Executions

You can add a cooldown execution as such:

::: tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
        .addCooldown(5, TimeUnit.SECONDS, (context, remaining) -> {
            context.getSender().sendMessage(ChatColor.RED + "Please wait ${TimeUnit.MILLISECONDS.toSeconds(remaining)} more seconds!"); // this is also the default message
        })
        .addOnlinePlayersArgument("target")
        .addStringArgument("message", StringType.PHRASE)
        .addExecution(Player.class, context -> {
            Player target = context.getArgument("target");
            String message = context.getArgument("message");
            target.sendMessage(context.getSender().getName() + " -> " + message + ".");
        })
        .register();
```
== Kotlin
```Kotlin
StellarCommand("message")
    .addCooldown(5, TimeUnit.SECONDS) { remaining ->
        sender.sendMessage("${ChatColor.RED}Please wait ${TimeUnit.MILLISECONDS.toSeconds(remaining)} more seconds!") // this is also the default message
    }
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player> {
        val target: Player by args
        val message: String by args
        target.sendMessage("${ChatColor.GRAY}${sender.name} -> $message.")
    }
    .register()
```
:::

The above code will run that message the player whenever they run that command twice within 5 seconds. The function itself will return the `CommandContext` and the remaining duration in milliseconds, as a `long`.

## Cooldown Message

For a simpler system, you can instead return cooldown messages which will be sent to the player. Cooldown messages use cooldown executions under the hood.

You have three types of cooldown message methods that you can use:

- `addComponentMessageCooldown` — this will send the returning `Component` to the player.
- `addMessageCooldown` — this will send the returning `String` **parsed by `MiniMessage`** to the player.
- `addRawMessageCooldown` — this will send the returning `String` with no modifications to the player.

::: tabs key:kotlin-java
== Java
::: code-group
```Java [Component]
new StellarCommand("message")
        .addComponentMessageCooldown(
                5,
                TimeUnit.SECONDS,
                (context, remaining) -> Component.text("Please wait " + TimeUnit.MILLISECONDS.toSeconds(remaining) + " more seconds!", NamedTextColor.RED)
        )
        .addOnlinePlayersArgument("target")
        .addStringArgument("message", StringType.PHRASE)
        .addExecution(Player.class, context -> {
            Player target = context.getArgument("target");
            String message = context.getArgument("message");
            target.sendMessage(context.getSender().getName() + " -> " + message + ".");
        })
        .register(this);
```
```Java [String]
new StellarCommand("message")
        .addMessageCooldown(
                5,
                TimeUnit.SECONDS,
                (context, remaining) -> "<red>Please wait " + TimeUnit.MILLISECONDS.toSeconds(remaining) + " more seconds!"
        )
        .addOnlinePlayersArgument("target")
        .addStringArgument("message", StringType.PHRASE)
        .addExecution(Player.class, context -> {
            Player target = context.getArgument("target");
            String message = context.getArgument("message");
            target.sendMessage(context.getSender().getName() + " -> " + message + ".");
        })
        .register(this);
```
```Java [Raw String]
new StellarCommand("message")
        .addStringMessageCooldown(
                5,
                TimeUnit.SECONDS,
                (context, remaining) -> ChatColor.RED + "Please wait " + TimeUnit.MILLISECONDS.toSeconds(remaining) + " more seconds!"
        )
        .addOnlinePlayersArgument("target")
        .addStringArgument("message", StringType.PHRASE)
        .addExecution(Player.class, context -> {
            Player target = context.getArgument("target");
            String message = context.getArgument("message");
            target.sendMessage(context.getSender().getName() + " -> " + message + ".");
        })
        .register(this);
```
== Kotlin
::: code-group
```Kotlin [Component]
StellarCommand("message")
    .addComponentMessageCooldown(5, TimeUnit.SECONDS) { remaining: Long ->
        Component.text("Please wait ${TimeUnit.MILLISECONDS.toSeconds(remaining)} more seconds!", NamedTextColor.RED)
    }
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player>(Player::class.java) { context: CommandContext<Player> ->
        val target = context.getArgument<Player>("target")
        val message = context.getArgument<String>("message")
        target.sendMessage(context.sender.name + " -> " + message + ".")
    }
    .register(this)
```
```Kotlin [String]
StellarCommand("message")
    .addMessageCooldown(5, TimeUnit.SECONDS) { remaining: Long ->
        "<red>Please wait ${TimeUnit.MILLISECONDS.toSeconds(remaining)} more seconds!"
    }
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player>(Player::class.java) { context: CommandContext<Player> ->
        val target = context.getArgument<Player>("target")
        val message = context.getArgument<String>("message")
        target.sendMessage(context.sender.name + " -> " + message + ".")
    }
    .register(this)
```
```Kotlin [Raw String]
StellarCommand("message")
    .addRawMessageCooldown(5, TimeUnit.SECONDS) { remaining: Long ->
        "${ChatColor.RED}Please wait ${TimeUnit.MILLISECONDS.toSeconds(remaining)} more seconds!"
    }
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player>(Player::class.java) { context: CommandContext<Player> ->
        val target = context.getArgument<Player>("target")
        val message = context.getArgument<String>("message")
        target.sendMessage(context.sender.name + " -> " + message + ".")
    }
    .register(this)
```
:::