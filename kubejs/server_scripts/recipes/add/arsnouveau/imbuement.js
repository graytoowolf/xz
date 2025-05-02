// 灌注室
ServerEvents.recipes(event => {
  event.custom({
    "type": "ars_nouveau:imbuement",
    "input": {
      "item": 'naturesaura:eye'
    },
    "output": {
      "count": 2,
      "id": 'minecraft:spider_eye'
    },
    "pedestalItems": [
      {
        "item": 'kubejs:polar_lights_bottle'
      },
      {
        "item": 'kubejs:polar_lights_bottle'
      },
      {
        "item": 'kubejs:polar_lights_bottle'
      }
    ],
    "source": 2000
  })

  event.custom({
    "type": "ars_nouveau:imbuement",
    "input": {
      "item": 'minecraft:amethyst_block'
    },
    "output": {
      "count": 1,
      "id": 'ars_nouveau:source_gem_block'
    },
    "pedestalItems": [],
    "source": 2000
  })



})