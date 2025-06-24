---
title: Time Argument
description: The official docs for the Stellar Command API.
---

# Time Argument

Must be a long suffixed with a unit if wanted (1s, 1d or 1t), which returns a `Long` in ticks. Example:

:::tabs key:kotlin-java
== Java
```Java
new StellarCommand("set-time")
    .addTimeArgument("time")
    .addExecution<Player>(Player.class, context -> {
        long time = (long) getArgument("time");
        context.getSender.getWorld().setTime(time);
    });
```
== Kotlin
```Kotlin
StellarCommand("set-time")
    .addTimeArgument("time")
    .addExecution<Player> {
        val time = getArgument<Long>("time")
        sender.world.time = time
    }
```
:::

![Time Argument](https://cdn.lutto.dev/stellar/gifs/math/time.gif)