/*
小黑屋：
    server.dayTimeTp：true/false 判断是否传送
*/

var tellUp1 = false, tellUp2 = false, tellUp3 = false, tellUp4 = false, tellUp5 = false, tellUp6 = false, tellUp7 = false, tellUp8 = false, tellUp9 = false, tellUp10 = false
LevelEvents.tick('minecraft:overworld', event => {
    const dayTime = event.level.dayTime() % 24000
    const dayTimeList = [960, 1000, 1020, 1040, 1060, 1080, 1780, 1800, 1820, 1840, 1860, 1880]
    if (!dayTimeList.includes(dayTime)) {
        return
    } else if (dayTime == 960) {
        event.server.persistentData.dayTimeTp = false
        tellUp1 = false
        tellUp2 = false
        tellUp3 = false
        tellUp4 = false
        tellUp5 = false
        tellUp6 = false
        tellUp7 = false
        tellUp8 = false
        tellUp9 = false
        tellUp10 = false
    } else if (dayTime == 1000 && tellUp1 == false) {
        event.server.tell(Text.translate("tooltip.kubejs.rewards1").gold())
        event.server.persistentData.dayTimeTp = true
        tellUp1 = true
    } else if (dayTime == 1020 && event.server.persistentData.dayTimeTp == true && tellUp2 == false) {
        event.server.tell(Text.literal(">>> 3 <<<").gold())
        tellUp2 = true
    } else if (dayTime == 1040 && event.server.persistentData.dayTimeTp == true && tellUp3 == false) {
        event.server.tell(Text.literal(">>> 2 <<<").gold())
        tellUp3 = true
    } else if (dayTime == 1060 && event.server.persistentData.dayTimeTp == true && tellUp4 == false) {
        event.server.tell(Text.literal(">>> 1 <<<").gold())
        tellUp4 = true
    } else if (dayTime == 1080 && event.server.persistentData.dayTimeTp == true && tellUp5 == false) {
        tellUp5 = true
        if (Math.floor(Math.random() * 7) < 1) {
            event.server.tell(Text.translate("tooltip.kubejs.rewards2").gold())
            event.server.tell(Text.translate("tooltip.kubejs.rewards3").gold())
            event.server.runCommandSilent('tp @r -22 -58 5')

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
        } else {
            event.server.tell(Text.translate("tooltip.kubejs.rewards4").gold())
            tellUp1 = false
            tellUp2 = false
            tellUp3 = false
            tellUp4 = false
            tellUp5 = false
            event.server.persistentData.dayTimeTp = false
        }

    } else if (dayTime == 1780 && event.server.persistentData.dayTimeTp == true && tellUp6 == false) {
        event.server.tell(Text.translate('tooltip.kubejs.rewards5').gold().append(Text.literal(">>> 5 <<<").gold()))
        tellUp6 = true
    } else if (dayTime == 1800 && event.server.persistentData.dayTimeTp == true && tellUp7 == false) {
        event.server.tell(Text.translate('tooltip.kubejs.rewards5').gold().append(Text.literal(">>> 4 <<<").gold()))
        tellUp7 = true
    } else if (dayTime == 1820 && event.server.persistentData.dayTimeTp == true && tellUp8 == false) {
        event.server.tell(Text.translate('tooltip.kubejs.rewards5').gold().append(Text.literal(">>> 3 <<<").gold()))
        tellUp8 = true
    } else if (dayTime == 1840 && event.server.persistentData.dayTimeTp == true && tellUp9 == false) {
        event.server.tell(Text.translate('tooltip.kubejs.rewards5').gold().append(Text.literal(">>> 2 <<<").gold()))
        tellUp9 = true
    } else if (dayTime == 1860 && event.server.persistentData.dayTimeTp == true && tellUp10 == false) {
        event.server.tell(Text.translate('tooltip.kubejs.rewards5').gold().append(Text.literal(">>> 1 <<<").gold()))
        tellUp10 = true
    } else if (dayTime == 1880 && event.server.persistentData.dayTimeTp == true) {
        event.level.setBlock(new BlockPos(-21, -58, 5), "minecraft:air", 3)
        event.server.players.forEach(player => {
            let pos = player.getBlock()
            if (pos.x >= -25 && pos.x <= -17 &&
                pos.y >= -61 && pos.y <= -53 &&
                pos.z >= 1 && pos.z <= 9) {
                let spawnPos = player.getRespawnPosition() || player.getServer().overworld().sharedSpawnPos
                player.teleportTo(spawnPos.x, spawnPos.y, spawnPos.z)
            }
        })
        event.server.persistentData.dayTimeTp = false
        tellUp1 = false
        tellUp2 = false
        tellUp3 = false
        tellUp4 = false
        tellUp5 = false
        tellUp6 = false
        tellUp7 = false
        tellUp8 = false
        tellUp9 = false
        tellUp10 = false
    }

})