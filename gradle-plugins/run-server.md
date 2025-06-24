---
title: Nova
description: The official docs for Nova Gradle plugins.
---

# Nova

Nova is a powerful gradle plugin that enables you to run any minecraft jar inside your IDE.

## Gradle Imports

[![](https://img.shields.io/gradle-plugin-portal/v/com.undefinedcreations.nova)](https://plugins.gradle.org/plugin/com.undefinedcreations.nova)

Add the plugin at the top of your Gradle build file.

::: code-group
```groovy [build.gradle]
plugins {
  id "com.undefinedcreations.nova" version "VERSION"
}
```
```kts [build.gradle.kts]
plugins {
  id("com.undefinedcreations.nova") version "VERSION"
}
```
:::

## Setup
Setting up this gradle plugin you will be modifying a task called `runServer`.

The first thing you will need to set is the `minecraftVersion`. This will be the server version it will be running.

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
    }
}
```

If you are using `Echo` you won't need to set this anymore. It will check echo for what version of BuildTools it is using and choose that version

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

If no server type is chosen it will automatically choose `Spigot`

```kts
tasks {
    runServer {
        serverType(ServerType.SPIGOT)
    }
}
```

### Auto accept eula
One of the most annoying part of create test server is accepting the mojang eula. That was why we made an option to automatically accept this.

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        acceptMojangEula()
    }
}
```

### Allowed Ram
You are able to change the amount of ram that the server can use with `allowedRam()`. This is using the enum called [`RamAmount`](https://github.com/UndefinedCreations/UndefinedRunServer/blob/master/src/main/kotlin/com/undefinedcreation/runServer/RamAmount.kt#L3)

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        allowedRam(4, RamAmount.GIGABYTE) // default : 2 GIGABYTES
    }
}
```

### GUI
Some jars will open a gui on start. This will be disabled by default but you are able to toggle this on again.

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        noGui(false) // default : true
    }
}
```

### Plugins
You are able to autoload plugins into the server at start up

#### Online
You are able to use `spigotmc.org`, `hangar.papermc.io` and `modrinth.com` links to be able to download plugins automatically onto the server before start. If you want it to re-download every time you can add overwrite

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        plugins(
            "https://www.spigotmc.org/resources/plugin-portal.108700/",
            "https://hangar.papermc.io/Flyte/PluginPortal",
            "https://modrinth.com/plugin/simple-voice-chat"
        )
    }
}
```

#### Local
You will also be able to copy local plugins into the server with `filePlugin`. You can also select if it should overwrite the old one.

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        filePlugins(
            listOf(
                File("C:\\Users\\Undefined\\IdeaProjects\\DifferntProject\\build\\libs\\Custom-plugin.jar")
                ), 
            overwrite = true
        )
    }
}
```

### Server Folder
You can set the folder were the server will run using `serverFolder`.

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        serverFolder {
            File("$buildFolder/${serverType.name}-$minecraftVersion")
        }
    }
}
```

You can also use `serverFolderName` that needs a string inside a file. It will automatically add the folder into build folder then.

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        serverFolderName {
            "$${serverType.name}-$minecraftVersion"
        }
    }
}
```

### Input Task
You are able to select what task it will build with `inputTask`

If no task is selected it will first check if there is a [`remap`]("https://github.com/UndefinedCreations/UndefinedRemapper") task, if that task was not found it will use `shadowJar` lastly it will be using `jar` task
```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
        inputTask(customTask) 
    }
}
```

### Per version folder
This option will create a new server folder for every minecraft version you will run

```kts
tasks {
    runServer {
        minecraftVersion("1.21.4")
        
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
        minecraftVersion("1.21.4")
        
        customJar("C:\Users\UndefinedAdmin\Documents\CoolJar.jar", alwaysReplace = true)
    }
}
```

The `alwaysReplace` option will be replacing the jar every time you start the server.
