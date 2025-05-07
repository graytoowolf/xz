// const dye_generator_item = {
//     'minecraft:glass': 18,
//     'minecraft:cherry_trapdoor': 6,
//     'minecraft:cherry_stairs': 4,
//     'minecraft:smooth_stone': 33,
//     'minecraft:smooth_stone_slab': 9,
//     'oritech:small_tank_block': 4,
//     'industrialforegoing:machine_frame_pity': 1,
//     'kubejs:cold_crystal_bucket': 4,
//     'custommachinery:dye_generator': 1
// }



// 染料生成器
BlockEvents.placed('kubejs:dye_generator', event => {
    let block = event.block
    let block_x = block.x
    let block_y = block.y
    let block_z = block.z

    builderCheck([3, 3, 8], event)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 1} ${block_z} ${block_x} ${block_y + 2} ${block_z} minecraft:cherry_log[axis=y]`)

    event.server.runCommandSilent(`fill ${block_x} ${block_y + 3} ${block_z} ${block_x} ${block_y + 3} ${block_z} oritech:small_tank_block`)
    event.server.runCommandSilent(`fill ${block_x + 1} ${block_y + 3} ${block_z} ${block_x + 1} ${block_y + 3} ${block_z} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x - 1} ${block_y + 3} ${block_z} ${block_x - 1} ${block_y + 3} ${block_z} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 3} ${block_z - 1} ${block_x} ${block_y + 3} ${block_z - 1} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 3} ${block_z + 1} ${block_x} ${block_y + 3} ${block_z + 1} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)

    event.server.runCommandSilent(`fill ${block_x + 2} ${block_y + 4} ${block_z + 2} ${block_x - 2} ${block_y + 4} ${block_z - 2} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 4} ${block_z} ${block_x} ${block_y + 4} ${block_z} kubejs:cold_crystal`)
    event.server.runCommandSilent(`fill ${block_x - 2} ${block_y + 4} ${block_z - 2} ${block_x - 2} ${block_y + 4} ${block_z - 2} minecraft:air`)
    event.server.runCommandSilent(`fill ${block_x + 2} ${block_y + 4} ${block_z - 2} ${block_x + 2} ${block_y + 4} ${block_z - 2} minecraft:air`)
    event.server.runCommandSilent(`fill ${block_x + 2} ${block_y + 4} ${block_z + 2} ${block_x + 2} ${block_y + 4} ${block_z + 2} minecraft:air`)
    event.server.runCommandSilent(`fill ${block_x - 2} ${block_y + 4} ${block_z + 2} ${block_x - 2} ${block_y + 4} ${block_z + 2} minecraft:air`)

    event.server.runCommandSilent(`fill ${block_x + 3} ${block_y + 5} ${block_z + 3} ${block_x - 3} ${block_y + 5} ${block_z - 3} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 5} ${block_z} ${block_x} ${block_y + 5} ${block_z} industrialforegoing:machine_frame_pity`)

    event.server.runCommandSilent(`fill ${block_x + 2} ${block_y + 6} ${block_z + 2} ${block_x - 2} ${block_y + 6} ${block_z - 2} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 6} ${block_z} ${block_x} ${block_y + 6} ${block_z} oritech:small_tank_block`)
    event.server.runCommandSilent(`fill ${block_x - 2} ${block_y + 6} ${block_z - 2} ${block_x - 2} ${block_y + 6} ${block_z - 2} minecraft:air`)
    event.server.runCommandSilent(`fill ${block_x + 2} ${block_y + 6} ${block_z + 2} ${block_x + 2} ${block_y + 6} ${block_z + 2} minecraft:air`)
    event.server.runCommandSilent(`fill ${block_x + 2} ${block_y + 6} ${block_z - 2} ${block_x + 2} ${block_y + 6} ${block_z - 2} minecraft:air`)
    event.server.runCommandSilent(`fill ${block_x - 2} ${block_y + 6} ${block_z + 2} ${block_x - 2} ${block_y + 6} ${block_z + 2} minecraft:air`)

    event.server.runCommandSilent(`fill ${block_x - 1} ${block_y + 7} ${block_z} ${block_x + 1} ${block_y + 7} ${block_z} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 7} ${block_z - 1} ${block_x} ${block_y + 7} ${block_z + 1} minecraft:cherry_leaves[distance=7,persistent=true,waterlogged=false]`)

    event.server.runCommandSilent(`setblock ${block_x} ${block_y} ${block_z} minecraft:air`)
})

// 异火提取器
BlockEvents.placed('kubejs:fire_generator', event => {
    let block = event.block
    let block_x = block.x
    let block_y = block.y
    let block_z = block.z

    builderCheck([2, 2, 3], event)
    event.server.runCommandSilent(`fill ${block_x - 1} ${block_y} ${block_z - 1} ${block_x + 1} ${block_y} ${block_z + 1} minecraft:stripped_cherry_wood[axis=y]`)
    event.server.runCommandSilent(`setblock ${block_x - 1} ${block_y} ${block_z} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x + 1} ${block_y} ${block_z} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x} ${block_y} ${block_z - 1} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x} ${block_y} ${block_z + 1} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x - 2} ${block_y} ${block_z - 2} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x + 2} ${block_y} ${block_z + 2} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x + 2} ${block_y} ${block_z - 2} minecraft:glass`)
    event.server.runCommandSilent(`setblock ${block_x - 2} ${block_y} ${block_z + 2} minecraft:glass`)

    event.server.runCommandSilent(`fill ${block_x - 1} ${block_y + 1} ${block_z - 1} ${block_x + 1} ${block_y + 1} ${block_z + 1} minecraft:glass`)
    event.server.runCommandSilent(`fill ${block_x} ${block_y + 1} ${block_z} ${block_x} ${block_y + 1} ${block_z} minecraft:stripped_cherry_wood[axis=y]`)
    event.server.runCommandSilent(`setblock ${block_x - 1} ${block_y + 1} ${block_z} kubejs:pink_fire`)
    event.server.runCommandSilent(`setblock ${block_x + 1} ${block_y + 1} ${block_z} kubejs:pink_fire`)
    event.server.runCommandSilent(`setblock ${block_x} ${block_y + 1} ${block_z - 1} kubejs:pink_fire`)
    event.server.runCommandSilent(`setblock ${block_x} ${block_y + 1} ${block_z + 1} kubejs:pink_fire`)
})






