---
title: Comparison to similar APIs
description: The official docs for the Stellar Command API.
---

# Comparison to similar APIs {#comparisons}

|            API             |   Stellar   | CommandAPI  |     Lamp     | LiteCommands |
|:--------------------------:|:-----------:|:-----------:|:------------:|:------------:|
|     Supports Brigadier     |      ✅      |      ✅      |      🟠      |      ❌       |
|      Version Support       | 1.13-Latest | 1.13-Latest | 1.13-Latest* | 1.8.8-Latest |
|     Annotation/Builder     |   Builder   |    Both*    |  Annotation  |  Annotation  |
|     Failure Executions     |      ✅      |      ❌      |      ❌       |      🟠      |
|     Custom Suggestions     |      ✅      |      ✅      |      🟠      |      🟠      |
|    Custom Requirements     |      ✅      |      ✅      |      ✅       |      🟠      |
| Unrestricted Word Argument |      ✅      |      ❌      |      ❌       |      ❌       |
|      Cooldown System       |      ✅      |      ❌      |      ✅       |      ✅       |
|   Command Unregistration   |      ✅      |      ✅      |      ❌       |      ❌       |

Kotlin Code Comparisons:

:::code-group
```Kotlin [Stellar]
class Main : JavaPlugin() {
    override fun onEnable() {
        unregisterCommand("ban")

        StellarCommand("ban")
            .addRequirement("undefined.command.ban")
            .addOnlinePlayersArgument("target")
            .addTimeArgument("duration", 1)
            .addStringArgument("reason", StringType.PHRASE)
            .addExecution<Player> {
                val target: Player by args
                val duration: Int by args
                val reason: String by args

                target.ban<BanEntry<PlayerProfile>>(reason, Duration.ofSeconds((duration / 20).toLong()), sender.name, true)
            }
            .register(this)
    }
}
```
```Kotlin [Lamp]
@Command(name = "custom-ban") // different name as you cannot unregister commands
class BanCommand {

    @Permission("undefined.command.ban")
    fun ban(@Context player: Player, @Arg target: Player, @Arg duration: Duration, @Arg reason: String) {
        target.ban<BanEntry<PlayerProfile>>(reason, duration, player.name, true)
    }

}
```
:::