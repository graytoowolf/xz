StartupEvents.registry('mekanism:chemical', event => {
  event.create('mekanismgenerators:sculk_matter_gas').tint(Color.of(0x4682B4)).gaseous().fuel(20, 5000000)
})