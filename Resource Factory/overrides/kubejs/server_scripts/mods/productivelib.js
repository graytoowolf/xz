ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'productivelib:upgrades/block' }, 'productivebees:draconic_chunk', 'oritech:fluxite')
    event.replaceInput({ id: 'productivelib:upgrades/productivity' }, 'productivebees:draconic_chunk', 'oritech:fluxite')
    event.replaceInput({ id: 'productivelib:upgrades/productivity_4' }, 'minecraft:heart_of_the_sea', 'ifeu:dragon_star')
})