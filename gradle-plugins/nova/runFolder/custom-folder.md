---
title: Nova Custom Folder
description: The official docs for the Echo Plugin.
---

# Custom Folder
We are able to change the folder where the server runs at. There are 3 different ways for setting this. 

The first and the most simple one is changing the folder name. We can do this by adding `serverFolderName("folderName")`. 
This will create the folder still inside you project with the given name. Below is an example.

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
:::

The second method will pass a [`FolderData`](https://github.com/UndefinedCreations/Nova/blob/5ca5564a064c0256e5d328b0c59e957e5cff87c8/plugin/nova/src/main/kotlin/com/undefinedcreations/nova/AbstractServer.kt#L141) and will ask for a `File` type. We can do this by doing `serverFolder { File(buildFolder, "folder") }`
See below for an example

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
:::

The last method is very similar to the second one but instead of asking for a `File` it wasn't a `String`
See below for a, example

::: code-group
```groovy [Groovy DSL]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName { "$buildFolder/${serverType.name.lowercase()}-{${minecraftVersion}}" }
}
```
```kotlin [Kotlin DSL]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName { "$buildFolder/${serverType.name.lowercase()}-{${minecraftVersion}}" }
}
```
:::