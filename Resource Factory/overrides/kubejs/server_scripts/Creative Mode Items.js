ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    const energy = ['enderio:creative_power', 'ifeu:creative_capacitor', 'mekanism_lasers:creative_laser', 'mekanism_lasers:creative_toggleable_laser', 'rftoolspower:dimensionalcell_creative', 'oritech:creative_storage_block', 'immersiveengineering:capacitor_creative', 'powah:energy_cell_creative', 'integrateddynamics:energy_battery_creative']
    const item = ['functionalstorage:max_storage_upgrade', 'functionalstorage:creative_vending_upgrade', 'mekanism:creative_bin', 'modularrouters:creative_module', 'pneumaticcraft:creative_upgrade']

    kubejs.shapeless('mekanism:creative_fluid_tank', 'oritech:creative_tank_block')
    kubejs.shapeless('oritech:creative_tank_block', 'mekanism:creative_fluid_tank')
    kubejs.shapeless('ars_nouveau:creative_source_jar', 'kubejs:prediction_nexus')
    kubejs.shaped('pneumaticcraft:creative_compressor', ['aaa', 'cbc', 'aaa'], { a: 'kubejs:universal_circuit_matrix', b: 'mekanism_extras:upgrade_creative', c: 'pneumaticcraft:air_compressor' })
    kubejs.shaped('pneumaticcraft:creative_compressed_iron_block', ['aaa', 'cbc', 'aaa'], { a: 'kubejs:universal_circuit_matrix', b: 'mekanism_extras:upgrade_creative', c: 'pneumaticcraft:compressed_iron_block' })
    kubejs.shaped('ironjetpacks:jetpack[minecraft:rarity="epic",ironjetpacks:jetpack_id="ironjetpacks:creative"]', [' a ', 'aba', ' c '], { a: 'oritech:heisenberg_compensator', b: 'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:emerald"]', c: 'oritech:exo_jetpack' })

    energy.forEach(item => {
        kubejs.shapeless(item, "mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]")
    });
    energy.forEach(item => {
        kubejs.shapeless("mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]", item)
    });
    item.forEach(item => {
        kubejs.shapeless('ae2:creative_storage_cell', item)
    });
    item.forEach(item => {
        kubejs.shapeless(item, 'ae2:creative_storage_cell')
    });
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABBBCBBBA",
                "BDEDFDEDB",
                "BEGEFEGEB",
                "BDEDHDEDB",
                "CFFHIHFFC",
                "BDEDHDEDB",
                "BEGEFEGEB",
                "BDEDFDEDB",
                "ABBBCBBBA"
            ],
            "key": {
                "A": {
                    "item": "kubejs:storage_matrix"
                },
                "B": {
                    "item": "avaritia:star_fuel"
                },
                "C": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "D": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "E": {
                    "item": "avaritia:infinity_nugget"
                },
                "F": {
                    "item": "avaritia:neutron_gear"
                },
                "G": {
                    "item": "avaritia:enhancement_core"
                },
                "H": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "I": {
                    "item": "mekanism_extras:infinite_induction_cell"
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
                "         ",
                "  ABCBA  ",
                "  DEDED  ",
                "  CFGFC  ",
                "  DGHGD  ",
                "  CFGFC  ",
                "  DEDED  ",
                "  ABCBA  ",
                "         "
            ],
            "key": {
                "A": {
                    "item": "avaritia:enhancement_core"
                },
                "B": {
                    "item": "avaritia:infinity"
                },
                "C": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "D": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "E": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "F": {
                    "item": "mekanism_extras:infinite_fluid_tank"
                },
                "G": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "H": {
                    "item": "replication:creative_memory_chip"
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
                " AABBBAA ",
                " ACDEDCA ",
                " AFBFBFA ",
                " AEGHGEA ",
                " AFHIHFA ",
                " AEGHGEA ",
                " AFBFBFA ",
                " ACDEDCA ",
                " AAAAAAA "
            ],
            "key": {
                "A": {
                    "item": "avaritia:neutron"
                },
                "B": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "C": {
                    "item": "avaritia:enhancement_core"
                },
                "D": {
                    "item": "avaritia:infinity"
                },
                "E": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "F": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "G": {
                    "item": "mekanism_extras:infinite_chemical_tank"
                },
                "H": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "I": {
                    "item": "replication:creative_memory_chip"
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
                "   ABA   ",
                "   ABA   ",
                "  ACCCA  ",
                "AACADACAA",
                "BBCDEDCBB",
                "AACADACAA",
                "  ACCCA  ",
                "   ABA   ",
                "   ABA   "
            ],
            "key": {
                "A": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "B": {
                    "item": "avaritia:infinity_ingot"
                },
                "C": {
                    "item": "extendedcrafting:the_ultimate_ingot"
                },
                "D": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "E": {
                    "item": "replication:memory_chip"
                }
            },
            "result": {
                "id": 'replication:creative_memory_chip'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "ABCCDCCBA",
                "BEEEFEEEB",
                "CEGHIHGEC",
                "CEHGGGHEC",
                "DJIGKGILD",
                "CEHGGGHEC",
                "CEGHIHGEC",
                "BEEEFEEEB",
                "ABCCDCCBA"
            ],
            "key": {
                "A": {
                    "item": "avaritia:infinity"
                },
                "B": {
                    "item": "avaritia:star_fuel"
                },
                "C": {
                    "item": "kubejs:data_storage_core"
                },
                "D": {
                    "item": "replication:creative_memory_chip"
                },
                "E": {
                    "item": "extendedcrafting:ultimate_singularity"
                },
                "F": {
                    "item": "solarflux:sp_avaritia.infinity"
                },
                "G": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "H": {
                    "item": "extendedcrafting:the_ultimate_catalyst"
                },
                "I": {
                    "item": "mekanism_extras:infinite_tier_installer"
                },
                "J": {
                    "item": "mekanism:creative_fluid_tank"
                },
                "K": {
                    "item": "mekanism_extras:upgrade_creative"
                },
                "L": {
                    "item": "mekanism:creative_chemical_tank"
                }
            },
            "result": {
                "id": 'ae2:creative_storage_cell'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AAABBBAAA",
                "ACBDEDBCA",
                "ABCFDFCBA",
                "BDFGGGFDB",
                "BEDGHGDEB",
                "BDFGGGFDB",
                "ABCFDFCBA",
                "ACBDEDBCA",
                "AAABBBAAA"
            ],
            "key": {
                "A": {
                    "item": "mekanism:upgrade_speed"
                },
                "B": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "C": {
                    "item": "mekanism:upgrade_energy"
                },
                "D": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "E": {
                    "item": "avaritia:enhancement_core"
                },
                "F": {
                    "item": "avaritia:infinity_catalyst"
                },
                "G": {
                    "item": "mekanism_extras:upgrade_stack"
                },
                "H": {
                    "item": "mekanism:upgrade_anchor"
                }
            },
            "result": {
                "id": 'mekanism_extras:upgrade_creative'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "         ",
                " AAAAAAA ",
                " ABBCBBA ",
                " ABDEDBA ",
                " ACEFECA ",
                " ABDEDBA ",
                " ABBCBBA ",
                " AAAAAAA ",
                "         "
            ],
            "key": {
                "A": {
                    "item": "avaritia:infinity_nugget"
                },
                "B": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "C": {
                    "item": "ars_nouveau:creative_source_jar"
                },
                "D": {
                    "item": "avaritia:infinity_catalyst"
                },
                "E": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "F": {
                    "item": 'mekanism_extras:upgrade_creative'
                }
            },
            "result": {
                "id": 'ars_nouveau:creative_spell_book'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "         ",
                " AAAAAAA ",
                " ABBCBBA ",
                " ABDEDBA ",
                " ACEFECA ",
                " ABDEDBA ",
                " ABBCBBA ",
                " AAAAAAA ",
                "         "
            ],
            "key": {
                "A": {
                    "item": "avaritia:infinity_nugget"
                },
                "B": {
                    "item": "kubejs:universal_circuit_matrix"
                },
                "C": {
                    "item": "mysticalagradditions:neutronium_crux"
                },
                "D": {
                    "item": "avaritia:infinity_catalyst"
                },
                "E": {
                    "item": "mysticalagradditions:creative_essence"
                },
                "F": {
                    "item": 'mekanism_extras:upgrade_creative'
                }
            },
            "result": {
                "id": 'mysticalagriculture:creative_soulium_dagger'
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
                "id": 'mysticalagradditions:creative_essence'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shaped_table",
            "pattern": [
                "AB A BA",
                "BBCDCBB",
                " CEFEC ",
                "ADGHGDA",
                " CEFEC ",
                "BBCDCBB",
                "AB A BA"
            ],
            "key": {
                "A": {
                    "item": "mekanism:basic_control_circuit"
                },
                "B": {
                    "item": "mekanism:advanced_control_circuit"
                },
                "C": {
                    "item": "mekanism:elite_control_circuit"
                },
                "D": {
                    "item": "mekanism:ultimate_control_circuit"
                },
                "E": {
                    "item": "mekanism_extras:absolute_control_circuit"
                },
                "F": {
                    "item": "mekanism_extras:cosmic_control_circuit"
                },
                "G": {
                    "item": "mekanism_extras:supreme_control_circuit"
                },
                "H": {
                    "item": "mekanism_extras:infinite_control_circuit"
                }
            },
            "result": {
                "id": 'kubejs:universal_circuit_matrix'
            }
        }
    )
    event.custom(
        {
            "type": "extendedcrafting:shapeless_table",
            "ingredients": [
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:warden"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:hoglin"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:pig"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:cow"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:squid"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:cod"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:chicken"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:sheep"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:creeper"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:spider"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:bat"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:elder_guardian"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:iron_golem"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:ghast"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:phantom"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:magma_cube"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:skeleton"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:snow_golem"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:polar_bear"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:wither_skeleton"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:wither"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:rabbit"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:zombie"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:zombified_piglin"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:witch"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:guardian"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:artifacts/mimic"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:blaze"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:shulker"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:drowned"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:ender_dragon"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:enderman"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:breeze"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:evoker"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:mooshroom"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:slime"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:glow_squid"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:vindicator"
                    },
                    "type": "neoforge:components"
                },
                {
                    "items": "hostilenetworks:prediction",
                    "components": {
                        "hostilenetworks:data_model": "hostilenetworks:ars_nouveau/wilden_mobs"
                    },
                    "type": "neoforge:components"
                }
            ],
            "result": {
                "id": 'kubejs:prediction_nexus'
            }
        }
    )
})