const package_list = [
  'create:cardboard_package_12x10',
  'create:cardboard_package_10x8',
  'create:cardboard_package_10x12',
  'create:cardboard_package_12x12',
  'create:rare_creeper_package',
  'create:rare_darcy_package',
  'create:rare_evan_package',
  'create:rare_jinx_package',
  'create:rare_kryppers_package',
  'create:rare_simi_package',
  'create:rare_starlotte_package',
  'create:rare_thunder_package',
  'create:rare_up_package',
  'create:rare_vector_package'
]

ServerEvents.recipes(event => {
  // 安山岩换为陨石
  event.replaceInput({ id: 'create:crafting/materials/andesite_alloy' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/materials/andesite_alloy_from_zinc' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/kinetics/millstone' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/logistics/pulse_repeater' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/logistics/powered_latch' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/logistics/pulse_timer' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/kinetics/windmill_bearing' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/logistics/pulse_extender' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.replaceInput({ id: 'create:crafting/logistics/powered_toggle_latch' }, 'minecraft:andesite', 'ae2:sky_stone_block')
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "ae2:sky_stone_block"
      },
      {
        "tag": "c:nuggets/iron"
      }
    ],
    "results": [
      {
        "item": {
          "id": "create:andesite_alloy"
        }
      }
    ]
  })
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": "ae2:sky_stone_block"
      },
      {
        "tag": "c:nuggets/zinc"
      }
    ],
    "results": [
      {
        "item": {
          "id": "create:andesite_alloy"
        }
      }
    ]
  })

  // 锌矿
  event.custom({
    "type": "create:compacting",
    "ingredients": [
      {
        "item": 'minecraft:iron_ore'
      },
      {
        "item": 'kubejs:frost_core'
      }
    ],
    "results": [
      {
        "item": {
          "id": 'create:zinc_ore'
        }
      }
    ]
  })

  // 冰霜核心
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": 'kubejs:snow_spirit'
      }, {
        "item": 'kubejs:snow_spirit'
      }, {
        "item": 'kubejs:snow_spirit'
      }, {
        "item": 'kubejs:snow_spirit'
      },
      {
        "type": "fluid_stack",
        "amount": 500,
        "fluid": "minecraft:water"
      }
    ],
    "results": [
      {
        "count": 4,
        "item": {
          "id": 'kubejs:frost_core'
        }
      }
    ]
  })

  event.shaped('create:stock_ticker', [
    ' G ',
    ' S ',
    ' B '
  ], {
    G: '#c:glass_blocks',
    S: 'create:stock_link',
    B: '#c:ingots/brass'
  })

  // 仓储发报机
  event.shapeless('create:stock_ticker', ['create:stock_ticker'])

  const cardboard_32 = [
    'ae2:silicon',
    'ae2:certus_quartz_crystal',
    'minecraft:redstone',
    'kubejs:brass_ingot',
    'extendedae:entro_crystal',
    'megacells:sky_steel_ingot',
    'appflux:charged_redstone'
  ]

  cardboard_32.forEach(cb => {
    package_list.forEach(pl => {
      event.shapeless(`${pl}[create:package_contents=[{item:{count:32,id:"${cb}"},slot:0}]]`, [`${pl}[create:package_contents=[{item:{count:32,id:"${cb}"},slot:0}]]`])
    })
  })

  // 纸壳
  package_list.forEach(pl => {
    event.shapeless(`${pl}[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]`, [`${pl}[create:package_contents=[{item:{count:16,id:"minecraft:ender_pearl"},slot:0},{item:{count:16,id:"minecraft:ender_pearl"},slot:1}]]`])
    event.shapeless(`${pl}[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]`, [`${pl}[create:package_contents=[{item:{count:4,id:"ae2:singularity"},slot:0}]]`])
    event.shapeless(`${pl}[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]`, [`${pl}[create:package_contents=[{item:{count:33,id:"minecraft:wither_skeleton_skull"},slot:0}]]`])

  })

  // 金矿
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": 'minecraft:gold_ore'
      },
      {
        "item": 'naturesaura:gold_leaf'
      }
    ],
    "results": [
      {
        "count": 2,
        "item": {
          "id": 'minecraft:gold_ore'
        }
      }
    ]
  })

  // 灵气金矿
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "item": 'minecraft:gold_ore'
      }, {
        "type": "fluid_stack",
        "amount": 500,
        "fluid": "starbunclemania:source_fluid"
      }
    ],
    "results": [
      {
        "count": 1,
        "item": {
          "id": 'kubejs:ethereal_gold_ore'
        }
      }
    ]
  })

  // 液体回响
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": 'kubejs:frosting_ore'
      },
      {
        "item": 'kubejs:frosting_ore'
      },
      {
        "item": 'kubejs:frosting_ore'
      },
      {
        "item": 'kubejs:frosting_ore'
      }
    ],
    "results": [
      {
        "id": "create_deep_dark:molten_echo",
        "amount": 1000
      }
    ]
  })

  // 回响碎片
  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": 'actuallyadditions:palis_crystal'
      },
      {
        "type": "fluid_stack",
        "amount": 250,
        "fluid": "create_deep_dark:molten_echo"
      }
    ],
    "results": [
      {
        "id": 'minecraft:echo_shard'
      }
    ]
  })

  // 黄铜块
  event.custom({
    "type": "create:mixing",
    "heat_requirement": "heated",
    "ingredients": [
      {
        "item": 'kubejs:zinc_block'
      }, {
        "item": 'kubejs:zinc_block'
      }, {
        "item": 'kubejs:zinc_block'
      }, {
        "item": 'kubejs:zinc_block'
      },
      {
        "item": 'minecraft:copper_block'
      }, {
        "item": 'minecraft:copper_block'
      }, {
        "item": 'minecraft:copper_block'
      }, {
        "item": 'minecraft:copper_block'
      }
    ],
    "results": [
      {
        "count": 4,
        "item": {
          "id": 'kubejs:brass_block'
        }
      }
    ]
  })

  // 工厂仪表
  event.shapeless('create:factory_gauge', ['create:stock_link', 'kubejs:platinum_ingot'])

  // 烈焰人燃烧室
  event.shaped('create:blaze_burner', [
    ' S ',
    'FEF',
    ' S '
  ], {
    E: 'create:empty_blaze_burner',
    S: 'ars_nouveau:source_gem',
    F: 'minecraft:flint_and_steel'
  })

  // 回响锭
  event.custom({
    "type": "create:compacting",
    "heat_requirement": "superheated",
    "ingredients": [
      {
        "item": 'minecraft:nether_star'
      },
      {
        "type": "fluid_stack",
        "amount": 100,
        "fluid": "ifeu:liquid_sculk_matter"
      }
    ],
    "results": [
      {
        "count": 4,
        "item": {
          "id": "create_deep_dark:echo_ingot"
        }
      }
    ]
  })
})

