const creative = {
    'ae2:sky_stone_block': 'kubejs:sky_token',
    'minecraft:copper_block': 'kubejs:copper_token',
    'minecraft:iron_block': 'kubejs:iron_token',
    'minecraft:gold_block': 'kubejs:gold_token',
    'minecraft:diamond_block': 'kubejs:diamond_token',
    'minecraft:redstone_block': 'kubejs:redstone_token',
    'minecraft:glowstone': 'kubejs:glowstone_token',
    'minecraft:lapis_block': 'kubejs:lapis_token',
    'oritech:adamant_ingot': 'kubejs:adamant_token',
    'minecraft:netherite_ingot': 'kubejs:netherite_token',
    'create_deep_dark:echo_ingot': 'kubejs:echo_token',
    'ae2:calculation_processor': 'kubejs:calculation_token',
    'ae2:engineering_processor': 'kubejs:engineering_token'
}

ServerEvents.recipes(event => {
    Object.keys(creative).forEach(cb => {
        package_list.forEach(pl => {
            event.shapeless(`${pl}[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`, [`${pl}[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`])
        })
        // event.shapeless(`create:cardboard_package_12x10[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`, [`create:cardboard_package_12x10[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`])
        // event.shapeless(`create:cardboard_package_10x8[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`, [`create:cardboard_package_10x8[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`])
        // event.shapeless(`create:cardboard_package_10x12[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`, [`create:cardboard_package_10x12[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`])
        // event.shapeless(`create:cardboard_package_12x12[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`, [`create:cardboard_package_12x12[create:package_contents=[{item:{count:64,id:"${cb}"},slot:0},{item:{count:64,id:"${cb}"},slot:1},{item:{count:64,id:"${cb}"},slot:2},{item:{count:64,id:"${cb}"},slot:3},{item:{count:64,id:"${cb}"},slot:4},{item:{count:64,id:"${cb}"},slot:5},{item:{count:64,id:"${cb}"},slot:6},{item:{count:64,id:"${cb}"},slot:7},{item:{count:64,id:"${cb}"},slot:8}]]`])
    })

    // 凭证
    Object.keys(creative).forEach(cr => {
        event.recipes.custommachinery.custom_machine('custommachinery:token_fabricate', 200)
            .produceItem(creative[cr])
            .requireSourcePerTick(200)
            .requireEnergyPerTick(1000)
            .requireFluidPerTick(Fluid.of('create_deep_dark:molten_echo', 10))
            .requireItem([
                Item.of(`create:cardboard_package_12x10[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:cardboard_package_10x8[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:cardboard_package_10x12[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:cardboard_package_12x12[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_creeper_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_darcy_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_evan_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_jinx_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_kryppers_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_simi_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_starlotte_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_thunder_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_up_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`),
                Item.of(`create:rare_vector_package[create:package_contents=[{item:{count:64,id:"${cr}"},slot:0},{item:{count:64,id:"${cr}"},slot:1},{item:{count:64,id:"${cr}"},slot:2},{item:{count:64,id:"${cr}"},slot:3},{item:{count:64,id:"${cr}"},slot:4},{item:{count:64,id:"${cr}"},slot:5},{item:{count:64,id:"${cr}"},slot:6},{item:{count:64,id:"${cr}"},slot:7},{item:{count:64,id:"${cr}"},slot:8}]]`)
            ])
    })

    // 合成凭证
    event.shaped('kubejs:recipe_token', [
        'MUM',
        'PCA',
        'MUM'
    ], {
        M: 'occultism:miner_afrit_deeps[occultism:rolls_per_operation=1,occultism:max_mining_time=200]',
        U: 'mekanism:basic_chemical_tank[mekanism:chemicals={chemical_tanks:[{amount:64000,id:"mekanismgenerators:fusion_fuel"}]}]',
        C: 'pneumaticcraft:creative_compressor',
        P: 'oritech:promethium_pickaxe',
        A: 'oritech:promethium_axe'
    })
})
