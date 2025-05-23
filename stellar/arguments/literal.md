---
title: Literal Argument
description: The official docs for the Stellar Command API.
---

# Literal Argument {#literal}

A literal argument is an argument that represents an option you can choose from. They have suggestion, and if the player ends up _not_ choosing any arguments, then nothing will happen.
Examples:

::: tabs key:kotlin-java
== Java
::: code-group
```Java [Short]
new StellarCommand("server")
    .addArgument("reset")
```
```Java [Long]
new StellarCommand("server")
    .addLiteralArgument("reset")
```

== Kotlin
::: code-group
```Kotlin [Short]
StellarCommand("server")
    .addArgument(name = "reset")
```
```Kotlin [Long]
StellarCommand("server")
    .addLiteralArgument(name = "reset")
```
:::

![Literal Argument](https://cdn.lutto.dev/stellar/gifs/literal_argument.gif)