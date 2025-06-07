ServerEvents.tags('item', event => {

    const dispenser_placement = [
        'minecraft:gold_block',
        'minecraft:diorite'
    ]
    const fire_immune = [
        'alltheores:platinum_ingot',
        'modular_machinery_reborn:modularium'
    ]

    event.add('lychee:dispenser_placement', dispenser_placement)
    event.add('lychee:fire_immune', fire_immune)
    event.add('c:dusts/coal', 'oritech:coal_dust')
    event.remove('c:dusts/coal', 'immersiveengineering:dust_hop_graphite')
    event.remove('minecraft:coals', 'immersiveengineering:coal_coke')
})

ServerEvents.tags('block', event => {
    const paradox_allow = [
        'justdirethings:time_crystal_block',
        'oritech:fluxite_block',
        'alltheores:raw_platinum_block',
        'justdirethings:gooblock_tier2',
        'alltheores:raw_lead_block',
        'occultism:raw_iesnium_block',
        'ae2:fluix_block',
        'minecraft:raw_iron_block',
        'replication:raw_replica_block',
        'forbidden_arcanus:stellarite_block',
        'minecraft:raw_gold_block',
        'justdirethings:gooblock_tier1',
        'alltheores:raw_osmium_block',
        'alltheores:raw_nickel_block',
        'alltheores:raw_uranium_block',
        'justdirethings:gooblock_tier4',
        'forbidden_arcanus:arcane_crystal_block',
        'silentgear:raw_crimson_iron_block',
        'minecraft:raw_copper_block',
        'silentgear:raw_azure_silver_block',
        'stellaris:raw_desh_block',
        'oritech:uranium_crystal',
        'alltheores:raw_aluminum_block',
        'alltheores:raw_tin_block',
        'alltheores:raw_zinc_block',
        'alltheores:raw_iridium_block',
        'alltheores:sulfur_block',
        'justdirethings:gooblock_tier3',
        'ars_nouveau:source_gem_block',
        'alltheores:fluorite_block',
        'ae2:quartz_block',
        'forbidden_arcanus:corrupted_arcane_crystal_block',
        'alltheores:raw_silver_block',
        'minecraft:sculk_catalyst',
        'minecraft:sculk_shrieker',
        'minecraft:sculk',
        'minecraft:sculk_sensor']

    event.add('justdirethings:paradox_allow', paradox_allow)

})

ServerEvents.tags('entity_type', event => {
    event.add('c:teleporting_not_supported', 'mekanism:robit')
})