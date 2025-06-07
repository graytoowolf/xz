MMREvents.machines(event => {

    // const speed_modifier =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:speed")
    //         .input()
    //         .multiply()
    //         .modifier(0.5)
    // const energy_modifier =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:energy")
    //         .input()
    //         .multiply()
    //         .modifier(1.2)
    event.create("mmr:large_imprinter")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aamaa", "abbba", "abbba", "abbba", "aaaaa"],
                        ["cfffc", "deeed", "deeed", "deeed", "cdddc"],
                        ["cfffc", "ahhha", "ghhhg", "ahhha", "cagac"],
                        ["cklkc", "ijjji", "ijjji", "ijjji", "ciiic"],
                        ["aaaaa", "aiiia", "aigia", "aiiia", "aaaaa"]
                    ])
                .keys(
                    {
                        "a": ["ae2:fluix_block"],
                        "b": ["minecraft:smooth_stone"],
                        "c": ["modular_machinery_reborn:casing_reinforced"],
                        "d": ["modular_machinery_reborn:casing_vent"],
                        "e": ["minecraft:smooth_stone_slab[type=bottom,waterlogged=false]"],
                        "f": ["ae2:quartz_vibrant_glass"],
                        "g": ["modular_machinery_reborn:casing_circuitry"],
                        "h": ["minecraft:air"],
                        "i": [
                            "modular_machinery_reborn:casing_gearbox",
                            "#modular_machinery_reborn:energyinputhatch",
                            "#modular_machinery_reborn:itembus"
                        ],
                        "j": ["minecraft:piston[extended=false,facing=down]"],
                        "k": ["modular_machinery_reborn:dimensional_detector"],
                        "l": [
                            'modular_machinery_reborn:parallel_hatch_advanced',
                            'modular_machinery_reborn:parallel_hatch_ultimate',
                            'modular_machinery_reborn:parallel_hatch_max',
                            'modular_machinery_reborn:casing_circuitry'
                        ]
                    }
                )
        )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('oritech:machine_core_7')
    //         .position(-1, 0, 0)
    //         .addModifier(speed_modifier)
    //         .addModifier(energy_modifier)
    // )
    // .addModifier(
    //     MMRModifierReplacement.create()
    //         .ingredient('oritech:machine_core_7')
    //         .position(1, 0, 0)
    //         .addModifier(speed_modifier)
    //         .addModifier(energy_modifier)
    // )
})