ServerEvents.tags('block', event => {
  event.add('minecraft:mineable/pickaxe', [ // Поддержка ломания киркой
    'arts_and_crafts:bleached_chalk',
    'arts_and_crafts:bleached_concrete'
  ]);

  event.add('minecraft:wool_carpets', 'alexsmobs:bison_carpet'); // Поддержка звука ковра
});

ServerEvents.tags('item', event => {
  event.remove('tidesdelight:catfish', 'tide:mirage_catfish'); // Убирание рыбы Мидаса из тега
  event.remove('tidesdelight:poke_protein', [
    'farmersdelight:salmon_slice',
    'tidesdelight:smoked_eel'
  ]);

  event.add('supplementaries:overencumbering', [ // Поддержка веса коробкам
    'create:cardboard_package_12x10',
    'create:cardboard_package_10x8',
    'create:cardboard_package_10x12',
    'create:cardboard_package_12x12'
  ]);

  event.add('galospheric_delight:salted_caramel_bricks', [ // Тег солёной карамели 
    'galospheric_delight:salted_caramel_bricks',
  ]);

  event.add('forge:cheese/sweet', [ // Тег сыра
    'brewinandchewin:flaxen_cheese_wedge',
    'warriorsofpastepoch:moldy_cheese',
    'brewinandchewin:scarlet_cheese_wedge',
  ]);

  event.remove('minecraft:trim_materials', 'regions_unexplored:prismarite_cluster'); // Скопление призмарита

  event.add('forge:stripped_logs', [
    'vanillabackport:stripped_pale_oak_log',
    'arts_and_crafts:stripped_cork_log',
    'upgrade_aquatic:stripped_driftwood_log',
    'upgrade_aquatic:stripped_river_log',
    'nethers_exoticism:stripped_jabuticaba_log',
    'nethers_exoticism:stripped_rambutan_log',
    'autumnity:stripped_maple_log',
    'phantasm:stripped_pream_log',
    'gardens_of_the_dead:stripped_soulblight_stem',
    'endergetic:stripped_poise_stem'
  ]);

  event.add('forge:stripped_wood', [
    'vanillabackport:stripped_pale_oak_wood',
    'arts_and_crafts:stripped_cork_wood',
    'upgrade_aquatic:stripped_driftwood',
    'upgrade_aquatic:stripped_river_wood',
    'mynethersdelight:stripped_powdery_block',
    'nethers_exoticism:stripped_rambutan_wood',
    'autumnity:stripped_maple_wood',
    'phantasm:stripped_pream_wood',
    'gardens_of_the_dead:stripped_soulblight_hyphae',
    'endergetic:stripped_poise_wood'
  ])
});