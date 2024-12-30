---
title: Undefined RunServer
description: The official docs for Undefined Creations Gradle plugins.
---

# Undefined RunServer {#run-server}

This gradle plugin is made to be able to run any sort of server jar inside your intellij.

## Gradle Imports

[![](https://img.shields.io/gradle-plugin-portal/v/com.undefinedcreation.runServer)](https://plugins.gradle.org/plugin/com.undefinedcreation.runServer)

Add the plugin at the top of your Gradle build file.

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
Setting up this gradle plugin you will be modifying a task called `runServer`.

The first thing you will need to set is the `mcVersion`. This will be the server version it will be running.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
    }
}
```

## Configuration

There are a bunch of configuration that can be done with this plugin.

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
[`FOLIA`](https://github.com/PaperMC/Folia)

### Auto accept eula
One of the most annoying part of create test server is accepting the mojang eula. That was why we made an option to automatically accept this.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        
        acceptMojangEula(true) // default : false
    }
}
```

### Allowed Ram
You are able to change the amount of ram that the server can use with `allowedRam()`. This is using the enum called [`RamAmount`](https://github.com/UndefinedCreations/UndefinedRunServer/blob/master/src/main/kotlin/com/undefinedcreation/runServer/RamAmount.kt#L3)

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        
        allowedRam(4, RamAmount.GIGABYTE) // default : 2 GIGABYTES
    }
}
```

### GUI
Some jars will open a gui on start. This will be disabled by default but you are able to toggle this on again.

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        
        noGui(false) // default : true
    }
}
```

### Plugins
You are able to use `spigotmc.org`, `hangar.papermc.io` and `modrinth.com` links to be able to download plugins automatically onto the server before start.

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

### Per version folder
This option will create a new server folder for every minecraft version you will run

```kts
tasks {
    runServer {
        mcVersion("1.21.4")
        
        perVersionFolder(true) // default : false
    }
}
```

### Custom Jars
Using this plugin you are also able to use custom jars. To use them you need to give the `path` to the jar.

:::warning
Note: Using custom jars might break the plugins downloader and the mcVersion will have 0 effect on the minecraft version the server is running.
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
