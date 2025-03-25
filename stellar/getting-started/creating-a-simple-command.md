---
title: Creating a Simple Command
description: The official docs for the Stellar Command API.
---

# Creating a Simple Command {#creating-a-simple-command}

Best way to learn is by doing, thus we are going to create a simple message command. To create a simple command, we first need to initialize the base command:

```kotlin
StellarCommand("message")
```

:::info
Need to add constructor aliases.
:::

For a bit of customization you can add aliases as such:

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
```

Now we need to add an argument, the player needs to be able to specify who they want to message. For that purpose, we'll use the pre-made online players ListArgument defined in [`addOnlinePlayersArgument`](https://github.com/UndefinedCreations/Stellar/blob/34fb887add0b257ff59e3e49df7c6cbe6cdc8522/common/src/main/kotlin/com/undefined/stellar/argument/ArgumentHandler.kt#L362):

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
```

Then we also need the player to be able to specify the message they want to send. We want this to be a phrase, not a word, and have no string limitations. We'll use the greedy string argument for that. There are two ways to create a greedy string argument, and we'll use the simpler one for now:

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addOnlinePlayersArgument("target")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
```

:::warning
Note: You cannot have two non-literal arguments with the same! This will result in a [`DuplicateArgumentNameException`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/exception/DuplicateArgumentNameException.kt#L7) being thrown during runtime.
:::

Now we need to message the target with that message whenever a player runs the commands. To achieve that, we'll use the `addExecution` method.

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addExecution<Player> {
        // logic here
    }
```

The generic type here is customizable to anything that extends CommandSender, and this method will only be called if the cast is successful. The method itself is an extension function (type) of CommandContext, which will be further explained in later docs. You can get the sender with [`CommandContext.sender`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/data/argument/CommandContext.kt#L7) and the results of any arguments using the [`CommandContext.getArgument()`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/data/argument/CommandContext.kt#L9) methods.

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
```

Now we need to add custom permissions to the command, using the [`addRequirement`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/AbstractStellarCommand.kt#L90) command.

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
```

Requirements are far more powerful than this, and we talk more about that in the coming pages.

To now register this, we can use the [`register`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/AbstractStellarCommand.kt#L354) method.

```kotlin
StellarCommand("message")
    .addAliases("msg", "tell")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
    .register(this) // this referring to the JavaPlugin instance
```

If you want to add any literal arguments ("forced arguments", like `/title \<targets> (clear|reset)`), use [`addArgument`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/AbstractStellarCommand.kt#L369) or [`addLiteralArgument`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/common/src/main/kotlin/com/undefined/stellar/AbstractStellarCommand.kt#L374).

If we try this in-game now, the msg command will not work, as Minecraft already has a msg command. To avoid this problem, you can unregister the default minecraft command with the [`unregisterCommand`](https://github.com/UndefinedCreations/Stellar/blob/4ede2e9b8a195d5b675beaca8be5eecd4cc4e606/paper/api/src/main/kotlin/com/undefined/stellar/util/CommandUtil.kt#L136) method:

```kotlin
unregisterCommand("msg") // can be used anywhere without a class definition

StellarCommand("message")
    .addAliases("msg", "tell")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
    .register(this) // this referring to the JavaPlugin instance
```

And congratulations, you have created your first command!