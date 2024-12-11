---
title: Understanding Command Context
description: The official docs for the Stellar Command API.
---

# Understanding Command Context {#understanding-command-context}

Whilst using most of the features that Stellar has to offer, you will encounter the `CommandContext` class _a lot_. So understanding it fully is essential to understanding this API.

## Basics

The `CommandContext` class contains information to be used in method calls in run-time.

The first part of the context is the sender. The `sender` property has the type of whatever you is specified in the `CommandContext<T>` generic type. This often comes from the generic type of the method it is being used on, such as `addExeuction<T>` and `addRequirement<T>`. This must always be a sub class of `CommandSender`, `sender` is the sender of the command casted into whatever you want it to be. 

The second part is a HashMap of arguments of with the key being the argument name, and the value being its return value. You usually don't interact with this property directly, instead using one of the methods provided. You can use `getArgument<Return Value Class>(index or name)` or `get(index or name)`/`context[index or namee]`.

The third and last property is `input`, which returns the entire command input without the `/`.