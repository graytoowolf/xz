// priority: 0

ServerEvents.recipes(event => {

  event.remove({ output: 'ftbic:machine_block' });

  event.shaped('ftbic:machine_block', [
    'ABA',
    'CEC',
    'CDC'
  ], {
    A: '#forge:plates/iron',
    B: '#forge:plates/aluminum',
    C: 'ftbic:fuse',
    D: '#forge:gears/silver',
    E: 'ftbic:electronic_circuit'
  });
  
  event.shaped('kubejs:stone_mechanism', [
    'AB',
    'BA'
  ], {
    A: 'kubejs:stone_nugget',
    B: 'minecraft:andesite'
  });
  
  event.remove({ output: 'minecraft:furnace' });
  event.shaped('minecraft:furnace', [
    'AAA',
    'B B',
    'AAA'
  ], {
    A: 'minecraft:cobblestone',
    B: 'kubejs:stone_mechanism'
  });
  

  event.shapeless(Item.of('kubejs:stone_nugget', 9), ['minecraft:cobblestone']);

  event.shaped('ftbic:advanced_machine_block', [
    'ABA',
    'CDC',
    'ABA'
  ], {
    A: '#forge:plates/iron',
    B: 'ftbic:advanced_alloy',
    C: 'ftbic:carbon_plate',
    D: 'ftbic:machine_block'
  });
  
  event.remove({ output: 'cyclic:uncrafter' });
  event.remove({ output: 'ars_nouveau:sourcestone_large_bricks' });
  event.shaped('2x ars_nouveau:sourcestone_large_bricks', [
    'AA',
    'AA'
  ], {
    A: 'ars_nouveau:sourcestone'
  });
  
  event.shaped('2x ars_nouveau:sourcestone', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:stone_bricks',
    B: 'kubejs:stone_mechanism',
    C: 'ars_nouveau:source_gem'
  });
  
  event.remove({ id: 'botania:mana_pool' });
  event.shaped('botania:mana_pool', [
    'ACA',
    'BAB'
  ], {
    A: 'botania:livingrock',
    B: 'kubejs:glimmering_livingrock',
    C: 'kubejs:glowing_mechanism'
  });
  

event.remove({output:'exnihilosequentia:fired_crucible'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "A A",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "exnihilosequentia:porcelain_clay"
    },
    "B": {
      "item": "ftbic:reinforced_stone"
    },
    "C": {
      "type": "forge:nbt",
      "item": "ftbic:heat_exchanger",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  },
  "result": {
    "item": "exnihilosequentia:fired_crucible"
  }
})

event.remove({output:'botania:mana_spreader'})
event.shaped('botania:mana_spreader', [
  'ABA',
  'CD ',
  'ABA'
], {
  A: 'botania:livingwood_planks',
  B: 'botania:glimmering_livingwood_log',
  C: 'create:brass_casing',
  D: 'kubejs:golden_electron_tube'
});

event.remove({output:'thermal:machine_pulverizer'})
event.shaped('thermal:machine_pulverizer', [
  ' A ',
  'BCB',
  'DED'
], {
  A: 'thermal:rf_coil',
  B: 'kubejs:golden_electron_tube',
  C: 'thermal:machine_frame',
  D: 'thermal:copper_gear',
  E: 'create_sa:hydraulic_engine'
});

event.remove({output:'mekanism:crusher'})
event.shaped('mekanism:crusher', [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'thermal_extra:shellite_ingot',
  B: 'ars_nouveau:glyph_crush',
  C: 'mekanism:energy_tablet',
  D: 'mekanism:steel_casing',
  E: 'ironjetpacks:advanced_coil',
  F: 'integrateddynamics:mechanical_squeezer'
});


event.remove({output:'mekanism:enrichment_chamber'})
event.shaped('mekanism:enrichment_chamber', ['ABA', 'CDC', 'EBE'], {
  A: 'ftbic:hv_battery',
  B: 'mekanism:energy_tablet',
  C: 'mekanism:enriched_redstone',
  D: 'ftbic:advanced_machine_block',
  E: 'thermal_extra:twinite_plate'
});

event.remove({ output: 'industrialforegoing:hydroponic_bed' });
event.shaped('industrialforegoing:hydroponic_bed', ['ABA', 'CDC', 'EFE'], {
  A: 'mysticalagriculture:prudentium_growth_accelerator',
  B: 'botania:vivid_grass',
  C: 'powah:capacitor_hardened',
  D: 'botanypotstiers:elite_terracotta_botany_pot',
  E: 'thermal:rf_coil',
  F: 'industrialforegoing:machine_frame_simple'
});

event.remove({ output: 'create:empty_blaze_burner' });
event.shaped('create:empty_blaze_burner', ['A A', 'ABA', 'CDC'], {
  A: 'minecraft:chain',
  B: 'exnihilosequentia:blaze_doll',
  C: 'ars_nouveau:blaze_fiber',
  D: 'rftoolsbase:machine_base'
});

event.remove({ output: 'thermal:machine_crucible' });
event.shaped('thermal:machine_crucible', ['ABA', 'CDC', 'EFE'], {
  A: 'minecraft:nether_bricks',
  B: 'integrateddynamics:drying_basin',
  C: 'ars_nouveau:fire_essence',
  D: 'thermal:machine_frame',
  E: 'thermal_extra:twinite_gear',
  F: 'create:empty_blaze_burner'
});


event.remove({output:'thermal:machine_frame'})
event.shaped('thermal:machine_frame', [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'ftbic:advanced_alloy',
  B: 'create:precision_mechanism',
  C: 'kubejs:slate_2',
  D: 'thermal:energy_cell_frame',
  E: 'ftbic:aluminum_gear',
  F: 'thermal:redstone_servo'
});

event.shaped('thermal:machine_crafter', [
  'ABA',
  'CDC',
  'EFE'
], {
  A: 'immersiveengineering:component_electronic',
  B: 'occultism:golden_sacrificial_bowl',
  C: 'create:mechanical_crafter',
  D: 'industrialforegoing:machine_frame_simple',
  E: 'thermal:silver_gear',
  F: 'create:large_cogwheel'
});


event.remove({output:'functionalstorage:storage_controller'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    'ABA',
    'ACA',
    'DED'
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_iron"
    },
    "B": {
      "tag": "forge:gears/silver"
    },
    "C": {
      "item": "reliquary:eye_of_the_storm"
    },
    "D": 		{
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:steel\"}"
		},
    "E": {
      "item": "rftoolscontrol:graphics_card"
    }
  },
  "result": {
    "item": "functionalstorage:storage_controller"
  }
})

event.remove({output:'minecraft:hopper'})
event.shaped('2x minecraft:hopper', [
  'A A',
  'BCB',
  ' D '
], {
  A: 'immersiveengineering:component_iron',
  B: 'kubejs:iron_aluminum_ingot',
  C: 'cyclic:hopper',
  D: '#forge:rods/iron'
});

event.remove({output:'cyclic:hopper_gold'})
event.shaped('2x cyclic:hopper_gold', [
  'A A',
  'BCB',
  ' D '
], {
  A: 'kubejs:golden_electron_tube',
  B: 'thermal:electrum_ingot',
  C: 'minecraft:hopper',
  D: '#forge:rods/gold'
});

event.remove({output:'mekanism:metallurgic_infuser'})
event.shaped('mekanism:metallurgic_infuser', [
  ' A ',
  'BCB',
  'DED'
], {
  A: 'create_sa:small_fueling_tank',
  B: 'immersiveengineering:heavy_engineering',
  C: 'rftoolsbase:machine_frame',
  D: 'kubejs:darksteel_gear',
  E: 'thermal:redstone_servo'
});


event.remove({output:'mob_grinding_utils:saw'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_sword"
    },
    "B": {
      "item": "mob_grinding_utils:spikes"
    },
    "C": {
      "item": "pneumaticcraft:transfer_gadget"
    },
    "D": {
      "item": "kubejs:reinforced_obsidian"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw"
  }
})

event.remove({output:'thermal:lightning_charge'})
event.shaped('3x thermal:lightning_charge', [
  'AB',
  'C '
], {
  A: 'minecraft:gunpowder',
  B: 'minecraft:lightning_rod',
  C: '#minecraft:coals'
});


event.remove({output:'sophisticatedbackpacks:backpack'})
event.shaped('sophisticatedbackpacks:backpack', [
  'ABA',
  'CDC',
  'CEC'
], {
  A: 'sophisticatedbackpacks:upgrade_base',
  B: 'immersiveengineering:wirecoil_structure_rope',
  C: 'minecraft:leather',
  D: 'immersiveengineering:crate',
  E: 'cyclic:tile_transporter_empty'
});


event.remove({output:'thermal:redstone_servo'})
event.shaped('thermal:redstone_servo', [
  'A',
  'B',
  'A'
], {
  A: 'thermal:redstone_mushroom_spores',
  B: '#forge:rods/steel'
});


event.remove({output:'thermal:charge_bench'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    'ABA',
    'CDC',
    'ECE'
  ],
  "key": {
    "A": 		{
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:electrum\"}"
		},
    "B": {
      "item": "createaddition:tesla_coil"
    },
    "C": {
      "item": "thermal:rf_coil"
    },
    "D": {
      "item": "minecraft:redstone_block"
    },
    "E": {
      "tag": "forge:ingots/lead"
    }
  },
  "result": {
    "item": "thermal:charge_bench",
    "count": 2
  }
})


event.remove({output:'exnihilosequentia:spruce_sieve'})
event.remove({output:'exnihilosequentia:crimson_sieve'})
event.remove({output:'exnihilosequentia:oak_sieve'})
event.remove({output:'exnihilosequentia:jungle_sieve'})
event.remove({output:'exnihilosequentia:dark_oak_sieve'})
event.remove({output:'exnihilosequentia:acacia_sieve'})
event.remove({output:'exnihilosequentia:birch_sieve'})
event.remove({output:'exnihilosequentia:warped_sieve'})

event.shaped('exnihilosequentia:oak_sieve', [
  'A A',
  'ABA',
  'CDC'
], {
  A: 'botania:glimmering_livingwood',
  B: 'thermal:saw_blade',
  C: 'immersiveengineering:stick_treated',
  D: 'mekanism:alloy_infused'
});

event.remove({output:'refinedstorage:grid'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DEC",
    "FGC"
  ],
  "key": {
    "A": {
      "item": "rftoolscontrol:advanced_network_card"
    },
    "B": {
      "item": "refinedstorage:advanced_processor"
    },
    "C": {
      "item": "thermal:lumium_glass"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "type": "forge:nbt",
      "item": "computercraft:turtle_normal",
      "count": 1,
      "nbt": "{RightUpgrade:\"minecraft:crafting_table\"}"
    },
    "F": {
      "item": "rftoolscontrol:cpu_core_2000"
    },
    "G": {
      "item": "refinedstorage:improved_processor"
    }
  },
  "result": {
    "item": "refinedstorage:grid"
  }
})

event.shaped('6x tconstruct:ingot_sand_cast', [
  ' A ',
  'ABA',
  ' A '
], {
  A: 'minecraft:sand',
  B: 'minecraft:brick'
});


//-----Checked Kontrol Edildi


event.remove({output:'exnihilosequentia:string_mesh'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "supplementaries:rope"
    },
    "B": {
      "item": "immersiveengineering:hemp_fabric"
    },
    "C": {
      "item": "thermal_extra:machine_output_augment_1"
    }
  },
  "result": {
    "item": "exnihilosequentia:string_mesh"
  }
})

event.remove({output:'exnihilosequentia:flint_mesh'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:coal_ball"
    },
    "B": {
      "item": "minecraft:flint"
    },
    "C": {
      "item": "exnihilosequentia:string_mesh"
    }
  },
  "result": {
    "item": "exnihilosequentia:flint_mesh"
  }
})

event.remove({output:'exnihilosequentia:iron_mesh'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "create:minecart_coupling"
    },
    "B": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "C": {
      "item": "exnihilosequentia:flint_mesh"
    }
  },
  "result": {
    "item": "exnihilosequentia:iron_mesh"
  }
})

event.remove({output:'exnihilosequentia:diamond_mesh'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "botanicadds:mana_lapis"
    },
    "B": {
      "item": "mekanism:alloy_reinforced"
    },
    "C": {
      "item": "botania:tangleberrie"
    },
    "D": {
      "item": "exnihilosequentia:iron_mesh"
    },
    "E": {
      "item": "functionalstorage:diamond_upgrade"
    }
  },
  "result": {
    "item": "exnihilosequentia:diamond_mesh"
  }
})

event.remove({output:'exnihilosequentia:emerald_mesh'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "powah:capacitor_spirited"
    },
    "B": {
      "item": "botania:terrasteel_ingot"
    },
    "C": {
      "item": "botanicadds:gaia_shard"
    },
    "D": {
      "item": "exnihilosequentia:diamond_mesh"
    }
  },
  "result": {
    "item": "exnihilosequentia:emerald_mesh"
  }
})

event.remove({output:'exnihilosequentia:netherite_mesh'})
event.custom({"type":"minecraft:smithing",
"addition":{"item":"pneumaticcraft:unassembled_netherite_drill_bit"},
"base":{"item":"exnihilosequentia:emerald_mesh"},
"result":{"item":"exnihilosequentia:netherite_mesh"}})

event.remove({output:'industrialforegoing:mob_crusher'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "FGF"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "redstone_arsenal:flux_sword"
    },
    "C": {
      "item": "redstone_arsenal:flux_wrench"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "redstone_arsenal:flux_hammer"
    },
    "F": {
      "item": "ftbic:hv_battery"
    },
    "G": {
      "item": "twilightforest:carminite"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_crusher"
  }
})

event.remove({output:'industrialforegoing:mob_duplicator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "thermal:upgrade_augment_3"
    },
    "B": {
      "item": "kubejs:catal_ender"
    },
    "C": {
      "item": "extendedcrafting:enhanced_redstone_catalyst"
    },
    "D": {
      "item": "powah:energy_cell_blazing"
    },
    "E": {
      "item": "kubejs:de_draconic_core"
    },
    "F": {
      "item": "botania:conjuration_catalyst"
    }
  },
  "result": {
    "item": "industrialforegoing:mob_duplicator"
  }
})

event.remove({output:'industrialforegoing:stasis_chamber'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "spirit:compressed_soul_sand"
    },
    "B": {
      "item": "immersiveengineering:circuit_board"
    },
    "C": {
      "item": "twilightforest:carminite"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "mekanism:hdpe_sheet"
    },
    "F": {
      "item": "kubejs:advanced_capacitor"
    }
  },
  "result": {
    "item": "industrialforegoing:stasis_chamber"
  }
})

event.remove({output:'industrialforegoing:sewer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "cyclic:biomass"
    },
    "B": {
      "item": "immersiveengineering:conveyor_dropper"
    },
    "C": {
      "item": "cyclic:peat_unbaked"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "mekanism:electrolytic_core"
    },
    "F": {
      "item": "botania:rune_greed"
    }
  },
  "result": {
    "item": "industrialforegoing:sewer"
  }
})

event.remove({output:'industrialforegoing:plant_sower'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "naturesaura:break_prevention"
    },
    "C": {
      "item": "naturesaura:token_joy"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "E": {
      "item": "naturesaura:gold_leaf"
    },
    "F": {
      "type": "forge:nbt",
      "item": "aiotbotania:terra_hoe",
      "count": 1,
      "nbt": "{Damage:0}"
    }
  },
  "result": {
    "item": "industrialforegoing:plant_sower"
  }
})

event.remove({output:'cookingforblockheads:sink'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/iron"
    },
    "B": {
      "item": "minecraft:terracotta"
    },
    "C": {
      "item": "thermal:device_water_gen"
    },
    "D": {
      "type": "forge:nbt",
      "item": "reliquary:potion_essence",
      "count": 1,
      "nbt": "{effects:[{duration:750,name:\"minecraft:water_breathing\",potency:0}]}"
    }
  },
  "result": {
    "item": "cookingforblockheads:sink"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:uwuterium_ingot"
    }
  },
  "result": {
    "item": "kubejs:uwuterium_block"
  }
})

event.remove({output:'thermal:machine_bottler'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "create:smart_chute"
    },
    "B": {
      "item": "create:fluid_valve"
    },
    "C": {
      "item": "thermal:machine_frame"
    },
    "D": {
      "item": "kubejs:slate_1"
    },
    "E": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "thermal:machine_bottler"
  }
})

event.remove({output:'evilcraft:blood_infuser'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "tag": "forge:ingots/rose_gold"
    },
    "B": {
      "item": "ftbic:powered_furnace"
    },
    "C": {
      "item": "kubejs:soulsteel_block"
    },
    "D": {
      "tag": "evilcraft:gems/dark_power"
    }
  },
  "result": {
    "item": "evilcraft:blood_infuser"
  }
})

event.remove({output:'mekanismgenerators:heat_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "kubejs:osmium_gear"
    },
    "C": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "D": {
      "item": "laserio:logic_chip"
    },
    "E": {
      "item": "create_sa:heat_engine"
    }
  },
  "result": {
    "item": "mekanismgenerators:heat_generator"
  }
})

event.remove({output:'thermal:dynamo_magmatic'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "hexerei:blood_sigil"
    },
    "B": {
      "item": "immersiveengineering:furnace_heater"
    },
    "C": {
      "type": "forge:nbt",
      "item": "ftbic:heat_vent",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "D": {
      "item": "thermal:rf_coil"
    },
    "E": {
      "item": "create_sa:heat_engine"
    }
  },
  "result": {
    "item": "thermal:dynamo_magmatic"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:uwuterium_nugget"
    }
  },
  "result": {
    "item": "kubejs:uwuterium_ingot"
  }
})

event.remove({output:'botania:terra_plate'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DEF"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:block_of_infused_lapisium"
    },
    "B": {
      "item": "minecraft:echo_shard"
    },
    "C": {
      "item": "reaper:rune_block_duplici"
    },
    "D": {
      "item": "botania:rune_spring"
    },
    "E": {
      "item": "botania:rune_earth"
    },
    "F": {
      "item": "botania:rune_summer"
    }
  },
  "result": {
    "item": "botania:terra_plate"
  }
})

event.shapeless(
  Item.of('infused_crystals:lapisium_crystal', 9),
  [ 'infused_crystals:block_of_lapisium'])

  event.shapeless(
    Item.of('kubejs:draconium_ingot', 9),
    [ 'kubejs:draconium_block'])
  
event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "AAA",
        "AAA"
      ],
      "key": {
        "A": {
          "item": "kubejs:draconium_ingot"
        }
      },
      "result": {
        "item": "kubejs:draconium_block"
      }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:awakened_draconium_ingot"
    }
  },
  "result": {
    "item": "kubejs:awakened_draconium_block"
  }
})

event.shapeless(
  Item.of('kubejs:awakened_draconium_ingot', 9),
  [ 'kubejs:awakened_draconium_block'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DCD",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:awakened_supremium_gemstone"
    },
    "B": {
      "item": "mysticalagriculture:awakened_supremium_block"
    },
    "C": {
      "item": "kubejs:de_awakened_core"
    },
    "D": {
      "item": "kubejs:awakened_draconium_block"
    }
  },
  "result": {
    "item": "mysticalagradditions:awakened_draconium_crux",
    "count": 2
  }
})

event.remove({output:'extendedcrafting:crafting_core'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:elite_catalyst"
    },
    "B": {
      "item": "bhc:soul_heart_crystal"
    },
    "C": {
      "item": "extendedcrafting:black_iron_slate"
    },
    "D": {
      "item": "extendedcrafting:frame"
    },
    "E": {
      "item": "twilightforest:carminite"
    }
  },
  "result": {
    "item": "extendedcrafting:crafting_core"
  }
})

event.remove({output:'reliquary:apothecary_mortar'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "create:hand_crank"
    }
  },
  "result": {
    "item": "reliquary:apothecary_mortar"
  }
})

event.remove({output:'create:basin'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "B": {
      "item": "immersiveengineering:hempcrete_brick"
    },
    "C": {
      "item": "reliquary:apothecary_mortar"
    }
  },
  "result": {
    "item": "create:basin"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD",
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "kubejs:uwuterium_ingot"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "kubejs:raw_uwuterium_processor",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD",
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "botania:terrasteel_ingot"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "kubejs:raw_terrasteel_processor",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD",
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "botania:manasteel_ingot"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "kubejs:raw_manasteel_processor",
    "count": 2
  }
})

event.remove({id:'immersiveengineering:crafting/conveyor_basic'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "create:belt_connector"
    },
    "B": {
      "item": "immersiveengineering:ersatz_leather"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "immersiveengineering:conveyor_basic",
    "count": 8
  }
})

event.remove({output:'powah:capacitor_basic'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wire_aluminum"
    },
    "B": {
      "item": "evilcraft:dark_gem"
    },
    "C": {
      "item": "create:electron_tube"
    }
  },
  "result": {
    "item": "powah:capacitor_basic",
    "count": 4
  }
})

event.remove({output:'cyclic:wireless_energy'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_bars"
    },
    "B": {
      "item": "kubejs:slate_1"
    },
    "C": {
      "item": "utilitix:linked_crystal"
    },
    "D": {
      "item": "extendedcrafting:flux_star"
    }
  },
  "result": {
    "item": "cyclic:wireless_energy",
    "count": 2
  }
})

event.remove({output:'cyclic:wireless_fluid'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_bars"
    },
    "B": {
      "item": "kubejs:slate_1"
    },
    "C": {
      "item": "laserio:card_fluid"
    },
    "D": {
      "item": "extendedcrafting:flux_star"
    }
  },
  "result": {
    "item": "cyclic:wireless_fluid",
    "count": 2
  }
})

event.remove({output:'cyclic:wireless_item'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_bars"
    },
    "B": {
      "item": "kubejs:slate_1"
    },
    "C": {
      "item": "integratedtunnels:part_importer_item"
    },
    "D": {
      "item": "extendedcrafting:flux_star"
    },
    "E": {
      "item": "integratedtunnels:part_exporter_item"
    }
  },
  "result": {
    "item": "cyclic:wireless_item",
    "count": 2
  }
})

event.remove({output:'mekanism:basic_tier_installer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:silver_plate"
    },
    "B": {
      "item": "kubejs:darksteel_gear"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "E": {
      "item": "mekanism:crafting_formula"
    }
  },
  "result": {
    "item": "mekanism:basic_tier_installer"
  }
})

event.remove({output:'mekanism:advanced_tier_installer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "mekanism:advanced_control_circuit"
    },
    "C": {
      "item": "mekanism:alloy_infused"
    },
    "D": {
      "item": "mekanism:basic_tier_installer"
    },
    "E": {
      "item": "kubejs:slate_1"
    }
  },
  "result": {
    "item": "mekanism:advanced_tier_installer"
  }
})

