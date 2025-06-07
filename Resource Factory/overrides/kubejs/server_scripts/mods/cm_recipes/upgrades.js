CustomMachineryEvents.upgrades(event => {
    const machine = [
        "minecraft:compressor",
        "minecraft:resource_converter",
        "minecraft:structural_casting_unit",
        "minecraft:essence_processor",
        "minecraft:planting_station"
    ]
    event.create('kubejs:swift_shard_upgrade', 8)
        .machine(machine)
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:energy", 1.3).chance(0.75).min(1))
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.9).chance(0.75).min(1))
    event.create('kubejs:swift_core_upgrade', 8)
        .machine(machine)
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:energy", 1.2).min(1))
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.7).min(1))
    event.create('kubejs:synergy_core_upgrade', 8)
        .machine(machine)
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:energy", 1.5).min(1))
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.5).min(1))
        .modifier(CMRecipeModifierBuilder.addOutput("custommachinery:item", 1))
    event.create('kubejs:overload_core_upgrade', 8)
        .machine(machine)
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:energy", 1.5).min(1))
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.3).min(1))
        .modifier(CMRecipeModifierBuilder.mulOutput("custommachinery:item", 2))
        .modifier(CMRecipeModifierBuilder.mulOutput("custommachinery:fluid", 2))
})