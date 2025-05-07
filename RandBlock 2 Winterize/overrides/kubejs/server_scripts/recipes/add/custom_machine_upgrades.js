CustomMachineryEvents.upgrades(event => {
    event.create(Item.of('custommachinery:custom_upgrade'), 4)
        .machine(['custommachinery:fire_generator', 'custommachinery:dye_generator', 'custommachinery:fire_smelter', 'custommachinery:sequenced_assembly', 'custommachinery:batch_inscriber', 'custommachinery:animal_press', 'custommachinery:stress_generator'])
        .tooltip("提速！")
        .modifier(
            CMRecipeModifierBuilder.mulInput('custommachinery:energy', 1.1)
                .tooltip('FE消耗增加')
        )
        .modifier(
            CMRecipeModifierBuilder.expInput('custommachinery:speed', 0.5)
                .min(1)
        )
        .modifier(
            CMRecipeModifierBuilder.expInput("custommachinery:fluid", 0.9)
                .tooltip("流体消耗减少")
        )
        .modifier(
            CMRecipeModifierBuilder.expInput('custommachinery:source', 0.9)
                .tooltip("魔源消耗减少")
        )
})