---
title: Command Executions
description: The official docs for the Stellar Command API.
---

# Command Executions {#command-executions}

When creating a command, you will nearly **always** use command executions or/and runnables. They allow you to run pieces of code at specific times, and they are added to specific arguments. This page will teach you everything you need to know about command executions.

## Types of executions

There are three types of executions, the first being an execution that runs whenever someone types the **exact** same command. The second is the runnable, which is _always_ called if it is in the command path. The third and last is a failure execution, which will run if it is the last command _and_ somebody typed a command incorrectly.

## Normal Executions

These will only run when it is that exact command typed. You can add this by using the `addExecution<T>`, `T` being the `CommandSender` used. Here is an example:

```kotlin
StellarCommand("greet")
    .addStringArgument("name")
    .addExecution<Player> {
        val name = getArgument<String>("name")
        sender.sendMessage("Hello name!")
    }
```

In this example, the command execution will only run if exactly `/greet name` is typed. 

## Command Runnables

A command runnable will always run if it is an command tree, before any executions and . To add a runnable to your command, use the `addRunnable` method as such:

```kotlin
StellarCommand("greet")
    .addRunnable<Player> {
        sender.sendMessage("Hello ${sender.name}.") // will always run
        true // whether to continue
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