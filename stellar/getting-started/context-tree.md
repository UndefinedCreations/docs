---
title: Understanding Command Context & Command Tree
description: The official docs for the Stellar Command API.
---

# Understanding Command Context & Command Tree {#context-tree}

## Command Context 

Whilst using most of the features that Stellar has to offer, you will encounter the `CommandContext` class _a lot_. So understanding it fully is essential to understanding this API.

The `CommandContext` class contains information to be used in method calls in run-time.

The first part of the context is the sender. The `sender` property has the type of whatever is specified in `CommandContext<T>`. This often comes from the generic type of the method it is being used on, such as `addExecution<T>` and `addRequirement<T>`. This must always be a subclass of `CommandSender`. 

The second part is a `HashMap` called `arguments` with the key being the argument name, and the value being its return value. You usually don't interact with this property directly, instead using one of the methods provided. For example, you can use `getArgument<Return Value Class>(index or name)` or `get(index or name)`/`context[index or namee]` to get an argument.

The last property is `input`, which returns the entire command input without the `/`.

## Command Tree

A command tree is a theoretical idea, yet important to fully understand. It refers to the hierarchical structure of commands and their arguments. Every command starts with a root command, then includes arguments. Here is an example of the /tp command:

```
/tp
│── <target> <destination>
│── <target> <x> <y> <z> [<yaw> <pitch>]
│── <target> <x> <y> <z> facing <x> <y> <z>
│── <target> <x> <y> <z> facing entity <entity> [eyes|feet]
```

In code, we can create a root command by instantiating `StellarCommand`, or using a utility method to delegate the instantiation. Then we can add arguments on top of it, and each time we do using an `addArgument` method, it returns that arguments itself. Here is a simple version of the /tp command example:

:::tabs key:kotlin-java
== Java
```Java
StellarCommand main = new StellarCommand("tp");
main.addEntityArgument("target", EntityDisplayType.ENTITY)
    .addLocationArgument("destination", LocationType.PRECISE_LOCATION_3D)
    .addExecution<Player>(Player.class, context -> { /* logic */ })
main.addEntityArgument("target", EntityDisplayType.ENTITY)
    .addLocationArgument("destination", LocationType.PRECISE_LOCATION_3D)
    .addEntityAnchorArgument("anchor")
    .addExecution<Player>(Player.class, context -> { /* logic */ })
main.register(this)
```
== Kotlin
```Kotlin
val main = StellarCommand("tp")
main.addEntityArgument("target", EntityDisplayType.ENTITY)
    .addLocationArgument("destination", LocationType.PRECISE_LOCATION_3D)
    .addExecution<Player> { /* logic */ }
main.addEntityArgument("target", EntityDisplayType.ENTITY)
    .addLocationArgument("destination", LocationType.PRECISE_LOCATION_3D)
    .addEntityAnchorArgument("anchor")
    .addExecution<Player> { /* logic */ }
main.register(this)
```
:::