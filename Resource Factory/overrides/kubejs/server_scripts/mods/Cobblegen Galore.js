ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    const block =
        [
            'minecraft:light_gray_concrete',
            'minecraft:orange_concrete',
            'minecraft:lime_concrete',
            'minecraft:light_blue_concrete',
            'minecraft:blue_concrete',
            'minecraft:white_concrete',
            'minecraft:gray_concrete',
            'minecraft:purple_concrete',
            'minecraft:red_concrete',
            'minecraft:pink_concrete',
            'minecraft:brown_concrete',
            'minecraft:magenta_concrete',
            'minecraft:yellow_concrete',
            'minecraft:cyan_concrete',
            'minecraft:black_concrete',
            'minecraft:green_concrete',

            'xtonesreworked:jelt_block_0',
            'xtonesreworked:zest_block_15',
            'xtonesreworked:myst_block_0',
            'xtonesreworked:sols_block_0',
            'xtonesreworked:zone_block_15',
            'xtonesreworked:zoea_block_15',
            'xtonesreworked:lair_block_0',
            'xtonesreworked:zech_block_15',
            'xtonesreworked:sync_block_0',
            'xtonesreworked:fort_block_0',
            'xtonesreworked:reds_block_0',
            'xtonesreworked:tank_block_0',
            'xtonesreworked:zane_block_15',
            'xtonesreworked:zome_block_15',
            'xtonesreworked:agon_block_0',
            'xtonesreworked:vect_block_0',
            'xtonesreworked:zeta_block_15',
            'xtonesreworked:reed_block_0',
            'xtonesreworked:kryp_block_0',
            'xtonesreworked:korp_block_0',
            'xtonesreworked:zion_block_15',
            'xtonesreworked:azur_block_0',
            'xtonesreworked:zyth_block_15',
            'xtonesreworked:zkul_block_15',
            'xtonesreworked:lave_block_0',
            'xtonesreworked:ztyl_block_0',
            'xtonesreworked:vena_block_0',
            'xtonesreworked:zorg_block_15',
            'xtonesreworked:iszm_block_0',
            'xtonesreworked:glaxx_block_0',
            'xtonesreworked:bitt_block_0',
            'xtonesreworked:mint_block_0',
            'xtonesreworked:roen_block_0',
            'xtonesreworked:cray_block_0',
            'xtonesreworked:xtone_tile'
        ]
    const block1 = [
        'minecraft:deepslate',
        'minecraft:soul_sand',
        'minecraft:calcite',
        'minecraft:tuff'
    ]

    event.custom(
        {
            type: "cobblegengalore:blockgen",
            result: {
                id: 'minecraft:ice',
                count: 1
            },
            speed: 2,
            left: {
                Name: "water"
            },
            right: {
                Name: "water"
            },
            modifier: {
                Name: 'minecraft:ice'
            }
        }
    )
    event.custom(
        {
            type: "cobblegengalore:blockgen",
            result: {
                id: 'minecraft:netherrack',
                count: 2
            },
            speed: 2,
            left: {
                Name: "water"
            },
            right: {
                Name: "lava"
            },
            modifier: {
                Name: 'minecraft:netherrack'
            },
            consumeRight: true
        }
    )
    event.custom(
        {
            type: "cobblegengalore:blockgen",
            result: {
                id: 'minecraft:end_stone',
                count: 2
            },
            speed: 2,
            left: {
                Name: "water"
            },
            right: {
                Name: "lava"
            },
            modifier: {
                Name: 'minecraft:end_stone'
            },
            consumeRight: true
        }
    )
    event.custom(
        {
            type: "cobblegengalore:blockgen",
            result: {
                id: 'minecraft:blackstone',
                count: 1
            },
            speed: 1,
            left: {
                Name: 'minecraft:soul_sand'
            },
            right: {
                Name: 'minecraft:basalt'
            },
            modifier: {
                Name: 'minecraft:blackstone'
            },
        }
    )


    block.forEach(block => {
        event.custom(
            {
                type: "cobblegengalore:blockgen",
                result: {
                    id: block,
                    count: 4
                },
                speed: 2,
                left: {
                    Name: "water"
                },
                right: {
                    Name: 'oritech:still_biofuel_block'
                },
                modifier: {
                    Name: block
                }
            }
        )
    });
    block1.forEach(block => {
        event.custom(
            {
                type: "cobblegengalore:blockgen",
                result: {
                    id: block,
                    count: 4
                },
                speed: 2,
                left: {
                    Name: 'minecraft:blue_ice'
                },
                right: {
                    Name: "lava"
                },
                modifier: {
                    Name: block
                },
            }
        )
    });

})