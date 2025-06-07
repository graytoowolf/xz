const processed_data_model_1 = [
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:guardian"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:breeze"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:phantom"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:drowned"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:enderman"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ars_nouveau/wilden_mobs"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:magma_cube"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ghast"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:skeleton"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:creeper"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:blaze"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:spider"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:zombified_piglin"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:slime"]'
];

const processed_data_model_2 = [
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:witch"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:wither_skeleton"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:iron_golem"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:vindicator"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:artifacts/mimic"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:hoglin"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:evoker"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:shulker"]'
];

const processed_data_model_3 = [
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:snow_golem"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:chicken"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:sheep"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:rabbit"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cow"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:mooshroom"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:glow_squid"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:squid"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:pig"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cod"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:polar_bear"]'
];

const processed_data_model_4 = [
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:warden"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:wither"]',
    'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:elder_guardian"]'
];



ServerEvents.recipes(event => {

    const { kubejs } = event.recipes

    const prediction_matrix = 'hostilenetworks:prediction_matrix'
    const pattern = ['aba', 'bcb', 'aba']
    const glass_pane = 'minecraft:glass_pane'
    const matter = 'ae2:matter_ball'

    kubejs.shaped(`4x ${prediction_matrix}`, pattern, { a: glass_pane, b: matter, c: 'oritech:plastic_sheet' })
    kubejs.shaped(`8x ${prediction_matrix}`, pattern, { a: glass_pane, b: matter, c: 'ars_nouveau:conjuration_essence' })
    kubejs.shaped(`12x ${prediction_matrix}`, pattern, { a: glass_pane, b: matter, c: 'oritech:fluxite' })
    kubejs.shaped(`32x ${prediction_matrix}`, pattern, { a: glass_pane, b: matter, c: 'minecraft:echo_shard' })






    // 此配方由 gemini 2.5 生成
    const tier1Input = 'oritech:plastic_sheet';
    const tier2Input = 'oritech:fluxite';
    const tier3Input = 'ars_nouveau:source_gem';
    const tier4Input = 'minecraft:echo_shard';

    // Tier 1
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:guardian", hostilenetworks:data=1254]', ['III', '   ', '   '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:breeze", hostilenetworks:data=1254]', ['III', 'II ', '   '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:phantom", hostilenetworks:data=1254]', [' II', 'I  ', 'I  '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:drowned", hostilenetworks:data=1254]', ['I  ', ' I ', 'II '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:enderman", hostilenetworks:data=1254]', ['I  ', 'I  ', ' II'], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ars_nouveau/wilden_mobs", hostilenetworks:data=1254]', [' I ', ' I ', 'II '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:zombie", hostilenetworks:data=1254]', ['  I', 'II ', 'I  '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:magma_cube", hostilenetworks:data=1254]', ['I  ', 'II ', '  I'], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ghast", hostilenetworks:data=1254]', ['   ', 'I I', 'III'], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:skeleton", hostilenetworks:data=1254]', ['III', ' I ', '   '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:creeper", hostilenetworks:data=1254]', ['I I', ' II', 'II '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:blaze", hostilenetworks:data=1254]', ['I I', 'I I', 'I I'], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:spider", hostilenetworks:data=1254]', ['   ', 'III', ' I '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:zombified_piglin", hostilenetworks:data=1254]', ['I  ', 'I  ', 'I  '], { I: tier1Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:slime", hostilenetworks:data=1254]', [' II', ' I ', ' I '], { I: tier1Input });

    // Tier 2
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:witch", hostilenetworks:data=1254]', ['III', '   ', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:wither_skeleton", hostilenetworks:data=1254]', ['I I', '   ', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:iron_golem", hostilenetworks:data=1254]', [' II', 'II ', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:vindicator", hostilenetworks:data=1254]', ['I  ', ' I ', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:artifacts/mimic", hostilenetworks:data=1254]', ['III', 'I  ', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:hoglin", hostilenetworks:data=1254]', [' II', 'II ', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:evoker", hostilenetworks:data=1254]', ['  I', 'III', '   '], { I: tier2Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:shulker", hostilenetworks:data=1254]', ['   ', 'II ', '   '], { I: tier2Input });

    // Tier 3
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:snow_golem", hostilenetworks:data=1254]', ['II ', '   ', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:chicken", hostilenetworks:data=1254]', ['III', '   ', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:sheep", hostilenetworks:data=1254]', ['III', 'I  ', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:rabbit", hostilenetworks:data=1254]', ['I I', ' I ', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cow", hostilenetworks:data=1254]', ['I  ', 'III', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:mooshroom", hostilenetworks:data=1254]', [' II', 'II ', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:glow_squid", hostilenetworks:data=1254]', ['  I', 'I I', ' I '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:squid", hostilenetworks:data=1254]', ['   ', 'II ', 'I I'], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:pig", hostilenetworks:data=1254]', ['   ', 'I I', ' I '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:cod", hostilenetworks:data=1254]', ['III', '   ', 'I I'], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:polar_bear", hostilenetworks:data=1254]', ['I I', 'III', '   '], { I: tier3Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:bat",hostilenetworks:data=1254]', ['III', '   ', 'III'], { I: tier3Input })

    // Tier 4
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:warden", hostilenetworks:data=1254]', ['II ', '   ', 'I I'], { I: tier4Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon", hostilenetworks:data=1254]', ['I I', ' I ', '   '], { I: tier4Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:wither", hostilenetworks:data=1254]', [' I ', 'I  ', '  I'], { I: tier4Input });
    event.shaped('hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:elder_guardian", hostilenetworks:data=1254]', ['I  ', ' I ', 'I  '], { I: tier4Input });

});