event.remove({output:'mekanism:elite_tier_installer'})

event.remove({output:'functionalstorage:void_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:obsidian"
    },
    "B": {
      "item": "thermal:machine_null_augment"
    }
  },
  "result": {
    "item": "functionalstorage:void_upgrade"
  }
})

event.remove({output:'functionalstorage:copper_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "ftbic:dense_copper_plate"
    },
    "C": {
      "item": "naturesaura:gold_leaf"
    },
    "D": {
      "tag": "functionalstorage:drawer"
    },
    "E": 		{
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:copper\"}"
		}
  },
  "result": {
    "item": "functionalstorage:copper_upgrade"
  }
})

event.remove({output:'functionalstorage:gold_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "thermal:gold_plate"
    },
    "C": {
      "item": "createaddition:gold_spool"
    },
    "D": {
      "item": "functionalstorage:copper_upgrade"
    },
    "E": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "functionalstorage:gold_upgrade"
  }
})

event.remove({output:'waystones:waystone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:stone_bricks"
    },
    "B": {
      "type": "forge:nbt",
      "item": "waystones:warp_stone",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "C": {
      "item": "minecraft:gilded_blackstone"
    },
    "D": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "waystones:waystone"
  }
})

event.remove({output:'waystones:mossy_waystone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:mossy_stone_bricks"
    },
    "B": {
      "type": "forge:nbt",
      "item": "waystones:warp_stone",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "C": {
      "item": "minecraft:gilded_blackstone"
    },
    "D": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "waystones:mossy_waystone"
  }
})

event.remove({output:'waystones:sandy_waystone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "minecraft:chiseled_sandstone"
    },
    "B": {
      "type": "forge:nbt",
      "item": "waystones:warp_stone",
      "count": 1,
      "nbt": "{Damage:0}"
    },
    "C": {
      "item": "minecraft:gilded_blackstone"
    },
    "D": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "waystones:sandy_waystone"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:darksteel_bars",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:endsteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:endsteel_bars",
    "count": 12
  }
})

event.remove({output:'industrialforegoing:wither_builder'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "powah:reactor_blazing"
    },
    "B": {
      "item": "extendedcrafting:flux_star"
    },
    "C": {
      "item": "extradisks:withering_processor"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_supreme"
    },
    "E": {
      "item": "unusualend:gilded_pearl"
    },
    "F": {
      "item": "kubejs:lunaria_ingot"
    }
  },
  "result": {
    "item": "industrialforegoing:wither_builder"
  }
})

event.remove({output:'thermal:dynamo_stirling'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ironjetpacks:advanced_coil"
    },
    "B": {
      "item": "immersiveengineering:wirecoil_redstone"
    },
    "C": {
      "item": "thermal:iron_gear"
    },
    "D": {
      "item": "spirit:soul_slate"
    },
    "E": {
      "item": "create:steam_engine"
    }
  },
  "result": {
    "item": "thermal:dynamo_stirling"
  }
})

event.remove({output:''})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:aquamarine"
    }
  },
  "result": {
    "item": "kubejs:aquamarine_block"
  }
})

event.shapeless(
	Item.of('kubejs:aquamarine', 9), // output
	[ 'kubejs:aquamarine_block'] //input
	)

event.remove({output:'cyclic:anvil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    " C ",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "mekanism:enriched_diamond"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "projecte:repair_talisman"
    },
    "D": {
      "item": "infused_crystals:block_of_infused_ironium"
    }
  },
  "result": {
    "item": "cyclic:anvil"
  }
})

event.remove({output:'cyclic:anvil_magma'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    " C ",
    "DED"
  ],
  "key": {
    "A": {
      "item": "minecraft:magma_block"
    },
    "B": {
      "item": "mekanism:advanced_control_circuit"
    },
    "C": {
      "item": "compressium:cobblestone_3"
    },
    "D": {
      "item": "minecraft:obsidian"
    },
    "E": {
      "item": "projecte:repair_talisman"
    }
  },
  "result": {
    "item": "cyclic:anvil_magma"
  }
})

event.remove({output:'tiab:time_in_a_bottle'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "minecraft:clock"
    },
    "C": {
      "item": "kubejs:allay_fertilizer"
    },
    "D": {
      "item": "minecraft:glass_bottle"
    },
    "E": {
      "item": "kubejs:golden_electron_tube"
    },
    "F": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "tiab:time_in_a_bottle"
  }
})

event.remove({output:'hostilenetworks:sim_chamber'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "integratedterminals:menril_glass"
    },
    "B": {
      "item": "kubejs:slate_3"
    },
    "C": {
      "item": "kubejs:reinforced_obsidian"
    },
    "D": {
      "item": "unusualend:gilded_pearl"
    },
    "E": {
      "item": "extendedcrafting:ender_star"
    }
  },
  "result": {
    "item": "hostilenetworks:sim_chamber"
  }
})

event.remove({output:'hostilenetworks:loot_fabricator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:slate_3"
    },
    "B": {
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:blazing_bone\"}"
		},
    "C": {
      "item": "kubejs:reinforced_obsidian"
    },
    "D": {
      "item": "kubejs:glowing_mechanism"
    },
    "E": {
      "item": "botania:rune_greed"
    }
  },
  "result": {
    "item": "hostilenetworks:loot_fabricator"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "mysticalagriculture:uwuterium_essence"
    }
  },
  "result": {
    "item": "kubejs:uwuterium_ingot"
  }
})

event.remove({output:'fluxnetworks:flux_point'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "fluxnetworks:flux_core"
    },
    "C": {
      "item": "fluxnetworks:flux_block"
    },
    "D": {
      "item": "kubejs:darksteel_gear"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_point",
    "count": 1
  }
})

event.remove({output:'fluxnetworks:flux_plug'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "fluxnetworks:flux_core"
    },
    "C": {
      "item": "fluxnetworks:flux_block"
    },
    "D": {
      "item": "kubejs:endsteel_gear"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_plug",
    "count": 1
  }
})

event.remove({output:'fluxnetworks:flux_block'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "fluxnetworks:flux_dust"
    },
    "B": {
      "item": "fluxnetworks:flux_core"
    },
    "C": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "fluxnetworks:flux_block"
  }
})

event.remove({output:'extradisks:raw_withering_processor'})
event.remove({output:'extradisks:withering_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "extendedcrafting:ender_star"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "extradisks:raw_withering_processor",
    "count": 2
  }
})

event.remove({output:'refinedstorage:raw_basic_processor'})
event.remove({output:'refinedstorage:basic_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "refinedstorage:raw_basic_processor",
    "count": 2
  }
})

event.remove({output:'refinedstorage:raw_improved_processor'})
event.remove({output:'refinedstorage:improved_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "kubejs:infused_goldium"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "refinedstorage:raw_improved_processor",
    "count": 2
  }
})

event.remove({output:'refinedstorage:raw_advanced_processor'})
event.remove({output:'refinedstorage:advanced_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "CD"
  ],
  "key": {
    "A": {
      "item": "kubejs:chip2"
    },
    "B": {
      "item": "infused_crystals:infused_diamondium_crystal"
    },
    "C": {
      "tag": "forge:silicon"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "refinedstorage:raw_advanced_processor",
    "count": 2
  }
})

event.remove({output:'extrastorage:raw_neural_processor'})
event.remove({output:'extrastorage:neural_processor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "BDB",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:advanced_processor"
    },
    "B": {
      "item": "kubejs:charged_enriched_iron"
    },
    "C": {
      "item": "refinedstorage:improved_processor"
    },
    "D": {
      "item": "minecraft:crafting_table"
    },
    "E": {
      "item": "kubejs:reinforced_obsidian"
    },
    "F": {
      "item": "kubejs:chip2"
    }
  },
  "result": {
    "item": "extrastorage:raw_neural_processor",
    "count": 2
  }
})

event.shapeless(
	Item.of('kubejs:goldium', 9), // output
	[ 'kubejs:goldium_block'] //input
	)

event.shapeless(
	Item.of('kubejs:goldium_block'), // output
	[ '9x kubejs:goldium'] //input
	)

event.shapeless(
	Item.of('kubejs:infused_goldium', 9), // output
	[ 'kubejs:infused_goldium_block'] //input
	)

event.shapeless(
	Item.of('kubejs:infused_goldium_block'), // output
	[ '9x kubejs:infused_goldium'] //input
	)

  event.remove({output:'gag:time_sand_pouch'})





event.remove({output:'mekanism:digital_miner'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_gear"
    },
    "B": {
      "item": "infused_crystals:infused_coalium_crystal"
    },
    "C": {
      "item": "mekanism:logistical_sorter"
    },
    "D": {
      "item": "mekanism:steel_casing"
    },
    "E": {
      "item": "mekanism:teleportation_core"
    },
    "F": {
      "item": "cyclic:wireless_energy"
    }
  },
  "result": {
    "item": "mekanism:digital_miner"
  }
})

event.remove({output:'refinedstorage:cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:carbon_plate"
    },
    "B": {
      "item": "kubejs:charged_enriched_iron"
    },
    "C": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "D": {
      "item": "powah:energy_cable_basic"
    }
  },
  "result": {
    "item": "refinedstorage:cable",
    "count": 24
  }
})

event.remove({output:'refinedstorage:disk_drive'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "mekanism:energy_tablet"
    },
    "C": {
      "item": "kubejs:charged_enriched_iron"
    },
    "D": {
      "item": "refinedstorage:machine_casing"
    },
    "E": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    }
  },
  "result": {
    "item": "refinedstorage:disk_drive"
  }
})

event.remove({output:'refinedstorage:crafting_grid'})
event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  " A ",
  "BCB",
  " A "
],
"key": {
  "A": {
    "item": "kubejs:manasteel_processor"
  },
  "B": {
    "item": "minecraft:crafting_table"
  },
  "C": {
    "item": "refinedstorage:grid"
  }
},
"result": {
  "item": "refinedstorage:crafting_grid"
}
})

event.remove({output:'refinedstorage:pattern_grid'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "refinedstorage:range_upgrade"
    },
    "B": {
      "item": "refinedstorage:pattern"
    },
    "C": {
      "item": "refinedstorage:grid"
    },
    "D": {
      "item": "powah:ender_gate_niotic"
    }
  },
  "result": {
    "item": "refinedstorage:pattern_grid"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:soulsteel_nugget"
    }
  },
  "result": {
    "item": "kubejs:soulsteel_ingot"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:soulsteel_ingot"
    }
  },
  "result": {
    "item": "kubejs:soulsteel_block"
  }
})

event.shapeless(
Item.of('kubejs:soulsteel_nugget', 9), // output
[ 'kubejs:soulsteel_ingot'] //input
)

 event.shapeless(
  Item.of('kubejs:soulsteel_ingot', 9), // output
  [ 'kubejs:soulsteel_block'] //input
  )

event.remove({output:'thermal:flux_capacitor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    " E "
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "tconstruct:hepatizon_ingot"
    },
    "C": {
      "item": "infused_crystals:infused_lapisium_crystal"
    },
    "D": {
      "item": "thermal:rf_potato"
    },
    "E": {
      "item": "thermal:rf_coil"
    }
  },
  "result": {
    "item": "thermal:flux_capacitor"
  }
})

event.remove({output:'industrialforegoing:machine_frame_pity'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "ftbic:carbon_plate"
    },
    "B": {
      "item": "botania:livingwood_log"
    },
    "C": {
      "item": "kubejs:dense_iron_plate"
    },
    "D": {
      "item": "minecraft:redstone_block"
    },
    "E": {
      "item": "thermal:cured_rubber"
    }
  },
  "result": {
    "item": "industrialforegoing:machine_frame_pity"
  }
})

event.remove({output:'exmachinis:flux_sieve'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "powah:dielectric_paste"
    },
    "B": {
      "item": "ftbic:advanced_machine_block"
    },
    "C": {
      "item": "powah:dielectric_rod"
    },
    "D": {
      "item": "exnihilosequentia:oak_sieve"
    },
    "E": {
      "item": "mekanism:elite_control_circuit"
    }
  },
  "result": {
    "item": "exmachinis:flux_sieve"
  }
})

event.remove({output:'ad_astra:coal_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:iron_plate"
    },
    "B": {
      "item": "thermal:lapis_gear"
    },
    "C": {
      "item": "kubejs:stone_mechanism"
    },
    "D": {
      "item": "minecraft:furnace"
    },
    "E": {
      "item": "create:steam_engine"
    }
  },
  "result": {
    "item": "ad_astra:coal_generator"
  }
})

event.remove({output:'immersiveengineering:cloche'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "thermal:phytogro"
    },
    "C": {
      "item": "farmersdelight:fruit_salad"
    },
    "D": {
      "tag": "forge:treated_wood"
    },
    "E": {
      "item": "immersiveengineering:component_steel"
    }
  },
  "result": {
    "item": "immersiveengineering:cloche"
  }
})

event.remove({output:'hostilenetworks:deep_learner'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCD",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "tconstruct:hepatizon_ingot"
    },
    "B": {
      "item": "immersiveengineering:dust_hop_graphite"
    },
    "C": {
      "item": "reaper:soul_catalyst"
    },
    "D": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "hostilenetworks:deep_learner"
  }
})

event.remove({output:'extendedcrafting:handheld_table'})
event.remove({output:'cyclic:crafting_stick'})
event.remove({output:'cyclic:crafting_bag'})

event.remove({output:'ftbic:electronic_circuit'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:lv_cable"
    },
    "B": {
      "item": "kubejs:plate_darksteel"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "redstone_arsenal:flux_ingot"
    }
  },
  "result": {
    "item": "ftbic:electronic_circuit",
    "count": 4
  }
})

event.remove({output:'create:mechanical_saw'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "kubejs:plate_darksteel"
    },
    "B": {
      "item": "thermal:saw_blade"
    },
    "C": {
      "item": "create:gantry_shaft"
    },
    "D": {
      "item": "create:andesite_casing"
    }
  },
  "result": {
    "item": "create:mechanical_saw"
  }
})

event.remove({output:'thermal:saw_blade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:stick_steel"
    },
    "B": {
      "item": "ars_nouveau:glyph_crush"
    },
    "C": {
      "item": "kubejs:plate_darksteel"
    },
    "D": {
      "item": "immersiveengineering:sawblade"
    }
  },
  "result": {
    "item": "thermal:saw_blade"
  }
})

event.remove({output:'exnihilosequentia:mangrove_sieve'})

event.remove({output:'ftbic:geothermal_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ftbic:reinforced_glass"
    },
    "B": {
      "item": "ftbic:fluid_cell"
    },
    "C": {
      "item": "botania:thermalily"
    },
    "D": {
      "item": "create:blaze_cake"
    },
    "E": {
      "item": "ftbic:basic_generator"
    }
  },
  "result": {
    "item": "ftbic:geothermal_generator"
  }
})

event.remove({output:'ad_astra:nasa_workbench'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:assembly_io_unit_export"
    },
    "B": {
      "item": "ftbic:iridium_circuit"
    },
    "C": {
      "item": "mininggadgets:modificationtable"
    },
    "D": {
      "item": "immersiveengineering:rs_engineering"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_supreme"
    }
  },
  "result": {
    "item": "ad_astra:nasa_workbench"
  }
})

event.remove({output:'ftbic:basic_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " D "
  ],
  "key": {
    "A": {
      "item": "ftbic:lv_battery"
    },
    "B": {
      "item": "ftbic:industrial_grade_metal"
    },
    "C": {
      "tag": "forge:gears/silver"
    },
    "D": {
      "item": "ironfurnaces:iron_furnace"
    }
  },
  "result": {
    "item": "ftbic:basic_generator"
  }
})

event.remove({id:'silentgear:bronze_ingot'})

event.remove({output:'botania:runic_altar'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "botania:livingrock"
    },
    "B": {
      "item": "kubejs:glimmering_livingrock"
    },
    "C": {
      "tag": "forge:gems/mana_diamond"
    }
  },
  "result": {
    "item": "botania:runic_altar"
  }
})

event.remove({output:'torchmaster:megatorch'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EDE"
  ],
  "key": {
    "A": {
      "item": "twilightforest:torchberries"
    },
    "B": {
      "item": "ars_nouveau:magelight_torch"
    },
    "C": {
      "item": "botania:mana_diamond"
    },
    "D": {
      "item": "botania:livingwood_log"
    },
    "E": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "torchmaster:megatorch"
  }
})

event.remove({output:'torchmaster:dreadlamp'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "C": {
      "item": "glassential:glass_light"
    },
    "D": {
      "item": "pneumaticcraft:compressed_iron_gear"
    }
  },
  "result": {
    "item": "torchmaster:dreadlamp"
  }
})

event.remove({ type: 'immersiveengineering:sawmill'})

event.remove({output:'infused_crystals:infusedcoaliumshovel'})

event.remove({output:'minecraft:clock'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "botania:cosmetic_clock_eye"
    }
  },
  "result": {
    "item": "minecraft:clock"
  }
})

event.remove({output:'thermal:machine_refinery'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "create:tree_fertilizer"
    },
    "C": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "D": {
      "item": "thermal:steel_gear"
    },
    "E": {
      "item": "thermal:redstone_servo"
    }
  },
  "result": {
    "item": "thermal:machine_refinery"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "kubejs:osmium_plate"
    },
    "B": {
      "item": "mekanism:nugget_osmium"
    }
  },
  "result": {
    "item": "kubejs:osmium_gear"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ae2:fluix_crystal"
    },
    "B": {
      "item": "ae2:fluix_dust"
    },
    "C": {
      "item": "ae2:annihilation_core"
    },
    "D": {
      "item": "kubejs:slate_2"
    },
    "E": {
      "item": "ae2:formation_core"
    }
  },
  "result": {
    "item": "kubejs:slate_fluix"
  }
})

//Bucket
event.remove({output:'minecraft:bucket'})
event.shaped('minecraft:bucket', [
'ABA',
' A '
], {
A: 'thermal:iron_plate',
B: 'immersiveengineering:hammer'}).damageIngredient(Item.of('immersiveengineering:hammer'))

event.remove({id:'silentgear:iron_rod'})
event.remove({id:'ad_astra:recipes/iron_rod'})

event.remove({output:'minecraft:flint_and_steel'})
event.shapeless(
  Item.of('minecraft:flint_and_steel'), ['minecraft:iron_ingot', 'kubejs:flint_handle'])

event.remove({output:'cyclic:melter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "solarflux:furnace_upgrade"
    },
    "B": {
      "item": "solarflux:blazing_coating"
    },
    "C": {
      "item": "ironfurnaces:silver_furnace"
    },
    "D": {
      "item": "minecraft:obsidian"
    },
    "E": {
      "item": "minecraft:shroomlight"
    }
  },
  "result": {
    "item": "cyclic:melter"
  }
})

event.remove({output:'utilitix:linked_crystal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "utilitix:linked_crystal",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "utilitix:linked_crystal",
    "count": 1
  }
})

event.remove({output:'industrialforegoing:fluid_extractor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "minecraft:light_weighted_pressure_plate"
    },
    "C": {
      "item": "ftbic:advanced_circuit"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_pity"
    },
    "E": {
      "item": "thermal:device_tree_extractor"
    }
  },
  "result": {
    "item": "industrialforegoing:fluid_extractor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "thermal:lapis_gear"
    },
    "B": {
      "item": "kubejs:blue_plastic"
    },
    "C": {
      "item": "minecraft:slime_ball"
    },
    "D": {
      "item": "ftbic:advanced_circuit"
    }
  },
  "result": {
    "item": "pneumaticcraft:capacitor"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "tag": "forge:plastic"
    }
  },
  "result": {
    "item": "pneumaticcraft:transistor"
  }
})

event.remove({output:'ae2:security_station'})
event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "CEC"
],
"key": {
  "A": {
  "item": "ae2:memory_card_orange"
  },
  "B": {
  "item": "ae2:chest"
  },
  "C": {
  "item": "kubejs:charged_enriched_iron"
  },
  "D": {
  "item": "ae2:cell_component_256k"
  },
  "E": {
  "item": "pneumaticcraft:network_io_port"
  }
},
"result": {
  "item": "ae2:security_station"
}
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "BB",
  ],
  "key": {
    "A": {
      "item": "minecraft:brown_mushroom"
    },
    "B": {
      "item": "create:tree_fertilizer"
    }
  },
  "result": {
    "item": "minecraft:brown_mushroom",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "BB",
  ],
  "key": {
    "A": {
      "item": "minecraft:red_mushroom"
    },
    "B": {
      "item": "create:tree_fertilizer"
    }
  },
  "result": {
    "item": "minecraft:red_mushroom",
    "count": 4
  }
})

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:acacia_log"
	  },
	  "B": {
		"item": "minecraft:acacia_planks"
	  },
	  "C": {
		"item": "exnihilosequentia:fired_crucible"
	  }
	},
	"result": {
	  "item": "exnihilosequentia:acacia_crucible"
	}
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
      "item": "minecraft:birch_log"
      },
      "B": {
      "item": "minecraft:birch_planks"
      },
      "C": {
      "item": "exnihilosequentia:fired_crucible"
      }
    },
    "result": {
      "item": "exnihilosequentia:birch_crucible"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
        "item": "minecraft:oak_log"
        },
        "B": {
        "item": "minecraft:oak_planks"
        },
        "C": {
        "item": "exnihilosequentia:fired_crucible"
        }
      },
      "result": {
        "item": "exnihilosequentia:oak_crucible"
      }
      })

//

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:dark_oak_log"
	  },
	  "B": {
		"item": "minecraft:dark_oak_planks"
	  },
	  "C": {
		"item": "exnihilosequentia:fired_crucible"
	  }
	},
	"result": {
	  "item": "exnihilosequentia:dark_oak_crucible"
	}
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
      "item": "minecraft:spruce_log"
      },
      "B": {
      "item": "minecraft:spruce_planks"
      },
      "C": {
      "item": "exnihilosequentia:fired_crucible"
      }
    },
    "result": {
      "item": "exnihilosequentia:spruce_crucible"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ABA"
      ],
      "key": {
        "A": {
        "item": "minecraft:mangrove_log"
        },
        "B": {
        "item": "minecraft:mangrove_planks"
        },
        "C": {
        "item": "exnihilosequentia:fired_crucible"
        }
      },
      "result": {
        "item": "exnihilosequentia:mangrove_crucible"
      }
      })

