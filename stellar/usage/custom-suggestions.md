---
title: Custom Suggestions
description: The official docs for the Stellar Command API.
---

# Custom Suggestions {#custom-suggestion}

You can easily override tab completions/command suggestions the arguments have.

## Basic Usage

Suggestions use the `Suggestion` data class, which have a title and a tooltip. You can override suggestions by using the `addSuggestion` method on arguments:

```Kotlin
StellarCommand("test")
    .addStringArgument("string")
    .addSuggestions(
        Suggestion(title = "string", description = "description")
    ) // or addSuggestion(title, description) to add a single suggestion
```

Or with an execution that returns a list of Suggestion:

```Kotlin
StellarCommand("test")
    .addStringArgument("string")
    .addSuggestion<Player> {
        listOf(Suggestion("title", "decription"))
    }
```

Additionally, you can create an empty suggestion with `Suggestion.empty()`, which creates a `Suggestion` with an empty title and a null description. Any suggestions with blank (no text) titles will not be included, and any null descriptions will just not render.