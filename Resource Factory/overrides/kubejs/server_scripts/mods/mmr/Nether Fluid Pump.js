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
    // const energy2_modifier =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:energy")
    //         .input()
    //         .multiply()
    //         .modifier(2)
    // const fluid_modifier =
    //     MMRRecipeModifier.create()
    //         .target("modular_machinery_reborn:fluid")
    //         .output()
    //         .multiply()
    //         .modifier(2)

    event.create("mmr:nether_fluid_pump")
        .color('#ffa52a2a')
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["     ", "     ", "  c  ", "     ", "     "],
                        ["d   d", "     ", "  e  ", "     ", "d   d"],
                        ["d   d", "     ", "  e  ", "     ", "d   d"],
                        ["dgmgd", "d   d", "d e d", "d   d", "ddfdd"],
                        ["d h d", "     ", "  e  ", "     ", "d   d"],
                        ["diiid", "i   i", "i e i", "i   i", "diiid"],
                        ["d   d", "     ", "  e  ", "     ", "d   d"],
                        ["ddddd", "djjjd", "djkjd", "djjjd", "ddddd"],
                        ["d   d", "     ", "     ", "     ", "d   d"],
                        ["     ", "     ", "  n  ", "     ", "     "]
                    ]
                )
                .keys(
                    {
                        "c": ["justdirethings:gooblock_tier4[alive=false]"],
                        "d": ["modular_machinery_reborn:casing_reinforced"],
                        "e": ["immersiveengineering:fluid_pipe[waterlogged=false]"],
                        "f": ["modular_machinery_reborn:dimensional_detector"],
                        "g": ["modular_machinery_reborn:casing_circuitry"],
                        "h": [
                            'modular_machinery_reborn:parallel_hatch_advanced',
                            'modular_machinery_reborn:parallel_hatch_ultimate',
                            'modular_machinery_reborn:parallel_hatch_max',
                            "minecraft:air"
                        ],
                        "i": [
                            "modular_machinery_reborn:casing_gearbox",
                            "#modular_machinery_reborn:energyinputhatch",
                            "#modular_machinery_reborn:inputbus"
                        ],
                        "j": ["modular_machinery_reborn:casing_vent"],
                        "k": ["immersiveengineering:fluid_pump"],
                        "n": ["#modular_machinery_reborn:fluidhatch"]
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
        // .addModifier(
        //     MMRModifierReplacement.create()
        //         .ingredient('oritech:machine_yield_addon')
        //         .position(-1, 0, 1)
        //         .addModifier(fluid_modifier)
        //         .addModifier(energy2_modifier)
        // )
        // .addModifier(
        //     MMRModifierReplacement.create()
        //         .ingredient('oritech:machine_yield_addon')
        //         .position(1, 0, 1)
        //         .addModifier(fluid_modifier)
        //         .addModifier(energy2_modifier)
        // )
})