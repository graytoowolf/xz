ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'integrateddynamics:crafting/drying_basin' }, "#c:dyes/black", 'minecraft:rotten_flesh')
    event.replaceInput({ mod: 'integratedtunnels' }, 'minecraft:diamond', 'oritech:carbon_fibre_strands')
    event.replaceInput({ mod: 'integrateddynamics' }, 'minecraft:diamond', 'oritech:carbon_fibre_strands')
    event.replaceInput({ mod: 'integratedtunnels' }, 'minecraft:diamond_pickaxe', 'minecraft:iron_pickaxe')
    event.replaceInput({ mod: 'integratedtunnels' }, 'minecraft:emerald', 'oritech:biomass')

    kubejs.shaped('12x integrateddynamics:menril_log', ['a  ', ' a ', 'a  '], { a: 'mysticalagriculture:wood_essence' })
    kubejs.shaped('integrateddynamics:mechanical_drying_basin', [' a ', 'bcb', 'bbb'], { a: 'actuallyadditions:double_battery', b: 'integrateddynamics:crystalized_menril_chunk', c: 'integrateddynamics:drying_basin' })
    kubejs.shaped('integrateddynamics:mechanical_squeezer', [' a ', 'bcb', 'bbb'], { a: 'actuallyadditions:double_battery', b: 'integrateddynamics:crystalized_menril_chunk', c: 'integrateddynamics:squeezer' })
    kubejs.shaped('48x integrateddynamics:variable', ['aaa', 'aba', 'aaa'], { a: 'integrateddynamics:crystalized_menril_chunk', b: 'mysticalagriculture:wood_essence' })
    kubejs.shapeless('integrateddynamics:variable_transformer_output', 'integrateddynamics:variable_transformer_input')
    kubejs.shapeless('integrateddynamics:variable_transformer_input', 'integrateddynamics:variable_transformer_output')
    event.custom({
        "type": "integrateddynamics:squeezer",
        "input_item": {
            "item": "minecraft:popped_chorus_fruit"
        },
        "output_fluid": {
            "id": "integrateddynamics:liquid_chorus",
            "amount": 125
        }
    })
    event.custom({
        "type": "integrateddynamics:squeezer",
        "input_item": {
            "item": "integrateddynamics:proto_chorus"
        },
        "output_fluid": {
            "id": "integrateddynamics:liquid_chorus",
            "amount": 125
        }
    })
    event.custom({
        "type": "integrateddynamics:squeezer",
        "input_item": {
            "item": "integrateddynamics:menril_log"
        },
        "output_fluid": {
            "id": "integrateddynamics:menril_resin",
            "amount": 1000
        }
    })
    event.custom({
        "type": "integrateddynamics:squeezer",
        "input_item": {
            "item": "integrateddynamics:menril_planks"
        },
        "output_fluid": {
            "id": "integrateddynamics:menril_resin",
            "amount": 250
        }
    })
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "input_item": {
            "item": "minecraft:popped_chorus_fruit"
        },
        "output_fluid": {
            "id": "integrateddynamics:liquid_chorus",
            "amount": 125
        },
        "output_items": [
            {
                "item": {
                    "id": "integrateddynamics:crystalized_chorus_chunk",
                    "count": 2
                }
            },
            {
                "item": {
                    "id": "integrateddynamics:crystalized_chorus_chunk"
                },
                "chance": 0.5
            },
            {
                "item": {
                    "id": "integrateddynamics:crystalized_chorus_chunk"
                },
                "chance": 0.5
            }
        ],
        "duration": 15
    })
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "input_item": {
            "item": "integrateddynamics:proto_chorus"
        },
        "output_fluid": {
            "id": "integrateddynamics:liquid_chorus",
            "amount": 125
        },
        "output_items": [
            {
                "item": {
                    "id": "integrateddynamics:crystalized_chorus_chunk"
                },
                "chance": 0.5
            },
            {
                "item": {
                    "id": "integrateddynamics:crystalized_chorus_chunk"
                },
                "chance": 0.5
            }
        ],
        "duration": 15
    })
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "input_item": {
            "item": "integrateddynamics:menril_log"
        },
        "output_fluid": {
            "id": "integrateddynamics:menril_resin",
            "amount": 1000
        },
        "output_items": [
            {
                "item": {
                    "id": "integrateddynamics:crystalized_menril_chunk",
                    "count": 2
                }
            },
            {
                "item": {
                    "id": "integrateddynamics:crystalized_menril_chunk"
                },
                "chance": 0.5
            },
            {
                "item": {
                    "id": "integrateddynamics:crystalized_menril_chunk"
                },
                "chance": 0.5
            }
        ],
        "duration": 15
    })
    event.custom({
        "type": "integrateddynamics:mechanical_squeezer",
        "input_item": {
            "item": "integrateddynamics:menril_planks"
        },
        "output_fluid": {
            "id": "integrateddynamics:menril_resin",
            "amount": 250
        },
        "output_items": [
            {
                "item": {
                    "id": "integrateddynamics:crystalized_menril_chunk"
                }
            }
        ],
        "duration": 15
    })
})