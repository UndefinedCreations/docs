---
title: Particle Argument
description: The official docs for the Stellar Command API.
---

# Particle Argument

Returns `ParticleData`, containing the particle itself and its data. The syntax is very simply just: `particle_type_id{configuration tags}`. Example:

```Kotlin
StellarCommand("spawn-particle")
    .addParticleArgument(name = "particle")
    .addExecution<Player> {
        val data = getArgument<ParticleData<*>>("particle")
        sender.spawnParticle(
            data.particle,
            sender.eyeLocation,
            10,
            data.options
        )
    }
```

![Particle Argument](https://cdn.lutto.dev/stellar/gifs/world/particle.gif)