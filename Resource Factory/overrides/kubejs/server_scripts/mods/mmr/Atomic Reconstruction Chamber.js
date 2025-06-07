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
    //         .modifier(1.3)
    event.create("mmr:atomic_reconstruction_chamber")
        .color("#ff495456")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aba", "bcb", "aba"],
                        ["bmb", "ded", "bdb"],
                        ["aba", "bcb", "aba"]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_plain"],
                        "b": [
                            "modular_machinery_reborn:casing_gearbox",
                            "#modular_machinery_reborn:itembus",
                            "#modular_machinery_reborn:energyinputhatch",
                            "#modular_machinery_reborn:fluidinputhatch"
                        ],
                        "c": ["modular_machinery_reborn:casing_vent"],
                        "d": ["ae2:quartz_vibrant_glass"],
                        "e": ["actuallyadditions:atomic_reconstructor[facing=east]"]
                    }
                )
        )
        // .addModifier(
        //     MMRModifierReplacement.create()
        //         .ingredient('naturesaura:sky_ingot_block')
        //         .position(-1, 0, 0)
        //         .addModifier(speed_modifier)
        //         .addModifier(energy_modifier)
        // )
        // .addModifier(
        //     MMRModifierReplacement.create()
        //         .ingredient('naturesaura:sky_ingot_block')
        //         .position(1, 0, 0)
        //         .addModifier(speed_modifier)
        //         .addModifier(energy_modifier)
        // )
        // .addModifier(
        //     MMRModifierReplacement.create()
        //         .ingredient('naturesaura:sky_ingot_block')
        //         .position(0, 1, 0)
        //         .addModifier(speed_modifier)
        //         .addModifier(energy_modifier)
        // )
        // .addModifier(
        //     MMRModifierReplacement.create()
        //         .ingredient('naturesaura:sky_ingot_block')
        //         .position(0, -1, 0)
        //         .addModifier(speed_modifier)
        //         .addModifier(energy_modifier)
        // )
})