_---
title: Undefined Run Server
description: The official docs for Undefined Creations Gradle plugins.
---

# Undefined RunServer {#run-server}

This gradle plugin is made to be able to run any sort of server jar inside your intellij.

## Gradle Imports

[![](https://img.shields.io/gradle-plugin-portal/v/com.undefinedcreation.runServer)](https://plugins.gradle.org/plugin/com.undefinedcreation.runServer)

Firstly add the plugin in your Gradle build file.

::: code-group
```groovy [build.gradle]
plugins {
  id "com.undefinedcreation.runServer" version "VERSION"
}
```
```kts [build.gradle.kts]
plugins {
  id("com.undefinedcreation.runServer") version "VERSION"
}
```
:::

## Setup

To set up the plugin, you will have to modify a task called `runServer`.

The first thing you will need to set is the `mcVersion`. This will be the Minecraft version it will be running.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
    }
}
```

## Configuration

### Server Type

The [`ServerType`](https://github.com/UndefinedCreations/UndefinedRunServer/blob/master/src/main/kotlin/com/undefinedcreation/runServer/ServerType.kt) is a enum with all the possible jars the task is able to use. 
They are
[`SPIGOT`](https://www.spigotmc.org/), 
[`PAPERMC`](https://github.com/PaperMC/Paper), 
[`PUFFERFISH`](https://github.com/pufferfish-gg/Pufferfish), 
[`PURPUR`](https://github.com/PurpurMC/Purpur), 
[`BUNGEECORD`](https://github.com/SpigotMC/BungeeCord), 
[`WATERFALL`](https://github.com/PaperMC/Waterfall), 
[`VELOCITY`](https://github.com/PaperMC/Velocity) and
[`FOLIA`](https://github.com/PaperMC/Folia).

### Auto accept eula

If you create a lot of servers, it can be quite annoying accepting the Mojang EULA. That was why we made an option to automatically accept this for you.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        acceptMojangEula(true) // default: false
    }
}
```

### Allowed Ram

You are able to modify the amount of RAM that the server can use with `allowedRam` method.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        allowedRam("4G") // default: 2G
    }
}
```

### GUI

Some jars will open a GUI on start. This will be disabled by default, but you can modify it using the `noGui` method.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        noGui(false) // default: true
    }
}
```

### Plugins

You are able to use `spigotmc.org`, `hangar.papermc.io` and `modrinth.com` links to download plugins automatically onto the server before start.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        plugins(
            "https://www.spigotmc.org/resources/plugin-portal.108700/",
            "https://hangar.papermc.io/Flyte/PluginPortal",
            "https://modrinth.com/plugin/simple-voice-chat"
        )
    }
}
```

### Custom Jars

Using this plugin you are also able to use custom jars. To use them you need to give the `path` to the jar.

:::warning
Using custom jars might break the plugin downloader and the mcVersion will have 0 effect on the minecraft version the server is running.
:::

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        customJar("C:\Users\UndefinedAdmin\Documents\CoolJar.jar", alwaysReplace = true)
    }
}
```

The `alwaysReplace` option will be replacing the jar every time you start the server.
