---
title: Creating a Simple Command
description: The official docs for the Stellar Command API.
---

# Creating a Simple Command {#creating-a-simple-command}

To create a simple command, we first need to initialize the base command:

```kt
StellarCommand("message")
```

Now we need to add an argument, the player needs to be able to specify who they want to message. For that purpose, we'll use the pre-made online players ListArgument defined in `addOnlinePlayersArgument`:

```kt
StellarCommand("message")
    .addOnlinePlayersArgument("target")
```

Then we also need the player to be able to specify the message they want to send. We want this to be a phrase, not a word, and have no string limitations. We'll use the greedy string argument for that. There are two ways to create a greedy string argument, and we'll use the simpler one for now:

```kt
StellarCommand("message")
    .addOnlinePlayersArgument("target")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
```


> Note: You cannot have two non-literal arguments with the same! This will result in a DuplicateArgumentNameException being thrown during runtime.

Now we need to message the target with that message whenever a player runs the commands. To achieve that, we'll use the `addExecution` method.

```kt
StellarCommand("message")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addExecution<Player> {
        // logic here
    }
```

The generic type here is customizable to anything that extends CommandSender, and this method will only be called if the cast is successful. The method itself is an extension function (type) of CommandContext, which will be further explained in later docs. You can get the sender with `CommandContext#source` and the results of any arguments using the `CommandContext#getArgument`.

```kt
StellarCommand("message")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
```

Now we need to add custom permissions to the command, using the `addRequirement` command.

```kt
StellarCommand("message")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
```

Requirements are far more powerful than this, and we talk more about that in the coming pages.

To now register this, we can use the `register` method.

```kt
StellarCommand("message")
    .addStringArgument("string", StringType.GREEDY_PHRASE)
    .addRequirement("example.user.message")
    .addExecution<Player> {
        val target = getArgument<Player>(0) // Player is what the return value will be casted to, and 0 is the index of the argument
        val message = getArgument<String>(1)
        target.sendMessage(message)
    }
    .register(this) // this refers to the JavaPlugin instance
```

If you want to add any literal arguments ("forced arguments", like /), use `addArgument`.

And congratulations, you have created your first command!