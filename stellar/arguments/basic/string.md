---
title: Literal Argument
description: The official docs for the Stellar Command API.
---

# String Argument {#string}

The `StringArgument` is an argument that allows you to type a string, as allowed by its `StringType`, and returns that `String`:

::: tabs key:kotlin-java
== Java
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

== Kotlin
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

## Alphanumeric Word

A `StringArgument` of type `StringType.ALPHANUMERIC_WORD` means that you type anything in the English alphabet, including numbers, but nothing more. If this limits you, consider the next options.

<ArgumentParser placeholder="abcd1234" regex="^[a-z,A-Z,0-9]*$" />

![Alphanumeric Word Argument](https://cdn.lutto.dev/stellar/gifs/basic/alphanumeric_word.gif)

## Word

A `StringArgument` of type `StringType.WORD` is a word that does not have any restrictions.

<ArgumentParser placeholder="abcd1234!@#$%" regex="^\S*$" />

![Word Argument](https://cdn.lutto.dev/stellar/gifs/basic/word.gif)

## Quotable Phrase

The `QUOTABLE_PHRASE` has the same limitation as `ALPHANUMERIC_WORD`, but when in quotations (""), it becomes limitless.

<ArgumentParser placeholder='"abcd1234!@#\$%"' regex='^(".*"|[a-z,A-Z,0-9]*)$' />

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

<ArgumentParser placeholder="You can write anything you want here!" regex="^.*$" />

![Phrase Argument](https://cdn.lutto.dev/stellar/gifs/basic/phrase.gif)