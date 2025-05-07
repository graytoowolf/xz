/* 
好运：
天上随机掉落20-40个物品
脚下随机出现10-20个食物
5分钟buff
生成动物
单开小黑屋
重置随机方块
*/


/* 
厄运：
头顶掉落3个铁砧(缓慢)
天上掉落5个激活的TNT
脚下3*3出现一桶水
脚下3*3出现一同岩浆
5分钟debuff
kill 
随机tp
黑曜石

*/
const luckItem = [
    'minecraft:emerald',
    'minecraft:diamond',
    'minecraft:bamboo',
    'minecraft:sugar_cane',
    'minecraft:cactus',
    'minecraft:sculk',
    'minecraft:enchanting_table',
    'minecraft:beacon',
    'minecraft:brewing_stand',
    'minecraft:bookshelf',
    'minecraft:ender_chest',
    'kubejs:coin',
    'minecraft:oak_log',
    'minecraft:birch_log',
    'minecraft:jungle_log',
    'minecraft:acacia_log',
    'minecraft:dark_oak_log',
    'minecraft:mangrove_log',
    'minecraft:cherry_log',
    'minecraft:stone',
    'minecraft:cobblestone',
    'minecraft:smooth_stone',
    'minecraft:end_stone',
    'minecraft:amethyst_block',
    'minecraft:quartz_block',
    'minecraft:white_wool',
    'minecraft:glass',
    'minecraft:cyan_shulker_box',
    'minecraft:cyan_bed',
    'minecraft:grass_block',
    'minecraft:ice',
    'minecraft:clay',
    'minecraft:snow_block',
    'minecraft:pointed_dripstone',
    'minecraft:obsidian',
    'minecraft:bone_block',
    'minecraft:brown_mushroom',
    'minecraft:red_mushroom',
    'minecraft:potato',
    'minecraft:baked_potato',
    'minecraft:poisonous_potato',
    'minecraft:beetroot',
    'minecraft:dried_kelp',
    'minecraft:beef',
    'minecraft:cooked_beef',
    'minecraft:porkchop',
    'minecraft:cooked_porkchop',
    'minecraft:ender_eye',
    'minecraft:redstone',
    'minecraft:repeater',
    'minecraft:comparator',
    'minecraft:piston',
    'minecraft:sticky_piston',
    'minecraft:hopper',
    'minecraft:bucket',
    'minecraft:water_bucket',
    'minecraft:lava_bucket',
    'minecraft:powder_snow_bucket',
    'minecraft:flint_and_steel',
    'minecraft:bone_meal',
    'minecraft:name_tag',
    'minecraft:lead',
    'minecraft:clock',
    'minecraft:ender_pearl',
    'minecraft:elytra',
    'minecraft:firework_rocket',
    'minecraft:totem_of_undying',
    'minecraft:apple',
    'minecraft:golden_apple',
    'minecraft:enchanted_golden_apple',
    'minecraft:melon_slice',
    'minecraft:chorus_fruit',
    'minecraft:carrot',
    'minecraft:golden_carrot',
    'minecraft:netherite_ingot',
    'minecraft:wheat',
    'minecraft:bone',
    'minecraft:feather',
    'minecraft:leather',
    'minecraft:slime_ball',
    'minecraft:clay_ball',
    'minecraft:prismarine_shard',
    'minecraft:prismarine_crystals',
    'minecraft:mutton',
    'minecraft:cooked_mutton',
    'minecraft:chicken',
    'minecraft:cooked_chicken',
    'minecraft:rabbit',
    'minecraft:cooked_rabbit',
    'minecraft:cod',
    'minecraft:cooked_cod',
    'minecraft:salmon',
    'minecraft:cooked_salmon',
    'minecraft:tropical_fish',
    'minecraft:pufferfish',
    'minecraft:bread',
    'minecraft:cookie',
    'minecraft:cake',
    'minecraft:pumpkin_pie',
    'minecraft:mushroom_stew',
    'minecraft:honey_bottle',
    'minecraft:coal',
    'minecraft:charcoal',
    'minecraft:lapis_lazuli',
    'minecraft:quartz',
    'minecraft:amethyst_shard',
    'minecraft:iron_ingot',
    'minecraft:copper_ingot',
    'minecraft:gold_ingot',
    'minecraft:netherite_scrap',
    'mekanism:elite_chemical_tank',
    'mekanism:ultimate_chemical_tank',
    'mekanism:alloy_infused',
    'mekanism:alloy_reinforced',
    'mekanism:alloy_atomic',
    'mekanism:basic_control_circuit',
    'mekanism:advanced_control_circuit',
    'mekanism:elite_control_circuit',
    'mekanism:ultimate_control_circuit',
    'minecraft:nautilus_shell',
    'minecraft:heart_of_the_sea',
    'minecraft:blaze_rod',
    'minecraft:nether_star',
    'minecraft:shulker_shell',
    'minecraft:echo_shard',
    'minecraft:book',
    'minecraft:glowstone_dust',
    'minecraft:gunpowder',
    'minecraft:dragon_breath',
    'mekanism:basic_fluid_tank',
    'mekanism:ultimate_fluid_tank',
    'mekanism:elite_fluid_tank',
    'mekanism:advanced_fluid_tank',
    'mekanism:basic_universal_cable',
    'mekanism:advanced_universal_cable',
    'mekanism:elite_universal_cable',
    'mekanism:ultimate_universal_cable',
    'mekanism:advanced_pressurized_tube',
    'mekanism:elite_pressurized_tube',
    'mekanism:ultimate_pressurized_tube',
    'mekanism:basic_logistical_transporter',
    'mekanism:advanced_logistical_transporter',
    'mekanism:elite_logistical_transporter',
    'mekanism:ultimate_logistical_transporter',
    'mekanism:basic_chemical_tank',
    'mekanism:advanced_chemical_tank',
    'elevatorid:elevator_black',
    'dimensionalpocketsii:dimensional_shard',
    'pneumaticcraft:pressure_tube',
    'mob_grinding_utils:ender_inhibitor_on',
    'mob_grinding_utils:solid_xp_baby',
    'pneumaticcraft:advanced_pressure_tube',
    'pneumaticcraft:spawner_agitator',
    'pneumaticcraft:pressure_gauge_module',
    'pneumaticcraft:ingot_iron_compressed',
    'mekanism:pellet_antimatter',
    'mekanism:pellet_plutonium',
    'mekanism:pellet_polonium',
    'mekanism:electrolytic_core',
    'mekanism:teleportation_core',
    'industrialforegoing:plastic',
    'industrialforegoing:pink_slime',
    'industrialforegoing:pink_slime_ingot',
    'pipez:basic_upgrade',
    'pipez:improved_upgrade',
    'pipez:advanced_upgrade',
    'pipez:ultimate_upgrade',
    'elevatorid:elevator_cyan',
    'elevatorid:elevator_white',
    'elevatorid:elevator_orange',
    'elevatorid:elevator_magenta',
    'elevatorid:elevator_light_blue',
    'elevatorid:elevator_yellow',
    'elevatorid:elevator_lime',
    'elevatorid:elevator_pink',
    'elevatorid:elevator_gray',
    'elevatorid:elevator_light_gray',
    'elevatorid:elevator_purple',
    'elevatorid:elevator_blue',
    'elevatorid:elevator_brown',
    'elevatorid:elevator_green',
    'elevatorid:elevator_red',
    'arseng:me_source_jar',
    'dimstorage:dim_core',
    'dimstorage:dim_wall',
    'dimstorage:solid_dim_core',
    'fluxnetworks:flux_plug',
    'fluxnetworks:flux_point',
    'pneumaticcraft:unassembled_pcb',
    'pneumaticcraft:module_expansion_card',
    'pneumaticcraft:glycerol',
    'pneumaticcraft:capacitor',
    'pneumaticcraft:transistor',
    'pneumaticcraft:printed_circuit_board',
    'kubejs:frozen_iron_ingot',
    'kubejs:snow_spirit',
    'kubejs:upgrade_smithing_raffle_box',
    'kubejs:upgrade_raffle_box',
    'kubejs:tools_raffle_box',
    'ae2:logic_processor',
    'ae2:calculation_processor',
    'ae2:engineering_processor',
    'ae2:fluix_smart_cable',
    'ae2:purple_glass_cable',
    'ae2:fluix_smart_dense_cable',
    'ae2:quartz_fiber',
    'ae2:cable_anchor',
    'ae2:cell_component_1k',
    'ae2:cell_component_4k',
    'ae2:cell_component_16k',
    'ae2:cell_component_64k',
    'ae2:cell_component_256k',
    'ae2:item_cell_housing',
    'ae2:fluid_cell_housing',
    'ars_nouveau:greater_experience_gem'
]
const luckEffect = [
    'minecraft:absorption',
    'minecraft:conduit_power',
    'minecraft:fire_resistance',
    'minecraft:haste',
    'minecraft:health_boost',
    'minecraft:saturation',
    'minecraft:instant_health',
    'minecraft:jump_boost',
    'minecraft:speed',
    'minecraft:night_vision',
    'minecraft:regeneration',
    'minecraft:invisibility',
    'minecraft:resistance',
    'minecraft:slow_falling',
    'minecraft:strength',
    'minecraft:village_hero',
    'minecraft:water_breathing',
]
const luckAnimals = [
    'minecraft:allay',
    'minecraft:armadillo',
    'minecraft:bat',
    'minecraft:bee',
    'minecraft:cat',
    'minecraft:chicken',
    'minecraft:cow',
    'minecraft:donkey',
    'minecraft:fox',
    'minecraft:goat',
    'minecraft:horse',
    'minecraft:iron_golem',
    'minecraft:llama',
    'minecraft:mooshroom',
    'minecraft:mule',
    'minecraft:ocelot',
    'minecraft:panda',
    'minecraft:parrot',
    'minecraft:pig',
    'minecraft:polar_bear',
    'minecraft:rabbit',
    'minecraft:sheep',
    'minecraft:snow_golem',
    'minecraft:turtle',
    'minecraft:wolf'
]
/**
 * 
 * @param {$ItemClickedKubeEvent} event 
 */

