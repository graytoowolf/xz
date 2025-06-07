ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'extendedcrafting:advanced_table' }, 'minecraft:gold_block', 'naturesaura:sky_ingot_block')
    event.replaceInput({ id: 'extendedcrafting:flux_alternator' }, 'extendedcrafting:redstone_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({ id: 'extendedcrafting:elite_table' }, 'minecraft:diamond_block', 'minecraft:netherite_ingot')

    kubejs.shapeless('2x extendedcrafting:basic_table', 'extendedcrafting:basic_table')
    kubejs.shapeless('2x extendedcrafting:advanced_table', 'extendedcrafting:advanced_table')
    kubejs.shapeless('2x extendedcrafting:elite_table', 'extendedcrafting:elite_table')
    kubejs.shapeless('2x extendedcrafting:ultimate_table', 'extendedcrafting:ultimate_table')
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AABCC",
                "AABCC",
                "BBDBB",
                "CCBAA",
                "CCBAA"
            ],
            "key": {
                "A": {
                    "item": "naturesaura:infused_iron"
                },
                "B": {
                    "item": "naturesaura:gold_powder"
                },
                "C": {
                    "item": "naturesaura:tainted_gold"
                },
                "D": {
                    "item": "naturesaura:calling_spirit"
                }
            },
            "result": {
                "id": 'naturesaura:sky_ingot',
                "count": 16
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAAAA",
                "BCBCB",
                "DEFED",
                "DCECD",
                "DDDDD"
            ],
            "key": {
                "A": {
                    "item": "kubejs:photovoltaic_cell_aura"
                },
                "B": {
                    "item": "naturesaura:tainted_gold"
                },
                "C": {
                    "item": "naturesaura:sky_ingot_block"
                },
                "D": {
                    "item": "naturesaura:infused_iron"
                },
                "E": {
                    "items": "naturesaura:aura_bottle",
                    "components": {
                        "naturesaura:aura_bottle_data": {
                            "aura_type": "naturesaura:overworld"
                        }
                    },
                    "type": "neoforge:components"
                },
                "F": {
                    "item": "naturesaura:birth_spirit"
                }
            },
            "result": {
                "id": 'solarflux:sp_custom_aura_sp',
                "count": 1
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                " AABAA ",
                "AABCBAA",
                "ACCDCCA",
                "CBDEDBC",
                "ACCDCCA",
                "AABCBAA",
                " AABAA "
            ],
            "key": {
                "A": {
                    "item": "occultism:otherstone"
                },
                "B": {
                    "item": "actuallyadditions:empowered_restonia_crystal"
                },
                "C": {
                    "item": "minecraft:netherite_scrap"
                },
                "D": {
                    "item": "extendedcrafting:flux_star"
                },
                "E": {
                    "item": "solarflux:blank_upgrade"
                }
            },
            "result": {
                "id": 'solarflux:efficiency_upgrade',
                "count": 4
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABBCBBA",
                "BDEFEGB",
                "BEHHHEB",
                "IFHJHFK",
                "BLHHHLB",
                "BMLFLNB",
                "ABBOBBA"
            ],
            "key": {
                "A": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:coal"
                    },
                    "type": "neoforge:components"
                },
                "B": {
                    "item": "kubejs:alloy_gear"
                },
                "C": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:gold"
                    },
                    "type": "neoforge:components"
                },
                "D": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:redstone"
                    },
                    "type": "neoforge:components"
                },
                "E": {
                    "item": "ars_nouveau:summon_focus"
                },
                "F": {
                    "item": "ae2:singularity"
                },
                "G": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:glowstone"
                    },
                    "type": "neoforge:components"
                },
                "H": {
                    "item": "avaritia:neutron_ingot"
                },
                "I": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:emerald"
                    },
                    "type": "neoforge:components"
                },
                "J": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:netherite"
                    },
                    "type": "neoforge:components"
                },
                "K": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:diamond"
                    },
                    "type": "neoforge:components"
                },
                "L": {
                    "item": "occultism:storage_stabilizer_tier4"
                },
                "M": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:copper"
                    },
                    "type": "neoforge:components"
                },
                "N": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:lapis_lazuli"
                    },
                    "type": "neoforge:components"
                },
                "O": {
                    "items": "avaritia:singularity",
                    "components": {
                        "avaritia:singularity_id": "avaritia:iron"
                    },
                    "type": "neoforge:components"
                }
            },
            "result": {
                "id": 'avaritia:eternal_singularity'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "         ",
                "AAAAAAAAA",
                "BBBBBBBBB",
                "BCDDCDDCB",
                "BDEEDEEDB",
                "BCDDCDDCB",
                "BBBBBBBBB",
                "AAAAAAAAA",
                "         "
            ],
            "key": {
                "A": {
                    "item": "mekanism_extras:alloy_spectrum"
                },
                "B": {
                    "item": "avaritia:neutron_ingot"
                },
                "C": {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                "D": {
                    "item": "avaritia:infinity_catalyst"
                },
                "E": {
                    "item": "mysticalagradditions:creative_essence"
                }
            },
            "result": {
                "id": 'avaritia:infinity_ingot'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AABBBAA",
                "ABCDCBA",
                "BCDEDCB",
                "BDFGHDB",
                "BCDIDCB",
                "ABCDCBA",
                "AABBBAA"
            ],
            "key": {
                "A": {
                    "item": "extendedcrafting:ultimate_component"
                },
                "B": {
                    "item": "mekanism:pellet_antimatter"
                },
                "C": {
                    "item": "extendedcrafting:luminessence_block"
                },
                "D": {
                    "item": "extendedcrafting:ultimate_catalyst"
                },
                "E": {
                    "item": "forbidden_arcanus:whirlwind_prism"
                },
                "F": {
                    "item": "forbidden_arcanus:sea_prism"
                },
                "G": {
                    "item": "extendedcrafting:elite_table"
                },
                "H": {
                    "item": "forbidden_arcanus:smelter_prism"
                },
                "I": {
                    "item": "forbidden_arcanus:terrastomp_prism"
                }
            },
            "result": {
                "id": 'extendedcrafting:ultimate_table'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AABCCCBAA",
                "ABCAAACBA",
                "BCDCECDCB",
                "CACFFFCAC",
                "CAEFGFEAC",
                "CACFFFCAC",
                "BCDCECDCB",
                "ABCAAACBA",
                "AABCCCBAA"
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron"
                },
                "B": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "C": {
                    "item": "avaritia:crystal_matrix"
                },
                "D": {
                    "item": "solarflux:sp_8"
                },
                "E": {
                    "item": "solarflux:sp_custom_aura_sp"
                },
                "F": {
                    "item": "appflux:core_16m"
                },
                "G": {
                    "item": "occultism:storage_controller_stabilized"
                }
            },
            "result": {
                "id": 'solarflux:sp_avaritia.neutronium',
                count: 2
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAABBBAAA",
                "ACDCECDCA",
                "ADFDEDFDA",
                "BCDCGCDCB",
                "BEEGHGEEB",
                "BCDCGCDCB",
                "ADFDEDFDA",
                "ACDCECDCA",
                "AAABBBAAA"
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron"
                },
                "B": {
                    "item": "avaritia:eternal_singularity"
                },
                "C": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "D": {
                    "item": "avaritia:infinity_ingot"
                },
                "E": {
                    "item": "avaritia:crystal_matrix"
                },
                "F": {
                    "item": "avaritia:enhancement_core"
                },
                "G": {
                    "item": "appflux:core_256m"
                },
                "H": {
                    "item": "avaritia:infinity_catalyst"
                }
            },
            "result": {
                "id": 'solarflux:sp_avaritia.infinity',
                "count":2
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shapeless_table",
            "ingredients": [
                {
                    "item": "avaritia:ultimate_stew"
                },
                {
                    "item": "avaritia:ultimate_stew"
                },
                {
                    "item": "avaritia:cosmic_meatballs"
                },
                {
                    "item": "avaritia:cosmic_meatballs"
                },
                {
                    "item": "avaritia:neutron_ingot"
                },
                {
                    "item": "avaritia:neutron_nugget"
                },
                {
                    "item": "avaritia:neutron_pile"
                },
                {
                    "item": "avaritia:record_fragment"
                },
                {
                    "item": "avaritia:endest_pearl"
                },
                {
                    "item": "avaritia:crystal_matrix_ingot"
                },
                {
                    "item": "occultism:mining_dim_core"
                },
                {
                    "item": "mekanism:pellet_polonium"
                },
                {
                    "item": "mekanism:pellet_plutonium"
                },
                {
                    "item": "mekmm:uu_matter"
                },
                {
                    "item": "avaritia:eternal_singularity"
                }
            ],
            "result": {
                "id": 'avaritia:infinity_catalyst'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shapeless_table",
            "ingredients": [
                {
                    "item": "minecraft:iron_ingot"
                },
                {
                    "item": "minecraft:copper_ingot"
                },
                {
                    "item": "minecraft:gold_ingot"
                },
                {
                    "item": "minecraft:netherite_ingot"
                },
                {
                    "item": "enderio:energetic_alloy_ingot"
                },
                {
                    "item": "enderio:vibrant_alloy_ingot"
                },
                {
                    "item": "enderio:redstone_alloy_ingot"
                },
                {
                    "item": "enderio:conductive_alloy_ingot"
                },
                {
                    "item": "enderio:pulsating_alloy_ingot"
                },
                {
                    "item": "enderio:dark_steel_ingot"
                },
                {
                    "item": "enderio:soularium_ingot"
                },
                {
                    "item": "enderio:end_steel_ingot"
                },
                {
                    "item": "immersiveengineering:ingot_hop_graphite"
                },
                {
                    "item": "industrialforegoing:pink_slime_ingot"
                },
                {
                    "item": "justdirethings:ferricore_ingot"
                },
                {
                    "item": "justdirethings:blazegold_ingot"
                },
                {
                    "item": "justdirethings:eclipsealloy_ingot"
                },
                {
                    "item": "mekanism:ingot_refined_obsidian"
                },
                {
                    "item": "mekanism:ingot_refined_glowstone"
                },
                {
                    "item": "mysticalagradditions:insanium_ingot"
                },
                {
                    "item": "oritech:adamant_ingot"
                },
                {
                    "item": "oritech:duratium_ingot"
                },
                {
                    "item": "oritech:energite_ingot"
                },
                {
                    "item": "pneumaticcraft:ingot_iron_compressed"
                },
                {
                    "item": "stellaris:heavy_metal_ingot"
                },
                {
                    "item": "stellaris:desh_ingot"
                },
                {
                    "item": "alltheores:aluminum_ingot"
                },
                {
                    "item": "alltheores:lead_ingot"
                },
                {
                    "item": "alltheores:nickel_ingot"
                },
                {
                    "item": "alltheores:osmium_ingot"
                },
                {
                    "item": "alltheores:platinum_ingot"
                },
                {
                    "item": "alltheores:silver_ingot"
                },
                {
                    "item": "alltheores:tin_ingot"
                },
                {
                    "item": "alltheores:uranium_ingot"
                },
                {
                    "item": "alltheores:zinc_ingot"
                },
                {
                    "item": "alltheores:iridium_ingot"
                },
                {
                    "item": "alltheores:steel_ingot"
                },
                {
                    "item": "alltheores:invar_ingot"
                },
                {
                    "item": "alltheores:electrum_ingot"
                },
                {
                    "item": "alltheores:bronze_ingot"
                },
                {
                    "item": "alltheores:brass_ingot"
                },
                {
                    "item": "alltheores:enderium_ingot"
                },
                {
                    "item": "alltheores:lumium_ingot"
                },
                {
                    "item": "alltheores:signalum_ingot"
                },
                {
                    "item": "alltheores:constantan_ingot"
                },
                {
                    "item": "extendedcrafting:black_iron_ingot"
                },
                {
                    "item": "extendedcrafting:redstone_ingot"
                },
                {
                    "item": "extendedcrafting:enhanced_redstone_ingot"
                },
                {
                    "item": "extendedcrafting:ender_ingot"
                },
                {
                    "item": "extendedcrafting:enhanced_ender_ingot"
                },
                {
                    "item": "extendedcrafting:crystaltine_ingot"
                },
                {
                    "item": "extendedae:entro_ingot"
                },
                {
                    "item": "forbidden_arcanus:deorum_ingot"
                },
                {
                    "item": "forbidden_arcanus:obsidiansteel_ingot"
                },
                {
                    "item": "megacells:sky_steel_ingot"
                },
                {
                    "item": "megacells:sky_bronze_ingot"
                },
                {
                    "item": "megacells:sky_osmium_ingot"
                },
                {
                    "item": "mysticalagriculture:prosperity_ingot"
                },
                {
                    "item": "mysticalagriculture:inferium_ingot"
                },
                {
                    "item": "mysticalagriculture:prudentium_ingot"
                },
                {
                    "item": "mysticalagriculture:tertium_ingot"
                },
                {
                    "item": "mysticalagriculture:imperium_ingot"
                },
                {
                    "item": "mysticalagriculture:supremium_ingot"
                },
                {
                    "item": "mysticalagriculture:awakened_supremium_ingot"
                },
                {
                    "item": "mysticalagriculture:soulium_ingot"
                },
                {
                    "item": "naturesaura:infused_iron"
                },
                {
                    "item": "naturesaura:sky_ingot"
                },
                {
                    "item": "naturesaura:depth_ingot"
                },
                {
                    "item": "occultism:iesnium_ingot"
                },
                {
                    "items": "silentgear:custom_ingot",
                    "components": {
                        "silentgear:material": {
                            "material": "silentgear:high_carbon_steel"
                        }
                    },
                    "type": "neoforge:components"
                },
                {
                    "item": "silentgear:crimson_iron_ingot"
                },
                {
                    "item": "silentgear:crimson_steel_ingot"
                },
                {
                    "item": "silentgear:blaze_gold_ingot"
                },
                {
                    "item": "silentgear:azure_silver_ingot"
                },
                {
                    "item": "silentgear:azure_electrum_ingot"
                },
                {
                    "item": "silentgear:tyrian_steel_ingot"
                },
                {
                    "item": "trinketsandbaubles:glowing_ingot"
                },
                {
                    "item": "kubejs:alloy_ingots"
                }
            ],
            "result": {
                "id": 'extendedcrafting:the_ultimate_ingot'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABBCDCBBA",
                "BBCEEECBB",
                "BCEEFEECB",
                "CEEFFFEEC",
                "DEFFGFFED",
                "CEEFFFEEC",
                "BCEEFEECB",
                "BBCEEECBB",
                "ABBCDCBBA"
            ],
            "key": {
                "A": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "B": {
                    "item": "ancientreforging:ancient_material"
                },
                "C": {
                    "item": "mekanism_extras:enriched_spectrum"
                },
                "D": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "E": {
                    "item": "extendedcrafting:the_ultimate_ingot"
                },
                "F": {
                    "item": "mekanism_extras:infinite_fluid_tank"
                },
                "G": {
                    "item": "extendedcrafting:ultimate_singularity"
                }
            },
            "result": {
                "id": 'mekanism:creative_fluid_tank'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAAB BAAA",
                "AC  B  CA",
                "A CDDDC A",
                "B DCDCD B",
                " BDDEDDB ",
                "B DCDCD B",
                "A CDDDC A",
                "AC  B  CA",
                "AAAB BAAA"
            ],
            "key": {
                "A": {
                    "item": "mysticalagradditions:insanium_gemstone_block"
                },
                "B": {
                    "item": "silentgear:glittery_dust"
                },
                "C": {
                    "item": "mysticalagriculture:awakened_supremium_gemstone_block"
                },
                "D": {
                    "item": "extendedcrafting:luminessence"
                },
                "E": {
                    "item": "mysticalagriculture:inferium_essence"
                }
            },
            "result": {
                "id": 'mysticalagradditions:creative_essence',
                "count": 2
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABBCDCBBA",
                "BBCEEECBB",
                "BCEEFEECB",
                "CEEFFFEEC",
                "DEFFGFFED",
                "CEEFFFEEC",
                "BCEEFEECB",
                "BBCEEECBB",
                "ABBCDCBBA"
            ],
            "key": {
                "A": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "B": {
                    "item": "ancientreforging:ancient_material"
                },
                "C": {
                    "item": "mekanism_extras:enriched_spectrum"
                },
                "D": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "E": {
                    "item": "extendedcrafting:the_ultimate_ingot"
                },
                "F": {
                    "item": "mekanism_extras:infinite_chemical_tank"
                },
                "G": {
                    "item": "extendedcrafting:ultimate_singularity"
                }
            },
            "result": {
                "id": 'mekanism:creative_chemical_tank'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAB C BAA",
                "AAAD DAAA",
                "BAAEEEAAB",
                " DEAEAED ",
                "C EEFEE C",
                " DEAEAED ",
                "BAAEEEAAB",
                "AAAD DAAA",
                "AAB C BAA"
            ],
            "key": {
                "A": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "B": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "C": {
                    "item": "mekanism_extras:cosmic_energy_cube"
                },
                "D": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "E": {
                    "item": "ancientreforging:ancient_material"
                },
                "F": {
                    "item": "oritech:unstable_container"
                }
            },
            result:
                Item.of(
                    "mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]"
                ).toJson()
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABBBBBBBA",
                "BACCCCCAB",
                "BCADEDACB",
                "BCDAFADCB",
                "BCEFGFECB",
                "BCDAFADCB",
                "BCADEDACB",
                "BACCCCCAB",
                "ABBBBBBBA"
            ],
            "key": {
                "A": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "B": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "C": {
                    "item": "megacells:cell_component_256m"
                },
                "D": {
                    "item": "kubejs:data_storage_core"
                },
                "E": {
                    "item": "justdirethings:refined_t4_fluid_bucket"
                },
                "F": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "G": {
                    "item": "mekanism_extras:infinite_tier_installer"
                }
            },
            "result": {
                "id": 'ae2:creative_storage_cell'
            }
        }
    )



    //通量合成台
    event.custom(
        {
            "type": "extendedcrafting:shaped_flux_crafter",
            "power_required": 1024000,
            "power_rate": 1024,
            "pattern": [
                "AAA",
                "AAA",
                "AAA"
            ],
            "key": {
                "A": { "item": 'minecraft:iron_ingot' }
            },
            "result": {
                "id": 'naturesaura:infused_iron',
                "count": 8
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_flux_crafter",
            "power_required": 1024000,
            "power_rate": 1024,
            "pattern": [
                "AAA",
                "AAA",
                "AAA"
            ],
            "key": {
                "A": { "item": 'minecraft:gold_ingot' }
            },
            "result": {
                "id": 'naturesaura:tainted_gold',
                "count": 8
            }
        }
    )
})