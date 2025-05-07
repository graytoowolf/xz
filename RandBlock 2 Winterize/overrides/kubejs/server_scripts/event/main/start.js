ItemEvents.rightClicked(event => {
    // 随机方块相关启动器右键事件
    let itemId = event.item.getId()
    let player = event.player
    if (!['kubejs:stage0', 'kubejs:stage1', 'kubejs:stage2', 'kubejs:stage3', 'kubejs:stage4', 'kubejs:stage_time_mix', 'kubejs:stage_time_max', 'kubejs:stage_time_master', 'kubejs:stage_off'].includes(itemId)) {
        return
    } else if (['kubejs:stage0', 'kubejs:stage1', 'kubejs:stage2', 'kubejs:stage3', 'kubejs:stage4'].includes(itemId)) {
        // 团队阶段存储
        let itemIdStr = itemId.toString()
        let stageInt = parseInt(itemIdStr.slice(-1))
        let teamId = getPlayerTeam(player)
        if (teamId !== 'fail' && event.server.persistentData.blockMap[teamId]) {
            event.server.persistentData.blockMap[teamId].stage = stageInt
            event.server.persistentData.blockMap[teamId].enable = 1
            if (!event.server.persistentData.blockMap[teamId].replaceTime) {
                event.server.persistentData.blockMap[teamId].replaceTime = 3600
            }
            setRandTeamList(event, teamId)
            player.runCommand(`ftbteams msg ${Text.translate('tooltip.kubejs.start_click_info1').getString()}${stageInt} ${Text.translate('tooltip.kubejs.start_click_info2').getString()}${parseInt(event.server.persistentData.blockMap[teamId].replaceTime) / 20} s`)
        } else {
            player.tell([{ translate: "tooltip.kubejs.start_click", color: "gold" }])
        }
    } else if (['kubejs:stage_time_mix', 'kubejs:stage_time_max', 'kubejs:stage_time_master'].includes(itemId)) {
        // 团队刷新时间修改
        let teamId = getPlayerTeam(player)
        if (teamId !== 'fail' && event.server.persistentData.blockMap[teamId]) {
            if (itemId == 'kubejs:stage_time_mix') {
                event.server.persistentData.blockMap[teamId].replaceTime = 600
                setRandTeamList(event, teamId)
                player.runCommand(`ftbteams msg ${Text.translate('tooltip.kubejs.start_click_info2').getString()}${parseInt(event.server.persistentData.blockMap[teamId].replaceTime) / 20} s`)
            } else if (itemId == 'kubejs:stage_time_max') {
                event.server.persistentData.blockMap[teamId].replaceTime = 3600
                setRandTeamList(event, teamId)
                player.runCommand(`ftbteams msg ${Text.translate('tooltip.kubejs.start_click_info2').getString()}${parseInt(event.server.persistentData.blockMap[teamId].replaceTime) / 20} s`)
            } else if (itemId == 'kubejs:stage_time_master') {
                event.server.persistentData.blockMap[teamId].replaceTime = 40
                setRandTeamList(event, teamId)
                player.runCommand(`ftbteams msg ${Text.translate('tooltip.kubejs.start_click_info2').getString()}${parseInt(event.server.persistentData.blockMap[teamId].replaceTime) / 20} s`)
            }
        } else {
            player.tell([{ translate: "tooltip.kubejs.start_click", color: "gold" }])
        }

    } else {
        // 团队随机方块关闭
        let teamId = getPlayerTeam(player)
        if (teamId !== 'fail' && event.server.persistentData.blockMap[teamId]) {
            event.server.persistentData.blockMap[teamId].enable = 0
            setRandTeamList(event, teamId)
            player.runCommand(`ftbteams msg ${Text.translate('tooltip.kubejs.start_click_info3').getString()}`)
        } else {
            player.tell([{ translate: "tooltip.kubejs.start_click", color: "gold" }])
        }
    }
})

