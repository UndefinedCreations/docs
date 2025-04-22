---
title: Command Executions
description: The official docs for the Stellar Command API.
---

# Command Executions {#command-executions}

When creating a command, you will nearly **always** use command executions and/or runnables. They allow you to run pieces of code at specific times, and they are added to specific arguments. This page will teach you everything you need to know about command executions.

## Types of executions

There are three types of executions:
1. A regular execution that runs whenever someone types the **exact** command, e.g. /world **create** (bold indicating where the execution is).
2. The second is the runnable, which is _always_ called if it is in the command path, e.g. /world **create** worldname1. 
3. The third and last is a failure execution, which, when someone types a command incorrectly, will run the last correctly typed command, e.g. /scoreboard **objectives** ads.

## Regular Executions

These will only run when it's the last command typed.

:::tabs key:kotlin-java

In this example, the command execution will only run if `/greet name` is typed. The generic type `T` here is customizable to anything that extends `CommandSender`, and the function will only be called if the cast is successful.
== Java
```Java
new StellarCommand("greet")
    .addStringArgument("name")
    .addExecution(Player.class, context -> { // you can also omit the `Player.class`
        String name = context.getArgument("name");
        sender.sendMessage("Hello name!");
    });
```
== Kotlin
```Kotlin
StellarCommand("greet")
    .addStringArgument("name")
    .addExecution<Player> {
        val name: String as args // or getArgument<String>("name")
        sender.sendMessage("Hello name!")
    }
```

In this example, the command execution will only run if `/greet name` is typed. The sender is automatically cast into whatever `Class` is specified before the function, which must be or extend `CommandSender`. If the cast is unsuccessful, then the function will not be run. **If you wish to just use a `CommandSender`, you can omit this parameter.**
:::

## Command Runnables

A command runnable will always run if it is in the command tree **if there are other executions present in the last argument**, before any other executions and runnables in upper arguments. They are run in from the lowest argument (or root command) to the last argument.

The runnable returns a `boolean`, which dictates whether it should continue running subsequent executions and/or runnables. 

:::tabs key:kotlin-java

This command will open the first page (1) if no page is selected, otherwise just open the selected page.
== Java
```Java
new StellarCommand("info")
    .addRunnable(Player.class, context -> {
        Int page = context.getOrNull("page");
        if (page == null) openPage(page) else openPage(1);
        return true; // always continue
    }
    .addIntegerArgument("page");
```

== Kotlin
```Kotlin
StellarCommand("info")
    .addRunnable<Player> {
        val page: Int? = getOrNull<Int>("page")
        if (page == null) openPage(page) else openPage(1) 
        true // always continue
    }
    .addIntegerArgument("page")
```

This command will open the first page (1) if no page is selected, otherwise just open the selected page.
:::

## Failure Executions

When a command fails, it will look for the last correctly typed argument that it can find, then run its failure executions.

Before adding any executions, first hide default Minecraft failure message as such:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(
        true, // whether to hide
        true // whether should also be applied for all subsequent arguments
    );
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(
        hide = true, // default
        global = true // whether should also be applied for all subsequent arguments, also default
    )
```
:::

Now you can add a simple execution by making use of the `addFailureExecution` method.

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(true, true)
    .addFailureExecution(context -> {
        String predictedCommand = // custom logic
        context.getSender().sendMessage(ChatColor.RED + "Incorrect command! Maybe you meant $predictedCommand?");
    });
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(hide = true, global = true)
    .addFailureExecution<CommandSender> {
        val predictedCommand: String = // custom logic
        sender.sendMessage("${ChatColor.RED}Incorrect command! Maybe you meant $predictedCommand?")
    }
```
:::

A better way of adding custom failure messages, if that's all you want, would be to use the `addFailureMessage` method:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(true, true)
    .addFailureMessages(""); // Accepts strings parsed by MiniMessage or components
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(hide = true, global = true)
    .addFailureMessages("") // Accepts strings parsed by MiniMessage or components
```
:::

You can also use the `addPlainFailureMessage` to add a string message **not** parsed by MiniMessage.

Lastly, if you want to add a failure message that will always run for the entire command, then use the `addGlobalFailureMessage` method:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(true, true)
    .addGlobalFailureMessages("Incorrect usage! Usage: /test arg")
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addArgument("arg")
    .hideDefaultFailureMessages(hide = true, global = true)
    .addGlobalFailureMessages("Incorrect usage! Usage: /test arg")
```
:::