---
title: GTA Teleportation
description: The official docs for the Akari API.
---

# GTA Teleportation

In this example we will be creating a simple teleportation command, similar to the one in GTA.

We will also be using the [Stellar](https://docs.undefinedcreations.com/stellar/usage/command-registration) API to create this command. <br>
You are not required to use Stellar, but it is highly recommended.


::: tabs key:kotlin-java
== Java
```Java
    public class Main extends JavaPlugin {

    @Override
    public void onEnable() {
        StellarCommand gta = new StellarCommand("tpgta")
            .addAlias("gta")
            .setDescription("Test command")
            .addLocationArgument("location", LocationType.LOCATION_3D)
            .addExecution(Player.class, (sender, args) -> {
                Location location = args.get("location");
                double height = location.getY() + 100;

                CameraSequence sequence = new CameraSequence(sender.getWorld())
                    .setEndingPoint(location.toCameraPoint())
                    .addCameraPath(
                        new CameraPath()
                            .addCamaraPoint(sender.eyeLocation.toCameraPoint(),0)
                            .addCamaraPoint(sender.eyeLocation.toCameraPoint().setPosition(Vector(sender.eyeLocation.x, height, sender.eyeLocation.z)).setPitch(90f),60)
                            .addCamaraPoint(location.toCameraPoint().setPosition(location.x, height, location.z).setPitch(90f),60)
                            .addCamaraPoint(location.toCameraPoint(), 60)
                            .calculatePoints()
                    )
                    .play(sender);
                });

        gta.register();
    }
}
```
== Kotlin
```Kotlin
class Main : JavaPlugin() {
    override fun onEnable() {
        val gta = StellarCommand("tpgta")
            .addAlias("gta")
            .setDescription("Test command")
            .addLocationArgument("location",LocationType.LOCATION_3D)
            .addExecution<Player> {
                val location: Location by args
                val height: Double = location.y + 100
                CameraSequence(sender.world)
                    .setEndingPoint(location.toCameraPoint())
                    .addCameraPath(
                        CameraPath()
                            .addCamaraPoint(sender.eyeLocation.toCameraPoint(),0)
                            .addCamaraPoint(sender.eyeLocation.toCameraPoint().setPosition(Vector(sender.eyeLocation.x, height, sender.eyeLocation.z)).setPitch(90f),60)
                            .addCamaraPoint(location.toCameraPoint().setPosition(location.x, height, location.z).setPitch(90f),60)
                            .addCamaraPoint(location.toCameraPoint(), 60)
                            .calculatePoints()
                    )
                    .play(sender)
            }
        gta.register()
    }
}
```
:::