function goodLuck(event) {
    const { server, player, level } = event
    let playerX = parseInt(player.x)
    let playerY = parseInt(player.y)
    let playerZ = parseInt(player.z)
    let rand = Math.floor(Math.random() * 8)
    if (rand >= 6) {
        // 掉落物品
        let randY = 30
        let flag = Math.floor(Math.random() * 20)
        let itemLuck = luckItem[Math.floor(Math.random() * luckItem.length)]
        for (let i = 0; i <= flag + 20; i++) {
            let randX = Math.floor(Math.random() * 4) - 2
            let randZ = Math.floor(Math.random() * 4) - 2
            let itemEntity = level.createEntity("item")
            itemEntity.item = itemLuck
            itemEntity.x = playerX + randX
            itemEntity.y = playerY + randY
            itemEntity.z = playerZ + randZ
            itemEntity.spawn()
            randY += 10
        }
    } else if (rand >= 4) {
        // 随机效果
        let effectTime = Math.floor(Math.random() * 1000)
        let effectLevel = Math.floor(Math.random() * 8)
        let effectLuck = luckEffect[Math.floor(Math.random() * luckEffect.length)]
        player.potionEffects.add(effectLuck, effectTime + 200, effectLevel)
    } else if (rand >= 3) {
        // 随机动物
        let animalsLuck = luckAnimals[Math.floor(Math.random() * luckAnimals.length)]
        let flag = Math.floor(Math.random() * 5)
        for (let i = 0; i <= flag + 5; i++) {
            let entity = level.createEntity(animalsLuck)
            entity.x = playerX
            entity.y = playerY
            entity.z = playerZ
            entity.spawn()
        }
    } else if (rand >= 2) {
        // 村民
        let entity = level.createEntity("minecraft:villager")
        entity.x = playerX
        entity.y = playerY
        entity.z = playerZ
        entity.spawn()
    } else if (rand >= 1) {
        // 重启小黑屋
        player.teleportTo(-22, -58, 5)

        event.level.setBlock(new BlockPos(-21, -58, 5), "minecraft:air", 3)
        event.level.entities.forEach(entity => {
            if (entity.type != 'minecraft:item') return

            if (entity.blockX >= -25 && entity.blockX <= -17 &&
                entity.blockY >= -61 && entity.blockY <= -53 &&
                entity.blockZ >= 1 && entity.blockZ <= 9) {
                entity.kill()
            }
        })
        event.level.setBlock(new BlockPos(-21, -58, 5), "minecraft:chest", 3)
        event.level.getBlock(new BlockPos(-21, -58, 5)).mergeEntityData({ LootTable: "chests/rand_block" })
        for (let time = 0; time < 5; time++) {
            server.scheduleInTicks((35 + time) * 20, (event) => {
                player.tell(Text.translatable("tooltip.kubejs.rewards5").gold().append(Text.literal(`>> ${5 - ((event.timer - 700) / 20)} <<`).gold()))
            })
        }
        server.scheduleInTicks(40 * 20, (event) => {
            server.players.forEach(player => {
                let pos = player.getBlock()
                if (pos.x >= -25 && pos.x <= -17 &&
                    pos.y >= -61 && pos.y <= -53 &&
                    pos.z >= 1 && pos.z <= 9) {
                    let spawnPos = player.getRespawnPosition() || player.getServer().overworld().sharedSpawnPos
                    player.teleportTo(spawnPos.x, spawnPos.y, spawnPos.z)
                }
            })
        })
    } else if (rand >= 0) {
        // 更新随机方块
        let teamId = getPlayerTeam(player)
        if (teamId == 'fail' && !teamId) {
            player.tell(`fail`)
        } else {
            var block = placeBlocksFree(server, server.persistentData.blockMap[teamId])
            player.tell(Text.translate('tooltip.kubejs.paradox_coin1'))
            player.tell(Text.translate("text.randblock.block_replace").green().append(Text.literal(Item.of(block).getDisplayName().string).gold()))
            player.playNotifySound('minecraft:entity.experience_orb.pickup', 'players', 1, 1)
        }
    }

}
const badItem = [
    'minecraft:anvil',
    'minecraft:sand',
    'minecraft:gravel'
]
const badEffect = [
    'minecraft:blindness',
    'minecraft:nausea',
    'minecraft:mining_fatigue',
    'minecraft:hunger',
    'minecraft:instant_damage',
    'minecraft:slowness',
    'minecraft:poison',
    'minecraft:levitation',
    'minecraft:weakness',
    'minecraft:wither'
]
const badMobs = [
    'minecraft:blaze',
    'minecraft:bogged',
    'minecraft:breeze',
    'minecraft:cave_spider',
    'minecraft:creeper',
    'minecraft:drowned',
    'minecraft:enderman',
    'minecraft:endermite',
    'minecraft:voker',
    'minecraft:ghast',
    'minecraft:hoglin',
    'minecraft:husk',
    'minecraft:magma_cube',
    'minecraft:phantom',
    'minecraft:piglin_brute',
    'minecraft:pillager',
    'minecraft:pufferfish',
    'minecraft:ravager',
    'minecraft:shulker',
    'minecraft:silverfish',
    'minecraft:skeleton',
    'minecraft:slime',
    'minecraft:spider',
    'minecraft:stray',
    'minecraft:vex',
    'minecraft:vindicator',
    'minecraft:warden',
    'minecraft:witch',
    'minecraft:wither_skeleton',
    'minecraft:zombie'
]
const badFluid = [
    'minecraft:water',
    'minecraft:lava'
]
/**
 * 
 * @param {$ItemClickedKubeEvent} event 
 */

