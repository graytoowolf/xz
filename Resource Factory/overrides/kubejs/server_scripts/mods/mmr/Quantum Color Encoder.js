MMREvents.machines(event => {
    event.create("mmr:quantum_color_encoder")
        .color("#FF37474F")
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        ["aabmbaa", "accccca", "bcccccb", "bcccccb", "bcccccb", "accccca", "aabbbaa"],
                        ["d     d", " fffff ", " fgggf ", " fgggf ", " fgggf ", " fffff ", "d     d"],
                        ["d     d", " hhhhh ", " hiiih ", " hiiih ", " hiiih ", " hhhhh ", "d     d"],
                        ["d     d", " hhhhh ", " hiiih ", " hijih ", " hiiih ", " hhhhh ", "d     d"],
                        ["d     d", " hhhhh ", " hiiih ", " hiiih ", " hiiih ", " hhhhh ", "d     d"],
                        ["d     d", " fffff ", " fgggf ", " fgggf ", " fgggf ", " fffff ", "d     d"],
                        ["aabebaa", "accccca", "bcccccb", "bcccccb", "bcccccb", "accccca", "aabbbaa"]
                    ]
                )
                .keys(
                    {
                        "a": ["modular_machinery_reborn:casing_reinforced"],
                        "b": [
                            "modular_machinery_reborn:casing_circuitry",
                            "#modular_machinery_reborn:itembus",
                            "#modular_machinery_reborn:fluidhatch",
                            "#modular_machinery_reborn_mekanism:chemicalhatch",
                            "#modular_machinery_reborn:energyinputhatch"
                        ],
                        "c": ["modular_machinery_reborn:casing_plain"],
                        "d": ["immersiveengineering:steel_scaffolding_standard"],
                        "e": [
                            'modular_machinery_reborn:parallel_hatch_advanced',
                            'modular_machinery_reborn:parallel_hatch_ultimate',
                            'modular_machinery_reborn:parallel_hatch_max',
                            'modular_machinery_reborn:casing_circuitry'
                        ],
                        "f": ["modular_machinery_reborn:casing_vent"],
                        "g": ["kubejs:storage_matrix"],
                        "h": ["ae2:quartz_vibrant_glass"],
                        "i": ["advanced_ae:quantum_alloy_block"],
                        "j": ["advanced_ae:quantum_core"]
                    }
                )
        )
})
