ServerEvents.recipes(event => {
    //Machine recipe : 
    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)

    //Add requirements here
    //Craft recipe : 
    //event.recipes.custommachinery.custom_craft("namespace:machine_id", Item.of("output_item"))

    //Add requirements here



  })

  /*let enchbooks = (item, output) => {
  ServerEvents.recipes(event => {

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of(item, 12))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 1000)

    .produceItem(Item.of('minecraft:enchanted_book').enchant(output, 1))
    
  })}

  enchbooks('minecraft:quartz', 'minecraft:sharpness') */

//--------------------------

  ServerEvents.recipes(event => {

    

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 15))
    .requireItem(Item.of("minecraft:coal_block", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cyclic:auto_smelt', 1))

    //------
  
    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:gold_ingot", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cyclic:experience_boost', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:gold_ingot", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cyclic:experience_boost', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:gold_ingot", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cyclic:experience_boost', 3))

    //-------------
    
    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("kubejs:darksteel_ingot", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("kubejs:darksteel_ingot", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("kubejs:darksteel_ingot", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:protection', 3))

    //------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:blaze_powder", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:blaze_powder", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:blaze_powder", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_protection', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:feather", 1))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:feather", 2))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:feather", 3))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:feather_falling', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:gunpowder", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:gunpowder", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:gunpowder", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:blast_protection', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:arrow", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:arrow", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:arrow", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:projectile_protection', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:glass_bottle", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:glass_bottle", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:glass_bottle", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:respiration', 3))
    
    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:lily_pad", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:aqua_affinity', 1))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:prismarine", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:prismarine", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:prismarine", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:depth_strider', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:ice", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:frost_walker', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:ice", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:frost_walker', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:ice", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:frost_walker', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:rose_bush", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:rose_bush", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:rose_bush", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:thorns', 3))

    //-----------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("botania:quartz_dark", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("botania:quartz_dark", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("botania:quartz_dark", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("botania:quartz_dark", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("botania:quartz_dark", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5))

    //------------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:rotten_flesh", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:rotten_flesh", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:rotten_flesh", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("minecraft:rotten_flesh", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("minecraft:rotten_flesh", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:smite', 5))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:spider_eye", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:spider_eye", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:spider_eye", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("minecraft:spider_eye", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("minecraft:spider_eye", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:bane_of_arthropods', 5))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("create:mechanical_piston", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("create:mechanical_piston", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("create:mechanical_piston", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("create:mechanical_piston", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("create:mechanical_piston", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:knockback', 5))
    
    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:blaze_rod", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:blaze_rod", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:blaze_rod", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fire_aspect', 3))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("infused_crystals:block_of_infused_emeraldium", 3))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("infused_crystals:block_of_infused_emeraldium", 6))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("infused_crystals:block_of_infused_emeraldium", 9))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:redstone", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:redstone", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:redstone", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 3))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("industrialforegoing:pink_slime", 1))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:silk_touch', 1))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("kubejs:reinforced_obsidian", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("kubejs:reinforced_obsidian", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("kubejs:reinforced_obsidian", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("kubejs:reinforced_obsidian", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("kubejs:reinforced_obsidian", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 5))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("kubejs:slate_2", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("infused_crystals:block_of_emeraldium", 3))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("infused_crystals:block_of_emeraldium", 6))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("infused_crystals:block_of_emeraldium", 9))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:fortune', 3))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("kubejs:flint_handle", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("kubejs:flint_handle", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("kubejs:flint_handle", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("kubejs:flint_handle", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("kubejs:flint_handle", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:power', 5))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("botania:mana_string", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("botania:mana_string", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("botania:mana_string", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("botania:mana_string", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("botania:mana_string", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:punch', 5))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("immersiveengineering:empty_shell", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('minecraft:multishot', 1))

    //-------------------

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 3))
    .requireItem(Item.of("minecraft:chest", 16))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 15000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 1))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 6))
    .requireItem(Item.of("minecraft:chest", 32))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 30000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 2))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 9))
    .requireItem(Item.of("minecraft:chest", 48))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 45000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 3))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 12))
    .requireItem(Item.of("minecraft:chest", 56))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 60000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 4))

    event.recipes.custommachinery.custom_machine("custommachinery:power_crusher", 100)
    .requireItem(Item.of("minecraft:lapis_lazuli", 32))
    .requireItem(Item.of("minecraft:chest", 64))
    .requireItem(Item.of("minecraft:writable_book"))
    .requireFluidTag("forge:fluid_xp", 80000)
    .produceItem(Item.of('minecraft:enchanted_book').enchant('cofh_core:holding', 5))


  })








