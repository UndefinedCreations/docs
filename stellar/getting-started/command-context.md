---
title: Understanding Command Context
description: The official docs for the Stellar Command API.
---

# Understanding Command Context {#understanding-command-context}

Whilst using most of the features that Stellar has to offer, you will encounter the `CommandContext` class _a lot_. So understanding it fully is essential to understanding this API.

## Basics

The `CommandContext` class contains information to be used in method calls in run-time.

The first part of the context is the sender. The `sender` property has the type of whatever is specified in `CommandContext<T>`. This often comes from the generic type of the method it is being used on, such as `addExecution<T>` and `addRequirement<T>`. This must always be a subclass of `CommandSender`. 

The second part is a `HashMap` called `arguments` with the key being the argument name, and the value being its return value. You usually don't interact with this property directly, instead using one of the methods provided. For example, you can use `getArgument<Return Value Class>(index or name)` or `get(index or name)`/`context[index or namee]` to get an argument.

The third and last property is `input`, which returns the entire command input without the `/`.