---
title: Custom Suggestions
description: The official docs for the Stellar Command API.
---

# Custom Suggestions {#custom-suggestion}

You can easily override tab completions/command suggestions tha arguments have.

## Basic Usage

Suggestions use the `Suggestion` class, which have a title and a tooltip. You can override suggestions by using the `addSuggestion` method on arguments:

```kotlin
StellarCommand("test")
    .addStringArgument("string")
    .addSuggestions(
        Suggestion(title = "string", description = "description")
    ) // or addSuggestion(title, description)
```

Or with an execution that returns a list of Suggestion:

```kotlin
StellarCommand("test")
    .addStringArgument("string")
    .addSuggestion<Player> {
        listOf(Suggestion("title", "decription"))
    }
```