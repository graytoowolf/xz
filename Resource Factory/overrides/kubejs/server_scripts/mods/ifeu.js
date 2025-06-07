ServerEvents.recipes(event => {
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