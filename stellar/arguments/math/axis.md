---
title: Axis Argument
description: The official docs for the Stellar Command API.
---

# Axis Argument

Any non-repeating combination of the characters 'x', 'y', and 'z'. Returns `EnumSet<Axis>`. Example:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("test")
    .addAxisArgument("axis")
    .addExecution(Player.class, context -> {
        EnumSet<Axis> axes = getArgument<EnumSet<Axis>>("axis");
        List<String> stringifiedAxes = axes.stream().map(Axis::getName()).collect(Collectors.toList());
        String message = String.join(", ", stringifiedAxes);
        context.getSender().sendMessage(message);
    });
```
== Kotlin
```Kotlin
StellarCommand("test")
    .addAxisArgument(name = "axis")
    .addExecution<Player> {
        val axes = getArgument<EnumSet<Axis>>("axis")
        sender.sendMessage(axes.joinToString(", ") { it.name })
    }
```
:::

![Axis Argument](https://cdn.lutto.dev/stellar/gifs/math/axis.gif)