//

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:jungle_log"
	  },
	  "B": {
		"item": "minecraft:jungle_planks"
	  },
	  "C": {
		"item": "exnihilosequentia:fired_crucible"
	  }
	},
	"result": {
	  "item": "exnihilosequentia:jungle_crucible"
	}
  })

  event.remove({output:'immersiveengineering:cokebrick'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "tconstruct:seared_brick"
      },
      "B": {
        "item": "exnihilosequentia:porcelain_clay"
      },
      "C": {
        "tag": "forge:sandstone"
      }
    },
    "result": {
      "item": "immersiveengineering:cokebrick",
      "count": 3
    }
  })

  event.remove({output:'immersiveengineering:blastbrick'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:nether_bricks"
      },
      "B": {
        "item": "kubejs:netherrack_piece"
      },
      "C": {
        "item": "architects_palette:molten_nether_bricks"
      }
    },
    "result": {
      "item": "immersiveengineering:blastbrick",
      "count": 3
    }
  })

  event.remove({output:'ftbic:advanced_machine_block'})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA"
    ],
    "key": {
      "A": {
        "item": "mysticalagriculture:rubber_essence"
      }
    },
    "result": {
      "item": "industrialforegoing:plastic",
      "count": 3
    }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "A A",
      "AAA"
    ],
    "key": {
      "A": {
        "tag": "minecraft:planks"
      }
    },
    "result": {
      "item": "minecraft:chest"
    }
  })

  event.remove({id:'simple_recipes:oak_log_chest'})
  event.remove({id:'cyclic:crafting/chest'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "A A",
      "AAA"
    ],
    "key": {
      "A": {
        "tag": "minecraft:logs"
      }
    },
    "result": {
      "item": "minecraft:chest",
      "count": 2
    }
  })

  event.remove({id:'quark:tweaks/crafting/utility/chests/oak_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/birch_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/spruce_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/jungle_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/acacia_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/dark_oak_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/crimson_chest_wood'})
  event.remove({id:'quark:tweaks/crafting/utility/chests/warped_chest_wood'})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      " AB",
      "ACA",
      "BA "
    ],
    "key": {
      "A": {
        "item": "silentgear:blaze_gold_nugget"
      },
      "B": {
        "item": "fluxnetworks:flux_dust"
      },
      "C": {
        "item": "thermal:electrum_ingot"
      }
    },
    "result": {
      "item": "kubejs:basic_capacitor"
    }
  })

  event.remove({id:'ae2:network/blocks/energy_energy_acceptor'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "immersiveengineering:sheetmetal_iron"
      },
      "B": {
        "item": "ae2:quartz_vibrant_glass"
      },
      "C": {
        "item": "kubejs:advanced_capacitor"
      },
      "D": {
        "item": "rftoolsbase:machine_frame"
      }
    },
    "result": {
      "item": "ae2:energy_acceptor"
    }
  })

  event.remove({output:'sophisticatedstorage:iron_chest'})
  event.remove({output:'sophisticatedstorage:gold_chest'})
  event.remove({output:'sophisticatedstorage:diamond_chest'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:chest",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_chest",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_chest",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_chest",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_chest",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_chest",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.remove({output:'sophisticatedstorage:basic_to_iron_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "item": "minecraft:redstone_torch"
    }
  },
  "result": {
    "item": "sophisticatedstorage:basic_to_iron_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:basic_to_gold_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "sophisticatedstorage:basic_to_iron_tier_upgrade"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "sophisticatedstorage:basic_to_gold_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:basic_to_diamond_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "item": "sophisticatedstorage:basic_to_gold_tier_upgrade"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "item": "sophisticatedstorage:basic_to_diamond_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:iron_to_gold_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "sophisticatedstorage:iron_to_gold_tier_upgrade"
  }
})

event.remove({output:'sophisticatedstorage:iron_to_diamond_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "item": "sophisticatedstorage:iron_to_gold_tier_upgrade"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "item": "sophisticatedstorage:iron_to_diamond_tier_upgrade"
  }
})


event.remove({output:'sophisticatedstorage:gold_to_diamond_tier_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "item": "thermal:gold_plate"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "item": "sophisticatedstorage:gold_to_diamond_tier_upgrade"
  }
})

event.remove({id:'unusualend:end_crystal_via_chiseled_glass'})

event.remove({id:'functionalstorage:oak_drawer_alternate_x1'})
event.remove({id:'functionalstorage:oak_drawer_alternate_x2'})
event.remove({id:'functionalstorage:oak_drawer_alternate_x4'})

event.remove({id:'create:milling/coal'})

event.remove({output:'ae2:fluix_glass_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:carbon_plate"
    },
    "B": {
      "item": "ae2:fluix_crystal"
    },
    "C": {
      "item": "ae2:fluix_dust"
    },
    "D": {
      "item": "powah:energy_cable_basic"
    }
  },
  "result": {
    "item": "ae2:fluix_glass_cable",
    "count": 24
  }
})

event.remove({id:'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye'})

event.remove({output:'industrialforegoing:ore_laser_base'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DED",
    "FGF"
  ],
  "key": {
    "A": {
      "item": "ae2:annihilation_core"
    },
    "B": {
      "item": "tconstruct:hepatizon_block"
    },
    "C": {
      "item": "ae2:formation_core"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "F": {
      "item": "kubejs:advanced_capacitor"
    },
    "G": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "industrialforegoing:ore_laser_base"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "DED",
    "FGF"
  ],
  "key": {
    "A": {
      "item": "kubejs:charged_enriched_iron"
    },
    "B": {
      "item": "tconstruct:hepatizon_block"
    },
    "D": {
      "item": "mekanism:alloy_atomic"
    },
    "E": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "F": {
      "item": "kubejs:advanced_capacitor"
    },
    "G": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "industrialforegoing:ore_laser_base"
  }
})

event.remove({output:'cyclic:generator_fuel'})


event.remove({output:'botania:alfheim_portal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ADA"
  ],
  "key": {
    "A": {
      "tag": "botania:livingwood_logs"
    },
    "B": {
      "item": "kubejs:terrarium_ingot"
    },
    "C": {
      "item": "kubejs:terrasteel_processor"
    },
    "D": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "botania:alfheim_portal"
  }
})

event.remove({output:'minecraft:ender_eye'})
event.shapeless(
	Item.of('minecraft:ender_eye'), // output
	[ 'minecraft:ender_pearl', 'silentgear:blazing_dust'])

event.shapeless(
	Item.of('infused_crystals:redstonium_crystal', 9), // output
	[ 'infused_crystals:block_of_redstonium'] //input
	)

  event.shapeless(
    Item.of('infused_crystals:ironium_crystal', 9), // output
    [ 'infused_crystals:block_of_ironium'] //input
  )

  event.shapeless(
    Item.of('infused_crystals:coalium_crystal', 9), // output
    [ 'infused_crystals:block_of_coalium'] //input
    )

    event.shapeless(
      Item.of('infused_crystals:diamondium_crystal', 9), // output
      [ 'infused_crystals:block_of_diamondium'] //input
      )

event.shapeless(
	Item.of('infused_crystals:emeraldium_crystal', 9), // output
	[ 'infused_crystals:block_of_emeraldium'] //input
	)

//

event.remove({output:'mekanism:basic_enriching_factory'})
event.shapeless(
	Item.of('mekanism:basic_enriching_factory'), // output
	[ 'mekanism:enrichment_chamber', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_enriching_factory'})
event.shapeless(
	Item.of('mekanism:advanced_enriching_factory'), // output
	[ 'mekanism:basic_enriching_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_enriching_factory'})
event.shapeless(
	Item.of('mekanism:elite_enriching_factory'), // output
	[ 'mekanism:advanced_enriching_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_enriching_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_enriching_factory'), // output
	[ 'mekanism:elite_enriching_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_smelting_factory'})
event.shapeless(
	Item.of('mekanism:basic_smelting_factory'), // output
	[ 'mekanism:energized_smelter', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_smelting_factory'})
event.shapeless(
	Item.of('mekanism:advanced_smelting_factory'), // output
	[ 'mekanism:basic_smelting_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_smelting_factory'})
event.shapeless(
	Item.of('mekanism:elite_smelting_factory'), // output
	[ 'mekanism:advanced_smelting_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_smelting_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_smelting_factory'), // output
	[ 'mekanism:elite_smelting_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_crushing_factory'})
event.shapeless(
	Item.of('mekanism:basic_crushing_factory'), // output
	[ 'mekanism:crusher', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_crushing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_crushing_factory'), // output
	[ 'mekanism:basic_crushing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_crushing_factory'})
event.shapeless(
	Item.of('mekanism:elite_crushing_factory'), // output
	[ 'mekanism:advanced_crushing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_crushing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_crushing_factory'), // output
	[ 'mekanism:elite_crushing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_compressing_factory'})
event.shapeless(
	Item.of('mekanism:basic_compressing_factory'), // output
	[ 'mekanism:osmium_compressor', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_compressing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_compressing_factory'), // output
	[ 'mekanism:basic_compressing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_compressing_factory'})
event.shapeless(
	Item.of('mekanism:elite_compressing_factory'), // output
	[ 'mekanism:advanced_compressing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_compressing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_compressing_factory'), // output
	[ 'mekanism:elite_compressing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_combining_factory'})
event.shapeless(
	Item.of('mekanism:basic_combining_factory'), // output
	[ 'mekanism:combiner', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_combining_factory'})
event.shapeless(
	Item.of('mekanism:advanced_combining_factory'), // output
	[ 'mekanism:basic_combining_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_combining_factory'})
event.shapeless(
	Item.of('mekanism:elite_combining_factory'), // output
	[ 'mekanism:advanced_combining_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_combining_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_combining_factory'), // output
	[ 'mekanism:elite_combining_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_purifying_factory'})
event.shapeless(
	Item.of('mekanism:basic_purifying_factory'), // output
	[ 'mekanism:purification_chamber', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_purifying_factory'})
event.shapeless(
	Item.of('mekanism:advanced_purifying_factory'), // output
	[ 'mekanism:basic_purifying_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_purifying_factory'})
event.shapeless(
	Item.of('mekanism:elite_purifying_factory'), // output
	[ 'mekanism:advanced_purifying_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_purifying_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_purifying_factory'), // output
	[ 'mekanism:elite_purifying_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_injecting_factory'})
event.shapeless(
	Item.of('mekanism:basic_injecting_factory'), // output
	[ 'mekanism:chemical_injection_chamber', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_injecting_factory'})
event.shapeless(
	Item.of('mekanism:advanced_injecting_factory'), // output
	[ 'mekanism:basic_injecting_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_injecting_factory'})
event.shapeless(
	Item.of('mekanism:elite_injecting_factory'), // output
	[ 'mekanism:advanced_injecting_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_injecting_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_injecting_factory'), // output
	[ 'mekanism:elite_injecting_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_infusing_factory'})
event.shapeless(
	Item.of('mekanism:basic_infusing_factory'), // output
	[ 'mekanism:metallurgic_infuser', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_infusing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_infusing_factory'), // output
	[ 'mekanism:basic_infusing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_infusing_factory'})
event.shapeless(
	Item.of('mekanism:elite_infusing_factory'), // output
	[ 'mekanism:advanced_infusing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_infusing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_infusing_factory'), // output
	[ 'mekanism:elite_infusing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.remove({output:'mekanism:basic_sawing_factory'})
event.shapeless(
	Item.of('mekanism:basic_sawing_factory'), // output
	[ 'mekanism:precision_sawmill', 'mekanism:basic_tier_installer'] //input
)

event.remove({output:'mekanism:advanced_sawing_factory'})
event.shapeless(
	Item.of('mekanism:advanced_sawing_factory'), // output
	[ 'mekanism:basic_sawing_factory', 'mekanism:advanced_tier_installer'] //input
)

event.remove({output:'mekanism:elite_sawing_factory'})
event.shapeless(
	Item.of('mekanism:elite_sawing_factory'), // output
	[ 'mekanism:advanced_sawing_factory', 'mekanism:elite_tier_installer'] //input
)

event.remove({output:'mekanism:ultimate_sawing_factory'})
event.shapeless(
	Item.of('mekanism:ultimate_sawing_factory'), // output
	[ 'mekanism:elite_sawing_factory', 'mekanism:ultimate_tier_installer'] //input
)

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_nugget"
    }
  },
  "result": {
    "item": "kubejs:darksteel_ingot"
  }
})

event.shapeless(Item.of('create:brass_sheet'),['immersiveengineering:hammer','#forge:ingots/brass','#forge:ingots/brass'])

event.remove({id:'twilightforest:wood/sorting_from_wood_planks'})
event.remove({id:'twilightforest:wood/sorting_from_stripped_planks'})
event.remove({id:'twilightforest:wood/sorting_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/sorting_planks'})

event.shapeless(
	Item.of('twilightforest:sorting_planks', 2), // output
	[ '#twilightforest:sortwood_logs'] //input
)

event.remove({id:'twilightforest:wood/twilight_oak_from_wood_planks'})
event.remove({id:'twilightforest:wood/twilight_oak_from_stripped_planks'})
event.remove({id:'twilightforest:wood/twilight_oak_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/twilight_oak_planks'})

event.shapeless(
	Item.of('twilightforest:twilight_oak_planks', 2), // output
	[ '#twilightforest:twilight_oak_logs'] //input
)

event.remove({id:'twilightforest:wood/canopy_from_wood_planks'})
event.remove({id:'twilightforest:wood/canopy_from_stripped_planks'})
event.remove({id:'twilightforest:wood/canopy_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/canopy_planks'})

event.shapeless(
	Item.of('twilightforest:canopy_planks', 2), // output
	[ '#twilightforest:canopy_logs'] //input
)

event.remove({id:'twilightforest:wood/darkwood_from_wood_planks'})
event.remove({id:'twilightforest:wood/darkwood_from_stripped_planks'})
event.remove({id:'twilightforest:wood/darkwood_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/darkwood_planks'})

event.shapeless(
	Item.of('twilightforest:dark_planks', 2), // output
	[ '#twilightforest:darkwood_logs'] //input
)

event.remove({id:'twilightforest:wood/mangrove_from_wood_planks'})
event.remove({id:'twilightforest:wood/mangrove_from_stripped_planks'})
event.remove({id:'twilightforest:wood/mangrove_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/mangrove_planks'})

event.shapeless(
	Item.of('twilightforest:mangrove_planks', 2), // output
	[ '#twilightforest:mangrove_logs'] //input
)

event.remove({id:'minecraft:mangrove_planks'})

event.shapeless(
	Item.of('minecraft:mangrove_planks', 2), // output
	[ '#minecraft:mangrove_logs'] //input
)






event.remove({id:'twilightforest:wood/transformation_from_wood_planks'})
event.remove({id:'twilightforest:wood/transformation_from_stripped_planks'})
event.remove({id:'twilightforest:wood/transformation_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/transformation_planks'})

event.shapeless(
	Item.of('twilightforest:transformation_planks', 2), // output
	[ '#twilightforest:transwood_logs'] //input
)

event.remove({id:'twilightforest:wood/mining_from_wood_planks'})
event.remove({id:'twilightforest:wood/mining_from_stripped_planks'})
event.remove({id:'twilightforest:wood/mining_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/mining_planks'})

event.shapeless(
	Item.of('twilightforest:mining_planks', 2), // output
	[ '#twilightforest:mining_logs'] //input
)

event.remove({id:'twilightforest:wood/time_from_wood_planks'})
event.remove({id:'twilightforest:wood/time_from_stripped_planks'})
event.remove({id:'twilightforest:wood/time_from_stripped_wood_planks'})
event.remove({id:'twilightforest:wood/time_planks'})

event.shapeless(
	Item.of('twilightforest:time_planks', 2), // output
	[ '#twilightforest:timewood_logs'] //input
)

event.remove({output:'refinedstorage:machine_casing'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "kubejs:charged_enriched_iron"
    },
    "C": {
      "item": "powah:dielectric_casing"
    },
    "D": {
      "item": "kubejs:advanced_capacitor"
    }
  },
  "result": {
    "item": "refinedstorage:machine_casing"
  }
})

event.shapeless(
	Item.of('minecraft:slime_ball'), // output
	[ '#forge:crops/rice','#forge:crops/rice'] //input
)

event.remove({id:'ae2:network/blocks/pattern_providers_interface'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "kubejs:iron_aluminum_ingot"
    },
    "B": {
      "item": "immersiveengineering:component_electronic"
    },
    "C": {
      "item": "ae2:annihilation_core"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "ae2:formation_core"
    },
    "F": {
      "item": "kubejs:slate_fluix"
    }
  },
  "result": {
    "item": "ae2:pattern_provider"
  }
})

event.remove({output:'laserio:overclocker_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    },
    "D": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "laserio:overclocker_card"
  }
})

event.remove({id:'integrateddynamics:crafting/menril_planks'})
event.shapeless(
	Item.of('integrateddynamics:menril_planks', 2), // output
	[ '#integrateddynamics:menril_logs'] //input
)

event.remove({id:'evilcraft:crafting/undead_planks'})
event.shapeless(
	Item.of('evilcraft:undead_planks', 2), // output
	[ '#evilcraft:undead_logs'] //input
)

event.shapeless(Item.of('kubejs:osmium_plate'),['immersiveengineering:hammer','mekanism:ingot_osmium','mekanism:ingot_osmium'])

event.remove({output:'ironfurnaces:iron_furnace'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "ABA"
	],
	"key": {
	  "A": {
		"item": "minecraft:iron_ingot"
	  },
	  "B": {
		"item": "create:minecart_coupling"
	  },
	  "C": {
		"item": "immersiveengineering:stick_iron"
	  },
	  "D": {
		"item": "minecraft:furnace"
	  }
	},
	"result": {
	  "item": "ironfurnaces:iron_furnace"
	}
  })

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:minecart_coupling"
    },
    "C": {
      "item": "ironfurnaces:copper_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:iron_furnace"
  }
})

event.remove({output:'ironfurnaces:copper_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "thermal:copper_plate"
    },
    "C": {
      "item": "minecraft:furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:copper_furnace"
  }
})

event.remove({output:'ironfurnaces:gold_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "ironfurnaces:iron_furnace"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "ironfurnaces:gold_furnace"
  }
})

event.remove({output:'ironfurnaces:diamond_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "ironfurnaces:gold_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:diamond_furnace"
  }
})

event.remove({output:'ironfurnaces:emerald_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:emerald"
    },
    "B": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    },
    "C": {
      "item": "powah:crystal_spirited"
    },
    "D": {
      "item": "ironfurnaces:diamond_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:emerald_furnace"
  }
})

event.remove({output:'ironfurnaces:obsidian_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "ironfurnaces:emerald_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:obsidian_furnace"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "ironfurnaces:crystal_furnace"
    }
  },
  "result": {
    "item": "ironfurnaces:obsidian_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_copper'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:copper_ingot"
    },
    "B": {
      "item": "thermal:copper_plate"
    },
    "C": {
      "item": "minecraft:cobblestone"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_copper"
  }
})

event.remove({output:'ironfurnaces:upgrade_iron'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:minecart_coupling"
    },
    "C": {
      "item": "minecraft:cobblestone"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_iron"
  }
})

event.remove({output:'ironfurnaces:upgrade_gold'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_gold"
  }
})

event.remove({output:'ironfurnaces:upgrade_diamond'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_diamond"
  }
})

event.remove({output:'ironfurnaces:upgrade_emerald'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:emerald"
    },
    "B": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    },
    "C": {
      "item": "powah:crystal_spirited"
    },
    "D": {
      "item": "minecraft:diamond"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_emerald"
  }
})

event.remove({output:'ironfurnaces:upgrade_obsidian'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "minecraft:emerald"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_obsidian"
  }
})

event.remove({output:'ironfurnaces:crystal_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "ironfurnaces:diamond_furnace"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "ironfurnaces:crystal_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_crystal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_crystal"
  }
})

event.remove({output:'ironfurnaces:netherite_furnace'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:netherite_plate"
    },
    "B": {
      "item": "functionalstorage:netherite_upgrade"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },
    "D": {
      "item": "ironfurnaces:obsidian_furnace"
    },
    "E": {
      "item": "kubejs:soulsteel_block"
    }
  },
  "result": {
    "item": "ironfurnaces:netherite_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_netherite'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:netherite_plate"
    },
    "B": {
      "item": "functionalstorage:netherite_upgrade"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },
    "D": {
      "item": "minecraft:obsidian"
    },
    "E": {
      "item": "kubejs:soulsteel_block"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_netherite"
  }
})

event.remove({id:'simple_recipes:log_stick'})
event.remove({id:'quark:tweaks/crafting/utility/misc/easy_sticks'})
event.remove({id:'minecraft:ens_ancient_debris'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "A"
  ],
  "key": {
    "A": {
      "tag": "minecraft:logs"
    }
  },
  "result": {
    "item": "minecraft:stick",
    "count": 8
  }
})

event.remove({output:'productivebees:heated_centrifuge'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:charged_enriched_iron"
    },
    "B": {
      "item": "productivebees:upgrade_comb_block"
    },
    "C": {
      "item": "exnihilosequentia:emerald_mesh"
    },
    "D": {
      "item": "kubejs:advanced_capacitor"
    },
    "E": {
      "item": "productivebees:powered_centrifuge"
    }
  },
  "result": {
    "item": "productivebees:heated_centrifuge"
  }
})

event.remove({id:'byg:witch_hazel_planks'})
event.shapeless(
	Item.of('byg:witch_hazel_planks', 2), // output
	[ '#byg:witch_hazel_logs'] //input
)

event.remove({id:'hexerei:mahogany_planks_from_stripped_log'})
event.remove({id:'hexerei:mahogany_planks_from_wood'})
event.remove({output:'hexerei:mahogany_planks'})
event.shapeless(
	Item.of('hexerei:mahogany_planks', 2), // output
	[ '#hexerei:mahogany'] //input
)

event.remove({id:'hexerei:willow_planks_from_stripped_wood'})
event.remove({id:'hexerei:willow_planks'})
event.shapeless(
	Item.of('hexerei:willow_planks', 2), // output
	[ '#hexerei:willow'] //input
)

event.remove({id:'hexerei:witch_hazel_planks_from_stripped_wood'})
event.remove({id:'hexerei:witch_hazel_planks'})
event.shapeless(
	Item.of('hexerei:witch_hazel_planks', 2), // output
	[ '#hexerei:witch_hazel'] //input
)

event.remove({id:'ecologics:coconut_planks'})
event.shapeless(
	Item.of('ecologics:coconut_planks', 2), // output
	[ '#ecologics:coconut_logs'] //input
)

event.remove({id:'ecologics:walnut_planks'})
event.shapeless(
  Item.of('ecologics:walnut_planks', 2), // output
  [ '#ecologics:walnut_logs'] //input
)

event.remove({id:'ecologics:azalea_planks'})
event.shapeless(
  Item.of('ecologics:azalea_planks', 2), // output
  [ '#ecologics:azalea_logs'] //input
)

