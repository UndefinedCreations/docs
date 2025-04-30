---
title: Creating a Simple Command
description: The official docs for the Stellar Command API.
---

# Creating a Simple Command {#creating-a-simple-command}

Best way to learn is by doing, thus we are going to create a simple message command that covers the basics of commands. Therefore, we are going to make a simple message command. 

We first need to initialize the base command:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message");
```
== Kotlin
```Kotlin
StellarCommand("message")
```
:::

For a bit of customization you can add aliases as such:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell");
```
== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
```
:::

Now we need to add an argument, as the player running the command needs to be able to specify who they want to message. For that purpose, we'll use the pre-made online players ListArgument defined in [`addOnlinePlayersArgument`](https://stellardocs.lutto.dev/com/undefined/stellar/argument/list/OnlinePlayersArgument.html):

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target");
```
== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
```
:::

The player also needs to specify the message they wish to send.
We want this to be a phrase, not a word, and have no string limitations. We'll use the phrase argument for that, which offers no limitations. There are two ways to create a phrase argument, and we'll use the simpler one for now:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE);
```
== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
```
:::

:::warning
Note: You cannot have two non-literal arguments with the same! This will result in a [`DuplicateArgumentNameException`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/exception/DuplicateArgumentNameException.kt#L7) being thrown at runtime.
:::

Now we need to message the target with the chosen message whenever a player runs the commands. To achieve that, we'll use the `addExecution` method.

:::tabs key:kotlin-java

== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution(Player.class, context -> {
        // logic here
    });
```

::: tabs key:kotlin-java
== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player> {
        // logic here
    }
```

The generic type here is customizable to anything that extends `CommandSender`, and the function will only be called if the cast is successful.


The sender is automatically cast into whatever class is specified before the function, which must extend or be `CommandSender`. If the cast is unsuccessful, then that function will not be run. If you wish to just use a `CommandSender`, you can omit this parameter.
:::

The function will provide a `CommandContext` which is already fully explained in [this page](/context-tree).

You can get the sender with [`CommandContext.getSender()`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/data/argument/CommandContext.kt#L7) and the results of any arguments using the [`CommandContext.getArgument()`](https://stellardocs.lutto.dev/com/undefined/stellar/data/argument/CommandContext.html#getArgument(java.lang.String)) methods.

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution(Player.class, context -> {
        Player target = context.getArgument("target"); // Player is what the parsed return value will be casted to, and "message" is the name of the argument
        String message = context.getArgument("message");
        target.sendMessage(message);
    });
```

== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player> {
        val target = getArgument<Player>("target") // Player is what the parsed return value will be casted to, and "target" is the name of the argument
        val message = getArgument<String>("message")
        target.sendMessage(message)
    }
```

If the name of the variable is the same as the name of the argument, then you can use the `by` delegate operator as such:

```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player> {
        val target: Player by args // the return value Player must now be statically typed
        val message: String by args
        target.sendMessage(message)
    }
```
:::

Now we need to add custom permissions to the command, using the [`addRequirement`](https://stellardocs.lutto.dev/com/undefined/stellar/AbstractStellarCommand.html#addRequirement(java.lang.String)) method.

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell")
    .addRequirement("example.user.message")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution(Player.class, context -> {
        Player target = context.getArgument("target");
        String message = context.getArgument("message");
        target.sendMessage(message);
    });
```
== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addRequirement("example.user.message")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution<Player> {
        val target: Player by args
        val message: String by args
        target.sendMessage(message)
    }
```
:::

Requirements are far more powerful than this, and we talk more about that in the coming pages.

To register this command, we can use the [`register`](https://stellardocs.lutto.dev/com/undefined/stellar/AbstractStellarCommand.html#register(org.bukkit.plugin.java.JavaPlugin)) method.

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("message")
    .addAliases("msg", "tell")
    .addRequirement("example.user.message")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution(Player.class, context -> {
        Player target = context.getArgument("target");
        String message = context.getArgument("message");
        target.sendMessage(message);
    })
    .register(this); // this referring to the JavaPlugin instance
```
== Kotlin
```Kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target: Player by args
        val message: String by args
        target.sendMessage(message)
    }
    .register(this) // this referring to the JavaPlugin instance
```
:::

If you want to add any literal arguments ("forced arguments", like `/title <targets>` **`(clear|reset)`**), use [`addArgument`](https://stellardocs.lutto.dev/com/undefined/stellar/AbstractStellarCommand.html#addArgument(java.lang.String,java.lang.String)) or [`addLiteralArgument`](https://stellardocs.lutto.dev/com/undefined/stellar/AbstractStellarCommand.html#addLiteralArgument(java.lang.String,java.lang.String)) methods.

If we try this in-game now, the msg command alias will not work, as Minecraft already has a msg command. To avoid this problem, you can unregister the default Minecraft command with the [`unregisterCommand`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/paper/api/src/main/kotlin/com/undefined/stellar/util/CommandUtil.kt#L136) method:

::: tabs key:kotlin-java
== Java
```Java
CommandUtil.unregisterCommand("msg");

new StellarCommand("message")
    .addAliases("msg", "tell")
    .addRequirement("example.user.message")
    .addOnlinePlayersArgument("target")
    .addStringArgument("message", StringType.PHRASE)
    .addExecution(Player.class, context -> {
        Player target = context.getArgument("target");
        String message = context.getArgument("message");
        target.sendMessage(message);
    })
    .register(this); // this referring to the JavaPlugin instance
```
== Kotlin
```Kotlin
unregisterCommand("msg") // can be used anywhere without a class definition

StellarCommand("message")
    .addAliases("msg", "tell")
    .addStringArgument("message", StringType.PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target: Player by args
        val message: String by args
        target.sendMessage(message)
    }
    .register(this) // this referring to the JavaPlugin instance
```
:::

And congratulations, you have created your first command!