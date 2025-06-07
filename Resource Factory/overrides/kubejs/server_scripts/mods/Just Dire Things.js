ServerEvents.recipes(event => {
    const { kubejs } = event.recipes

    event.replaceInput({ id: 'justdirethings:experienceholder' }, 'justdirethings:blazegold_ingot', 'alltheores:electrum_ingot')
})