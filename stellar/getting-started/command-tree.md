---
title: Command Tree
description: The official docs for the Stellar Command API.
---

# Command Tree

A command tree is a theoretical idea, yet important to fully understand. It refers to the hierarchical structure of commands and their arguments. Every command starts with a root command, then includes arguments. Here is an example of the /tp command:

```
/tp
│── <target> <destination>
│── <target> <x> <y> <z> [<yaw> <pitch>]
│── <target> <x> <y> <z> facing <x> <y> <z>
│── <target> <x> <y> <z> facing entity <entity> [eyes|feet]
```

In code, we can create a root command by instantiating `StellarCommand`, or using a utility method to delegate the instantiation. Then we can add arguments on top of it, and each time we do using an `addArgument` method, it returns that arguments itself. Here is an simple version of the /tp command example:

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