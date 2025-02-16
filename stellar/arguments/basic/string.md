---
title: Literal Argument
description: The official docs for the Stellar Command API.
---

# String Argument {#string}

The String argument returns a `String` object, and you can customize what you can type by using the `StringType` object:

::: code-group
```kotlin [Word]
StellarCommand("server")
    .addStringArgument("string", StringType.WORD) // This is the default one.
```
```kotlin [Quotable Phrase]
StellarCommand("server")
    .addStringArgument("string", StringType.QUOTABLE_PHRASE)
```
```kotlin [Phrase]
StellarCommand("server")
    .addStringArgument("string", StringType.PHRASE)
```
:::

## Word

A `StringArgument` of type `WORD` means that you type any alphabet number, including numbers. If this limits you, consider the next options

## Quotable Phrase

The `QUOTABLE_PHRASE` has the same limitation as `WORD`, but when it's in quotation marks ("), it becomes limitless.

## Phrase

You can type anything you want using this, the only problem here is that **it's a phrase** not a word. This argument should always be the last argument.

To be able to use a Phrase argument and handle each word independently, use the `PhraseArgument`. It contains a list of `WordArgument`, which you can customize:

```kotlin
StellarCommand("server")
    .addPhraseArgument("args")
    .onWord(index = 0) { // Extension function of WordArgument
        addExecution<Player> { // extension function of PhraseCommandContext
            getArgument(0)
            this[0]
        }
    }
    .addWordSuggestions(index = 1, suggestions = "first, "second")
```