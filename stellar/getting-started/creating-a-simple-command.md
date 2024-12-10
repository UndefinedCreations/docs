---
title: Creating a Simple Command
description: The official docs for the Stellar Command API.
---

# Creating a Simple Command {#creating-a-simple-command}

To create a simple command, we first need to initialize the base command:

```kt
StellarCommand("test")
```

Then you can add aliases in two ways. The first way is by using the `addAlias` method:

```kt
StellarCommand("test")
    .addAliases("alias", "otheralias")
```

Or by adding it in the constructor:

```kt
StellarCommand("test", "alias", "otheralias")
```