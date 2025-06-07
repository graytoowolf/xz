ServerEvents.recipes(event => {
    const { kubejs, extendedcrafting } = event.recipes

    kubejs.shaped('avaritia:diamond_lattice', ['a a', ' b ', 'a a'], { a: 'minecraft:diamond', b: 'minecraft:netherite_scrap' })


    //组合
        event.custom(
        {
            "type": "extendedcrafting:combination",
            "power_cost": 100000000,
            "power_rate": 100000,
            "input": {
                "item": "avaritia:neutron"
            },
            "ingredients": [
                {
                    "item": "avaritia:neutron_gear"
                },
                {
                    "item": "avaritia:crystal_matrix"
                },
                {
                    "item": "avaritia:neutron_gear"
                },
                {
                    "item": "avaritia:crystal_matrix"
                },
                {
                    "item": 'mekanism_extras:absolute_control_circuit'
                },
                {
                    "item": "avaritia:neutron_gear"
                },
                {
                    "item": "avaritia:crystal_matrix"
                },
                {
                    "item": "avaritia:neutron_gear"
                },
                {
                    "item": "avaritia:crystal_matrix"
                },
                {
                    "item": 'mekanism_extras:absolute_control_circuit'
                }
            ],
            "result": {
                "id": 'avaritia:neutron_compressor'
            }
        }
    )

    //工作台

    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                " ABA ",
                "ACDCA",
                "BDEDB",
                "ACDCA",
                " ABA "
            ],
            "key": {
                "A": {
                    "item": "minecraft:blaze_powder"
                },
                "B": {
                    "item": "minecraft:fire_charge"
                },
                "C": {
                    "item": "mysticalagriculture:wither_skeleton_essence"
                },
                "D": {
                    "item": "minecraft:blaze_rod"
                },
                "E": {
                    "item": "minecraft:ancient_debris"
                }
            },
            "result": {
                "id": 'avaritia:blaze_cube'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "  A  ",
                " AAA ",
                "AABAA",
                " AAA ",
                "  A  "
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_pile"
                },
                "B": {
                    "tag": "c:music_discs"
                }
            },
            "result": {
                "id": 'avaritia:record_fragment'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                " AA AA ",
                "AABCBAA",
                "ABCDCBA",
                " CDEDC ",
                "ABCDCBA",
                "AABCBAA",
                " AA AA "
            ],
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "B": {
                    "item": "actuallyadditions:empowered_restonia_crystal_block"
                },
                "C": {
                    "item": "kubejs:prediction_nexus"
                },
                "D": {
                    "item": "occultism:mining_dim_core"
                },
                "E": {
                    "item": "megacells:cell_component_256m"
                }
            },
            "result": {
                "id": 'avaritia:neutron_collector'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABBCBBA",
                "BCDDDCB",
                "BDEEEDB",
                "CDEFEDC",
                "BDEEEDB",
                "BCDDDCB",
                "ABBCBBA"
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_gear"
                },
                "B": {
                    "item": "minecraft:ender_pearl"
                },
                "C": {
                    "item": "avaritia:diamond_lattice"
                },
                "D": {
                    "item": "actuallyadditions:emeradic_crystal_block"
                },
                "E": {
                    "item": "avaritia:neutron_collector"
                },
                "F": {
                    "item": "avaritia:endest_pearl"
                }
            },
            "result": {
                "id": 'avaritia:dense_neutron_collector'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AB   BA",
                "BACCCAB",
                " CDDDC ",
                " CDEDC ",
                " CDDDC ",
                "BACCCAB",
                "AB   BA"
            ],
            "key": {
                "A": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "B": {
                    "item": "avaritia:blaze_cube"
                },
                "C": {
                    "item": "avaritia:blaze_cube_block"
                },
                "D": {
                    "item": "avaritia:dense_neutron_collector"
                },
                "E": {
                    "item": "avaritia:neutron_gear"
                }
            },
            "result": {
                "id": 'avaritia:denser_neutron_collector'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AABBBAA",
                "ABCCCBA",
                "BCDDDCB",
                "BCDEDCB",
                "BCDDDCB",
                "ABCCCBA",
                "AABBBAA"
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_gear"
                },
                "B": {
                    "item": "mekmm:uu_matter"
                },
                "C": {
                    "item": "advanced_ae:quantum_alloy_block"
                },
                "D": {
                    "item": "avaritia:denser_neutron_collector"
                },
                "E": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:redstone"
                    },
                    "type": "neoforge:components"
                }
            },
            "result": {
                "id": 'avaritia:densest_neutron_collector'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "         ",
                "  AAAAA  ",
                " ABBBBBA ",
                " A CBC A ",
                " ABBBBBA ",
                " ABBBBBA ",
                " AB B BA ",
                "         ",
                "         "
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_ingot"
                },
                "B": {
                    "item": "avaritia:infinity_ingot"
                },
                "C": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "result": {
                "id": 'avaritia:infinity_helmet'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                " AA   AA ",
                "AAA   AAA",
                "AAAAAAAAA",
                " ABBBBBA ",
                " ABBCBBA ",
                " ABBBBBA ",
                " ABBBBBA ",
                " ABBBBBA ",
                "  AAAAA  "
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_ingot"
                },
                "B": {
                    "item": "avaritia:infinity_ingot"
                },
                "C": {
                    "item": "avaritia:crystal_matrix"
                }
            },
            "result": {
                "id": 'avaritia:infinity_chestplate'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAAAAAAAA",
                "ABBBCBBBA",
                "ABAACAABA",
                "ABA   ABA",
                "ADA   ADA",
                "ABA   ABA",
                "ABA   ABA",
                "ABA   ABA",
                "AAA   AAA"
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_ingot"
                },
                "B": {
                    "item": "avaritia:infinity_ingot"
                },
                "C": {
                    "item": "avaritia:infinity_catalyst"
                },
                "D": {
                    "item": "avaritia:crystal_matrix_ingot"
                }
            },
            "result": {
                "id": 'avaritia:infinity_pants'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "         ",
                " AAA AAA ",
                " ABA ABA ",
                " ABA ABA ",
                "AABA ABAA",
                "ABBA ABBA",
                "AAAA AAAA",
                "         ",
                "         "
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron_ingot"
                },
                "B": {
                    "item": "avaritia:infinity_ingot"
                }
            },
            "result": {
                "id": 'avaritia:infinity_boots'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "B": {
                    "item": "avaritia:neutron"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                "    II   ",
                "   II  B ",
                "  IIIAA  ",
                "  IIAXA  ",
                "  I AAII ",
                "   N  II ",
                "  N      ",
                " N       ",
                "A        "
            ],
            "result": {
                "id": "avaritia:infinity_axe"
            },
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "C": {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "P": {
                    "item": "avaritia:neutron_pile"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                "      III",
                "  AAIINNP",
                " AXA   C ",
                " AA   C  ",
                " I   C   ",
                " I  C    ",
                "IN C     ",
                "INC      ",
                "IP       "
            ],
            "result": {
                "id": "avaritia:infinity_bow"
            },
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "C": {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "P": {
                    "item": "avaritia:neutron_pile"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                "   IIIIIP",
                " AC N  C ",
                " CXN  C  ",
                "I NIPC   ",
                "IN PCN   ",
                "I  CNIN  ",
                "I C  NNA ",
                "IC    AAN",
                "P      NN"
            ],
            "result": {
                "id": "avaritia:infinity_crossbow"
            },
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                " IIIIIIAA",
                "  IIIIAXA",
                "      AAI",
                "     N II",
                "    N    ",
                "   N     ",
                "  N      ",
                " N       ",
                "A        "
            ],
            "result": {
                "id": "avaritia:infinity_hoe"
            },
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "B": {
                    "item": "avaritia:neutron"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                " IIIIII B",
                "    IIAA ",
                "     AXAI",
                "     AAII",
                "    N  II",
                "   N    I",
                "  N     I",
                " N      I",
                "A        "
            ],
            "result": {
                "id": "avaritia:infinity_pickaxe"
            },
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "C": {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                "      III",
                "     IIII",
                "    CIIII",
                "    ACII ",
                "   AXAC  ",
                "   NA    ",
                "  N      ",
                " N       ",
                "A        "
            ],
            "result": {
                "id": "avaritia:infinity_shovel"
            },
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "B": {
                    "item": "avaritia:neutron"
                },
                "C": {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                "I": {
                    "item": "avaritia:infinity_ingot"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                "      NNN",
                "     NIIN",
                "    NIIIN",
                "   NIIIN ",
                "CCNIIIN  ",
                " AACIN   ",
                " ABAN    ",
                " NAAC    ",
                "X   C    "
            ],
            "result": {
                "id": "avaritia:infinity_sword"
            },
        }
    )
    event.custom(
        {
            "type": "avaritia:shaped_table",
            "key": {
                "a": {
                    "item": "minecraft:coal_block"
                },
                "b": {
                    "item": "minecraft:magma_block"
                },
                "c": {
                    "item": "minecraft:lava_bucket"
                },
                "d": {
                    "item": "avaritia:eternal_singularity"
                },
                "e": {
                    "item": "avaritia:refined_coal_block"
                }
            },
            "pattern": [
                "         ",
                "  aaaaa  ",
                " abbcbba ",
                " abeeeba ",
                " acedeca ",
                " abeeeba ",
                " abbcbba ",
                "  aaaaa  ",
                "         "
            ],
            "result": {
                "id": "avaritia:star_fuel"
            },
        }
    )
    event.custom(
        {
            "type": "avaritia:shaped_table",
            "key": {
                "A": {
                    "item": "avaritia:crystal_matrix"
                },
                "B": {
                    "item": "avaritia:infinity_nugget"
                },
                "C": {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                "E": {
                    "item": "avaritia:endest_pearl"
                },
                "N": {
                    "item": "avaritia:neutron_ingot"
                },
                "P": {
                    "item": "avaritia:neutron_pile"
                },
                "X": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "pattern": [
                "   PPP   ",
                " NPCCCPN ",
                " PABBBAP ",
                "PCBBXBBCP",
                "PCBXEXBCP",
                "PCBBXBBCP",
                " PABBBAP ",
                " NPCCCPN ",
                "   PPP   "
            ],
            "result": {
                "id": "avaritia:enhancement_core"
            },
        }
    )
    event.custom(
        {
            "type": "avaritia:shaped_table",
            "key": {
                "a": {
                    "item": "avaritia:neutron"
                },
                "b": {
                    "item": "avaritia:neutron_ingot"
                },
                "c": {
                    "item": "avaritia:diamond_lattice"
                },
                "d": {
                    "item": "avaritia:blaze_cube"
                },
                "e": {
                    "item": "avaritia:crystal_matrix"
                },
                "f": {
                    "item": "avaritia:infinity_nugget"
                },
                "g": {
                    "item": "avaritia:infinity_ingot"
                },
                "h": {
                    "item": "avaritia:neutron_gear"
                },
                "i": {
                    "item": "avaritia:infinity_catalyst"
                },
                "j": {
                    "item": "minecraft:smithing_table"
                },
                "k": {
                    "item": "avaritia:extreme_crafting_table"
                },
                "l": {
                    "item": "avaritia:crystal_matrix_ingot"
                }
            },
            "pattern": [
                "aaaaaaaaa",
                "bccfgfccb",
                "bcdhhhdcb",
                "lfhijihfl",
                "eghjkjhge",
                "lfhijihfl",
                "bcdhhhdcb",
                "bccfgfccb",
                "bleeeeelb"
            ],
            "result": {
                "id": "avaritia:extreme_smithing_table"
            },
        }
    )

    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "   AAA   ",
                " AABBBAA ",
                " ABBBBBA ",
                "ABBBCBBBA",
                "ABBCDCBBA",
                "ABBBCBBBA",
                " ABBBBBA ",
                " AABBBAA ",
                "   AAA   "
            ],
            "key": {
                "A": {
                    "item": "minecraft:end_stone"
                },
                "B": {
                    "item": "minecraft:ender_pearl"
                },
                "C": {
                    "item": "avaritia:neutron_ingot"
                },
                "D": {
                    "item": "forbidden_arcanus:dark_nether_star"
                }
            },
            "result": {
                "id": 'avaritia:endest_pearl'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shapeless_table",
            "ingredients": [
                {
                    "item": "minecraft:apple"
                },
                {
                    "item": "minecraft:golden_apple"
                },
                {
                    "item": "minecraft:bread"
                },
                {
                    "item": "minecraft:sweet_berries"
                },
                {
                    "item": "minecraft:cake"
                },
                {
                    "item": "minecraft:carrot"
                },
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "minecraft:glistering_melon_slice"
                },
                {
                    "item": "minecraft:glow_berries"
                },
                {
                    "item": "minecraft:beetroot"
                },
                {
                    "item": "minecraft:honey_bottle"
                },
                {
                    "item": "minecraft:kelp"
                },
                {
                    "item": "minecraft:poisonous_potato"
                },
                {
                    "item": "ars_nouveau:source_berry_pie"
                },
                {
                    "item": "ars_nouveau:source_berry_roll"
                },
                {
                    "item": "pneumaticcraft:sourdough_bread"
                },
                {
                    "item": "farmersdelight:tomato"
                },
                {
                    "item": "farmersdelight:cabbage"
                },
                {
                    "item": "avaritia:neutron_nugget"
                }
            ],
            "result": {
                "id": 'avaritia:ultimate_stew'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shapeless_table",
            "ingredients": [
                {
                    "item": "minecraft:apple"
                },
                {
                    "item": "minecraft:golden_apple"
                },
                {
                    "item": "minecraft:bread"
                },
                {
                    "item": "minecraft:sweet_berries"
                },
                {
                    "item": "minecraft:cake"
                },
                {
                    "item": "minecraft:carrot"
                },
                {
                    "item": "minecraft:chorus_fruit"
                },
                {
                    "item": "minecraft:glistering_melon_slice"
                },
                {
                    "item": "minecraft:glow_berries"
                },
                {
                    "item": "minecraft:beetroot"
                },
                {
                    "item": "minecraft:honey_bottle"
                },
                {
                    "item": "minecraft:kelp"
                },
                {
                    "item": "minecraft:poisonous_potato"
                },
                {
                    "item": "ars_nouveau:source_berry_pie"
                },
                {
                    "item": "ars_nouveau:source_berry_roll"
                },
                {
                    "item": "pneumaticcraft:sourdough_bread"
                },
                {
                    "item": "farmersdelight:tomato"
                },
                {
                    "item": "farmersdelight:cabbage"
                },
                {
                    "item": "avaritia:neutron_nugget"
                }
            ],
            "result": {
                "id": 'avaritia:cosmic_meatballs'
            }
        }
    )
})