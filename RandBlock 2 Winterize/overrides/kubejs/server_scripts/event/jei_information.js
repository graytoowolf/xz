RecipeViewerEvents.addInformation('fluid', event => {
    event.add('kubejs:unstable_red', [
        Text.translate('jei.tips.unstable_red').getString()
    ])
})

RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:unstable_red_bucket', [
        Text.translate('jei.tips.unstable_red').getString()
    ])

    event.add('kubejs:polar_lights_prism',[
        Text.translate('jei.tips.polar_lights_prism1').getString(),
        ' ',
        Text.translate('jei.tips.polar_lights_prism2').getString(),
        ' ',
        Text.translate('jei.tips.polar_lights_prism3').getString(),
    ])

    event.add('kubejs:polar_lights_bottle', [
        Text.translate('jei.tips.polar_lights_bottle').getString()
    ])

    event.add('kubejs:polar_lights_bottle', [
        Text.translate('jei.tips.capture_bottle').getString()
    ])
})