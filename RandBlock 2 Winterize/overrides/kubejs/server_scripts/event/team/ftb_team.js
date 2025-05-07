/* 
    server.blockMap 各个team刷新方块中心位置坐标、玩家Name、阶段、刷新时间、是否开启、各阶段保底方块{teamId:{blockPos:[x, y, z],playerName: [str], stage: int, replaceTime: int, enable: int, basicBlock: {}}}
*/
FTBTeamsEvents.playerJoinedParty(event => {
    // 玩家加入团队时，记录团队ID，刷新方块位置，玩家Name
    let player = event.player
    let server = event.server
    let currentTeam = event.getCurrentTeam()
    let teamID = currentTeam.getId()
    let teamId = teamID.toString()

    if (!server.persistentData.blockMap) {
        // 确保 blockMap 存在
        server.persistentData.blockMap = {}
    }

    if (!server.persistentData.blockMap[teamId]) {
        // 团队信息不存在
        event.server.scheduleInTicks(40, sc => {
            let BlockPos = getRandBlockPos(server, teamID)
            if (BlockPos !== 'fail') {
                server.persistentData.blockMap[teamId] = {
                    blockPos: [BlockPos.getX(), BlockPos.getY(), BlockPos.getZ()],
                    playerName: [player.name],
                    stage: parseInt(-1),
                    enable: parseInt(0),
                    basicBlock: {
                        stage0: ['minecraft:sand'],
                        stage1: ['minecraft:iron_ore'],
                        stage2: ['minecraft:redstone_ore'],
                        stage3: ['minecraft:gold_ore', 'minecraft:lapis_ore', 'mekanism:tin_ore', 'mekanism:osmium_ore', 'immersiveengineering:ore_silver', 'immersiveengineering:ore_nickel', 'mekanism:lead_ore'],
                        stage4: ['powah:reactor_nitro', 'powah:uraninite_block', 'powah:dry_ice']
                    }
                }
            }
        })
    } else {
        let playerNameNow = player.getName()
        let flag = 1
        server.persistentData.blockMap[teamId].playerName.forEach(pl => {
            if (JSON.parse(pl) == playerNameNow.getString()) {
                flag = 0
            }
        })

        if (flag === 1) {
            server.persistentData.blockMap[teamId].playerName.push(player.name)
        }
        // if (!server.persistentData.blockMap[teamId].playerName.includes(JsonIO.toString(player.getName()))) {
        //     // 团队信息已存在则加入玩家信息
        //     server.persistentData.blockMap[teamId].playerName.push(player.name)
        // }
    }

    event.player.persistentData.teamId = {}
    event.player.persistentData.teamId[teamId] = 'place'
})

FTBTeamsEvents.playerLeftParty(event => {
    // 玩家退出团队时，删除该团队中的玩家信息
    let player = event.player
    let server = event.server
    let prevTeam = event.getPrevTeam()
    let teamID = prevTeam.getId()
    let teamId = teamID.toString()

    delete event.player.persistentData.teamId
    if (!teamId) {
        console.error(`错误：无法获取 ${player.name} 的 teamId`)
        return
    }
    if (!server.persistentData.blockMap) {
        console.error("错误：server.persistentData.blockMap 未定义，创建新的对象")
        return
    }
    if (!server.persistentData.blockMap[teamId]) {
        console.error(`错误：团队 ${teamId} 不存在于 blockMap 中`)
        return
    }
    let teamData = server.persistentData.blockMap[teamId]

    server.persistentData.blockMap[teamId].playerName = teamData.playerName.filter(item => item != player.name.getString())

    // 如果团队中已经没有玩家，删除该团队数据
    if (teamData.playerName.length === 0) {
        delete server.persistentData.blockMap[teamId]
        delete server.persistentData.maxTime[teamId]
        delete server.persistentData.minTime[teamId]
        delete server.persistentData.masterTime[teamId]
    }
})