event.remove({output:'scannable:scanner'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "minecraft:iron_bars"
    },
    "C": {
      "item": "immersiveengineering:capacitor_lv"
    },
    "D": {
      "item": "thermal:quartz_gear"
    },
    "E": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "scannable:scanner"
  }
})

event.remove({output:'mininggadgets:mininggadget_simple'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABF"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "B": {
      "item": "kubejs:basic_capacitor"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    },
    "D": {
      "item": "mekanism:enriched_redstone"
    },
    "E": {
      "item": "mininggadgets:upgrade_empty"
    },
    "F": {
      "item": "minecraft:iron_ingot"
    }
  },
  "result": {
    "item": "mininggadgets:mininggadget_simple"
  }
})

event.remove({output:'mininggadgets:mininggadget_fancy'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABF"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "B": {
      "item": "kubejs:basic_capacitor"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "mekanism:enriched_redstone"
    },
    "E": {
      "item": "mininggadgets:upgrade_empty"
    },
    "F": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "mininggadgets:mininggadget_fancy"
  }
})

event.remove({output:'mininggadgets:mininggadget'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABC"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "B": {
      "item": "kubejs:basic_capacitor"
    },
    "C": {
      "item": "minecraft:gold_ingot"
    },
    "D": {
      "item": "mekanism:enriched_redstone"
    },
    "E": {
      "item": "mininggadgets:upgrade_empty"
    }
  },
  "result": {
    "item": "mininggadgets:mininggadget"
  }
})

event.remove({output:'mininggadgets:upgrade_empty'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:redstone"
    },
    "B": {
      "item": "minecraft:diamond"
    },
    "C": {
      "item": "thermal:steel_ingot"
    },
    "D": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "mininggadgets:upgrade_empty"
  }
})

event.remove({output:'projecte:collector_mk1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:glowstone"
    },
    "B": {
      "item": "thermal:lumium_glass"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    },
    "D": {
      "item": "kubejs:catal_glowstone"
    },
    "E": {
      "item": "kubejs:ultimate_capacitor"
    }
  },
  "result": {
    "item": "projecte:collector_mk1"
  }
})

event.remove({output:'projecte:relay_mk1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:obsidian"
    },
    "B": {
      "item": "thermal_extra:dragonsteel_gear"
    },
    "C": {
      "item": "minecraft:crying_obsidian"
    },
    "D": {
      "item": "kubejs:catal_ender"
    },
    "E": {
      "item": "kubejs:lunaria_ingot"
    }
  },
  "result": {
    "item": "projecte:relay_mk1"
  }
})

event.remove({output:'ars_nouveau:imbuement_chamber'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "ars_nouveau:archwood_planks"
    },
    "B": {
      "item": "kubejs:raw_arcane"
    },
    "C": {
      "tag": "forge:rods/gold"
    },
    "D": {
      "item": "minecraft:gold_ingot"
    }
  },
  "result": {
    "item": "ars_nouveau:imbuement_chamber"
  }
})

event.remove({output:'thermal:machine_crafter'})
event.remove({id:'createaddition:rolling/copper_ingot'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "A"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/electrum"
    }
  },
  "result": {
    "tag": "forge:rods/electrum",
    "count": 4
  }
})

event.remove({id:'thermalendergy:prismalium_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/prismalium"
    },
    "B": {
      "tag": "forge:nuggets/prismalium"
    }
  },
  "result": {
    "item": "thermalendergy:prismalium_gear"
  }
})

event.remove({id:'thermalendergy:melodium_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/melodium"
    },
    "B": {
      "tag": "forge:nuggets/melodium"
    }
  },
  "result": {
    "item": "thermalendergy:melodium_gear"
  }
})

event.remove({id:'thermalendergy:stellarium_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/stellarium"
    },
    "B": {
      "tag": "forge:nuggets/stellarium"
    }
  },
  "result": {
    "item": "thermalendergy:stellarium_gear"
  }
})

event.remove({output:'easy_villagers:iron_farm'})
event.remove({output:'easy_villagers:incubator'})

event.remove({output:'easy_villagers:trader'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "minecraft:villager_spawn_egg"
    },
    "C": {
      "item": "infused_crystals:block_of_infused_ironium"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    }
  },
  "result": {
    "item": "easy_villagers:trader"
  }
})

event.remove({output:'easy_villagers:converter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "minecraft:zombie_head"
    },
    "C": {
      "item": "infused_crystals:block_of_infused_ironium"
    },
    "D": {
      "item": "kubejs:bloody_mechanism"
    }
  },
  "result": {
    "item": "easy_villagers:converter"
  }
})

event.remove({output:'easy_villagers:breeder'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "minecraft:red_bed"
    },
    "C": {
      "item": "thermal:emerald_gear"
    },
    "D": {
      "item": "productivebees:upgrade_breeding"
    }
  },
  "result": {
    "item": "easy_villagers:breeder"
  }
})

event.remove({output:'easy_villagers:farmer'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "infused_crystals:infused_emeraldium_hoe"
    },
    "C": {
      "item": "kubejs:plate_emerald"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_pity"
    }
  },
  "result": {
    "item": "easy_villagers:farmer"
  }
})

event.remove({output:'easy_villagers:auto_trader'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "thermal:netherite_gear"
    },
    "C": {
      "item": "kubejs:soulsteel_block"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    }
  },
  "result": {
    "item": "easy_villagers:auto_trader"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
})

event.remove({output:'sophisticatedstorage:iron_barrel'})
event.remove({output:'sophisticatedstorage:gold_barrel'})
event.remove({output:'sophisticatedstorage:diamond_barrel'})



event.remove({output:'sophisticatedstorage:limited_iron_barrel_4'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_4'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_4'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_4",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_4",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_4",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_4",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_4",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_4",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})


event.remove({output:'sophisticatedstorage:limited_iron_barrel_3'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_3'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_3'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_3",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_3",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_3",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_3",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_3",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_3",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.remove({output:'sophisticatedstorage:limited_iron_barrel_2'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_2'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_2'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_2",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_2",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_2",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_2",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_2",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_2",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.remove({output:'sophisticatedstorage:limited_iron_barrel_1'})
event.remove({output:'sophisticatedstorage:limited_gold_barrel_1'})
event.remove({output:'sophisticatedstorage:limited_diamond_barrel_1'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_iron_barrel_1",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_gold_barrel_1",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"oak\"}"
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:limited_diamond_barrel_1",
  "count": 1,
  "nbt": "{woodType:\"oak\"}"
}
})

event.remove({output:'sophisticatedstorage:iron_shulker_box'})
event.remove({output:'sophisticatedstorage:gold_shulker_box'})
event.remove({output:'sophisticatedstorage:diamond_shulker_box'})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "CDC",
  "ABA"
],
"key": {
  "A": {
    "item": "minecraft:iron_ingot"
  },
  "B": {
    "item": "thermal:iron_plate"
  },
  "C": {
    "item": "immersiveengineering:stick_iron"
  },
  "D": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:shulker_box",
    "count": 1
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:iron_shulker_box",
  "count": 1
}
})



event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "AAA",
  "ABA",
  "ACA"
],
"key": {
  "A": {
    "item": "minecraft:gold_ingot"
  },
  "B": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_shulker_box",
    "count": 1
  },
  "C": {
    "item": "mekanism:enriched_gold"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:gold_shulker_box",
  "count": 1
}
})

event.custom({
"type": "minecraft:crafting_shaped",
"pattern": [
  "ABA",
  "BCB",
  "ADA"
],
"key": {
  "A": {
    "item": "minecraft:diamond"
  },
  "B": {
    "item": "silentgear:diamond_shard"
  },
  "C": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_shulker_box",
    "count": 1
  },
  "D": {
    "item": "mekanism:enriched_diamond"
  }
},
"result": {
  "type": "forge:nbt",
  "item": "sophisticatedstorage:diamond_shulker_box",
  "count": 1
}
})

event.remove({output:'ftbic:iron_furnace'})

event.remove({id:'solarflux:mirror'})
event.remove({output:'solarflux:mirror'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    " B "
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "thermal:steel_ingot"
    }
  },
  "result": {
    "item": "solarflux:mirror",
    "count": 3
  }
})

event.remove({output:'angelring:leadstone_angel_ring'})
event.remove({output:'angelring:hardened_angel_ring'})
event.remove({output:'angelring:reinforced_angel_ring'})
event.remove({output:'angelring:resonant_angel_ring'})

event.shapeless(Item.of('#forge:plates/stellarium'),['immersiveengineering:hammer','#forge:ingots/stellarium','#forge:ingots/stellarium'])
event.shapeless(Item.of('#forge:plates/melodium'),['immersiveengineering:hammer','#forge:ingots/melodium','#forge:ingots/melodium'])
event.shapeless(Item.of('#forge:plates/prismalium'),['immersiveengineering:hammer','#forge:ingots/prismalium','#forge:ingots/prismalium'])
event.shapeless(Item.of('#forge:plates/zinc'),['immersiveengineering:hammer','#forge:ingots/zinc','#forge:ingots/zinc'])

event.remove({output:'pamhc2foodcore:fruitsaladitem'})
event.remove({output:'utilitix:experience_crystal'})

event.remove({output:'entangled:item'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    " BA",
    "C  "
  ],
  "key": {
    "A": {
      "item": "fluxnetworks:flux_core"
    },
    "B": {
      "item": "create:wrench"
    },
    "C": {
      "item": "kubejs:darksteel_gear"
    }
  },
  "result": {
    "item": "entangled:item"
  }
})

event.remove({id:'entangled:block'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "tag": "forge:wirelessboosters"
    },
    "C": {
      "item": "thermal_extra:twinite_gear"
    },
    "D": {
      "item": "unusualend:gilded_pearl"
    },
    "E": {
      "item": "fluxnetworks:flux_core"
    }
  },
  "result": {
    "item": "entangled:block"
  }
})

event.shapeless(
  Item.of('kubejs:diamond_dust_pile'),
  [ 
    '9x #forge:dusts/diamond'
  ]
  )

  event.shapeless(
    Item.of('kubejs:emerald_dust_pile'),
    [ 
      '9x #forge:dusts/emerald'
    ]
  )

  event.remove({id:'simple_recipes:gravel_flint'})

  event.shapeless(
    Item.of('minecraft:flint'),
    [ 
      '3x minecraft:gravel'
    ]
  )

  event.shapeless(
    Item.of('kubejs:endsteel_ingot'),
    [ 
      '9x kubejs:endsteel_nugget'
    ]
  )

  event.remove({output:'quark:deepslate_furnace'})
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "B B",
    "AAA"
  ],
  "key": {
    "A": {
    "tag": "forge:cobblestone/deepslate"
    },
    "B": {
    "item": "kubejs:stone_mechanism"
    }
  },
  "result": {
    "item": "quark:deepslate_furnace"
  }
  })

  event.shapeless(
    Item.of('botanypotstiers:elite_terracotta_hopper_botany_pot'),
    [ 
      'botanypotstiers:elite_terracotta_botany_pot','cyclic:hopper_gold'
    ]
  )

  event.shapeless(
    Item.of('botanypotstiers:ultra_terracotta_hopper_botany_pot'),
    [ 
      'botanypotstiers:ultra_terracotta_botany_pot','cyclic:hopper_gold'
    ]
  )

  event.shapeless(
    Item.of('botanypotstiers:creative_terracotta_hopper_botany_pot'),
    [ 
      'botanypotstiers:creative_terracotta_botany_pot','cyclic:hopper_gold'
    ]
  )

  event.remove({id:'bigreactors:yellorium_component_to_storage'})
  event.replaceInput({}, '#forge:storage_blocks/yellorium', '#forge:storage_blocks/uranium')
  event.replaceInput({}, 'bigreactors:yellorium_block', '#forge:storage_blocks/uranium')

  event.replaceInput({}, 'bigreactors:yellorium_ingot', 'mekanism:ingot_uranium')
  event.replaceInput({}, '#forge:ingots/yellorium', 'mekanism:ingot_uranium')

  event.replaceInput({}, 'pamhc2foodcore:cuttingboarditem', 'minecraft:iron_nugget')
  event.replaceInput({}, 'extendedcrafting:crystaltine_component', 'thermal_extra:dragonsteel_gear')

  event.remove({id:'comforts:sleeping_bag_black'})
  event.remove({id:'comforts:sleeping_bag_blue'})
  event.remove({id:'comforts:sleeping_bag_brown'})
  event.remove({id:'comforts:sleeping_bag_cyan'})
  event.remove({id:'comforts:sleeping_bag_gray'})
  event.remove({id:'comforts:sleeping_bag_green'})
  event.remove({id:'comforts:sleeping_bag_light_blue'})
  event.remove({id:'comforts:sleeping_bag_light_gray'})
  event.remove({id:'comforts:sleeping_bag_lime'})
  event.remove({id:'comforts:sleeping_bag_magenta'})
  event.remove({id:'comforts:sleeping_bag_orange'})
  event.remove({id:'comforts:sleeping_bag_pink'})
  event.remove({id:'comforts:sleeping_bag_purple'})
  event.remove({id:'comforts:sleeping_bag_red'})
  event.remove({id:'comforts:sleeping_bag_white'})
  event.remove({id:'comforts:sleeping_bag_yellow'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CAC"
  ],
  "key": {
    "A": {
      "item": "minecraft:white_wool"
    },
    "B": {
      "tag": "forge:string"
    },
    "C": {
      "tag": "forge:rods/wooden"
    }
  },
  "result": {
    "item": "comforts:sleeping_bag_white"
  }
})

event.remove({output:'#forge:gaiaauraband'})
event.remove({output:'botanicadds:aura_ring_gaia'})
event.remove({id:'botanicadds:aura_ring_gaia'})
event.custom({"type":"minecraft:smithing",
"addition":{"item":"botanicadds:gaiasteel_ingot"},
"base":{"item":"mythicbotany:aura_ring_greatest"},
"result":{"item":"botanicadds:aura_ring_gaia"}})

event.remove({ mod: 'botanicalmachinery', not: { output: [ 'botanicalmachinery:mechanical_mana_pool', 'botanicalmachinery:mechanical_daisy', 'botanicalmachinery:mechanical_apothecary', 'botanicalmachinery:industrial_agglomeration_factory', 'botanicalmachinery:mechanical_runic_altar', 'botanicalmachinery:mana_battery'] }})

event.remove({id:'pamhc2crops:paper_x2_paper_plants'})
event.remove({output:'cyclic:crafter'})
















//chestler
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"birch\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"birch\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"birch\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"birch\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"birch\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"birch\"}"
          }
        })

//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"acacia\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"acacia\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"acacia\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"acacia\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"acacia\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"acacia\"}"
          }
        })

//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"dark_oak\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"dark_oak\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"dark_oak\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"dark_oak\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"dark_oak\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"dark_oak\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"spruce\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"spruce\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"spruce\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"spruce\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"spruce\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"spruce\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"mangrove\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"mangrove\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"mangrove\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"mangrove\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"mangrove\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"mangrove\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_2",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_2",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
    })

    event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "CDC",
        "ABA"
      ],
      "key": {
        "A": {
          "item": "minecraft:iron_ingot"
        },
        "B": {
          "item": "thermal:iron_plate"
        },
        "C": {
          "item": "immersiveengineering:stick_iron"
        },
        "D": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
      })
      
      
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "AAA",
        "ABA",
        "ACA"
      ],
      "key": {
        "A": {
          "item": "minecraft:gold_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        },
        "C": {
          "item": "mekanism:enriched_gold"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
      })
      
      event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "ABA",
        "BCB",
        "ADA"
      ],
      "key": {
        "A": {
          "item": "minecraft:diamond"
        },
        "B": {
          "item": "silentgear:diamond_shard"
        },
        "C": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_3",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        },
        "D": {
          "item": "mekanism:enriched_diamond"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_diamond_barrel_3",
        "count": 1,
        "nbt": "{woodType:\"jungle\"}"
      }
      })

      event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "CDC",
          "ABA"
        ],
        "key": {
          "A": {
            "item": "minecraft:iron_ingot"
          },
          "B": {
            "item": "thermal:iron_plate"
          },
          "C": {
            "item": "immersiveengineering:stick_iron"
          },
          "D": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_iron_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
        })
        
        
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "AAA",
          "ABA",
          "ACA"
        ],
        "key": {
          "A": {
            "item": "minecraft:gold_ingot"
          },
          "B": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          },
          "C": {
            "item": "mekanism:enriched_gold"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_gold_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
        })
        
        event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "ABA",
          "BCB",
          "ADA"
        ],
        "key": {
          "A": {
            "item": "minecraft:diamond"
          },
          "B": {
            "item": "silentgear:diamond_shard"
          },
          "C": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          },
          "D": {
            "item": "mekanism:enriched_diamond"
          }
        },
        "result": {
          "type": "forge:nbt",
          "item": "sophisticatedstorage:limited_diamond_barrel_4",
          "count": 1,
          "nbt": "{woodType:\"jungle\"}"
        }
        })

        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "CDC",
            "ABA"
          ],
          "key": {
            "A": {
              "item": "minecraft:iron_ingot"
            },
            "B": {
              "item": "thermal:iron_plate"
            },
            "C": {
              "item": "immersiveengineering:stick_iron"
            },
            "D": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:chest",
              "count": 1,
              "nbt": "{woodType:\"jungle\"}"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:iron_chest",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        })
        
        
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "AAA",
            "ABA",
            "ACA"
          ],
          "key": {
            "A": {
              "item": "minecraft:gold_ingot"
            },
            "B": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:iron_chest",
              "count": 1,
              "nbt": "{woodType:\"jungle\"}"
            },
            "C": {
              "item": "mekanism:enriched_gold"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:gold_chest",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        })
        
        event.custom({
          "type": "minecraft:crafting_shaped",
          "pattern": [
            "ABA",
            "BCB",
            "ADA"
          ],
          "key": {
            "A": {
              "item": "minecraft:diamond"
            },
            "B": {
              "item": "silentgear:diamond_shard"
            },
            "C": {
              "type": "forge:nbt",
              "item": "sophisticatedstorage:gold_chest",
              "count": 1,
              "nbt": "{woodType:\"jungle\"}"
            },
            "D": {
              "item": "mekanism:enriched_diamond"
            }
          },
          "result": {
            "type": "forge:nbt",
            "item": "sophisticatedstorage:diamond_chest",
            "count": 1,
            "nbt": "{woodType:\"jungle\"}"
          }
        })
//
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"birch\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"birch\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"acacia\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"acacia\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"mangrove\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"mangrove\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"jungle\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"jungle\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"spruce\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"spruce\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:barrel",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_barrel",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_barrel",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_barrel",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_barrel",
      "count": 1,
      "nbt": "{woodType:\"dark_oak\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_barrel",
    "count": 1,
    "nbt": "{woodType:\"dark_oak\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:chest",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_chest",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_chest",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_chest",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_chest",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_chest",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:chest",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:iron_chest",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})



event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:iron_chest",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:gold_chest",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:gold_chest",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:diamond_chest",
    "count": 1,
    "nbt": "{woodType:\"warped\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "thermal:iron_plate"
    },
    "C": {
      "item": "immersiveengineering:stick_iron"
    },
    "D": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_iron_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
  })
  
  
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_gold_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
  })
  
  event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "minecraft:diamond"
    },
    "B": {
      "item": "silentgear:diamond_shard"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"crimson\"}"
    },
    "D": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "sophisticatedstorage:limited_diamond_barrel_1",
    "count": 1,
    "nbt": "{woodType:\"crimson\"}"
  }
  })

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:iron_ingot"
      },
      "B": {
        "item": "thermal:iron_plate"
      },
      "C": {
        "item": "immersiveengineering:stick_iron"
      },
      "D": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_barrel_1",
        "count": 1,
        "nbt": "{woodType:\"warped\"}"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_iron_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
    })
    
    
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "ABA",
      "ACA"
    ],
    "key": {
      "A": {
        "item": "minecraft:gold_ingot"
      },
      "B": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_iron_barrel_1",
        "count": 1,
        "nbt": "{woodType:\"warped\"}"
      },
      "C": {
        "item": "mekanism:enriched_gold"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_gold_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
    })
    
    event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "minecraft:diamond"
      },
      "B": {
        "item": "silentgear:diamond_shard"
      },
      "C": {
        "type": "forge:nbt",
        "item": "sophisticatedstorage:limited_gold_barrel_1",
        "count": 1,
        "nbt": "{woodType:\"warped\"}"
      },
      "D": {
        "item": "mekanism:enriched_diamond"
      }
    },
    "result": {
      "type": "forge:nbt",
      "item": "sophisticatedstorage:limited_diamond_barrel_1",
      "count": 1,
      "nbt": "{woodType:\"warped\"}"
    }
    })

    



event.remove({output:'ironjetpacks:elite_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/diamond"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_diamond"
    }
  },
  "result": {
    "item": "ironjetpacks:elite_coil"
  }
})

event.remove({output:'ironjetpacks:basic_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/iron"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_iron"
    }
  },
  "result": {
    "item": "ironjetpacks:basic_coil"
  }
})

event.remove({output:'ironjetpacks:advanced_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/gold"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_gold"
    }
  },
  "result": {
    "item": "ironjetpacks:advanced_coil"
  }
})

event.remove({output:'ironjetpacks:ultimate_coil'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "ACA",
    "BA "
  ],
  "key": {
    "A": {
      "tag": "forge:rods/emerald"
    },
    "B": {
      "item": "redstone_arsenal:flux_gem"
    },
    "C": {
      "item": "kubejs:chipset_emerald"
    }
  },
  "result": {
    "item": "ironjetpacks:ultimate_coil"
  }
})

event.remove({output:'thermal:chiller_rod_cast'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "tag": "forge:plates/steel"
    },
    "B": {
      "item": "minecraft:blaze_rod"
    }
  },
  "result": {
    "item": "thermal:chiller_rod_cast"
  }
})

event.remove({id:'ae2:network/blocks/interfaces_interface'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_aluminum"
    },
    "B": {
      "item": "rftoolscontrol:cpu_core_2000"
    },
    "C": {
      "item": "ae2:annihilation_core"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "ae2:formation_core"
    },
    "F": {
      "item": "kubejs:chipset_quartz"
    }
  },
  "result": {
    "item": "ae2:interface"
  }
})

event.remove({output:'refinedstorage:interface'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "item": "rftoolscontrol:cpu_core_2000"
    },
    "C": {
      "item": "refinedstorage:importer"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "refinedstorage:exporter"
    },
    "F": {
      "item": "kubejs:chipset_quartz"
    }
  },
  "result": {
    "item": "refinedstorage:interface"
  }
})

