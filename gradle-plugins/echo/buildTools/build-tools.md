---
title: Build Tools
description: The official docs for the Echo Plugin.
---

# BuildTools Setup {#build-tools}
We will start to explore one of the most powerful tools inside of echo. This tool is the `BuildTools` builder. 

If you don't know `BuildTools` is a tool created by the spigot team to build a server jar, you can read more about this [Here](https://www.spigotmc.org/wiki/buildtools/).

We have made this presses automatic for you inside your ide. You will never have to download and build `BuildTools` your self anymore.

How we go about doing this is by adding `echo("minecraftVersion")` in the dependencies tab. You need to replace `minecraftVersion` with the minecraft version you want to build.

::: warning
This only works for kotlin gradle
:::

Here you can see an example for version `1.12.4`
```kotlin
echo("1.21.4")
```

Then when we reload gradle it will start to download and build `BuildTools`. This might take a while depending on the system. When done it will import `BuildTools` into the project.

For more info about `BuildTools` check the over pages.