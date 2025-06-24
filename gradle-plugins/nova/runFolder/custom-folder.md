---
title: Nova Custom Folder
description: The official docs for the Echo Plugin.
---

# Custom Folder
We are able to change the folder where the server runs at. There are 3 different ways for setting this. 

The first and the most simple one is changing the folder name. We can do this by adding `serverFolderName("folderName")`. 
This will create the folder still inside you project with the given name. Below is an example.

:::tabs key:kotlin-java
:::tabs key:groovy-kotlin
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
:::

The second method will pass a [`FolderData`](https://github.com/UndefinedCreations/Nova/blob/5ca5564a064c0256e5d328b0c59e957e5cff87c8/plugin/nova/src/main/kotlin/com/undefinedcreations/nova/AbstractServer.kt#L141) and will ask for a `File` type. We can do this by doing `serverFolder { File(buildFolder, "folder") }`
See below for an example

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
:::tabs key:groovy-kotlin
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
:::

The last method is very similar to the second one but instead of asking for a `File` it wasn't a `String`
See below for an example

:::tabs key:kotlin-java
== Groovy DSL
```groovy 
runServer {
    minecraftVersion("1.21.4")
    serverFolderName { "$buildFolder/${serverType.name.lowercase()}-{${minecraftVersion}}" }
}
```
== Kotlin DSL
```kotlin
runServer {
    minecraftVersion("1.21.4")
    serverFolderName { "$buildFolder/${serverType.name.lowercase()}-{${minecraftVersion}}" }
}
```
:::