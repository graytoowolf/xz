/* 
随机方块：
    server.blockMap 各个team刷新方块中心位置坐标、玩家Name、阶段、刷新时间、是否开启{teamId:{blockPos:[x, y, z],playerName: [str], stage: int, replaceTime: int, enable: int}}
    server.maxTime 180s刷新一次的teamId
    server.minTime 30s刷新一次的teamId
    server.masterTime 2s刷新一次的teamId
*/
const stageAll = {
    "stage0": global.stage0,
    "stage1": global.stage1,
    "stage2": global.stage2,
    "stage3": global.stage3,
    "stage4": global.stage4
}

LevelEvents.tick('minecraft:overworld', event => {
    // 方块刷新检测
    const {
        level,
        level: { time },
        server,
        server: { persistentData }
    } = event

    // 三种刷新时间
    let remaxSecond = 180 - ((time / 20) % 180)
    let reminSecond = 30 - ((time / 20) % 30)
    let remasterSecond = 2 - ((time / 20) % 2)

    if (remaxSecond !== 180 && reminSecond !== 30 && remasterSecond !== 2) return;
    if (!persistentData.blockMap) return;
    if (persistentData.maxTime.isEmpty() && persistentData.minTime.isEmpty() && persistentData.masterTime.isEmpty()) return;

    let maxTeam = Object.keys(persistentData.maxTime)
    let minTeam = Object.keys(persistentData.minTime)
    let masterTeam = Object.keys(persistentData.masterTime)

    if (remaxSecond === 180) {
        maxTeam.forEach(max => {
            let finallBlock = placeBlocks(event, persistentData.blockMap[max], max)

            // 玩家通知
            let blockName = Item.of(finallBlock[0]).getDisplayName().string
            let teamGet = $FTBTeamsAPI.api().getManager().getTeamByID(max).orElse(null)
            let members = teamGet.getMembers()
            members.forEach(memberId => {
                let teamPlayer = server.getPlayer(memberId)
                if (teamPlayer) {
                    teamPlayer.tell([{ translate: "text.randblock.block_replace", color: "green" }, { "text": `${blockName}`, color: "gold" }])
                    teamPlayer.playNotifySound('minecraft:entity.experience_orb.pickup', 'players', 1, 1)
                    if (finallBlock[1] == 1) {
                        teamPlayer.tell([{ translate: "text.randblock.basic_block", color: "gold" }])
                    }
                }
            })
        })
    }

    if (reminSecond === 30) {
        minTeam.forEach(min => {
            let finallBlock = placeBlocks(event, persistentData.blockMap[min], min)

            // 玩家通知
            let blockName = Item.of(finallBlock[0]).getDisplayName().string
            let teamGet = $FTBTeamsAPI.api().getManager().getTeamByID(min).orElse(null)
            let members = teamGet.getMembers()
            members.forEach(memberId => {
                let teamPlayer = server.getPlayer(memberId)
                if (teamPlayer) {
                    teamPlayer.tell([{ translate: "text.randblock.block_replace", color: "green" }, { "text": `${blockName}`, color: "gold" }])
                    teamPlayer.playNotifySound('minecraft:entity.experience_orb.pickup', 'players', 1, 1)
                    if (finallBlock[1] == 1) {
                        teamPlayer.tell([{ translate: "text.randblock.basic_block", color: "gold" }])
                    }
                }
            })
        })
    }

    if (remasterSecond === 2) {
        masterTeam.forEach(master => {
            let finallBlock = placeBlocks(event, persistentData.blockMap[master], master)

            // 玩家通知
            let blockName = Item.of(finallBlock[0]).getDisplayName().string
            let teamGet = $FTBTeamsAPI.api().getManager().getTeamByID(master).orElse(null)
            let members = teamGet.getMembers()
            members.forEach(memberId => {
                let teamPlayer = server.getPlayer(memberId)
                if (teamPlayer) {
                    teamPlayer.tell([{ translate: "text.randblock.block_replace", color: "green" }, { "text": `${blockName}`, color: "gold" }])
                    teamPlayer.playNotifySound('minecraft:entity.experience_orb.pickup', 'players', 1, 1)
                    if (finallBlock[1] == 1) {
                        teamPlayer.tell([{ translate: "text.randblock.basic_block", color: "gold" }])
                    }
                }
            })
        })
    }

})


PlayerEvents.tick(event => {
    // 玩家刷新剩余时间显示
    let player = event.player
    if (!player.persistentData.teamId || player.persistentData.teamId.isEmpty()) return;

    let teamInfo = event.server.persistentData.blockMap[Object.keys(player.persistentData.teamId)[0]]
    let time = event.level.time
    if (teamInfo && teamInfo.enable !== undefined) {
        if (parseInt(teamInfo.enable) === 1) {
            let reTime = parseInt(teamInfo.replaceTime) / 20
            let reTimeSecond = reTime - ((time / 20) % reTime)
            player.statusMessage = [Text.translate("text.randblock.block_time", [reTimeSecond.toFixed()]).color("gold")]
        }
    }

})


