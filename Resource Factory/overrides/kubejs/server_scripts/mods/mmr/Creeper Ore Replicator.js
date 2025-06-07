MMREvents.machines(event => {
    // const output_item_1 =
    //     MMRRecipeModifier.create()
    //         .target('modular_machinery_reborn:item')
    //         .output()
    //         .multiply()
    //         .modifier(1.5)
    // const output_item_2 =
    //     MMRRecipeModifier.create()
    //         .target('modular_machinery_reborn:item')
    //         .output()
    //         .multiply()
    //         .modifier(2)
    // const output_item_3 =
    //     MMRRecipeModifier.create()
    //         .target('modular_machinery_reborn:item')
    //         .output()
    //         .multiply()
    //         .modifier(3)
    // const speed_modifier =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:speed")
    //         .input()
    //         .multiply()
    //         .modifier(0.5)
    // const energy_modifier_1 =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:energy")
    //         .input()
    //         .multiply()
    //         .modifier(1.2)
    // const energy_modifier_2 =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:energy")
    //         .input()
    //         .multiply()
    //         .modifier(2)
    // const energy_modifier_3 =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:energy")
    //         .input()
    //         .multiply()
    //         .modifier(3)
    // const energy_modifier_4 =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:energy")
    //         .input()
    //         .multiply()
    //         .modifier(4)

    event.create("mmr:creeper_ore_replicator")
        .color('#ff23e195')
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["ama", "bcb", "aea"],
                        ["ada", "d d", "ada"],
                        ["ada", "d d", "ada"],
                        ["aga", "afa", "aaa"],
                        ["   ", " h ", "   "]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_reinforced"],
                        "b": [
                            "modular_machinery_reborn:casing_circuitry",
                            "#modular_machinery_reborn:itembus"
                        ],
                        "c": ["extendedcrafting:nether_star_block"],
                        "e": [
                            "modular_machinery_reborn:casing_circuitry",
                            'modular_machinery_reborn:parallel_hatch_advanced',
                            'modular_machinery_reborn:parallel_hatch_ultimate',
                            'modular_machinery_reborn:parallel_hatch_max',
                        ],
                        "d": ["ae2:quartz_vibrant_glass"],
                        "f": ["mekanism:laser[facing=down]"],
                        "g": ["chipped:creeper_purpur_block_carving"],
                        "h": ["#modular_machinery_reborn:energyinputhatch"]
                    }
                )
        )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('replication:replica_block')
    //         .position(0, 0, 1)
    //         .addModifier(output_item_1)
    //         .addModifier(energy_modifier_2)
    // )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('ifeu:dragon_star_block')
    //         .position(0, 0, 1)
    //         .addModifier(output_item_2)
    //         .addModifier(energy_modifier_3)
    // )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('mysticalagriculture:awakened_supremium_gemstone_block')
    //         .position(0, 0, 1)
    //         .addModifier(output_item_3)
    //         .addModifier(energy_modifier_4)
    // )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('oritechthings:addon_block_speed_tier_9')
    //         .position(1, 0, -1)
    //         .addModifier(speed_modifier)
    //         .addModifier(energy_modifier_1)
    // )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('oritechthings:addon_block_speed_tier_9')
    //         .position(-1, 0, -1)
    //         .addModifier(speed_modifier)
    //         .addModifier(energy_modifier_1)
    // )
})