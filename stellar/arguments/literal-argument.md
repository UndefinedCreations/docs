---
title: Literal Argument
description: The official docs for the Stellar Command API.
---

# Literal Argument {#literal-argument}

A literal argument is an argument that represents an option you can choose from. They have suggestion, and if the player ends up _not_ choosing any arguments, then nothing will happen.

Here is how to create a literal argument:

::: code-group
```kt [Short]
StellarCommand("server")
    .addArgument(name = "reset")
```
```kt [Long]
StellarCommand("server")
    .addLiteralArgument(name = "reset")
```
::: code-group