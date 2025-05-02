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

The second