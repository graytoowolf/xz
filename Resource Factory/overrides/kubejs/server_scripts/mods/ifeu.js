ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "ifeu:shaped",
            "inputFluid": {
                "amount": 8000,
                "id": "actuallyadditions:empowered_oil"
            },
            "inputs": [
                {
                    "item": 'naturesaura:sky_ingot'
                },
                {
                    "item": 'occultism:afrit_essence'
                },
                {
                    "item": 'naturesaura:sky_ingot'
                },
                {
                    "item": 'naturesaura:gold_leaf'
                },
                {
                    "item": 'occultism:magic_lamp_empty'
                },
                {
                    "item": 'naturesaura:gold_leaf'
                },
                {
                    "item": 'naturesaura:sky_ingot'
                },
                {
                    "item": 'occultism:iesnium_pickaxe'
                },
                {
                    "item": 'naturesaura:sky_ingot'
                }
            ],
            "output": {
                "count": 1,
                "id": 'occultism:miner_afrit_deeps'
            }
        }
    )

    event.custom(
        {
            "type": "ifeu:shapeless",
            "inputFluid": {
                "amount": 50,
                "id": "oritech:still_biofuel"
            },
            "inputs": [
                {
                    "item": 'ae2:matter_ball'
                }
            ],
            "output": {
                "count": 1,
                "id": 'minecraft:copper_ore'
            }
        }
    )
    event.custom(
        {
            "type": "ifeu:shapeless",
            "inputFluid": {
                "amount": 450,
                "id": "oritech:still_biofuel"
            },
            "inputs": [
                {
                    "item": 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                },
                {
                    'item': 'ae2:matter_ball'
                }
            ],
            "output": {
                "count": 9,
                "id": 'minecraft:copper_ore'
            }
        }
    )
})