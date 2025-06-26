---
title: Nova Custom Folder
description: The official docs for the Nova Gradle Plugin.
---

# Custom Folder

## Modifying the name

The first and the most simple one is simply changing the folder name. You can do this by using the `serverFolderName` method. This will use a folder inside the main project path with that name.

There are two `serverFolderName` methods: one provides a consumer with [`FolderData`](https://github.com/UndefinedCreations/Nova/blob/5ca5564a064c0256e5d328b0c59e957e5cff87c8/plugin/nova/src/main/kotlin/com/undefinedcreations/nova/AbstractServer.kt#L141), and one just takes in the folder name:

::: tabs key:groovy-kotlin
== Groovy DSL
::: code-group
``` Groovy [Parameter]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
``` Groovy [Consumer]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName { "folderName" }
}
```
== Kotlin DSL
::: code-group
``` Kotlin [Parameter]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
``` Kotlin [Consumer]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName { "folderName" }
}
```
:::

## Modifying the entire path

You can also modify the entire file path it's going to use. You can do this by using the `serverFolder` method.

::: tabs key:groovy-kotlin
== Groovy DSL
::: code-group
``` Groovy [Parameter]
runServer {
    minecraftVersion("1.21.4")
    serverFolder(File("serverFolder"))
}
```
``` Groovy [Consumer]
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
== Kotlin DSL
::: code-group
``` Kotlin [Parameter]
runServer {
    minecraftVersion("1.21.4")
    serverFolder(File("serverFolder"))
}
```
``` Kotlin [Consumer]
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
:::