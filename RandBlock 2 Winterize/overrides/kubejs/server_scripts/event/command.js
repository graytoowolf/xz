ServerEvents.command(event => {
    let command = event.getParseResults().getReader().getString()
    var fly = /fly/
    if (fly.exec(command) != null) {
        event.server.tell(Text.translate("tooltip.kubejs.command_disabled").red())
        event.cancel()
    }
})

LevelEvents.loaded(event => {
    //keepInventory
    if (event.getLevel().getGameRules().get('keepInventory') === 'false') {
        event.getLevel().getGameRules().set('keepInventory',"true")
    }
})

LevelEvents.tick(event => {
    //keepInventory
    if (event.getLevel().getGameRules().get('keepInventory') === 'false') {
        event.getLevel().getGameRules().set('keepInventory',"true")
        event.server.tell(Text.translate("tooltip.kubejs.command_not_disabled").red())
        event.server.tell(Text.translate("tooltip.kubejs.command_set_true","keepInventory"))
    }
})

LevelEvents.loaded(event => {
    //doTraderSpawning
    if (event.getLevel().getGameRules().get('doTraderSpawning') === "true") {
        event.getLevel().getGameRules().set('doTraderSpawning',"false")
    }

    //doMobSpawning
    if (event.getLevel().getGameRules().get('doMobSpawning') === "true") {
        event.getLevel().getGameRules().set('doMobSpawning',"false")
    }

    //waterSourceConversion
    if (event.getLevel().getGameRules().get('waterSourceConversion') === 'true') {
        event.getLevel().getGameRules().set('waterSourceConversion',"false")
    }
})

LevelEvents.tick(event => {
    //doTraderSpawning
    if (event.getLevel().getGameRules().get('doTraderSpawning') === 'true') {
        event.getLevel().getGameRules().set('doTraderSpawning',"false")
        event.server.tell(Text.translate("tooltip.kubejs.command_not_disabled").red())
        event.server.tell(Text.translate("tooltip.kubejs.command_set_false",'doTraderSpawning'))
    }

    //doMobSpawning
    if (event.getLevel().getGameRules().get('doMobSpawning') === 'true') {
        event.getLevel().getGameRules().set('doMobSpawning',"false")
        event.server.tell(Text.translate("tooltip.kubejs.command_not_disabled").red())
        event.server.tell(Text.translate("tooltip.kubejs.command_set_false",'doMobSpawning'))
    }

    //waterSourceConversion
    if (event.getLevel().getGameRules().get('waterSourceConversion') === 'true') {
        event.getLevel().getGameRules().set('waterSourceConversion',"false")
        event.server.tell(Text.translate("tooltip.kubejs.command_not_disabled").red())
        event.server.tell(Text.translate("tooltip.kubejs.command_set_false",'doMobSpawning'))
    }

    if (event.getLevel().getGameRules().get('randomTickSpeed') != 3) {
        event.getLevel().getGameRules().set('randomTickSpeed',"3")
        event.server.tell(Text.translate("tooltip.kubejs.command_not_change").red())
        event.server.tell(Text.translate("tooltip.kubejs.command_set_integr",'randomTickSpeed',3))
    }
})