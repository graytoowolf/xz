ItemEvents.rightClicked('avaritia:endest_pearl', event => {
    event.player.tell(Text.red(Text.translate('itemevents.kubejs.info')))
    event.cancel()
})