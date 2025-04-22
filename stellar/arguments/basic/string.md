---
title: Literal Argument
description: The official docs for the Stellar Command API.
---

# String Argument {#string}

:::info
Is available from Minecraft Version: 1.13.
:::

The `StringArgument` is an argument that allows you to type a string, as allowed by its `StringType`, and returns that `String`:

Java examples:
::: code-group
```Java [Word]
new StellarCommand("server")
    .addStringArgument("string", StringType.WORD) // default
```
```Java [Quotable Phrase]
new StellarCommand("server")
    .addStringArgument("string", StringType.QUOTABLE_PHRASE)
```
```Java [Phrase]
new StellarCommand("server")
    .addStringArgument("string", StringType.PHRASE)
```
:::

Kotlin examples:
::: code-group
```Kotlin [Word]
StellarCommand("server")
    .addStringArgument("string", StringType.WORD) // default
```
```Kotlin [Quotable Phrase]
StellarCommand("server")
    .addStringArgument("string", StringType.QUOTABLE_PHRASE)
```
```Kotlin [Phrase]
StellarCommand("server")
    .addStringArgument("string", StringType.PHRASE)
```
:::

## Word

A `StringArgument` of type `StringType.WORD` means that you type anything in the English alphabet, including numbers, but nothing more. If this limits you, consider the next options.
![Word Argument](https://cdn.lutto.dev/stellar/gifs/basic/word.gif)

## Quotable Phrase

The `QUOTABLE_PHRASE` has the same limitation as `WORD`, but when it's in quotation marks (""), it becomes limitless.
![Word Argument](https://cdn.lutto.dev/stellar/gifs/basic/quotable_phrase.gif)

## Phrase

You can type anything you want using this, the only problem here is that **it's a phrase**, not a word. This means that you are not able to add any other arguments afterward. Thus, this argument should always be the last argument.

To be able to use a Phrase argument and handle each word independently, use the `PhraseArgument`. It contains a list of `WordArgument`, which you can customize:

```Kotlin
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

![Phrase Argument](https://cdn.lutto.dev/stellar/gifs/basic/phrase.gif)