function badLuck(event) {
    const { player, level } = event
    let playerX = parseInt(player.x)
    let playerY = parseInt(player.y)
    let playerZ = parseInt(player.z)
    let rand = Math.floor(Math.random() * 8)
    if (rand >= 7) {
        // 随机怪物
        let mobsBad = badMobs[Math.floor(Math.random() * badMobs.length)]
        let flag = Math.floor(Math.random() * 5)
        for (let i = 0; i <= flag + 5; i++) {
            let entity = level.createEntity(mobsBad)
            entity.x = playerX
            entity.y = playerY
            entity.z = playerZ
            entity.spawn()
        }
    } else if (rand >= 6) {
        // 掉落物品
        let itemBad = badItem[Math.floor(Math.random() * badItem.length)]
        for (let y = 0; y <= 3; y++) {
            level.setBlock(new BlockPos(playerX, playerY + y + 10, playerZ), itemBad, 3)
        }
        player.potionEffects.add("minecraft:slowness", 100, 5)
    } else if (rand >= 5) {
        // 秒炸TNT
        event.server.runCommandSilent(`summon minecraft:tnt ${playerX} ${playerY} ${playerZ}`)
    } else if (rand >= 4) {
        // 随机效果
        let effectTime = Math.floor(Math.random() * 600)
        let effectLevel = Math.floor(Math.random() * 8)
        let effectBad = badEffect[Math.floor(Math.random() * badEffect.length)]
        player.potionEffects.add(effectBad, effectTime + 600, effectLevel)
    } else if (rand >= 3) {
        // 水或岩浆
        let fluidBad = badFluid[Math.floor(Math.random() * badFluid.length)]
        for (let y = playerY; y <= playerY + 1; y++) {
            level.setBlock(new BlockPos(playerX, y, playerZ), fluidBad, 3)
        }
    } else if (rand >= 2) {
        // 黑曜石
        for (let x = -2; x <= 2; x++) {
            for (let y = 0; y <= 2; y++) {
                for (let z = -2; z <= 2; z++) {
                    level.setBlock(new BlockPos(playerX + x, playerY + y, playerZ + z), "minecraft:obsidian", 3)
                }
            }
        }
    } else if (rand >= 1) {
        // kill
        player.kill()
    } else if (rand >= 0) {
        // tp
        player.teleportTo(playerX, -65, playerZ)
    }
}
