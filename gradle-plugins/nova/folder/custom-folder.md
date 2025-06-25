---
title: Nova Custom Folder
description: The official docs for the Nova Gradle Plugin.
---

# Custom Folder

You can change the run folder in three ways.

## Modifying the name

The first and the most simple one is simply changing the folder name. You can do this by using the `serverFolderName` method. This will use a folder inside the main project path with that name.

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
``` Kotlin [Consumer]
runServer {
    minecraftVersion("1.21.4")
    serverFolderName("folderName")
}
```
:::

## Modifying the entire path

You can also modify the entire file path its going to use. You can do this by using the `serverFolder` method. This method allows you 

> [!IMPORTANT]
> TBD, another `serverFolder` method should be added to allow for the passing of a `File` without using a function type

::: tabs key:groovy-kotlin
:::
``` Groovy [Parameter]
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
``` Kotlin
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
== Consumer
:::
``` Groovy
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
``` Kotlin
runServer {
    minecraftVersion("1.21.4")
    serverFolder { File(buildFolder, "${serverType.name.lowercase()}-{${minecraftVersion}}") }
}
```
:::

The last method is very similar to the second one but instead of asking for a `File` it wasn't a `String`
See below for an example

::: tabs key:groovy-kotlin
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