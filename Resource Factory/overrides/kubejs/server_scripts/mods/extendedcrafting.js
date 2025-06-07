ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'extendedcrafting:advanced_table' }, 'minecraft:gold_block', 'naturesaura:sky_ingot_block')
    event.replaceInput({ id: 'extendedcrafting:flux_alternator' }, 'extendedcrafting:redstone_ingot', 'naturesaura:sky_ingot')
    event.replaceInput({ id: 'extendedcrafting:elite_table' }, 'minecraft:diamond_block', 'minecraft:netherite_ingot')
    event.replaceInput({ id: 'extendedcrafting:crafting_core' }, 'extendedcrafting:elite_component', 'mekanism:pellet_polonium')

    kubejs.shapeless('2x extendedcrafting:basic_table', 'extendedcrafting:basic_table')
    kubejs.shapeless('2x extendedcrafting:advanced_table', 'extendedcrafting:advanced_table')
    kubejs.shapeless('2x extendedcrafting:elite_table', 'extendedcrafting:elite_table')
    kubejs.shapeless('2x extendedcrafting:ultimate_table', 'extendedcrafting:ultimate_table')


    //组合
    event.custom(
        {
            "type": "extendedcrafting:combination",
            "power_cost": 1000000000,
            "power_rate": 1000000,
            "input": {
                "item": "kubejs:prediction_nexus"
            },
            "ingredients": [
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                },
                {
                    "item": "functionalstorage:netherite_upgrade"
                }
            ],
            "result": {
                "id": 'functionalstorage:max_storage_upgrade'
            }
        }
    )


    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "         ",
                "AAAAAAAAA",
                "BCDEFEDCB",
                "GHIIHIIHG",
                "FIJJKJJIF",
                "GHIIHIIHG",
                "BCDEFEDCB",
                "AAAAAAAAA",
                "         "
            ],
            "key": {
                "A": {
                    "item": "avaritia:infinity_nugget"
                },
                "B": {
                    "item": "megacells:sky_bronze_ingot"
                },
                "C": {
                    "item": "megacells:sky_steel_ingot"
                },
                "D": {
                    "item": "extendedae:entro_ingot"
                },
                "E": {
                    "item": "silentgear:tyrian_steel_ingot"
                },
                "F": {
                    "item": "mysticalagriculture:awakened_supremium_ingot"
                },
                "G": {
                    "item": "megacells:sky_osmium_ingot"
                },
                "H": {
                    "item": "avaritia:neutron_ingot"
                },
                "I": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "J": {
                    "item": "avaritia:infinity_catalyst"
                },
                "K": {
                    "item": "kubejs:universal_circuit_matrix"
                }
            },
            "result": {
                "id": 'extendedcrafting:the_ultimate_ingot'
            }
        }
    )
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
                "count": 2
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