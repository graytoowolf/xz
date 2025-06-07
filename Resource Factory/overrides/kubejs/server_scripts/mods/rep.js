ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.custom(
        {
            "type": "replication:matter_value",
            "input": {
                "item": 'hostilenetworks:overworld_prediction'
            },
            "matter": [
                {
                    "type": "replication:earth",
                    "amount": 2.0
                }
            ]
        }
    )
    event.custom(
        {
            "type": "replication:matter_value",
            "input": {
                "item": 'hostilenetworks:nether_prediction'
            },
            "matter": [
                {
                    "type": "replication:nether",
                    "amount": 2.0
                }
            ]
        }
    )
    event.custom(
        {
            "type": "replication:matter_value",
            "input": {
                "item": 'hostilenetworks:end_prediction'
            },
            "matter": [
                {
                    "type": "replication:ender",
                    "amount": 2.0
                }
            ]
        }
    )
})