event.remove({output:'modularrouters:modular_router'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:basic_capacitor"
    },
    "B": {
      "item": "thermal:lumium_gear"
    },
    "C": {
      "item": "cyclic:user"
    },
    "D": {
      "item": "kubejs:starmetal_ingot"
    },
    "E": {
      "item": "mekanism:alloy_infused"
    }
  },
  "result": {
    "item": "modularrouters:modular_router",
    "count": 2
  }
})

  event.remove({output:'#projecte:alchemical_bags'})
  event.remove({output:'#projectexpansion:advanced_alchemical_chest'})


event.remove({output:'mekanism:basic_fluid_tank'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "C C",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_structure_steel"
    },
    "B": {
      "item": "pneumaticcraft:logistics_core"
    },
    "C": {
      "item": "engineersdecor:straight_pipe_valve"
    },
    "D": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "mekanism:basic_fluid_tank"
  }
})

event.remove({output:'#pneumaticcraft:fluid_tanks'})
event.remove({output:'mekanism:basic_fluid_tank'})
event.remove({output:'mekanism:advanced_fluid_tank'})
event.remove({output:'mekanism:elite_fluid_tank'})
event.remove({output:'mekanism:ultimate_fluid_tank'})

event.shapeless(Item.of('mekanism:advanced_fluid_tank'),[ 'mekanism:basic_fluid_tank', 'mekanism:advanced_tier_installer'])
event.shapeless(Item.of('mekanism:elite_fluid_tank'),[ 'mekanism:advanced_fluid_tank', 'mekanism:elite_tier_installer'])
event.shapeless(Item.of('mekanism:ultimate_fluid_tank'),[ 'mekanism:elite_fluid_tank', 'mekanism:ultimate_tier_installer'])

event.remove({output:'pneumaticcraft:etching_tank'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:circuit_board"
    },
    "B": {
      "item": "kubejs:osmiridium_ingot"
    },
    "C": {
      "type": "forge:nbt",
      "item": "immersiveengineering:graphite_electrode",
      "count": 1,
      "nbt": "{graphDmg:0}"
    },
    "D": {
      "item": "mekanism:basic_fluid_tank"
    },
    "E": {
      "item": "pneumaticcraft:reinforced_bricks"
    },
    "F": {
      "item": "thermal:bitumen"
    }
  },
  "result": {
    "item": "pneumaticcraft:etching_tank"
  }
})

event.shapeless(
  Item.of('kubejs:osgloglas_ingot', 9),
['kubejs:osgloglas_block'])

event.shapeless(
  Item.of('kubejs:osgloglas_block'),
['9x kubejs:osgloglas_ingot'])

event.remove({output:'minecraft:sticky_piston'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A",
    "B"
  ],
  "key": {
    "A": {
      "tag": "forge:slimeballs"
    },
    "B": {
      "item": "minecraft:piston"
    }
  },
  "result": {
    "item": "minecraft:sticky_piston"
  }
})

event.remove({output:'minecraft:piston'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "create:andesite_alloy"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "minecraft:piston"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "create:andesite_alloy"
    },
    "C": {
      "tag": "forge:ingots/bronze"
    },
    "D": {
      "item": "minecraft:redstone"
    }
  },
  "result": {
    "item": "minecraft:piston",
    "count": 2
  }
})

event.remove({output:'ae2:drive'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "kubejs:darksteel_ingot"
    },
    "B": {
      "item": "extrastorage:neural_processor"
    },
    "C": {
      "item": "kubejs:slate_fluix"
    },
    "D": {
      "item": "powah:dielectric_casing"
    },
    "E": {
      "item": "infused_crystals:infused_emeraldium_crystal"
    }
  },
  "result": {
    "item": "ae2:drive"
  }
})

event.remove({output:'botanicalmachinery:mechanical_apothecary'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "botania:elementium_ingot"
    },
    "B": {
      "item": "kubejs:elementium_processor"
    },
    "C": {
      "tag": "botania:petals"
    },
    "D": {
      "item": "botanicadds:aura_ring_gaia"
    },
    "E": {
      "item": "botania:apothecary_livingrock"
    }
  },
  "result": {
    "item": "botanicalmachinery:mechanical_apothecary"
  }
})

event.remove({output:'botanicalmachinery:mechanical_runic_altar'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "botania:elementium_ingot"
    },
    "B": {
      "item": "kubejs:elementium_processor"
    },
    "C": {
      "tag": "botania:petals"
    },
    "D": {
      "item": "botanicadds:aura_ring_gaia"
    },
    "E": {
      "item": "botanicadds:elven_altar"
    }
  },
  "result": {
    "item": "botanicalmachinery:mechanical_runic_altar"
  }
})

event.shapeless(
  Item.of('9x #forge:dusts/diamond'),
['kubejs:diamond_dust_pile'])

event.shapeless(
  Item.of('9x #forge:dusts/emerald'),
['kubejs:emerald_dust_pile'])

event.remove({output:'sophisticatedstorage:upgrade_base'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CAC",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "C": 		{
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:steel\"}"
		}
  },
  "result": {
    "item": "sophisticatedstorage:upgrade_base"
  }
})

event.remove({output:'sophisticatedbackpacks:upgrade_base'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "tag": "forge:string"
    },
    "B": {
      "item": "immersiveengineering:ersatz_leather"
    },
    "C": {
      "item": "minecraft:iron_ingot"
    },
    "D": {
      "item": "stevescarts:component_hardened_mesh"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:upgrade_base"
  }
})

event.remove({output:'ae2:advanced_card'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AB ",
	  "CDB",
	  "AB "
	],
	"key": {
	  "A": {
		"item": "infused_crystals:infused_diamondium_crystal"
	  },
	  "B": {
		"item": "minecraft:iron_ingot"
	  },
	  "C": {
		"item": "kubejs:datacard3"
	  },
	  "D": {
		"item": "kubejs:manasteel_processor"
	  }
	},
	"result": {
	  "item": "ae2:advanced_card",
	  "count": 12
	}
  })

event.remove({output:'ae2:basic_card'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AB ",
	  "CDB",
	  "AB "
	],
	"key": {
	  "A": {
		"item": "kubejs:infused_goldium"
	  },
	  "B": {
		"item": "minecraft:iron_ingot"
	  },
	  "C": {
		"item": "kubejs:datacard2"
	  },
	  "D": {
		"item": "refinedstorage:improved_processor"
	  }
	},
	"result": {
	  "item": "ae2:basic_card",
	  "count": 12
	}
  })

event.remove({output:'refinedstorage:upgrade'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  " AD",
	  "ABA",
	  "CA "
	],
	"key": {
	  "A": {
		"item": "kubejs:charged_enriched_iron"
	  },
	  "B": {
		"item": "refinedstorage:basic_processor"
	  },
	  "C": {
		"item": "kubejs:infused_goldium"
	  },
    "D": {
      "item": "kubejs:datacard3"
      }
	},
	"result": {
	  "item": "refinedstorage:upgrade",
    "count": 12
	}
  })


  event.remove({output:'ae2:fluix_pearl'})
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
      "item": "ae2:fluix_dust"
      },
      "B": {
      "item": "ae2:fluix_crystal"
      },
      "C": {
      "item": "stevescarts:component_eye_of_galgador"
      },
      "D": {
      "item": "kubejs:slate_fluix"
      }
    },
    "result": {
      "item": "ae2:fluix_pearl"
    }
    })
  
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "AAA",
      "BBB",
      "AAA"
    ],
    "key": {
      "A": {
      "tag": "forge:glass"
      },
      "B": {
      "item": "thermal:quartz_dust"
      }
    },
    "result": {
      "item": "ae2:quartz_fiber",
      "count": 3
    }
    })

event.remove({id:'minecraft:iron_bars'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "forge:rods/iron"
    }
  },
  "result": {
    "item": "minecraft:iron_bars",
    "count": 8
  }
})

event.remove({output:'refinedstorage:range_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    "B": {
      "item": "extendedcrafting:ender_ingot"
    },
    "C": {
      "item": "refinedstorage:upgrade"
    },
    "D": {
      "item": "stevescarts:component_eye_of_galgador"
    }
  },
  "result": {
    "item": "refinedstorage:range_upgrade"
  }
})

event.remove({output:'ae2:wireless_booster'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    "DBD"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:ender_ingot"
    },
    "B": {
      "item": "thermal:steel_ingot"
    },
    "C": {
      "item": "ae2:fluix_dust"
    },
    "D": {
      "item": "thermal:steel_dust"
    }
  },
  "result": {
    "item": "ae2:wireless_booster",
    "count": 2
  }
})

event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABC",
	  " D "
	],
	"key": {
	  "A": {
		"item": "mekanism:enriched_gold"
	  },
	  "B": {
		"item": "kubejs:apu1"
	  },
	  "C": {
		"item": "kubejs:chip3"
	  },
	  "D": {
		"item": "kubejs:card"
	  }
	},
	"result": {
	  "item": "kubejs:datacard2"
	}
  })

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:diamondium_crystal"
    },
    "B": {
      "item": "immersiveengineering:electron_tube"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "pneumaticcraft:transistor"
    }
  },
  "result": {
    "item": "kubejs:chip3",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:ironium_crystal"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "kubejs:chip1"
    },
    "D": {
      "item": "kubejs:cu"
    },
    "E": {
      "item": "kubejs:alu"
    }
  },
  "result": {
    "item": "kubejs:apu1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "thermal:rose_gold_nugget"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "immersiveengineering:electron_tube"
    },
    "D": {
      "item": "minecraft:clock"
    },
    "E": {
      "item": "pneumaticcraft:transistor"
    }
  },
  "result": {
    "item": "kubejs:cu"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:ironium_crystal"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "pneumaticcraft:transistor"
    }
  },
  "result": {
    "item": "kubejs:chip1",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_nugget"
    },
    "B": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "C": {
      "item": "kubejs:basic_capacitor"
    },
    "D": {
      "item": "kubejs:chip1"
    }
  },
  "result": {
    "item": "kubejs:alu"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A ",
    "AB",
    "AC"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_nugget"
    },
    "B": {
      "item": "immersiveengineering:circuit_board"
    },
    "C": {
      "item": "minecraft:gold_nugget"
    }
  },
  "result": {
    "item": "kubejs:card"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "   ",
    "ABA",
    " C "
  ],
  "key": {
    "A": {
      "item": "kubejs:chip3"
    },
    "B": {
      "item": "infused_crystals:ironium_crystal"
    },
    "C": {
      "item": "immersiveengineering:circuit_board"
    }
  },
  "result": {
    "item": "kubejs:ram3"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    " D "
  ],
  "key": {
    "A": {
      "item": "infused_crystals:diamondium_crystal"
    },
    "B": {
      "item": "kubejs:apu2"
    },
    "C": {
      "item": "kubejs:ram3"
    },
    "D": {
      "item": "kubejs:card"
    }
  },
  "result": {
    "item": "kubejs:datacard3"
  }
})

event.shaped('kubejs:apu2', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:diamondium_crystal',
  B: 'minecraft:redstone',
  C: 'kubejs:chip3',
  D: 'kubejs:cu',
  E: 'kubejs:alu'
});

event.shaped('4x kubejs:chip2', [
  'AAA',
  'BCB',
  'AAA'
], {
  A: 'minecraft:gold_nugget',
  B: 'infused_crystals:redstonium_crystal',
  C: 'pneumaticcraft:transistor'
});

event.shaped('kubejs:chip2', [
  'AAA',
  'BCB',
  'AAA'
], {
  A: 'minecraft:gold_nugget',
  B: 'minecraft:redstone',
  C: 'pneumaticcraft:transistor'
});

event.replaceInput({}, 'refinedstorage:processor_binding', 'kubejs:chip2')


event.remove({output:'ironfurnaces:augment_factory'})
event.shaped('ironfurnaces:augment_factory', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'botania:livingrock',
  B: 'minecraft:redstone',
  C: 'stevescarts:component_hardened_mesh',
  D: 'thermal:iron_gear',
  E: 'immersiveengineering:furnace_heater'
});


event.shapeless(
  Item.of('#forge:wires/enderium'),
['#forge:plates/enderium', 'immersiveengineering:wirecutter'])

event.shapeless(
  Item.of('#forge:wires/iron'),
['#forge:plates/iron', 'immersiveengineering:wirecutter'])

event.shapeless(
  Item.of('#forge:wires/gold'),
['#forge:plates/gold', 'immersiveengineering:wirecutter'])

event.remove({id:'architects_palette:unobtanium'})
event.shapeless(
  Item.of('4x architects_palette:unobtanium'),
['architects_palette:unobtanium_block'])

event.replaceInput({}, '#pneumaticcraft:fluid_tanks', 'mekanism:basic_fluid_tank')

event.shaped('2x kubejs:pyrotheum_dust', [
  'AA',
  'BC'
], {
  A: 'powah:crystal_blazing',
  B: 'infused_crystals:redstonium_crystal',
  C: '#forge:dusts/sulfur'
});

event.shaped('2x kubejs:cryotheum_dust', [
  'AA',
  'BC'
], {
  A: 'thermal:blizz_powder',
  B: 'infused_crystals:redstonium_crystal',
  C: 'powah:charged_snowball'
});

event.shaped('2x kubejs:aerotheum_dust', [
  'AA',
  'BC'
], {
  A: 'thermal:blitz_powder',
  B: 'infused_crystals:redstonium_crystal',
  C: '#forge:dusts/niter'
});

event.shaped('2x kubejs:petrotheum_dust', [
  'AA',
  'BC'
], {
  A: 'thermal:basalz_powder',
  B: 'infused_crystals:redstonium_crystal',
  C: '#forge:dusts/refined_obsidian'
});

event.remove({output:'jamd:mine_portal_block'})
event.shaped('jamd:mine_portal_block', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'compressium:cobblestone_3',
  B: 'infused_crystals:block_of_infused_diamondium',
  C: 'compressium:cobblestone_4',
  D: 'infused_crystals:infused_redstonium_pickaxe',
  E: 'infused_crystals:block_of_infused_emeraldium'
});

event.remove({output:'sophisticatedstorage:stack_upgrade_tier_1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    'ABA',
    'BCB',
    'ADA'
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "tag": "botania:livingwood_logs"
    },
    "C": {
      "item": "sophisticatedstorage:upgrade_base"
    },
    "D": {
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:silver\"}"
		}
  },
  "result": {
    "item": "sophisticatedstorage:stack_upgrade_tier_1"
  }
})


event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_2' });
event.shaped('sophisticatedstorage:stack_upgrade_tier_2', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_ironium',
  B: 'minecraft:iron_ingot',
  C: 'kubejs:darksteel_gear',
  D: 'sophisticatedstorage:stack_upgrade_tier_1',
  E: 'minecraft:anvil'
});

event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_3' });
event.shaped('sophisticatedstorage:stack_upgrade_tier_3', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'kubejs:infused_goldium_block',
  B: 'minecraft:gold_ingot',
  C: 'thermalendergy:melodium_gear',
  D: 'sophisticatedstorage:stack_upgrade_tier_2',
  E: 'ars_nouveau:starbuncle_shards'
});


event.remove({output:'sophisticatedstorage:stack_upgrade_tier_4'})
event.shaped('sophisticatedstorage:stack_upgrade_tier_4', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_diamondium',
  B: 'naturesaura:sky_ingot',
  C: 'thermalendergy:stellarium_gear',
  D: 'sophisticatedstorage:stack_upgrade_tier_3',
  E: 'powah:capacitor_niotic'
});

event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_1' });
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_1', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_ironium',
  B: 'minecraft:iron_ingot',
  C: 'kubejs:darksteel_gear',
  D: 'sophisticatedbackpacks:upgrade_base',
  E: 'minecraft:anvil'
});

event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' });
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_2', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'kubejs:infused_goldium_block',
  B: 'minecraft:gold_ingot',
  C: 'thermalendergy:melodium_gear',
  D: 'sophisticatedbackpacks:stack_upgrade_tier_1',
  E: 'ars_nouveau:starbuncle_shards'
});

event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' });
event.shaped('sophisticatedbackpacks:stack_upgrade_tier_3', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'infused_crystals:block_of_infused_diamondium',
  B: 'naturesaura:sky_ingot',
  C: 'thermalendergy:stellarium_gear',
  D: 'sophisticatedbackpacks:stack_upgrade_tier_2',
  E: 'powah:capacitor_niotic'
});


event.remove({output:'cyclic:soundproofing_ghost'})

event.shapeless(
Item.of('minecraft:cobblestone'),
[ '9x kubejs:stone_nugget'])

event.remove({id:'ftbic:shapeless/lv_cable'})
event.remove({id:'ftbic:shapeless/mv_cable'})
event.remove({id:'ftbic:shapeless/hv_cable'})

event.remove({output:'ftbic:copper_coil'})
event.shaped('ftbic:copper_coil', [
  'AAA',
  'ABA',
  'AAA'
], {
  A: '#forge:wires/copper',
  B: '#forge:rods/iron'
});


event.remove({id:'mysticalagriculture:essence/minecraft/string'})
event.shapeless(
  Item.of('minecraft:string', 8),
  ['3x mysticalagriculture:spider_essence'])

event.remove({id:'create:crafting/kinetics/shaft'})
event.shaped('4x create:shaft', [
  'A',
  'B',
  'A'
], {
  A: 'create:andesite_alloy',
  B: 'kubejs:stone_mechanism'
});

event.remove({ output: 'create:mechanical_press' });
event.shaped('create:mechanical_press', [
  'A',
  'B',
  'C'
], {
  A: 'create:shaft',
  B: 'create:gearshift',
  C: 'minecraft:iron_block'
});

event.remove({ id: 'minecraft:anvil' });
event.shaped('minecraft:anvil', [
  'AAA',
  ' B ',
  'BBB'
], {
  A: 'kubejs:darksteel_block',
  B: 'kubejs:darksteel_ingot'
});

event.shapeless('kubejs:darksteel_block', ['9x kubejs:darksteel_ingot']);

event.shapeless(
  Item.of('kubejs:darksteel_ingot', 9),
  ['kubejs:darksteel_block'])

  event.shapeless(
  Item.of('kubejs:endsteel_ingot', 9),
  ['kubejs:endsteel_block'])

  event.shapeless(
  Item.of('kubejs:endsteel_block'),
  ['9x kubejs:endsteel_ingot'])

  event.shapeless(
  Item.of('kubejs:raw_arcane', 9),
  ['kubejs:raw_arcane_block'])

  event.shapeless(
  Item.of('kubejs:raw_arcane_block'),
  ['9x kubejs:raw_arcane'])

event.remove({output:'minecraft:cauldron'})
event.shaped('minecraft:cauldron', [
  'A A',
  'A A',
  'AAA'
], {
  A: '#forge:ingots/steel'
});

event.replaceInput({}, 'ftbic:iron_furnace', 'ironfurnaces:iron_furnace')
event.remove({output:'constructionwand:stone_wand'})
event.remove({output:'constructionwand:iron_wand'})
event.remove({output:'constructionwand:diamond_wand'})
event.remove({output:'constructionwand:infinity_wand'})


event.shaped('constructionwand:iron_wand', [
  '  A',
  ' B ',
  'B  '
], {
  A: '#forge:plates/iron',
  B: '#forge:rods/wooden'
});

event.shaped('constructionwand:diamond_wand', [
  '  A',
  ' B ',
  'B  '
], {
  A: '#forge:plates/diamond',
  B: '#forge:rods/wooden'
});

event.shaped('constructionwand:infinity_wand', [
  '  A',
  ' B ',
  'B  '
], {
  A: 'extendedcrafting:ender_star',
  B: '#forge:rods/wooden'
});

event.shaped('exmachinis:flux_hammer', [
  'AAA',
  'ABA',
  'CDC'
], {
  A: 'ae2:quartz_vibrant_glass',
  B: 'exnihilosequentia:netherite_hammer',
  C: 'infused_crystals:block_of_infused_ironium',
  D: 'immersiveengineering:logic_circuit'
});

event.remove({output:'exmachinis:flux_compactor'})

event.remove({id:'create:andesite_alloy'})
event.shaped('2x create:andesite_alloy', [
  'ABA',
  'BCB',
  'ABA'
], {
  A: 'minecraft:iron_nugget',
  B: 'minecraft:andesite',
  C: 'minecraft:raw_iron'
});

event.remove({output:'sophisticatedbackpacks:iron_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
    }
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:andesite_alloy"
    },
    "C": {
      "item": "minecraft:iron_bars"
    },
    "D": {
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:iron\"}"
		},
    "E": {
      "item": "sophisticatedbackpacks:backpack"
    }
  },
  "pattern": [
    "ABA",
    "CEC",
    "ADA"
  ],
  "result": {
    "item": "sophisticatedbackpacks:iron_backpack"
  }
})

event.remove({output:'sophisticatedbackpacks:gold_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
    }
  ],
  "key": {
    "A": {
      "item": "kubejs:infused_goldium"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "thermal:gold_plate"
    },
    "D": {
      "item": "sophisticatedbackpacks:iron_backpack"
    },
    "E": {
      "item": "powah:energized_steel_block"
    }
  },
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "result": {
    "item": "sophisticatedbackpacks:gold_backpack"
  }
})

event.remove({output:'sophisticatedbackpacks:diamond_backpack'})
event.custom({
  "type": "sophisticatedbackpacks:backpack_upgrade",
  "conditions": [
    {
      "type": "sophisticatedcore:item_enabled",
      "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
    }
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_diamondium_crystal"
    },
    "B": {
      "item": "kubejs:chipset_diamond"
    },
    "C": {
      "item": "mekanism:alloy_reinforced"
    },
    "D": {
      "item": "sophisticatedbackpacks:gold_backpack"
    },
    "E": {
      "item": "mekanism:enriched_diamond"
    }
  },
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "result": {
    "item": "sophisticatedbackpacks:diamond_backpack"
  }
})

event.remove({output:'pipez:item_pipe'})
event.shaped('16x pipez:item_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'thermal:steel_ingot',
  B: '#forge:plates/invar',
  C: 'ftbic:electronic_circuit',
  D: 'minecraft:redstone'
});

event.remove({output:'pipez:fluid_pipe'});
event.shaped('16x pipez:fluid_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: '#forge:ingots/slimesteel',
  B: 'kubejs:plate_lapis',
  C: 'integrateddynamics:crystalized_menril_chunk',
  D: 'minecraft:redstone'
});

event.remove({output:'pipez:energy_pipe'});
event.shaped('16x pipez:energy_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'thermal:rose_gold_ingot',
  B: 'thermal:electrum_plate',
  C: 'immersiveengineering:electron_tube',
  D: 'minecraft:redstone'
});

