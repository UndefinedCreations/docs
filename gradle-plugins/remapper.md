---
title: Undefined Remapper
description: The official docs for Undefined Creations Gradle plugins.
---

# Undefined Remapper 

This gradle plugin is made to be able to remap any NMS project you are working on.

## Gradle Imports

[![](https://img.shields.io/gradle-plugin-portal/v/com.undefinedcreations.mapper)](https://plugins.gradle.org/plugin/com.undefinedcreations.mapper)

Add the plugin at the top of your Gradle build file.

::: code-group
```groovy [build.gradle]
plugins {
  id "com.undefinedcreations.mapper" version "VERSION"
}
```
```kts [build.gradle.kts]
plugins {
  id("com.undefinedcreations.mapper") version "VERSION"
}
```
:::

## Setup
The setup for the plugin is simple. You create a task and set the `minecraftVersion` to your Minecraft version. Example:

```kts
remap {
   minecraftVersion("1.21.4")
}
```

## Configuration

There are multiple configuration options you can modify.

### Input task

You are able to change the input task that it will remap to.

If no task selected it will check if a `shadowJar` task exists or not it will use `jar` task.
```kts
tasks {
    remap {
        minecraftVersion("1.21.4")
        inputTask(customTask)
    }
}
```

### Remap Option

You can also change the remap options. This is done with an enum called [`RemapTask.Action`](https://github.com/UndefinedCreations/UndefinedRemapper/blob/master/src/main/kotlin/com/undefinedcreation/remapper/RemapTask.kt#L92)

```kts
tasks {
   remap {
        minecraftVersion("1.21.4")
        action(RemapTask.Action.MOJANG_TO_SPIGOT) // default
   }
}
```

### Creating Separate Jar

This option is used if you want to create a separate jar for the remapped plugin.

```kts
tasks {
    remap {
        minecraftVersion("1.21.4")
        createNewJar(false) // default 
    }
}
```

[//]: # (## Multi Module)

[//]: # ()
[//]: # (To set up the remapper on a multi-module project you will need to add one thing to the `build.gradle` of the module.)

[//]: # ()
[//]: # (```kts)

[//]: # (tasks {)

[//]: # (    jar {)

[//]: # (        finalizedBy&#40;remap&#41;)

[//]: # (    })

[//]: # (})

[//]: # (```)

## Example projects

Here are some projects that use this plugin:
- [Stellar](/stellar) - [GitHub](https://github.com/UndefinedCreations/Stellar)