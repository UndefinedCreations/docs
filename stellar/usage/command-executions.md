---
title: Command Executions
description: The official docs for the Stellar Command API.
---

# Command Executions {#command-executions}

When creating a command, you will **always** use command executions or/and runnables. This page will teach you everything you will need to know about command executions.

## Types of executions

There are three types of executions, the first being an execution that runs whenever someone types in this command as the _last_ command. The second is the runnable, which is _always_ called if it is in the path. The third and last is a failure execution, which will run if it is the last command _and_ somebody typed a command incorrectly.

## Normal Executions

These will only run when it is the last command typed. You can add this by using the `addExecution<T>`. `T` being the `CommandSender` used. Here is an example:

```kotlin
StellarCommand("test")
    .addExecution<Player> {
        source.sendMessage("Hello world!")
    }
```

## Command Runnables

A command runnable is always run if it is an argument, in order of lowest to highest in the command tree. To add a runnable to your command, use the `addRunnable` method as such:

```kotlin
StellarCommand("test")
    .addRunnable<Player> {
        source.sendMessage("This will always run.")
    }
```

## Failure Executions

Failure executions will be run if the command has been typed incorrectly and it is the last argument correctly typed. You can initially hide the default minecraft failure messages by using the `hideDefaultFailureMessages` method. Then you can add a simple execution by making use of the `addFailureExecution` method.

```kotlin
StellarCommand("test")
    .addArgument("arg") // Literal argument
    .hideDefaultFailureMessages(hide = true, global = true) // global stands for if this will count for any sub-arguments
    .addFailureExecution<Player> {
        val predictedCommand: String = // custom logic
        source.sendMessage("${ChatColor.RED}Incorrect command! Maybe you meant $predictedCommand?")
    }
```

A better way of adding custom failure message, if that's all you want, would be to use the `addFailureMessage` method:

```kotlin
StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(hide = true, global = true)
    .addFailureMessages("") // Accepts strings parsed by MiniMessage or components
```

You can also use the `addPlainFailureMessage` to add a string message _not_ parsed by MiniMessage

Lastly, if you want to add a failure message that will always run for the command and its sub-arguments, then use the `addGlobalFailureMessage` method:

```kotlin
StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(hide = true, global = true)
    .addGlobalFailureMessages("Incorrect usage! Usage: /test arg")
```