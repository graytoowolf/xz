ServerEvents.tags('block', event => {
    const create_pickup = [
        'minecraft:smithing_table',
        'minecraft:grindstone',
        'minecraft:anvil',
        'minecraft:furnace',
        'minecraft:smoker',
        'minecraft:blast_furnace',
        'minecraft:fletching_table',
        'minecraft:loom',
        'minecraft:cartography_table',
        'minecraft:crafter',
        'minecraft:observer',
        'minecraft:hopper',
        'minecraft:dropper',
        'minecraft:dispenser',
        'minecraft:sticky_piston',
        'minecraft:piston',
        'minecraft:lectern',
        'minecraft:beacon',
        'minecraft:brewing_stand',
        'minecraft:cauldron',
        'minecraft:enchanting_table',
        'minecraft:composter',
        'minecraft:crafting_table',
        'minecraft:stonecutter'
    ]
    event.add('create:wrench_pickup', create_pickup)
})
