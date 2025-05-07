// 附魔装置
ServerEvents.recipes(event => {
  // 星宝石兽碎片
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      }
    ],
    "reagent": {
      "item": 'ars_nouveau:source_gem'
    },
    "result": {
      "count": 1,
      "id": 'ars_nouveau:starbuncle_shards'
    },
    "sourceCost": 1000
  })

  // 星宝石兽护符
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      }
    ],
    "reagent": {
      "item": 'ars_nouveau:starbuncle_shards'
    },
    "result": {
      "count": 1,
      "id": 'ars_nouveau:starbuncle_charm'
    },
    "sourceCost": 1500
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:cherry_sapling'
    },
    "result": {
      "count": 4,
      "id": 'minecraft:oak_sapling'
    },
    "sourceCost": 100
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:oak_sapling'
    },
    "result": {
      "count": 4,
      "id": 'minecraft:spruce_sapling'
    },
    "sourceCost": 100
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:spruce_sapling'
    },
    "result": {
      "count": 4,
      "id": 'minecraft:birch_sapling'
    },
    "sourceCost": 100
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:birch_sapling'
    },
    "result": {
      "count": 4,
      "id": 'minecraft:jungle_sapling'
    },
    "sourceCost": 100
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:jungle_sapling'
    },
    "result": {
      "count": 4,
      "id": 'minecraft:acacia_sapling'
    },
    "sourceCost": 100
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:acacia_sapling'
    },
    "result": {
      "count": 4,
      "id": 'minecraft:dark_oak_sapling'
    },
    "sourceCost": 100
  })

  // 树苗
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": "naturesaura:gold_leaf"
      },
      {
        "item": 'minecraft:bone_meal'
      },
      {
        "item": 'minecraft:bone_meal'
      }
    ],
    "reagent": {
      "item": 'minecraft:dark_oak_sapling'
    },
    "result": {
      "count": 4,
      "id": 'integrateddynamics:menril_sapling'
    },
    "sourceCost": 100
  })

  // 附魔核心
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": 'minecraft:amethyst_block'
      },
      {
        "item": 'minecraft:amethyst_block'
      },
      {
        "item": 'ars_nouveau:source_gem_block'
      },
      {
        "item": 'ars_nouveau:source_gem_block'
      }
    ],
    "reagent": {
      "item": 'kubejs:frost_core'
    },
    "result": {
      "count": 1,
      "id": 'kubejs:enchantment_core'
    },
    "sourceCost": 2000
  })

  // 降生祭坛
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": 'minecraft:dripstone_block'
      },
      {
        "item": 'minecraft:dripstone_block'
      },
      {
        "item": 'kubejs:polar_lights_dust_block'
      },
      {
        "item": 'naturesaura:infused_iron'
      },
      {
        "item": 'naturesaura:infused_iron'
      },
      {
        "item": 'minecraft:dripstone_block'
      },
      {
        "item": 'minecraft:dripstone_block'
      }
    ],
    "reagent": {
      "item": 'naturesaura:token_joy'
    },
    "result": {
      "count": 1,
      "id": 'naturesaura:animal_spawner'
    },
    "sourceCost": 2000
  })

  // 不稳定礼物扎带
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      },
      {
        "item": 'minecraft:redstone_ore'
      }
    ],
    "reagent": {
      "item": 'ars_nouveau:mundane_belt'
    },
    "result": {
      "count": 1,
      "id": 'ars_nouveau:belt_of_unstable_gifts'
    },
    "sourceCost": 4000
  })

  // 紫颂果
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": 'kubejs:enchantment_core'
      }
    ],
    "reagent": {
      "item": 'minecraft:apple'
    },
    "result": {
      "count": 1,
      "id": 'minecraft:chorus_fruit'
    },
    "sourceCost": 4000
  })

  // 闪耀钻石块
  event.custom({
    "type": "ars_nouveau:enchanting_apparatus",
    "keepNbtOfReagent": true,
    "pedestalItems": [
      {
        "item": 'kubejs:platinum_ingot'
      }, {
        "item": 'kubejs:platinum_ingot'
      }, {
        "item": 'kubejs:platinum_ingot'
      }, {
        "item": 'kubejs:platinum_ingot'
      }
    ],
    "reagent": {
      "item": 'minecraft:glowstone'
    },
    "result": {
      "count": 1,
      "id": 'solarcooker:shining_diamond_block'
    },
    "sourceCost": 4000
  })

})