event.remove({output:'pipez:wrench'});
event.shaped('pipez:wrench', [
  ' AB',
  ' CA',
  'C  '
], {
  A: 'kubejs:iron_aluminum_ingot',
  B: 'kubejs:osmium_gear',
  C: '#forge:rods/wooden'
});

event.remove({output:'pipez:universal_pipe'});
event.shaped('8x pipez:universal_pipe', [
  'ABA',
  'CDE',
  'AFA'
], {
  A: 'create:sturdy_sheet',
  B: 'pipez:energy_pipe',
  C: 'pipez:item_pipe',
  D: 'infused_crystals:infused_coalium_crystal',
  E: 'pipez:gas_pipe',
  F: 'pipez:fluid_pipe'
});

event.remove({output:'pipez:gas_pipe'});
event.shaped('16x pipez:gas_pipe', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'thermal:steel_ingot',
  B: 'kubejs:endsteel_ingot',
  C: 'mekanism:alloy_infused',
  D: 'infused_crystals:emeraldium_crystal'
});

event.remove({output:'pipez:infinity_upgrade'})
event.shaped('pipez:infinity_upgrade', [
  'ABA',
  'CDC',
  'ABA'
], {
  A: 'kubejs:petrotheum_dust',
  B: 'kubejs:lunaria_ingot',
  C: 'mekanism:ultimate_control_circuit',
  D: 'extendedcrafting:the_ultimate_ingot'
});

event.remove({id:'byg:palo_verde_planks'})
event.shapeless(
  Item.of('2x minecraft:birch_planks'),['#byg:palo_verde_logs'])

event.remove({id:'blue_skies:anvil_compat'})
event.remove({output:'cyclic:obsidian_pressure_plate'})
event.remove({output:'quark:gold_bars'})

event.remove({id:'cyclic:gold_bars'})
event.shaped('16x cyclic:gold_bars', [
  'AAA',
  'AAA'
], {
  A: '#forge:rods/gold'
});

event.remove({output: 'integrateddynamics:squeezer'});
event.shaped('integrateddynamics:squeezer', [
  'ABA',
  'A A',
  'CDC'
], {
  A: 'immersiveengineering:stick_steel',
  B: 'thermal:steel_plate',
  C: 'create:sturdy_sheet',
  D: 'tconstruct:hepatizon_block'
});

event.shaped('kubejs:unit_empty', [
  'ABA',
  'CDC',
  'AEA'
], {
  A: 'thermalendergy:stellarium_plate',
  B: 'cyclic:wireless_fluid',
  C: 'thermal:signalum_ingot',
  D: 'thermal:signalum_glass',
  E: 'thermal:redstone_servo'
});

event.remove({output: 'minecraft:armor_stand'});
event.shaped('minecraft:armor_stand', [
  ' A ',
  ' B ',
  'CDC'
], {
  A: '#forge:rods/wooden',
  B: 'create:mechanical_piston',
  C: 'minecraft:smooth_stone_slab',
  D: 'industrialforegoing:machine_frame_pity'
});

event.remove({output:'cyclic:packager'})
event.remove({output:'create:andesite_alloy'})

event.remove({output:'fluxnetworks:flux_controller'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "EFE"
	],
	"key": {
	  "A": {
		"item": "infused_crystals:infused_redstonium_crystal"
	  },
	  "B": {
		"item": "fluxnetworks:flux_core"
	  },
	  "C": {
		"type": "forge:nbt",
		"item": "immersiveengineering:graphite_electrode",
		"count": 1,
		"nbt": "{graphDmg:0}"
	  },
	  "D": {
		"item": "thermal:charge_bench"
	  },
	  "E": {
		"tag": "forge:wirelessboosters"
	  },
	  "F": {
		"item": "kubejs:darksteel_block"
	  }
	},
	"result": {
	  "item": "fluxnetworks:flux_controller"
	}
  })

  event.remove({id:'ftbic:shaped/bronze_dust'})
  event.remove({id:'thermal:bronze_dust_4'})
  event.remove({id:'immersiveengineering:crafting/electrum_mix'})
  event.remove({id:'thermal:invar_dust_3'})
  event.remove({id:'immersiveengineering:crafting/constantan_mix'})

  event.remove({id:'silentgear:azure_silver_dust'})
  event.remove({id:'silentgear:blaze_gold_dust'})
  event.remove({id:'silentgear:crimson_iron_dust'})
  event.remove({id:'silentgear:crimson_steel_dust'})
  event.remove({id:'silentgear:tyrian_steel_dust'})
  event.remove({id:'silentgear:azure_electrum_dust'})

  event.remove({id:'minecraft:beehive'})

event.remove({output:'extrastorage:iron_crafter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    'ABA',
    'CDC',
    'EFE'
  ],
  "key": {
    "A": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "B": {
      "tag": "forge:chests/wooden"
    },
    "C": {
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:iron\"}"
		},
    "D": {
      "tag": "refinedstorage:crafter"
    },
    "E": {
      "item": "kubejs:chip1"
    },
    "F": {
      "item": "refinedstorage:basic_processor"
    }
  },
  "result": {
    "item": "extrastorage:iron_crafter"
  }
})

event.remove({output: 'extrastorage:gold_crafter'});
event.shaped('extrastorage:gold_crafter', [
  'ABA',
  'CDC',
  'EFE'
], {
  'A': 'mekanism:shard_gold',
  'B': 'kubejs:golden_electron_tube',
  'C': 'mekanism:enriched_gold',
  'D': 'extrastorage:iron_crafter',
  'E': 'kubejs:datacard2',
  'F': 'refinedstorage:improved_processor'
});


event.remove({output:'extrastorage:diamond_crafter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "type": "forge:nbt",
      "item": "naturesaura:effect_powder",
      "count": 1,
      "nbt": "{effect:\"naturesaura:ore_spawn\"}"
    },
    "B": {
      "item": "thermal:diamond_gear"
    },
    "C": {
      "item": "mekanism:enriched_diamond"
    },
    "D": {
      "item": "extrastorage:gold_crafter"
    },
    "E": {
      "item": "naturesaura:sky_ingot"
    },
    "F": {
      "item": "refinedstorage:advanced_processor"
    }
  },
  "result": {
    "item": "extrastorage:diamond_crafter"
  }
})

event.remove({output:'mob_grinding_utils:gm_chicken_feed_cursed'})

event.remove({id:'mysticalagriculture:prosperity_gemstone'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "occultism:spirit_attuned_gem"
    },
    "B": {
      "item": "mysticalagriculture:prosperity_shard"
    },
    "C": {
      "item": "botania:dragonstone"
    }
  },
  "result": {
    "item": "mysticalagriculture:prosperity_gemstone"
  }
})

event.remove({id:'mysticalagriculture:prosperity_ingot'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "occultism:spirit_attuned_gem"
    },
    "B": {
      "item": "mysticalagriculture:prosperity_shard"
    },
    "C": {
      "item": "botania:elementium_ingot"
    }
  },
  "result": {
    "item": "mysticalagriculture:prosperity_ingot"
  }
})

event.remove({output:'capsule:capsulemarker'})

event.remove({output:'simplemagnets:basicmagnet'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABC",
    "DE ",
    "ABF"
  ],
  "key": {
    "A": {
      "tag": "forge:plates/iron"
    },
    "B": {
      "tag": "forge:rods/iron"
    },
    "C": {
      "item": "infused_crystals:lapisium_crystal"
    },
    "D": {
      "item": "minecraft:iron_ingot"
    },
    "E": {
      "item": "minecraft:ender_pearl"
    },
    "F": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "simplemagnets:basicmagnet"
  }
})

event.remove({output:'simplemagnets:advancedmagnet'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " AB",
    "CD ",
    " AB"
  ],
  "key": {
    "A": {
      "item": "mekanism:enriched_gold"
    },
    "B": {
      "tag": "forge:rods/gold"
    },
    "C": {
      "item": "minecraft:ender_eye"
    },
    "D": {
      "item": "simplemagnets:basicmagnet"
    }
  },
  "result": {
    "item": "simplemagnets:advancedmagnet"
  }
})

event.remove({output:'sophisticatedbackpacks:magnet_upgrade'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DEF"
  ],
  "key": {
    "A": {
      "item": "minecraft:ender_pearl"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "simplemagnets:basicmagnet"
    },
    "D": {
      "item": "minecraft:redstone"
    },
    "E": {
      "item": "sophisticatedbackpacks:upgrade_base"
    },
    "F": {
      "item": "minecraft:lapis_lazuli"
    }
  },
  "result": {
    "item": "sophisticatedbackpacks:magnet_upgrade"
  }
})

event.remove({output:'mob_grinding_utils:saw_upgrade_beheading'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ADA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "tag": "forge:heads"
    },
    "C": {
      "item": "infused_crystals:infused_redstonium_crystal"
    },
    "D": {
      "item": "redstone_arsenal:flux_helmet"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw_upgrade_beheading"
  }
})

event.remove({output:'mob_grinding_utils:saw_upgrade_looting'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "kubejs:plate_lapis"
    },
    "C": {
      "item": "compressium:lapis_1"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw_upgrade_looting"
  }
})

event.remove({output:'mob_grinding_utils:saw_upgrade_sharpness'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "redstone_arsenal:flux_sword"
    },
    "C": {
      "item": "minecraft:netherite_sword"
    },
    "D": {
      "item": "infused_crystals:infused_redstonium_crystal"
    }
  },
  "result": {
    "item": "mob_grinding_utils:saw_upgrade_sharpness"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "ftbic:medium_coolant_cell"
    },
    "B": {
      "item": "ftbic:lv_cable"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ftbic:overclocker_upgrade",
    "count": 3
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "ftbic:large_coolant_cell"
    },
    "B": {
      "item": "ftbic:lv_cable"
    },
    "C": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "ftbic:overclocker_upgrade",
    "count": 6
  }
})

event.remove({output:'mekanism:dynamic_tank'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "CDC",
	  "ACA"
	],
	"key": {
	  "A": {
		"item": "kubejs:plate_darksteel"
	  },
	  "B": 		{
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:steel\"}"
		},
	  "C": {
		"item": "kubejs:soulsteel_ingot"
	  },
	  "D": {
		"item": "thermal:fluid_tank_augment"
	  }
	},
	"result": {
	  "item": "mekanism:dynamic_tank",
    "count": 4
	}
  })

event.remove({output:'functionalstorage:fluid_1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "B": {
      "item": "ars_nouveau:water_essence"
    },
    "C": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "functionalstorage:fluid_1"
  }
})

event.remove({output:'functionalstorage:fluid_2'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "B": {
      "item": "ars_nouveau:water_essence"
    },
    "C": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "functionalstorage:fluid_2",
    "count": 2
  }
})

event.remove({output:'functionalstorage:fluid_4'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "CBC",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:ingot_iron_compressed"
    },
    "B": {
      "item": "ars_nouveau:water_essence"
    },
    "C": {
      "item": "thermal:fluid_cell_frame"
    }
  },
  "result": {
    "item": "functionalstorage:fluid_4",
    "count": 4
  }
})

event.remove({output:'ae2:quartz_glass'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BAB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ae2:certus_quartz_dust"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "ae2:quartz_glass",
    "count": 4
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BAB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:quartz_dust"
    },
    "B": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "ae2:quartz_glass",
    "count": 4
  }
})

event.remove({output:'aeinfinitybooster:infinity_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "naturesaura:animal_container"
    },
    "B": {
      "item": "ae2:wireless_booster"
    },
    "C": {
      "item": "extendedcrafting:ender_star"
    },
    "D": {
      "item": "minecraft:netherite_ingot"
    },
    "E": {
      "item": "kubejs:darksteel_block"
    }
  },
  "result": {
    "item": "aeinfinitybooster:infinity_card"
  }
})

event.remove({output:'aeinfinitybooster:dimension_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:petrotheum_dust"
    },
    "B": {
      "item": "aeinfinitybooster:infinity_card"
    },
    "C": {
      "item": "extendedcrafting:flux_star"
    },
    "D": {
      "item": "kubejs:lunaria_ingot"
    },
    "E": {
      "item": "extendedcrafting:the_ultimate_block"
    }
  },
  "result": {
    "item": "aeinfinitybooster:dimension_card"
  }
})

event.remove({output:'rsinfinitybooster:dimension_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "kubejs:petrotheum_dust"
    },
    "B": {
      "item": "rsinfinitybooster:infinity_card"
    },
    "C": {
      "item": "extendedcrafting:flux_star"
    },
    "D": {
      "item": "kubejs:lunaria_ingot"
    },
    "E": {
      "item": "extendedcrafting:the_ultimate_block"
    }
  },
  "result": {
    "item": "rsinfinitybooster:dimension_card"
  }
})

event.remove({output:'rsinfinitybooster:infinity_card'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "naturesaura:animal_container"
    },
    "B": {
      "item": "refinedstorage:range_upgrade"
    },
    "C": {
      "item": "extendedcrafting:ender_star"
    },
    "D": {
      "item": "minecraft:netherite_ingot"
    },
    "E": {
      "item": "kubejs:darksteel_block"
    }
  },
  "result": {
    "item": "rsinfinitybooster:infinity_card"
  }
})

event.remove({output:'cyclic:user'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EEE"
  ],
  "key": {
    "A": {
      "item": "kubejs:golden_electron_tube"
    },
    "B": {
      "item": "minecraft:tripwire_hook"
    },
    "C": {
      "item": "thermal:rose_gold_gear"
    },
    "D": {
      "item": "compressium:cobblestone_2"
    },
    "E": {
      "tag": "chipped:obsidian"
    }
  },
  "result": {
    "item": "cyclic:user"
  }
})

event.shapeless(
  Item.of('mekanism:hdpe_rod'),
  ['kubejs:hdpe_rod_hori'])

  event.shapeless(
    Item.of('kubejs:hdpe_rod_hori'),
    ['mekanism:hdpe_rod'])

//

event.remove({output:'mekanism:hdpe_rod'})
event.remove({output:'ad_astra:compressor'})
event.remove({id:'compressium:soulsand_1'})
event.remove({output:'compressium:soulsand_2'})

event.shapeless(
Item.of('compressium:soulsand_2'), ['9x spirit:compressed_soul_sand'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "D D"
  ],
  "key": {
    "A": {
      "item": "pneumaticcraft:compressed_stone"
    },
    "B": {
      "item": "create_sa:hydraulic_engine"
    },
    "C": {
      "item": "powah:battery_starter"
    },
    "D": {
      "item": "ad_astra:steel_engine"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "ironjetpacks:jetpack",
    "count": 1,
    "nbt": "{Id:\"ironjetpacks:stone\",Throttle:1.0d}"
  }
})


event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CFC",
    "E E"
  ],
  "key": {
    "A": {
      "item": "kubejs:chipset_iron"
    },
    "B": {
      "item": "immersiveengineering:heavy_engineering"
    },
    "C": {
      "item": "powah:energy_hopper_basic"
    },
    "E": {
      "type": "forge:nbt",
      "item": "ironjetpacks:thruster",
      "count": 1,
      "nbt": "{Id:\"ironjetpacks:iron\"}"
    },
    "F": {
      "item": "powah:battery_basic"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "ironjetpacks:jetpack",
    "count": 1,
    "nbt": "{Id:\"ironjetpacks:iron\",Throttle:1.0d}"
  }
})

event.remove({output:'powah:battery_starter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "powah:dielectric_paste"
    },
    "B": {
      "item": "thermal:rf_coil_storage_augment"
    },
    "C": {
      "item": "powah:capacitor_basic"
    },
    "D": {
      "item": "infused_crystals:block_of_redstonium"
    },
    "E": {
      "item": "thermal:flux_capacitor"
    }
  },
  "result": {
    "item": "powah:battery_starter"
  }
})

event.replaceInput({}, 'botanicalmachinery:mana_emerald_block', 'botania:terrasteel_block')

event.remove({output:'#pipez:upgrades'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "mekanism:enriched_redstone"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:iron\"}"
		},
    "E": {
      "item": "ftbic:electronic_circuit"
    }
  },
  "result": {
    "item": "pipez:basic_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "create:crushed_raw_gold"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "pipez:basic_upgrade"
    }
  },
  "result": {
    "item": "pipez:improved_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "botania:manasteel_ingot"
    },
    "B": {
      "item": "mekanism:alloy_reinforced"
    },
    "C": {
      "item": "kubejs:cryotheum_dust"
    },
    "D": {
      "item": "pipez:improved_upgrade"
    }
  },
  "result": {
    "item": "pipez:advanced_upgrade"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:netherite_ingot"
    },
    "B": {
      "item": "tconstruct:hepatizon_ingot"
    },
    "C": {
      "item": "mekanism:dust_refined_obsidian"
    },
    "D": {
      "item": "pipez:advanced_upgrade"
    }
  },
  "result": {
    "item": "pipez:ultimate_upgrade"
  }
})

event.remove({output:'mekanism:energy_tablet'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "B": {
      "item": "mekanism:enriched_gold"
    },
    "C": {
      "item": "mekanism:alloy_infused"
    },
    "D": {
      "item": "kubejs:golden_electron_tube"
    }
  },
  "result": {
    "item": "mekanism:energy_tablet"
  }
})

event.shapeless(Item.of('kubejs:gold_dust_pile'), ['9x #forge:dusts/gold'])
event.shapeless(Item.of('9x #forge:dusts/gold'), ['kubejs:gold_dust_pile'])
event.shapeless(Item.of('thermal:gold_dust'), ['occultism:gold_dust'])

event.remove({output: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}')})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "ae2:quartz_glass"
    },
    "B": {
      "item": "ae2:cell_component_1k"
    },
    "C": {
      "item": "cookingforblockheads:sink"
    },
    "D": {
      "item": "minecraft:iron_ingot"
    },
    "E": {
      "item": "ae2:fluid_cell_housing"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "expatternprovider:infinity_cell",
    "count": 1,
    "nbt": "{record:{\"#c\":\"ae2:f\",id:\"minecraft:water\"}}"
  }
})

event.remove({output:'twilightforest:uncrafting_table'})

event.remove({output:'cyclic:solidifier'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EEE"
  ],
  "key": {
    "A": {
      "item": "ars_nouveau:water_essence"
    },
    "B": {
      "item": "minecraft:magma_block"
    },
    "C": {
      "item": "compressium:cobblestone_1"
    },
    "D": {
      "item": "exnihilosequentia:blaze_doll"
    },
    "E": {
      "item": "quark:obsidian_pressure_plate"
    }
  },
  "result": {
    "item": "cyclic:solidifier"
  }
})

event.remove({output:'immersiveengineering:logic_circuit'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wire_electrum"
    },
    "B": {
      "item": "immersiveengineering:wirecoil_electrum"
    },
    "C": {
      "item": "minecraft:comparator"
    },
    "D": {
      "item": "immersiveengineering:circuit_board"
    }
  },
  "result": {
    "item": "immersiveengineering:logic_circuit"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BBB"
  ],
  "key": {
    "A": {
      "item": "solarflux:mirror"
    },
    "B": {
      "tag": "forge:treated_wood"
    },
    "C": {
      "item": "infused_crystals:redstonium_crystal"
    }
  },
  "result": {
    "item": "solarflux:sp_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AEA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "create:andesite_alloy"
    },
    "B": {
      "item": "solarflux:sp_1"
    },
    "C": {
      "item": "create:mechanical_piston"
    },
    "D": {
      "item": "create:sturdy_sheet"
    },
    "E": {
      "item": "glassential:glass_light"
    }
  },
  "result": {
    "item": "solarflux:sp_2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BDB",
    "BCB"
  ],
  "key": {
    "A": {
      "item": "solarflux:photovoltaic_cell_1"
    },
    "B": {
      "item": "solarflux:sp_2"
    },
    "C": {
      "item": "laserio:card_redstone"
    },
    "D": {
      "item": "kubejs:cu"
    }
  },
  "result": {
    "item": "solarflux:sp_3",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "BDB"
  ],
  "key": {
    "A": {
      "item": "solarflux:photovoltaic_cell_2"
    },
    "B": {
      "item": "solarflux:sp_3"
    },
    "C": {
      "item": "mekanism:alloy_reinforced"
    },
    "D": {
      "item": "thermal:flux_capacitor"
    }
  },
  "result": {
    "item": "solarflux:sp_4",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "solarflux:photovoltaic_cell_3"
    },
    "B": {
      "item": "solarflux:sp_4"
    },
    "C": {
      "item": "extendedcrafting:ender_star"
    },
    "D": {
      "item": "mekanism:elite_control_circuit"
    },
    "E": {
      "item": "kubejs:slate_3"
    }
  },
  "result": {
    "item": "solarflux:sp_5"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BBB",
    "CCC"
  ],
  "key": {
    "A": {
      "item": "botania:mana_glass"
    },
    "B": {
      "item": "infused_crystals:lapisium_crystal"
    },
    "C": {
      "item": "solarflux:mirror"
    }
  },
  "result": {
    "item": "solarflux:photovoltaic_cell_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "powah:steel_energized"
    },
    "B": {
      "item": "infused_crystals:lapisium_crystal"
    },
    "C": {
      "item": "minecraft:redstone"
    },
    "D": {
      "item": "mekanismgenerators:solar_panel"
    },
    "E": {
      "item": "solarflux:photovoltaic_cell_1"
    }
  },
  "result": {
    "item": "solarflux:photovoltaic_cell_2",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "botania:mana_glass"
    },
    "B": {
      "item": "infused_crystals:infused_lapisium_crystal"
    },
    "C": {
      "type": "forge:nbt",
      "item": "ftbic:fluid_cell",
      "count": 1,
      "nbt": "{Fluid:\"evilcraft:blood\"}"
    },
    "D": {
      "item": "kubejs:illumination_powder"
    },
    "E": {
      "item": "kubejs:reinforced_obsidian"
    },
    "F": {
      "item": "solarflux:photovoltaic_cell_2"
    }
  },
  "result": {
    "item": "solarflux:photovoltaic_cell_3",
    "count": 2
  }
})

event.remove({output:'productivebees:nest_locator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    " A "
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_nugget"
    },
    "B": {
      "item": "minecraft:note_block"
    },
    "C": {
      "item": "create_confectionery:honey_candy"
    }
  },
  "result": {
    "item": "productivebees:nest_locator"
  }
})

event.remove({output:['thermal:potion_cake', 'thermal:chocolate_cake', 'thermal:carrot_cake', 'thermal:spice_cake']})

event.remove({id:'blue_skies:cake_compat'})
event.remove({id:'create:crafting/curiosities/cake'})
event.remove({id:'farmersdelight:cake_from_milk_bottle'})
event.remove({id:'createaddition:filling/cake'})
event.remove({id:'cyclic:solidifier/solidifier_milkcake'})
event.remove({id:'cyclic:solidifier/solidifier_honeycake'})

