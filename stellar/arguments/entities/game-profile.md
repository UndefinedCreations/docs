---
title: Game Profile Argument
description: The official docs for the Stellar Command API.
---

# Game Profile Argument {#game-profile}

The `GameProfileArgument` is a target selector, such as `EntityArgument` and returns `GameProfile`. Stellar doesn't import the Mojang authlib library for you, which includes `GameProfile`, so if you wish to use it, make sure to import Mojang authlib. Only use this argument if you already know what `GameProfile` is, as you obviously shouldn't be using this argument if you don't.