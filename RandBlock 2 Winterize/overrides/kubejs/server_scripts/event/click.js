// 点击&&使用事件
ItemEvents.firstLeftClicked('gamediscs:gaming_console', event => {
    // 游戏机
    const com = event.player.getMainHandItem().componentString
    const match = com.match(/FlappyBirdGame\s*:\s*(\d+)/)
    if (match && match[1]) {
        const score = parseInt(match[1], 10)
        if (score >= 5) {
            event.player.mainHandItem = 'minecraft:crafting_table'
        }
    }
})

// 灵气花产灵气
BlockEvents.rightClicked('naturesaura:aura_bloom', event => {
    if (event.player.mainHandItem != 'naturesaura:gold_leaf') {
        return
    } else {
        event.block.set('minecraft:air')
        event.player.mainHandItem.count -= 1
        AuraChunk.storeAura(event.level, event.block.pos, 500000)
    }
})

// 捕捉瓶捕获极光
ItemEvents.rightClicked('kubejs:capture_bottle', event => {
    if (!event.level.isNight()) {
        return
    } else {
        const mainHand = event.player.mainHandItem
        const offHand = event.player.offHandItem
        if (mainHand == 'kubejs:capture_bottle') {
            mainHand.count = mainHand.count - 1
            event.player.give('kubejs:polar_lights_bottle')
            return
        } else if (offHand == 'kubejs:capture_bottle') {
            offHand.count = offHand.count - 1
            event.player.give('kubejs:polar_lights_bottle')
            return
        }
    }
})

// 绿宝石雨
ItemEvents.rightClicked('kubejs:emerald_credit_card', event => {
    const {player, level} = event
    let mainHand = player.mainHandItem.getId()
    let offHand = player.offhandItem.getId()
    let playerX = player.x
    let playerY = player.y
    let playerZ = player.z
    let randY = 30
    if (mainHand == 'kubejs:emerald_credit_card') {
        player.mainHandItem.count -= 1
        let flag = Math.floor(Math.random() * 64)
        for (let i = 0; i <= flag + 64; i++) {
            let randX = Math.floor(Math.random() * 4) - 2
            let randZ = Math.floor(Math.random() * 4) - 2

            let itemEntity = level.createEntity("item")
            itemEntity.item = "minecraft:emerald"
            itemEntity.x = playerX + randX
            itemEntity.y = playerY + randY
            itemEntity.z = playerZ + randZ
            itemEntity.spawn()
            randY += 10
        }
    } else if (offHand == 'kubejs:emerald_credit_card') {
        event.cancel()
    }
})

// 悖论硬币
ItemEvents.rightClicked('kubejs:paradox_coin', event => {
    let player = event.player
    let mainHand = player.mainHandItem.getId()
    let offHand = player.offhandItem.getId()
    if (mainHand == 'kubejs:paradox_coin') {
        player.mainHandItem.count -= 1
        let flag = Math.floor(Math.random() * 10)
        if (flag < 5) {
            // 好运
            goodLuck(event)
        } else {
            // 厄运
            badLuck(event)
        }
    } else if (offHand == 'kubejs:paradox_coin') {
        event.cancel()
    }
})

// 跃迁罗盘
ItemEvents.rightClicked('kubejs:transition_compass', event => {
    let server = event.server
    let player = event.player
    let mainHand = player.mainHandItem.getId()
    let offHand = player.offhandItem.getId()
    if (mainHand == 'kubejs:transition_compass') {
        player.mainHandItem.count -= 1
        let teamId = getPlayerTeam(player)
        if (teamId == 'fail' && !teamId) {
            player.tell(`fail`)
        } else {
            var block = placeBlocksFree(server, server.persistentData.blockMap[teamId])
            player.tell(Text.translate('tooltip.kubejs.paradox_coin1'))
            player.tell(Text.translate("text.randblock.block_replace").green().append(Text.literal(Item.of(block).getDisplayName().string).gold()))
            player.playNotifySound('minecraft:entity.experience_orb.pickup', 'players', 1, 1)
        }

    } else if (offHand == 'kubejs:transition_compass') {
        event.cancel()
    }
})

// 熵能镐
BlockEvents.broken('kubejs:catalyze_block', event => {
    let player = event.player
    let block = event.block
    let mainHand = player.mainHandItem.getId()
    let offHand = player.offhandItem.getId()
    let stageNow = stageAll[`stage${Math.floor(Math.random() * 5)}`]
    let finallBlock = stageNow[Math.floor(Math.random() * stageNow.length)]
    if (mainHand == 'kubejs:entropy_pickaxe') {
        let itemEntity = block.createEntity("item")
        itemEntity.item = finallBlock
        itemEntity.spawn()
    } else if (offHand == 'kubejs:entropy_pickaxe') {
        event.cancel()
    }
})

// 锻造模板抽奖
ItemEvents.rightClicked('kubejs:upgrade_smithing_raffle_box', event => {
    prize_draw(event, 'kubejs:upgrade_smithing_raffle_box', upgrade_smithing, Math.floor(Math.random() * 4), 4)
})

// 升级抽奖
ItemEvents.rightClicked('kubejs:upgrade_raffle_box', event => {
    prize_draw(event, 'kubejs:upgrade_raffle_box', upgrade_addon, Math.floor(Math.random() * 8), 8)
})

// 工具抽奖
ItemEvents.rightClicked('kubejs:tools_raffle_box', event => {
    prize_draw(event, 'kubejs:tools_raffle_box', tool_addon,  Math.floor(Math.random() * 1), 1)
})