event.remove({id:'glassential:glass_dark_ethereal_reverse_from_ethereal_reverse'})

event.remove({id:'glassential:glass_ethereal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "waystones:warp_dust"
    },
    "B": {
      "item": "minecraft:glass"
    },
    "C": {
      "item": "minecraft:ender_eye"
    }
  },
  "result": {
    "item": "glassential:glass_ethereal",
    "count": 4
  }
})

event.remove({output:'industrialforegoing:enchantment_factory'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "kubejs:ultimate_capacitor"
    },
    "C": {
      "item": "botania:natura_pylon"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "kubejs:reinforced_obsidian"
    },
    "F": {
      "item": "mythicbotany:mana_infuser"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_factory"
  }
})

event.remove({output:'industrialforegoing:enchantment_extractor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "deeperdarker:heart_of_the_deep"
    },
    "C": {
      "item": "minecraft:book"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "kubejs:enriched_aquamarine"
    },
    "F": {
      "item": "thermal_extra:dragonsteel_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_extractor"
  }
})

event.remove({output:'industrialforegoing:enchantment_applicator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ECE"
  ],
  "key": {
    "A": {
      "item": "hostilenetworks:overworld_prediction"
    },
    "B": {
      "item": "powah:capacitor_spirited"
    },
    "C": {
      "item": "minecraft:anvil"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_advanced"
    },
    "E": {
      "item": "thermal:gold_gear"
    }
  },
  "result": {
    "item": "industrialforegoing:enchantment_applicator"
  }
})

event.remove({output:'mekanism:basic_universal_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_ingot"
    },
    "B": {
      "item": "mekanism:enriched_iron"
    },
    "C": {
      "item": "infused_crystals:redstonium_crystal"
    },
    "D": {
      "item": "pipez:energy_pipe"
    }
  },
  "result": {
    "item": "mekanism:basic_universal_cable",
    "count": 4
  }
})

event.remove({output:['moremekanismprocessing:crystal_ruby', 'moremekanismprocessing:shard_ruby', 'moremekanismprocessing:clump_ruby', 'moremekanismprocessing:dirty_dust_ruby', 'moremekanismprocessing:platinum_ingot', 'moremekanismprocessing:platinum_nugget', 'moremekanismprocessing:crystal_titanium', 'moremekanismprocessing:shard_titanium', 'moremekanismprocessing:clump_titanium', 'moremekanismprocessing:dust_titanium', 'moremekanismprocessing:titanium_ingot', 'moremekanismprocessing:titanium_nugget', 'moremekanismprocessing:crystal_bort', 'moremekanismprocessing:shard_bort', 'moremekanismprocessing:clump_bort', 'moremekanismprocessing:crystal_tungsten', 'moremekanismprocessing:shard_tungsten', 'moremekanismprocessing:clump_tungsten', 'moremekanismprocessing:dirty_dust_tungsten', 'moremekanismprocessing:tungsten_ingot', 'moremekanismprocessing:tungsten_nugget', 'moremekanismprocessing:dirty_dust_bort', 'moremekanismprocessing:dust_bort', 'moremekanismprocessing:gem_bort', 'moremekanismprocessing:crystal_sapphire', 'moremekanismprocessing:shard_sapphire', 'moremekanismprocessing:clump_sapphire', 'moremekanismprocessing:dirty_dust_sapphire', 'moremekanismprocessing:crystal_platinum', 'moremekanismprocessing:shard_platinum', 'moremekanismprocessing:clump_platinum', 'moremekanismprocessing:dust_platinum', 'moremekanismprocessing:dirty_dust_platinum']})
event.remove({output:['moremekanismprocessing:crystal_dilithium', 'moremekanismprocessing:shard_dilithium', 'moremekanismprocessing:clump_dilithium', 'moremekanismprocessing:dirty_dust_dilithium', 'moremekanismprocessing:dust_dilithium', 'moremekanismprocessing:gem_dilithium', 'moremekanismprocessing:crystal_peridot', 'moremekanismprocessing:shard_peridot', 'moremekanismprocessing:clump_peridot', 'moremekanismprocessing:dirty_dust_peridot', 'moremekanismprocessing:dust_peridot', 'moremekanismprocessing:gem_peridot', 'moremekanismprocessing:crystal_bismuth', 'moremekanismprocessing:shard_bismuth', 'moremekanismprocessing:clump_bismuth', 'moremekanismprocessing:dirty_dust_bismuth', 'moremekanismprocessing:dust_bismuth', 'moremekanismprocessing:bismuth_ingot', 'moremekanismprocessing:bismuth_nugget']})

event.shapeless(Item.of('kubejs:c_oak'), ['9x minecraft:oak_log']);
event.shapeless(Item.of('kubejs:c_birch'), ['9x minecraft:birch_log']);
event.shapeless(Item.of('kubejs:c_spruce'), ['9x minecraft:spruce_log']);
event.shapeless(Item.of('kubejs:c_dark_oak'), ['9x minecraft:dark_oak_log']);
event.shapeless(Item.of('kubejs:c_acacia'), ['9x minecraft:acacia_log']);
event.shapeless(Item.of('kubejs:c_jungle'), ['9x minecraft:jungle_log']);
event.shapeless(Item.of('kubejs:c_mangrove'), ['9x minecraft:mangrove_log']);

event.shapeless(Item.of('9x minecraft:oak_log'), ['kubejs:c_oak']);
event.shapeless(Item.of('9x minecraft:birch_log'), ['kubejs:c_birch']);
event.shapeless(Item.of('9x minecraft:spruce_log'), ['kubejs:c_spruce']);
event.shapeless(Item.of('9x minecraft:dark_oak_log'), ['kubejs:c_dark_oak']);
event.shapeless(Item.of('9x minecraft:acacia_log'), ['kubejs:c_acacia']);
event.shapeless(Item.of('9x minecraft:jungle_log'), ['kubejs:c_jungle']);
event.shapeless(Item.of('9x minecraft:mangrove_log'), ['kubejs:c_mangrove']);

event.remove({output:'vanillaaiots:wooden_aiot'})

event.shapeless(Item.of('vanillaaiots:wooden_aiot'), ['spirit:soul_steel_sword','spirit:soul_steel_pickaxe','spirit:soul_steel_axe','spirit:soul_steel_shovel','spirit:soul_steel_hoe']);

event.remove({output:'immersiveengineering:coil_lv'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:wirecoil_copper"
    },
    "B": {
      "tag": "forge:rods/steel"
    }
  },
  "result": {
    "item": "immersiveengineering:coil_lv"
  }
})

event.remove({output:'immersiveengineering:rs_engineering'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ACA",
    "BDB",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "item": "minecraft:redstone"
    },
    "C": {
      "item": "immersiveengineering:component_iron"
    },
    "D": {
      "item": "thermal:copper_gear"
    }
  },
  "result": {
    "item": "immersiveengineering:rs_engineering",
    "count": 2
  }
})

event.remove({output:'immersiveengineering:light_engineering'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "item": "immersiveengineering:component_iron"
    },
    "C": {
      "item": "thermal:copper_gear"
    }
  },
  "result": {
    "item": "immersiveengineering:light_engineering",
    "count": 4
  }
})

event.remove({output:'immersiveengineering:heavy_engineering'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:sheetmetal_steel"
    },
    "B": {
      "item": "immersiveengineering:component_steel"
    },
    "C": {
      "tag": "forge:gears/electrum"
    }
  },
  "result": {
    "item": "immersiveengineering:heavy_engineering",
    "count": 4
  }
})

event.remove({output:'sophisticatedbackpacks:copper_backpack'})
event.remove({output:'productivebees:advanced_snake_block_beehive'})

event.remove({output:'create:large_water_wheel'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "forge:treated_wood"
    },
    "B": {
      "item": "create:water_wheel"
    }
  },
  "result": {
    "item": "create:large_water_wheel"
  }
})

event.remove({output:['cyclic:copper_shovel','cyclic:copper_pickaxe', 'cyclic:breaker']})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDE",
    "FFF"
  ],
  "key": {
    "A": {
      "item": "kubejs:stone_mechanism"
    },
    "B": {
      "item": "kubejs:golden_electron_tube"
    },
    "C": {
      "item": "infused_crystals:infused_redstonium_pickaxe"
    },
    "D": {
      "item": "minecraft:dispenser"
    },
    "E": {
      "item": "infused_crystals:infused_redstonium_shovel"
    },
    "F": {
      "item": "ars_nouveau:sourcestone_large_bricks_slab"
    }
  },
  "result": {
    "item": "cyclic:breaker"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CCC",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:dust_hop_graphite"
    },
    "B": {
      "item": "immersiveengineering:ingot_hop_graphite"
    },
    "C": {
      "item": "minecraft:blue_dye"
    },
    "D": {
      "item": "minecraft:paper"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "immersiveengineering:blueprint",
    "nbt": "{blueprint:\"electrode\"}"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CCC",
    "DDD"
  ],
  "key": {
    "A": {
      "item": "immersiveengineering:treated_wood_horizontal"
    },
    "B": {
      "item": "immersiveengineering:lantern"
    },
    "C": {
      "item": "minecraft:blue_dye"
    },
    "D": {
      "item": "minecraft:paper"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "immersiveengineering:blueprint",
    "count": 1,
    "nbt": "{blueprint:\"specialBullet\"}"
  }
})

event.remove({output:['enderstorage:ender_chest', 'enderstorage:ender_tank']})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "redstone_arsenal:flux_obsidian_rod"
    },
    "B": {
      "item": "mekanism:teleportation_core"
    },
    "C": {
      "tag": "chipped:obsidian"
    },
    "D": {
      "tag": "forge:chests/wooden"
    },
    "E": {
      "item": "kubejs:slate_2"
    }
  },
  "result": {
    "item": "enderstorage:ender_chest",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "redstone_arsenal:flux_obsidian_rod"
    },
    "B": {
      "item": "mekanism:teleportation_core"
    },
    "C": {
      "tag": "chipped:obsidian"
    },
    "D": {
      "item": "minecraft:cauldron"
    },
    "E": {
      "tag": "forge:drawers/fluid"
    }
  },
  "result": {
    "item": "enderstorage:ender_tank",
    "count": 2
  }
})

event.remove({output:'enderstorage:ender_pouch'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "ABA",
	  "BCB",
	  "ADA"
	],
	"key": {
	  "A": {
		"item": "kubejs:pyrotheum_dust"
	  },
	  "B": {
		"tag": "forge:leather"
	  },
	  "C": {
		"item": "mekanism:teleportation_core"
	  },
	  "D": {
		"tag": "forge:wool"
	  }
	},
	"result": {
	  "item": "enderstorage:ender_pouch"
	}
  })

event.remove({output:'industrialforegoing:marine_fisher'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "industrialforegoing:plastic"
    },
    "B": {
      "item": "cyclic:fisher"
    },
    "C": {
      "item": "minecraft:bucket"
    },
    "D": {
      "item": "industrialforegoing:machine_frame_simple"
    },
    "E": {
      "item": "thermal:steel_gear"
    },
    "F": {
      "type": "forge:nbt",
      "item": "reliquary:potion_essence",
      "count": 1,
      "nbt": "{effects:[{duration:750,name:\"minecraft:water_breathing\",potency:0}]}"
    }
  },
  "result": {
    "item": "industrialforegoing:marine_fisher"
  }
})

event.remove({output:'mekanismgenerators:gas_burning_generator'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:osgloglas_ingot"
    },
    "B": {
      "item": "kubejs:aerotheum_dust"
    },
    "C": {
      "item": "mekanism:steel_casing"
    },
    "D": {
      "item": "mekanism:electrolytic_core"
    }
  },
  "result": {
    "item": "mekanismgenerators:gas_burning_generator"
  }
})

event.remove({output:'mekanism:basic_mechanical_pipe'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_ingot"
    },
    "B": {
      "item": "mekanism:enriched_iron"
    },
    "C": {
      "item": "infused_crystals:lapisium_crystal"
    },
    "D": {
      "item": "pipez:fluid_pipe"
    }
  },
  "result": {
    "item": "mekanism:basic_mechanical_pipe",
    "count": 4
  }
})

event.remove({output:'mekanism:basic_pressurized_tube'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_ingot"
    },
    "B": {
      "item": "mekanism:enriched_iron"
    },
    "C": {
      "item": "infused_crystals:emeraldium_crystal"
    },
    "D": {
      "item": "pipez:gas_pipe"
    }
  },
  "result": {
    "item": "mekanism:basic_pressurized_tube",
    "count": 4
  }
})

event.remove({output:'mekanism:basic_logistical_transporter'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_ingot"
    },
    "B": {
      "item": "mekanism:enriched_iron"
    },
    "C": {
      "item": "kubejs:goldium"
    },
    "D": {
      "item": "pipez:item_pipe"
    }
  },
  "result": {
    "item": "mekanism:basic_logistical_transporter",
    "count": 4
  }
})

event.remove({output:'mekanism:basic_thermodynamic_conductor'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:steel_ingot"
    },
    "B": {
      "item": "mekanism:enriched_iron"
    },
    "C": {
      "item": "immersiveengineering:component_electronic"
    },
    "D": 		{
			"type": "forge:nbt",
			"item": "tconstruct:large_plate",
			"count": 1,
			"nbt": "{Material:\"tconstruct:copper\"}"
		}
  },
  "result": {
    "item": "mekanism:basic_thermodynamic_conductor",
    "count": 4
  }
})

event.remove({output:['cyclic:spikes_iron', 'cyclic:spikes_diamond', 'mob_grinding_utils:tank', 'mob_grinding_utils:jumbo_tank', 'mob_grinding_utils:entity_spawner', 'rftoolsutility:spawner', 'cyclic:collector']})

event.replaceInput({}, 'mob_grinding_utils:tank', 'mekanism:basic_fluid_tank')
event.replaceInput({}, 'mob_grinding_utils:entity_conveyor', 'darkutils:vector_plate')

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "thermal:upgrade_augment_1"
    },
    "B": {
      "item": "kubejs:catal_ender"
    },
    "C": {
      "item": "extendedcrafting:redstone_component"
    },
    "D": {
      "item": "rftoolsbase:machine_frame"
    },
    "E": {
      "item": "infused_crystals:infused_ironium_crystal"
    },
    "F": {
      "item": "botania:conjuration_catalyst"
    }
  },
  "result": {
    "item": "rftoolsutility:spawner"
  }
})

event.remove({output:'rftoolsbase:machine_base'})
event.custom({
	"type": "minecraft:crafting_shaped",
	"pattern": [
	  "AAA",
	  "BBB"
	],
	"key": {
	  "A": {
		"item": "minecraft:gold_nugget"
	  },
	  "B": {
		"item": "pneumaticcraft:reinforced_stone"
	  }
	},
	"result": {
	  "item": "rftoolsbase:machine_base"
	}
  })

  event.remove({output:['integratedcrafting:part_interface_crafting', 'integratedcrafting:part_crafting_writer', 'occultism:storage_controller']})
  event.remove({output:['occultism:storage_controller_base', 'occultism:storage_controller', 'occultism:storage_stabilizer_tier2', 'occultism:storage_stabilizer_tier3', 'occultism:storage_stabilizer_tier4']})

  event.remove({output:['sophisticatedstorage:stack_upgrade_tier_1_plus', 'sophisticatedbackpacks:stack_upgrade_starter_tier', Item.of('sophisticatedstorage:copper_barrel'), Item.of('sophisticatedstorage:copper_chest')]})
  event.remove({output:[ Item.of('sophisticatedstorage:limited_copper_barrel_1'), Item.of('sophisticatedstorage:limited_copper_barrel_2'),Item.of('sophisticatedstorage:limited_copper_barrel_3'),Item.of('sophisticatedstorage:limited_copper_barrel_4'),  Item.of('sophisticatedstorage:copper_shulker_box')]})
  event.remove({output:['rftoolspower:cell1', 'rftoolspower:cell2', 'rftoolspower:cell3', 'rftoolspower:power_core1', 'rftoolspower:power_core3', 'rftoolspower:power_core2'],})
  event.remove({output:['createendertransmission:chunk_loader', 'createendertransmission:item_transmitter', 'createendertransmission:fluid_transmitter', 'createendertransmission:energy_transmitter']})

  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "CDC",
      "ABA"
    ],
    "key": {
      "A": {
        "item": "minecraft:obsidian"
      },
      "B": {
        "item": "powah:ender_core"
      },
      "C": {
        "item": "create:sturdy_sheet"
      },
      "D": {
        "item": "mekanism:teleportation_core"
      }
    },
    "result": {
      "item": "createendertransmission:energy_transmitter",
      "count": 2
    }
  })

  event.remove({output:['cabletiers:creative_exporter', 'cabletiers:creative_importer', 'cabletiers:creative_constructor', 'cabletiers:creative_destructor', 'cabletiers:creative_disk_manipulator', 'cabletiers:creative_requester']})

let creative = (input) => {
  event.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "ABA",
      "BCB",
      "ADA"
    ],
    "key": {
      "A": {
        "item": "kubejs:stacium_ingot"
      },
      "B": {
        "item": "cabletiers:ultra_" + input
      },
      "C": {
        "item": "deeperdarker:heart_of_the_deep"
      },
      "D": {
        "item": "mysticalagradditions:creative_essence"
      }
    },
    "result": {
      "item": "cabletiers:creative_" + input
    }
  })
}

creative('importer')
creative('exporter')
creative('constructor')
creative('destructor')
creative('disk_manipulator')
creative('requester')

event.remove({output:'extendedcrafting:frame'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "extendedcrafting:black_iron_ingot"
    },
    "B": {
      "item": "thermal:enderium_glass"
    },
    "C": {
      "item": "extendedcrafting:black_iron_slate"
    }
  },
  "result": {
    "item": "extendedcrafting:frame"
  }
})

event.shapeless('64x minecraft:dragon_breath', ['minecraft:glass_bottle', 'mekanism:pellet_antimatter']);
event.remove({output:['engineersdecor:small_solar_panel', 'cyclic:generator_solar', 'powah:solar_panel_starter', 'powah:solar_panel_basic', 'powah:solar_panel_hardened', 'powah:solar_panel_blazing', 'powah:solar_panel_niotic', 'powah:solar_panel_spirited', 'powah:solar_panel_nitro']})

event.shapeless('9x kubejs:c8_glass', ['kubejs:c9_glass'])
event.shapeless('9x kubejs:c7_glass', ['kubejs:c8_glass'])
event.shapeless('9x kubejs:c6_glass', ['kubejs:c7_glass'])
event.shapeless('9x kubejs:c5_glass', ['kubejs:c6_glass'])
event.shapeless('9x kubejs:c4_glass', ['kubejs:c5_glass'])
event.shapeless('9x kubejs:c3_glass', ['kubejs:c4_glass'])
event.shapeless('9x kubejs:c2_glass', ['kubejs:c3_glass'])
event.shapeless('9x kubejs:c1_glass', ['kubejs:c2_glass'])
event.shapeless('9x minecraft:glass', ['kubejs:c1_glass'])

event.shapeless('kubejs:c9_glass', ['9x kubejs:c8_glass'])
event.shapeless('kubejs:c8_glass', ['9x kubejs:c7_glass'])
event.shapeless('kubejs:c7_glass', ['9x kubejs:c6_glass'])
event.shapeless('kubejs:c6_glass', ['9x kubejs:c5_glass'])
event.shapeless('kubejs:c5_glass', ['9x kubejs:c4_glass'])
event.shapeless('kubejs:c4_glass', ['9x kubejs:c3_glass'])
event.shapeless('kubejs:c3_glass', ['9x kubejs:c2_glass'])
event.shapeless('kubejs:c2_glass', ['9x kubejs:c1_glass'])
event.shapeless('kubejs:c1_glass', ['9x minecraft:glass'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "spirit:soul_glass"
    },
    "B": {
      "item": "thermal_extra:upgrade_augment"
    },
    "C": {
      "item": "solarflux:sp_5"
    },
    "D": {
      "item": "kubejs:de_wyvern_core"
    },
    "E": {
      "item": "mekanism:ultimate_control_circuit"
    }
  },
  "result": {
    "item": "solarflux:sp_custom_wyvern",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "minecraft:dragon_egg"
    },
    "B": {
      "item": "thermalendergy:endergy_upgrade_2"
    },
    "C": {
      "item": "solarflux:sp_custom_wyvern"
    },
    "D": {
      "item": "kubejs:de_awakened_core"
    },
    "E": {
      "item": "kubejs:awakened_draconium_block"
    }
  },
  "result": {
    "item": "solarflux:sp_custom_awakened_draconium",
    "count": 2
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "CEC"
  ],
  "key": {
    "A": {
      "item": "kubejs:uwuterium_pearl"
    },
    "B": {
      "item": "thermalendergy:endergy_upgrade_3"
    },
    "C": {
      "item": "solarflux:sp_custom_awakened_draconium"
    },
    "D": {
      "item": "kubejs:uwuterium_block"
    },
    "E": {
      "item": "kubejs:slate_uwuterium"
    }
  },
  "result": {
    "item": "solarflux:sp_custom_uwuterium",
    "count": 2
  }
})

event.remove({output:'dankstorage:dank_1'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "tag": "forge:dusts/coal"
    },
    "B": {
      "item": "minecraft:coal_block"
    },
    "C": {
      "tag": "forge:chests/wooden"
    },
    "D": {
      "item": "thermal:satchel"
    }
  },
  "result": {
    "item": "dankstorage:dank_1"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "tag": "forge:dusts/coal"
    },
    "B": {
      "item": "minecraft:coal_block"
    },
    "C": {
      "item": "minecraft:barrel"
    },
    "D": {
      "item": "thermal:satchel"
    }
  },
  "result": {
    "item": "dankstorage:dank_1"
  }
})

event.remove({output:'createdieselgenerators:huge_diesel_engine'});
event.shaped('createdieselgenerators:huge_diesel_engine', [
  'ASA',
  'BDB',
  'BRB'
], {
  A: 'create:andesite_alloy',
  B: 'create:brass_sheet',
  D: 'createdieselgenerators:large_diesel_engine',
  R: 'create:brass_block',
  S: 'create:smart_fluid_pipe'
})

event.remove({output:['torchmaster:feral_flare_lantern', 'ars_nouveau:ritual_flight']})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " A "
  ],
  "key": {
    "A": {
      "item": "mekanism:enriched_gold"
    },
    "B": {
      "tag": "forge:glass"
    },
    "C": {
      "item": "immersiveengineering:lantern"
    }
  },
  "result": {
    "item": "torchmaster:feral_flare_lantern"
  }
})

event.shapeless('4x ae2:fluix_smart_cable', ['ae2:fluix_smart_dense_cable'])
event.shapeless('4x ae2:fluix_covered_cable', ['ae2:fluix_covered_dense_cable'])
event.remove({output: 'create_sa:slime_boots'})
event.remove({output:'pamhc2foodcore:cuttingboarditem'})
event.remove({output:'evilcraft:blood_chest'})
event.shapeless('9x spirit:soul_steel_ingot', ['spirit:soul_steel_block'])

event.remove({id:'quark:world/crafting/woodsets/ancient/planks'})
event.remove({id:'botania:livingwood_planks'})

event.shapeless('2x botania:livingwood_planks', ['#botania:livingwood_logs'])
event.shapeless('2x quark:ancient_planks', ['#quark:ancient_logs'])

event.remove({output:'expatternprovider:ex_pattern_provider'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "refinedstorage:advanced_processor"
    },
    "B": {
      "item": "ae2:capacity_card"
    },
    "C": {
      "tag": "megacells:mega_pattern_provider"
    }
  },
  "result": {
    "item": "expatternprovider:ex_pattern_provider"
  }
})

event.remove({output:'expatternprovider:pattern_provider_upgrade'})

event.remove({output:['cyclic:crate', 'cyclic:crate_mini']})

event.remove({output:'ae2:terminal'})
event.shapeless('ae2:terminal', ['#ae2:illuminated_panel','ae2:annihilation_core', 'ae2:formation_core','kubejs:slate_fluix'])

event.remove({output:'merequester:requester'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "tag": "ae2:interface"
    },
    "C": {
      "item": "ae2:crafting_accelerator"
    },
    "D": {
      "item": "refinedstorage:advanced_processor"
    },
    "E": {
      "item": "minecraft:copper_ingot"
    },
    "F": {
      "item": "kubejs:slate_fluix"
    }
  },
  "result": {
    "item": "merequester:requester"
  }
})

event.remove({output:'ae2:io_port'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "DED"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "ae2:drive"
    },
    "C": {
      "item": "ae2:fluix_glass_cable"
    },
    "D": {
      "item": "minecraft:iron_ingot"
    },
    "E": {
      "item": "kubejs:slate_fluix"
    }
  },
  "result": {
    "item": "ae2:io_port"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABC",
    " A "
  ],
  "key": {
    "A": {
      "item": "botania:manasteel_ingot"
    },
    "B": {
      "item": "evilcraft:spikey_claws"
    },
    "C": {
      "item": "comforts:rope_and_nail"
    }
  },
  "result": {
    "item": "artifacts:digging_claws"
  }
})

event.remove({id:'tconstruct:armor/building/slime_boots'})
event.remove({output:'usefulslime:slippery_slime_block'})

event.shapeless('expatternprovider:ex_pattern_provider', ['expatternprovider:ex_pattern_provider_part'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AB",
    "BA"
  ],
  "key": {
    "A": {
      "tag": "minecraft:logs"
    },
    "B": {
      "tag": "forge:rods/wooden"
    }
  },
  "result": {
    "item": "tconstruct:pattern",
    "count": 12
  }
})

event.remove({id:'immersiveengineering:recycling/iron_wire'})


event.remove({id:'tconstruct:smeltery/casting/metal/iron/wire_sand_cast'})
event.remove({id:'tconstruct:smeltery/casting/metal/iron/wire_gold_cast'})

event.remove({id:'createaddition:rolling/iron_plate'})
event.remove({id:'immersiveengineering:metalpress/wire_iron'})

event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table'])

event.remove({output:'measurements:tape_measure'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " B "
  ],
  "key": {
    "A": {
      "item": "minecraft:string"
    },
    "B": {
      "item": "minecraft:iron_ingot"
    },
    "C": {
      "item": "minecraft:yellow_dye"
    }
  },
  "result": {
    "item": "measurements:tape_measure"
  }
})



event.remove({output:'functionalstorage:framed_controller_extension'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "framedblocks:framed_cube"
    },
    "B": {
      "item": "functionalstorage:controller_extension"
    }
  },
  "result": {
    "item": "functionalstorage:framed_controller_extension"
  }
})

event.remove({output:'functionalstorage:framed_storage_controller'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "framedblocks:framed_cube"
    },
    "B": {
      "item": "functionalstorage:storage_controller"
    }
  },
  "result": {
    "item": "functionalstorage:framed_storage_controller"
  }
})

event.remove({output:'botania:diluted_pool'})
event.shapeless('2x botania:diluted_pool', ['botania:mana_pool'])
event.remove({output:'cyclic:disenchanter'})

event.shapeless('thermal:rose_gold_nugget', ['tconstruct:rose_gold_nugget'])
event.shapeless('thermal:rose_gold_ingot', ['tconstruct:rose_gold_ingot'])
event.shapeless('thermal:rose_gold_block', ['tconstruct:rose_gold_block'])

event.replaceInput({}, 'pneumaticcraft:plastic', '#forge:plastic')
event.replaceInput({}, 'cyclic:obsidian_pressure_plate', 'quark:obsidian_pressure_plate')

event.shapeless(Item.of('thermal:white_rockwool'),['#forge:slag', 'minecraft:white_wool'])

  event.remove({id:'thermal:rockwool/white_rockwool_smelting'})
  event.remove({id:'thermal:rockwool/white_rockwool_blasting'})

  event.remove({output:'ae2wtlib:quantum_bridge_card'})
  event.remove({output:'rftoolsbuilder:builder'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "EFE"
  ],
  "key": {
    "A": {
      "item": "kubejs:slate_3"
    },
    "B": {
      "item": "mekanism:elite_control_circuit"
    },
    "C": {
      "item": "thermal:rf_coil"
    },
    "D": {
      "item": "industrialforegoing:ore_laser_base"
    },
    "E": {
      "item": "powah:capacitor_niotic"
    },
    "F": {
      "item": "kubejs:solus_ingot"
    }
  },
  "result": {
    "item": "rftoolsbuilder:builder"
  }
})

event.remove({id:'redstone_arsenal:materials/flux_gear'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "ABA",
    " A "
  ],
  "key": {
    "A": {
      "item": "redstone_arsenal:flux_ingot"
    },
    "B": {
      "item": "redstone_arsenal:flux_nugget"
    }
  },
  "result": {
    "item": "redstone_arsenal:flux_gear"
  }
})
event.remove({output: 'reliquary:alkahestry_tome'})

event.shapeless(Item.of('unstabletools:unstable_ingot', 9), ['unstabletools:unstable_block']);
event.shapeless(Item.of('4x botania:quartz_mana'),['botania:mana_quartz'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:feather"
    },
    "B": {
      "item": "minecraft:ender_pearl"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "gateways:gate_pearl",
    "count": 1,
    "nbt": "{gateway:\"gateways:chicken_gate\"}"
  }
})

event.remove({id:'productivebees:centrifuge'})
event.shapeless(Item.of('silentgear:azure_silver_ingot'),['moremekanismprocessing:azure_silver_ingot'])

event.shapeless(Item.of('create:creative_fluid_tank'),['mekanism:creative_fluid_tank'])

event.remove({output:'minecraft:end_crystal'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "thermal:enderium_glass"
    },
    "B": {
      "item": "minecraft:nether_star"
    },
    "C": {
      "item": "tconstruct:ender_slime_crystal"
    }
  },
  "result": {
    "item": "minecraft:end_crystal",
    "count": 4
  }
})

event.shapeless(Item.of('minecraft:torch'),['#forge:torches'])
event.remove({output:['twilightforest:hollow_twilight_oak_log_vertical', 'twilightforest:hollow_canopy_log_vertical', 'twilightforest:hollow_mangrove_log_vertical', 'twilightforest:hollow_dark_log_vertical', 'twilightforest:hollow_time_log_vertical', 'twilightforest:hollow_transformation_log_vertical', 'twilightforest:hollow_mining_log_vertical', 'twilightforest:hollow_sorting_log_vertical', 'twilightforest:hollow_oak_log_vertical', 'twilightforest:hollow_spruce_log_vertical', 'twilightforest:hollow_birch_log_vertical', 'twilightforest:hollow_jungle_log_vertical', 'twilightforest:hollow_acacia_log_vertical', 'twilightforest:hollow_dark_oak_log_vertical', 'twilightforest:hollow_crimson_stem_vertical', 'twilightforest:hollow_warped_stem_vertical', 'twilightforest:hollow_vangrove_log_vertical']})
event.remove({id:'ars_nouveau:imbuement_amethyst_block'})
event.shapeless(Item.of('9x minecraft:ender_eye'), ['cyclic:eye_redstone']);


event.remove({output:'ftbic:lv_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "ftbic:rubber"
    },
    "B": {
      "tag": "forge:dusts/coal"
    },
    "C": {
      "tag": "forge:wires/copper"
    },
    "D": {
      "tag": "forge:plates/copper"
    }
  },
  "result": {
    "item": "ftbic:lv_cable",
    "count": 8
  }
})

event.remove({output:'ftbic:mv_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "ftbic:rubber"
    },
    "B": {
      "tag": "forge:wires/aluminum"
    },
    "C": {
      "item": "ftbic:lv_cable"
    }
  },
  "result": {
    "item": "ftbic:mv_cable",
    "count": 4
  }
})

event.remove({output:'ftbic:hv_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "ftbic:rubber"
    },
    "B": {
      "tag": "forge:wires/gold"
    },
    "C": {
      "item": "ftbic:mv_cable"
    }
  },
  "result": {
    "item": "ftbic:hv_cable",
    "count": 4
  }
})

event.remove({output:'ftbic:ev_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "ftbic:rubber"
    },
    "B": {
      "tag": "forge:wires/enderium"
    },
    "C": {
      "item": "ftbic:hv_cable"
    }
  },
  "result": {
    "item": "ftbic:ev_cable",
    "count": 4
  }
})

event.remove({output:'ftbic:iv_cable'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BCB",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "thermal:obsidian_glass"
    },
    "B": {
      "item": "ftbic:energy_crystal"
    },
    "C": {
      "item": "ftbic:ev_cable"
    }
  },
  "result": {
    "item": "ftbic:iv_cable",
    "count": 4
  }
})

event.remove({output:['sophisticatedstorage:copper_to_netherite_tier_upgrade', 'sophisticatedstorage:copper_to_iron_tier_upgrade', 'sophisticatedstorage:copper_to_gold_tier_upgrade', 'sophisticatedstorage:basic_to_copper_tier_upgrade', 'sophisticatedstorage:copper_to_diamond_tier_upgrade']})
event.remove({output:['cyclic:cask', 'cyclic:battery', 'cyclic:battery_clay', 'cyclic:cable_wrench', 'quark:pipe', 'quark:encased_pipe', 'cyclic:energy_pipe', 'cyclic:item_pipe', 'cyclic:fluid_pipe']})
event.remove({output:['cyclic:tank', 'ae2:sky_stone_tank']})


event.remove({output:'thermal:fluid_duct'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:bronze_ingot"
    },
    "B": {
      "item": "thermal:bronze_plate"
    },
    "C": {
      "item": "pipez:fluid_pipe"
    },
    "D": {
      "item": "kubejs:dense_lead_plate"
    }
  },
  "result": {
    "item": "thermal:fluid_duct",
    "count": 12
  }
})

event.remove({output:'thermal:fluid_duct_windowed'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "thermal:bronze_ingot"
    },
    "B": {
      "item": "thermal:bronze_plate"
    },
    "C": {
      "item": "pipez:fluid_pipe"
    },
    "D": {
      "item": "thermal:obsidian_glass"
    }
  },
  "result": {
    "item": "thermal:fluid_duct_windowed",
    "count": 12
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AA",
    "AA"
  ],
  "key": {
    "A": {
      "item": "ae2:charged_certus_quartz_crystal"
    }
  },
  "result": {
    "item": "kubejs:charged_certus_quartz_block"
  }
})
event.shapeless(Item.of('4x ae2:charged_certus_quartz_crystal'), ['kubejs:charged_certus_quartz_block']);

event.shapeless(Item.of('kubejs:compressed_infused_emeraldium_block'),['9x infused_crystals:block_of_infused_emeraldium'])
event.shapeless(Item.of('9x infused_crystals:block_of_infused_emeraldium'),['kubejs:compressed_infused_emeraldium_block'])

event.shapeless(Item.of('kubejs:iron_aluminum_alloy_block'),['9x kubejs:iron_aluminum_ingot'])
event.shapeless(Item.of('9x kubejs:iron_aluminum_ingot'),['kubejs:iron_aluminum_alloy_block'])

event.remove({id:'cyclic:crafting/nether_wart_reverse'})
event.shapeless(Item.of('4x minecraft:nether_wart'),['minecraft:nether_wart_block'])

event.remove({id:'thermal:rubber_from_vine'})
event.remove({id:'thermal:rubber_from_dandelion'})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:vine"
    },
    "B": {
      "tag": "forge:water"
    }
  },
  "result": {
    "item": "thermal:rubber"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:dandelion"
    },
    "B": {
      "tag": "forge:water"
    }
  },
  "result": {
    "item": "thermal:rubber"
  }
})

event.shapeless(Item.of('create:andesite_casing'), ['#forge:stripped_logs', 'create:andesite_alloy']);
event.shapeless(Item.of('create:brass_casing'), ['#forge:stripped_logs', '#forge:ingots/brass']);
event.shapeless(Item.of('create:copper_casing'), ['#forge:stripped_logs', '#forge:ingots/copper']);
event.shapeless(Item.of('create:railway_casing'), ['create:brass_casing', 'create:sturdy_sheet']);

event.shapeless(Item.of('ftbic:mv_battery'), ['ftbic:lv_battery', 'createaddition:large_connector','ftbic:energy_crystal']);
event.shapeless(Item.of('ftbic:hv_battery'), ['ftbic:mv_battery', 'createaddition:large_connector','ftbic:graphene']);
event.shapeless(Item.of('ftbic:ev_battery'), ['ftbic:hv_battery', 'createaddition:large_connector','ftbic:iridium_alloy']);
event.shapeless(Item.of('functionalstorage:diamond_upgrade'), ['functionalstorage:gold_upgrade', 'createaddition:large_connector','botania:mana_diamond']);
event.shapeless(Item.of('functionalstorage:netherite_upgrade'), ['functionalstorage:diamond_upgrade', 'createaddition:large_connector','mekanism:dirty_netherite_scrap']);

event.shapeless(Item.of('minecraft:netherite_sword'), ['minecraft:diamond_sword', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_pickaxe'), ['minecraft:diamond_pickaxe', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_shovel'), ['minecraft:diamond_shovel', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_axe'), ['minecraft:diamond_axe', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_hoe'), ['minecraft:diamond_hoe', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('mekanismtools:netherite_paxel'), ['mekanismtools:diamond_paxel', 'createaddition:large_connector','minecraft:netherite_ingot']);

event.shapeless(Item.of('minecraft:netherite_helmet'), ['minecraft:diamond_helmet', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_chestplate'), ['minecraft:diamond_chestplate', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_leggings'), ['minecraft:diamond_leggings', 'createaddition:large_connector','minecraft:netherite_ingot']);
event.shapeless(Item.of('minecraft:netherite_boots'), ['minecraft:diamond_boots', 'createaddition:large_connector','minecraft:netherite_ingot']);

event.remove({output:['infused_crystals:infernal_fuel', 'integratedterminals:terminal_storage_portable', 'integratedterminals:part_terminal_storage', 'integratedterminals:part_terminal_crafting_job']})

event.remove({id:'zulu_simple_recipes:logstochests'})
event.remove({id:'zulu_simple_recipes:logstosticks'})
event.remove({id:'zulu_simple_recipes:graveltoflint'})
event.remove({id:'zulu_simple_recipes:logstosticks'})

event.remove({id:'evilcraft:crafting/dark_tank'})
event.remove({id:'evilcraft:special/dark_tank_large'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    " A ",
    "BCB",
    " A "
  ],
  "key": {
    "A": {
      "item": "evilcraft:dark_gem"
    },
    "B": {
      "item": "create:fluid_tank"
    },
    "C": {
      "tag": "forge:glass"
    }
  },
  "result": {
    "type": "forge:nbt",
    "item": "evilcraft:dark_tank",
    "count": 1,
    "nbt": "{Fluid:{Amount:0,FluidName:\"minecraft:empty\"},capacity:16000}"
  }
})

event.shapeless(Item.of('thermal:steel_block'), 'immersiveengineering:storage_steel');
event.remove({id:'ad_astra:recipes/steel_ingot'})
event.shapeless(Item.of('9x thermal:steel_ingot'), 'thermal:steel_block');
event.replaceInput({}, 'reliquary:void_tear', 'minecraft:ghast_tear')

event.remove({output:'projecte:transmutation_table'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "compressium:obsidian_4"
    },
    "B": {
      "item": "kubejs:madeline_strawberry"
    },
    "C": {
      "item": "thermalendergy:stellarium_block"
    },
    "D": {
      "item": "projecte:philosophers_stone"
    },
    "E": {
      "item": "kubejs:devilish_horn"
    }
  },
  "result": {
    "item": "projecte:transmutation_table"
  }
})

event.remove({id:'create:crafting/tree_fertilizer'})
event.remove({id:'immersiveengineering:crusher/coke_block'})
event.remove({id:'createaddition:compat/immersiveengineering/crushing/coal_coke'})

event.remove({output:['hexerei:witch_hazel_woodcutter', 'hexerei:mahogany_woodcutter', 'hexerei:willow_woodcutter']})

event.remove({output:'sophisticatedstorage:controller'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ADA"
  ],
  "key": {
    "A": {
      "tag": "byg:all/logs"
    },
    "B": {
      "item": "minecraft:comparator"
    },
    "C": {
      "item": "functionalstorage:storage_controller"
    },
    "D": {
      "tag": "minecraft:planks"
    }
  },
  "result": {
    "item": "sophisticatedstorage:controller"
  }
})

event.remove({output:'ftbic:fuse'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "BBB",
    "AAA"
  ],
  "key": {
    "A": {
      "tag": "forge:glass/colorless"
    },
    "B": {
      "item": "ftbic:industrial_grade_metal"
    }
  },
  "result": {
    "item": "ftbic:fuse",
    "count": 4
  }
})

event.remove({id:'thermal:earth_charge/quartz_from_quartz_block'})

event.remove({id:'exnihilosequentia:ens_raw_zinc'})
event.remove({id:'exnihilosequentia:ens_raw_silver'})
event.remove({id:'exnihilosequentia:ens_raw_lead'})
event.remove({id:'exnihilosequentia:ens_raw_iron'})
event.remove({id:'exnihilosequentia:ens_raw_gold'})
event.remove({id:'exnihilosequentia:ens_raw_uranium'})
event.remove({id:'exnihilosequentia:ens_raw_aluminum'})
event.remove({id:'exnihilosequentia:ens_raw_copper'})
event.remove({id:'exnihilosequentia:ens_raw_platinum'})
event.remove({id:'exnihilosequentia:ens_raw_nickel'})
event.remove({id:'exnihilosequentia:ens_raw_tin'})

event.remove({id:'architects_palette:heavy_end_stone_bricks'})

event.remove({id:'immersiveengineering:arc_recycling_list'})

event.remove({id:'cable_facades:facade_item'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "A A",
    " B ",
    "A A"
  ],
  "key": {
    "A": {
      "tag": "forge:rods/wooden"
    },
    "B": {
      "tag": "minecraft:planks"
    }
  },
  "result": {
    "item": "cable_facades:facade",
    "count": 27
  }
})

event.remove({ id: 'industrialforegoing:laser_drill_ore/raw_materials/platinum' })
event.remove({ id: 'productivebees:boxes/expansion_box_snake_block' })

event.shapeless('9x kubejs:c4_cobbled_deepslate', ['kubejs:c5_cobbled_deepslate'])
event.shapeless('9x kubejs:c3_cobbled_deepslate', ['kubejs:c4_cobbled_deepslate'])
event.shapeless('9x kubejs:c2_cobbled_deepslate', ['kubejs:c3_cobbled_deepslate'])
event.shapeless('9x kubejs:c1_cobbled_deepslate', ['kubejs:c2_cobbled_deepslate'])
event.shapeless('9x minecraft:cobbled_deepslate', ['kubejs:c1_cobbled_deepslate'])

event.shapeless('kubejs:c5_cobbled_deepslate', ['9x kubejs:c4_cobbled_deepslate'])
event.shapeless('kubejs:c4_cobbled_deepslate', ['9x kubejs:c3_cobbled_deepslate'])
event.shapeless('kubejs:c3_cobbled_deepslate', ['9x kubejs:c2_cobbled_deepslate'])
event.shapeless('kubejs:c2_cobbled_deepslate', ['9x kubejs:c1_cobbled_deepslate'])
event.shapeless('kubejs:c1_cobbled_deepslate', ['9x minecraft:cobbled_deepslate'])

event.shapeless(Item.of('ae2:guide'), ['minecraft:book', '#forge:silicon']);

event.remove({id:'create:crushing/compat/exnihilosequentia/crushed_netherrack'})
event.shapeless('create:cinder_flour', ['immersiveengineering:hammer', 'exnihilosequentia:crushed_netherrack'])

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "productivebees:bee_cage"
    },
    "B": {
      "item": "kubejs:basic_capacitor"
    }
  },
  "result": {
    "item": "productivebees:sturdy_bee_cage",
    "count": 4
  }
})

event.remove({output:'ironfurnaces:upgrade_iron2'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "ACA",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:iron_ingot"
    },
    "B": {
      "item": "create:minecart_coupling"
    },
    "C": {
      "item": "thermal:copper_plate"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_iron2"
  }
})

event.remove({output:'ironfurnaces:upgrade_gold2'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "thermal:silver_plate"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_gold2"
  }
})

event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "AAA",
    "ABA",
    "ACA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "ironfurnaces:silver_furnace"
    },
    "C": {
      "item": "mekanism:enriched_gold"
    }
  },
  "result": {
    "item": "ironfurnaces:gold_furnace"
  }
})

event.remove({output:'ironfurnaces:upgrade_obsidian2'})
event.custom({
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "kubejs:reinforced_obsidian"
    },
    "B": {
      "item": "minecraft:obsidian"
    },
    "C": {
      "item": "minecraft:glass"
    }
  },
  "result": {
    "item": "ironfurnaces:upgrade_obsidian2"
  }
})

event.shaped('2x occultism:chalk_white_impure', [
  'AB ',
  'ABC',
  'AB '
], {
  A: 'occultism:burnt_otherstone',
  B: 'ftbic:mixed_metal_blend',
  C: 'ars_nouveau:manipulation_essence'
})

//event.remove({output:''})
//event.custom()

//event.remove({output:''})
//event.custom()






})































