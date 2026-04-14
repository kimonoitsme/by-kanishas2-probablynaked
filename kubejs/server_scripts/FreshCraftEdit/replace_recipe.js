ServerEvents.recipes(event => {
    event.remove({output: 'tide:lavaproof_fishing_hook'}) // Лавоустойчевый рыболовный крючок
    event.shaped('tide:lavaproof_fishing_hook', [
        '  #',
        'O O',
        ' O '
    ], {
        '#': '#c:ingots/gold',
        'O': 'minecraft:netherite_scrap'
    }).id('kubejs:lavaproof_fishing_hook');



    event.remove({output: 'betterarcheology:iron_brush'}) // Серебряная кисточка
    event.shaped('betterarcheology:iron_brush', [
        'X',
        '#',
        'I'
    ], {
        'X': 'minecraft:feather',
        '#': 'galosphere:silver_ingot',
        'I': 'minecraft:stick'
    }).id('kubejs:iron_brush');



    event.remove({output: 'minecraft:firework_rocket'}) // Исправление отображение в JEI
    event.shapeless(
        Item.of('minecraft:firework_rocket', 3, '{Fireworks:{Flight:1b}}'),
        ['minecraft:paper', 'minecraft:gunpowder']
    );

    event.shapeless(
        Item.of('minecraft:firework_rocket', 3, '{Fireworks:{Flight:2b}}'),
        ['minecraft:paper', 'minecraft:gunpowder', 'minecraft:gunpowder']
    );

    event.shapeless(
        Item.of('minecraft:firework_rocket', 3, '{Fireworks:{Flight:3b}}'),
        ['minecraft:paper', 'minecraft:gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder']
    );

    event.remove({output: 'minecraft:recovery_compass'}) // Возвратный компас
    event.shaped(
        'minecraft:recovery_compass',
        [
            "SSS",
            "SCS",
            "SSS"
        ],
        {
            'C': 'minecraft:heart_of_the_sea',
            'S': 'galosphere:silver_ingot',
        }
    ).group('equipment').id('kubejs:recovery_compass');

    event.remove({output: 'minecraft:lodestone'}) // Магнетит
    event.shaped(
        'minecraft:lodestone',
        [
            "SSS",
            "S#S",
            "SSS"
        ],
        {
            '#': 'minecraft:compass',
            'S': 'minecraft:chiseled_stone_bricks'
        }
    ).group('misc').id('kubejs:lodestone');

    event.remove({output: 'minecraft:compass'}); // Компас
    event.shaped(
        'minecraft:compass',
        [
            " S ",
            "SCS",
            " S "
        ],
        {
            'S': 'minecraft:iron_ingot',
            'C': 'minecraft:redstone'
        }
    ).group('misc').id('kubejs:compass');



    const boatTypes = [ // Лодки из "Biome's of Plenty"
        'dead',
        'empyreal',
        'fir',
        'hellbark',
        'jacaranda',
        'magic',
        'mahogany',
        'maple',
        'palm',
        'pine',
        'redwood',
        'umbran',
        'willow'
    ];

    boatTypes.forEach(type => {
        event.remove({ output: `biomesoplenty:${type}_chest_boat`});
        event.shapeless(`biomesoplenty:${type}_chest_boat`, [
            'minecraft:chest', 
            `biomesoplenty:${type}_boat`
        ]);
    });



    event.remove({output: 'cold_sweat:hearth'}) // Очаг
    event.shaped('cold_sweat:hearth', [
        " # ",
        "BBB",
        "SIS"
    ], {
        '#': 'cold_sweat:smokestack',
        'B': 'minecraft:bricks',
        'I': 'cold_sweat:boiler',
        'S': 'minecraft:iron_ingot'
    }).id('kubejs:hearth');

    event.remove({output: 'cold_sweat:soulspring_lamp'}) // Адский светоч
    event.shaped(
        Item.of('cold_sweat:soulspring_lamp', {Fuel: 64.0, Lit: false, stateChangeTimer: 0}), [
        " G ",
        "IHI",
        " C "
    ], {
        'I': 'galosphere:silver_ingot',
        'G': 'minecraft:gold_nugget',
        'H': 'minecraft:heart_of_the_sea',
        'C': 'minecraft:chain'
    }).id('kubejs:soulspring_lamp');







    event.recipes.createCrushing( // Дробление: аллюрит, люмьер, азурин, кримзит, охрум и веридиум
        [
            Item.of('galosphere:allurite_shard', 3),
            Item.of('galosphere:allurite_shard').withChance(0.5)
        ],
        'galosphere:allurite_block',
        150
    ).id('create:crushing/allurite_shard_from_allurite_block');
  
    event.recipes.createCrushing(
        [
            Item.of('galosphere:allurite_shard', 7),
            Item.of('galosphere:allurite_shard').withChance(0.5)
        ],
        'galosphere:allurite_cluster',
        150
    ).id('create:crushing/allurite_shard_from_allurite_cluster');
  
    event.recipes.createCrushing(
        [
            Item.of('galosphere:lumiere_shard', 3),
            Item.of('galosphere:lumiere_shard').withChance(0.5)
        ],
        'galosphere:lumiere_block',
        150
    ).id('create:crushing/lumiere_shard_from_lumiere_block');

    event.recipes.createCrushing(
        [
            Item.of('galosphere:lumiere_shard', 7),
            Item.of('galosphere:lumiere_shard').withChance(0.5)
        ],
        'galosphere:lumiere_cluster',
        150
    ).id('create:crushing/lumiere_shard_from_lumiere_cluster'); 


    event.remove({output: 'create:redstone_link'}) // Редстоуновый передатчик сигнала
    event.shaped('create:redstone_link', [
      " J ",
      "IRI",
      "   "
    ], {
      'R': 'create:andesite_casing',
      'J': 'create:transmitter',
      'I': 'create:brass_nugget',
    }).id('kubejs:redstone_link');

    event.remove({output: 'create:stock_link'}) // Складской передатчик
    event.shaped('create:stock_link', [
      " J ",
      " RI",
      " M "
    ], {
      'R': 'create:item_vault',
      'J': 'create:transmitter',
      'I': 'create:electron_tube',
      'M': 'create:brass_sheet',
    }).id('kubejs:stock_link');

    event.remove({output: 'create:stock_ticker'}) // Контроллер склада
    event.shaped('create:stock_ticker', [
      " J ",
      " RI",
      " M "
    ], {
      'R': 'create:stock_link',
      'J': '#forge:glass',
      'I': 'create:precision_mechanism',
      'M': 'create:brass_ingot',
    }).id('kubejs:stock_ticker');

    event.remove({output: 'create:packager'}) // Упаковщик
    event.shaped('create:packager', [
      " J ",
      "JRJ",
      "IJI"
    ], {
      'R': 'create:cardboard_block',
      'J': '#forge:ingots/iron',
      'I': 'create:electron_tube',
    }).id('kubejs:packager');

    event.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting'}); // Кусочек цинка
    event.shapeless(
        Item.of('create:zinc_nugget', 9), [
        'create:zinc_ingot'
    ]);

    event.remove({id: 'create:crafting/materials/copper_nugget'}); // Кусочек меди
    event.shapeless(
        Item.of('create:copper_nugget', 9), [
        'minecraft:copper_ingot'
    ]);



    event.remove({output: 'etched:boombox'}) // Бумбокс
    event.shaped('etched:boombox', [
      " I ",
      "IRI",
      "IJI"
    ], {
      'R': '#forge:dusts/redstone',
      'J': 'minecraft:jukebox',
      'I': 'create:brass_ingot',
    }).id('kubejs:boombox');

    event.remove({output: 'etched:music_label'}) // Ярлык
    event.shaped('etched:music_label', [
      " P ",
      "P P",
      " P "
    ], {
      'P': 'minecraft:iron_nugget'
    }).id('kubejs:music_label');

    event.remove({output: 'etched:blank_music_disc'}) // Пустая пластинка
    event.smelting(
        'etched:blank_music_disc', 
        '#minecraft:music_discs',
        0.2
    ).id('kubejs:smelting_blank_music_disc');



    event.recipes.minecraft.stonecutting( // Кальцитовая колонна
        Item.of('hearth_and_home:calcite_column', 1),
        'hearth_and_home:polished_calcite'
    ).id('hearth_and_home:stonecutting/calcite_column_from_polished_calcite');

    event.recipes.minecraft.stonecutting( // Полированный кальцит
        Item.of('hearth_and_home:chiseled_calcite', 1),
        'hearth_and_home:polished_calcite_slab'
    ).id('hearth_and_home:stonecutting/chiseled_calcite_from_polished_calcite_slab');

    event.recipes.minecraft.stonecutting( // Полированная плита из кальцита
        Item.of('hearth_and_home:polished_calcite_slab', 1),
        'hearth_and_home:polished_calcite'
    ).id('hearth_and_home:stonecutting/polished_calcite_slab_from_polished_calcite');

    event.recipes.minecraft.stonecutting( // Полированные ступеньки из кальцита
        Item.of('hearth_and_home:polished_calcite_stairs', 1),
        'hearth_and_home:polished_calcite'
    ).id('hearth_and_home:stonecutting/polished_calcite_stairs_from_polished_calcite');

    event.remove({output: 'hearth_and_home:thatch'}) // Древесная солома
    event.shaped('hearth_and_home:thatch', [
      "WS",
      "SW"
    ], {
      'S': 'minecraft:stick',
      'W': 'farmersdelight:straw'
    }).id('kubejs:thatch');



    event.remove({output: 'immersive_weathering:mulch_block'}) // Мульча
    event.shaped(
        Item.of('immersive_weathering:mulch_block', 4),
        [
            'C#',
            '#C'
        ],
        {
            'C': 'minecraft:dirt',
            '#': 'farmersdelight:tree_bark'
        }
    ).id('kubejs:mulch_block');

    event.remove({output: 'immersive_weathering:nulch_block'}) // Нульча
    event.shaped(
        Item.of('immersive_weathering:nulch_block', 4),
        [
            'C#',
            '#C'
        ],
        {
            'C': 'minecraft:netherrack',
            '#': 'farmersdelight:tree_bark'
        }
    ).id('kubejs:nulch_block');


    
    event.remove({output: 'luckys_armory:bone_armor_helmet'}) // Костяной шлем
    event.shaped(
        'luckys_armory:bone_armor_helmet',
        [
            'aaa',
            'a a'
        ],
        {
            'a': 'minecraft:bone'
        }
    ).group('equipment').id('kubejs:bone_armor_helmet');

    event.remove({output: 'luckys_armory:chainmail'}) // Кольчуга
    event.shaped(
        'luckys_armory:chainmail',
        [
            'a a',
            ' a ',
            'a a'
        ],
        {
            'a': 'minecraft:iron_nugget'
        }
    ).group('misc').id('kubejs:chainmail');

    event.remove({output: 'luckys_armory:heavy_diamond_armor_boots'}) // Тяжёлые алмазные ботинки
    event.shaped(
        'luckys_armory:heavy_diamond_armor_boots',
        [
            'aba',
            'a a'
        ],
        {
            'a': 'minecraft:diamond',
            'b': 'minecraft:diamond_boots'
        }
    ).group('equipment').id('kubejs:heavy_diamond_armor_boots');

    event.remove({output: 'luckys_armory:heavy_diamond_armor_chestplate'}) // Тяжёлый алмазный нагрудник
    event.shaped(
        'luckys_armory:heavy_diamond_armor_chestplate',
        [
            "a a",
            "aba",
            "aaa"
        ],
        {
            'a': 'minecraft:diamond',
            'b': 'minecraft:diamond_chestplate'
        }
    ).group('equipment').id('kubejs:heavy_diamond_armor_chestplate');

    event.remove({output: 'luckys_armory:heavy_diamond_armor_helmet'}) // Тяжёлый алмазный шлем
    event.shaped(
        'luckys_armory:heavy_diamond_armor_helmet',
        [
            "aaa",
            "aba"
        ],
        {
            'a': 'minecraft:diamond',
            'b': 'minecraft:diamond_helmet'
        }
    ).group('equipment').id('kubejs:heavy_diamond_armor_helmet');

    event.remove({output: 'luckys_armory:heavy_diamond_armor_leggings'}) // Тяжёлые алмазные поножи
    event.shaped(
        'luckys_armory:heavy_diamond_armor_leggings',
        [
            "aaa",
            "aba",
            "a a"
        ],
        {
            'a': 'minecraft:diamond',
            'b': 'minecraft:diamond_leggings'
        }
    ).group('equipment').id('kubejs:heavy_diamond_armor_leggings');

    event.remove({output: 'luckys_armory:heavy_golden_armor_boots'}) // Тяжёлые золотые ботинки
    event.shaped(
        'luckys_armory:heavy_golden_armor_boots',
        [
            "aba",
            "a a"
        ],
        {
            'a': 'minecraft:gold_ingot',
            'b': 'minecraft:golden_boots'
        }
    ).group('equipment').id('kubejs:heavy_golden_armor_boots');

    event.remove({output: 'luckys_armory:heavy_golden_armor_chestplate'}) // Тяжёлый золотой нагрудник
    event.shaped(
        'luckys_armory:heavy_golden_armor_chestplate',
        [
            "a a",
            "aba",
            "aaa"
        ],
        {
            'a': 'minecraft:gold_ingot',
            'b': 'minecraft:golden_chestplate'
        }
    ).group('equipment').id('kubejs:heavy_golden_armor_chestplate');

    event.remove({output: 'luckys_armory:heavy_golden_armor_helmet'}) // Тяжёлый золотой шлем
    event.shaped(
        'luckys_armory:heavy_golden_armor_helmet',
        [
            "aaa",
            "aba"
        ],
        {
            'a': 'minecraft:gold_ingot',
            'b': 'minecraft:golden_helmet'
        }
    ).group('equipment').id('kubejs:heavy_golden_armor_helmet');

    event.remove({output: 'luckys_armory:heavy_golden_armor_leggings'}) // Тяжёлые золотые поножи
    event.shaped(
        'luckys_armory:heavy_golden_armor_leggings',
        [
            "aaa",
            "aba",
            "a a"
        ],
        {
            'a': 'minecraft:gold_ingot',
            'b': 'minecraft:golden_leggings'
        }
    ).group('equipment').id('kubejs:heavy_golden_armor_leggings');

    event.remove({output: 'luckys_armory:heavy_iron_armor_boots'}) // Тяжёлые железные ботинки
    event.shaped(
        'luckys_armory:heavy_iron_armor_boots',
        [
            "aba",
            "a a"
        ],
        {
            'a': 'minecraft:iron_ingot',
            'b': 'minecraft:iron_boots'
        }
    ).group('equipment').id('kubejs:heavy_iron_armor_boots');

    event.remove({output: 'luckys_armory:heavy_iron_armor_chestplate'}) // Тяжёлый железный нагрудник
    event.shaped(
        'luckys_armory:heavy_iron_armor_chestplate',
        [
            "a a",
            "aba",
            "aaa"
        ],
        {
            'a': 'minecraft:iron_ingot',
            'b': 'minecraft:iron_chestplate'
        }
    ).group('equipment').id('kubejs:heavy_iron_armor_chestplate');

    event.remove({output: 'luckys_armory:heavy_iron_armor_helmet'}) // Тяжёлый железный шлем
    event.shaped(
        'luckys_armory:heavy_iron_armor_helmet',
        [
            "aaa",
            "aba"
        ],
        {
            'a': 'minecraft:iron_ingot',
            'b': 'minecraft:iron_helmet'
        }
    ).group('equipment').id('kubejs:heavy_iron_armor_helmet');

    event.remove({output: 'luckys_armory:heavy_iron_armor_leggings'}) // Тяжёлые железные поножи
    event.shaped(
        'luckys_armory:heavy_iron_armor_leggings',
        [
            "aaa",
            "aba",
            "a a"
        ],
        {
            'a': 'minecraft:iron_ingot',
            'b': 'minecraft:iron_leggings'
        }
    ).group('equipment').id('kubejs:heavy_iron_armor_leggings');

    event.remove({output: 'luckys_armory:heavy_netherite_armor_chestplate'}) // Тяжёлый незеритовый нагрудник
    event.smithing(
        'luckys_armory:heavy_netherite_armor_chestplate',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:netherite_chestplate', 
        'minecraft:netherite_block',
    ).id('luckys_armory:smithing/heavy_netherite_armor_chestplate');

    event.remove({output: 'luckys_armory:heavy_netherite_armor_leggings'}) // Тяжёлые незеритовые поножи
    event.smithing(
        'luckys_armory:heavy_netherite_armor_leggings',
        'minecraft:netherite_upgrade_smithing_template',
        'minecraft:netherite_leggings', 
        'minecraft:netherite_block',
    ).id('luckys_armory:smithing/heavy_netherite_armor_leggings');

    event.remove({output: 'luckys_armory:plated_armor_boots'}) // Обшитые железом ботинки
    event.shaped(
        'luckys_armory:plated_armor_boots',
        [
            "a a",
            "bcb"
        ],
        {
            'a': 'wardrobe:bound_leather',
            'b': 'minecraft:iron_nugget',
            'c': 'minecraft:leather_boots'
        }
    ).group('equipment').id('kubejs:plated_armor_boots');

    event.remove({output: 'luckys_armory:plated_armor_chestplate'}) // Обшитого железом нагрудник
    event.shaped(
        'luckys_armory:plated_armor_chestplate',
        [
            "aba",
            "bcb",
            "aba"
        ],
        {
            'a': 'wardrobe:bound_leather',
            'b': 'minecraft:iron_nugget',
            'c': 'minecraft:leather_chestplate'
        }
    ).group('equipment').id('kubejs:plated_armor_chestplate');

    event.remove({output: 'luckys_armory:plated_armor_helmet'}) // Обшитый железом шлем
    event.shaped(
        'luckys_armory:plated_armor_helmet',
        [
            "aba",
            "bcb"
        ],
        {
            'a': 'wardrobe:bound_leather',
            'b': 'minecraft:iron_nugget',
            'c': 'minecraft:leather_helmet'
        }
    ).group('equipment').id('kubejs:plated_armor_helmet');

    event.remove({output: 'luckys_armory:plated_armor_leggings'}) // Обшитые железом поножи
    event.shaped(
        'luckys_armory:plated_armor_leggings',
        [
            "aba",
            "bcb",
            "aba"
        ],
        {
            'a': 'wardrobe:bound_leather',
            'b': 'minecraft:iron_nugget',
            'c': 'minecraft:leather_leggings'
        }
    ).group('equipment').id('kubejs:plated_armor_leggings');



    event.remove({output: 'miners_delight:bat_rolls'}); // Роллы из летучей мыши
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { 
                item: 'warriorsofpastepoch:batwing'
            },
            { 
                tag: 'farmersdelight:cabbage_roll_ingredients'
            }
        ],
        result: {item: 'miners_delight:bat_rolls'},
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:bat_rolls');

    event.remove({output: 'miners_delight:bat_soup'}); // Суп из летучей мыши
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { 
                item: 'warriorsofpastepoch:batwing'
            },
            { 
                item: 'warriorsofpastepoch:batwing'
            }
        ],
        result: {item: 'miners_delight:bat_soup'},
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:bat_soup');

    event.remove({output: 'miners_delight:smoked_bat_wing'}); // Копчёное крыло летучей мыши
    event.smelting(
        'miners_delight:smoked_bat_wing', 
        'warriorsofpastepoch:batwing',
        0.25,
        200
    ).group('food').id('kubejs:smoked_bat_wing_smelting');

    event.campfireCooking(
        'miners_delight:smoked_bat_wing', 
        'warriorsofpastepoch:batwing',
        0.35,
        600
    ).group('food').id('kubejs:smoked_bat_wing_campfire');

    event.smoking(
        'miners_delight:smoked_bat_wing', 
        'warriorsofpastepoch:batwing',
        0.35,
        100
    ).group('food').id('kubejs:smoked_bat_wing_smoking');



    event.remove({output: 'mynethersdelight:boiled_egg', type: 'farmersdelight:cooking'}); // Варёное яйцо
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { 
                tag: 'mynethersdelight:boiled_egg_candidate'
            }
        ],
        result: {item: 'mynethersdelight:boiled_egg', count: 1},
        cookingtime: 50,
        experience: 0.15,
        recipe_book_tab: 'misc'
    }).id('kubejs:boiled_egg_from_candidate');

    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { 
                item: 'minecraft:egg'
            }
        ],
        result: {item: 'mynethersdelight:boiled_egg', count: 1},
        cookingtime: 50,
        experience: 0.15,
        recipe_book_tab: 'misc'
    }).id('kubejs:boiled_egg_from_egg');



    event.remove({output: 'supplementaries:bubble_blower'}); // Выдуватель мыльных пузырей
    event.shaped('supplementaries:bubble_blower', [
        ' 11',
        ' 11',
        '0  '
    ], {
        '0': 'galosphere:silver_ingot',
        '1': 'galosphere:silver_nugget'
    }).modifyResult((grid, result) => {
        result = result.copy();
        result.nbt = { Damage: 250 };
        return result;
    }).id('kubejs:bubble_blower_from_silver');

    event.remove({output: 'supplementaries:goblet'}); // Бокал
    event.shaped('supplementaries:goblet', [
            '0 0',
            '010',
            ' 0 '
        ], {
            '0': 'galosphere:silver_nugget',
            '1': 'galosphere:silver_ingot'
    }).id('kubejs:goblet_from_silver');

    event.remove({output: 'supplementaries:slice_map'}); // Чистая карта слоёв
    event.shapeless('supplementaries:slice_map', [ 
        'minecraft:map'
    ]);

    event.shapeless('minecraft:map', [ // Чистая карта
        'supplementaries:slice_map'
    ]);



    event.remove({output: 'atmospheric:candied_orange_slices'}); // Засахарённые апельсиновые дольки
    event.shapeless('atmospheric:candied_orange_slices', [
        'fruitsdelight:orange_slice', 
        'fruitsdelight:orange_slice', 
        'fruitsdelight:orange_slice', 
        'minecraft:sugar'
    ]);



    event.remove({output: 'crabbersdelight:shrimp_barrel'}); // Бочонок с креветками
    event.shaped('crabbersdelight:shrimp_barrel', [
        "XXX",
        "XXX",
        "XXX"
    ], {
        'X': 'oceanic_delight:shrimp'
    }).id('kubejs:shrimp_barrel');

    event.remove({output: 'crabbersdelight:squid_kebob'}); // Кебаб из спрута
    event.shapeless('crabbersdelight:squid_kebob', [
        'minecraft:stick',
        'miners_delight:baked_tentacles',
        'farmersdelight:onion',
        'farmersdelight:onion',
        'farmersdelight:tomato'
    ]);

    event.remove({output: 'crabbersdelight:cooked_shrimp', type: 'farmersdelight:cooking'}); // Варённая креветка
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            { 
                item: 'oceanic_delight:shrimp'
            }
        ],
        result: {
            item: 'crabbersdelight:cooked_shrimp', count: 1
        },
        cookingtime: 200,
        experience: 0.35,
        recipe_book_tab: 'misc'
    }).id('kubejs:cooked_shrimp');

    event.remove({output: 'crabbersdelight:seafood_gumbo', type: 'farmersdelight:cooking'}); // Гамбо из морепродуктов
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            { 
                item: 'crabbersdelight:clawster'
            },
            { 
                item: 'oceanic_delight:shrimp'
            },
            { 
                item: 'farmersdelight:onion'
            },
            { 
                item: 'farmersdelight:rice'
            },
            { 
                item: 'minecraft:porkchop'
            }
        ],
        result: {
            item: 'crabbersdelight:seafood_gumbo', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:seafood_gumbo');

    event.remove({output: 'crabbersdelight:shrimp_fried_rice', type: 'farmersdelight:cooking'}); // Жареный рис с креветками
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            { 
                item: 'farmersdelight:cooked_rice'
            },
            { 
                item: 'farmersdelight:onion'
            },
            { 
                item: 'oceanic_delight:shrimp'
            },
            { 
                item: 'minecraft:carrot'
            }
        ],
        result: {
            item: 'crabbersdelight:shrimp_fried_rice', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:shrimp_fried_rice');



    event.remove({output: 'culturaldelights:calamari_roll'}); // Суши с осьминогом
    event.shapeless(
        Item.of('culturaldelights:calamari_roll', 2), [
        'minecraft:dried_kelp',
        'farmersdelight:cooked_rice',
        'miners_delight:tentacles',
        'miners_delight:tentacles'
    ]);

    event.remove({output: 'culturaldelights:pufferfish_roll'}); // Суши с иглобрюхом
    event.shapeless(
        Item.of('culturaldelights:pufferfish_roll', 2), [
        'farmersdelight:cooked_rice',
        'crabbersdelight:pufferfish_slice',
        'crabbersdelight:pufferfish_slice'
    ]);

    event.remove({output: 'culturaldelights:tropical_roll'}); // Суши с тропической рыбой
    event.shapeless(
        Item.of('culturaldelights:tropical_roll', 2), [
        'minecraft:dried_kelp',
        'farmersdelight:cooked_rice',
        'crabbersdelight:tropical_fish_slice',
        'crabbersdelight:tropical_fish_slice'
    ]);

    event.remove({output: 'culturaldelights:spicy_curry', type: 'farmersdelight:cooking'}); // Пикантный карри
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            {
                item: 'mynethersdelight:bullet_pepper'
            },
            {
                item: 'farmersdelight:tomato_sauce'
            },
            {
                item: 'farmersdelight:cooked_rice'
            },
            {
                tag: 'forge:crops/onion'
            },
            {
                tag: 'forge:cooked_chicken'
            },
            {
                tag: 'forge:milk'
            }
        ],
        result: {
            item: 'culturaldelights:spicy_curry', count: 1
        },
        cookingtime: 200,
        experience: 0.35,
    }).id('kubejs:spicy_curry');



    event.remove({output: 'ecologics:crab_meat', type: 'farmersdelight:cooking'}); // Приготовленное крабовое мясо
    event.custom({
        type: 'farmersdelight:cooking',
        ingredients: [
            {
                item: 'ecologics:crab_claw'
            }
        ],
        result: {
            item: 'ecologics:crab_meat', count: 1
        },
        cookingtime: 50,
        experience: 0.80,
        recipe_book_tab: 'misc'
    }).id('kubejs:crab_meat');



    event.remove({output: 'oceanic_delight:shrimp'}); // Креветка
    event.shapeless('oceanic_delight:shrimp', 9 [
        'oceanic_delight:shrimp'
    ]);

    event.remove({output: 'oceanic_delight:glow_squid_stew', type: 'farmersdelight:cooking'}); // Тушёный светящийся спрут
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            {
                item: 'miners_delight:glow_squid'
            },
            {
                item: 'farmersdelight:tomato_sauce'
            },
            {
                tag: 'forge:crops/onion'
            },
            {
                item: 'minecraft:brown_mushroom'
            }
        ],
        result: {
            item: 'oceanic_delight:glow_squid_stew', count: 1
        },
        cookingtime: 200,
        experience: 1.5,
        recipe_book_tab: 'misc'
    }).id('kubejs:glow_squid_stew');

    event.remove({output: 'oceanic_delight:paella_plate', type: 'farmersdelight:cooking'}); // Паэлья на сковороде
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'farmersdelight:skillet'
        },
        ingredients: [
            {
                tag: 'forge:crops/rice'
            },
            {
                tag: 'forge:crops/rice'
            },
            {
                tag: 'forge:shrimps'
            },
            {
                tag: 'forge:crops/tomato'
            },
            {
                item: 'alexsmobs:cooked_lobster_tail'
            }
        ],
        result: {
            item: 'oceanic_delight:paella_plate', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:paella_plate');

    event.remove({output: 'oceanic_delight:shrimp_rice', type: 'farmersdelight:cooking'}); // Рис с морепродуктами
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            {
                tag: 'forge:crops/rice'
            },
            {
                tag: 'forge:shrimps'
            },
            {
                tag: 'forge:crops/tomato'
            },
            {
                item: 'miners_delight:tentacles'
            },
            {
                tag: 'forge:eggs'
            }
        ],
        result: {
            item: 'oceanic_delight:shrimp_rice', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:shrimp_rice');

    event.remove({output: 'oceanic_delight:takoyaki', type: 'farmersdelight:cooking'}); // Такояки со спрутом
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            {
                item: 'miners_delight:baked_tentacles'
            },
            {
                tag: 'forge:dough'
            },
            {
                tag: 'forge:eggs'
            },
            {
                item: 'minecraft:kelp'
            }
        ],
        result: {
            item: 'oceanic_delight:takoyaki', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'misc'
    }).id('kubejs:takoyaki');

    event.remove({output: 'oceanic_delight:squid_and_pickles'}); // Спрут с солениями
    event.shapeless('oceanic_delight:squid_and_pickles', [
        'miners_delight:baked_squid',
        'minecraft:baked_potato',
        '#forge:sea_pickles',
        '#forge:crops/onion',
        'minecraft:bowl'
    ]);

    event.remove({output: 'oceanic_delight:squid_salad'}); // Салат из спрута
    event.shapeless('oceanic_delight:squid_salad', [
        'oceanic_delight:sea_grape',
        'miners_delight:tentacles',
        '#forge:crops/cabbage',
        'minecraft:bowl'
    ]);



    event.remove({output: 'quarkdelight:crab_bars'}); // Крабовые палочки
    event.shaped(
        Item.of('quarkdelight:crab_bars', 4), [
        "01 ",
        "2  "
    ], {
        '0': 'crabbersdelight:crab_legs',
        '1': '#forge:raw_fishes',
        '2': 'minecraft:bone_meal'
    }).id('kubejs:crab_bars');

    event.remove({output: 'quarkdelight:cooked_whole_crab', type: 'farmersdelight:cooking'}); // Запечённый рак
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            {
                item: 'quark:crab_shell'
            },
            {
                item: 'quark:crab_leg'
            },
            {
                item: 'quark:crab_leg'
            },
            {
                item: 'farmersdelight:rice'
            },
            {
                item: 'minecraft:dried_kelp'
            }
        ],
        result: {
            item: 'quarkdelight:cooked_whole_crab', count: 1
        },
        cookingtime: 200,
        experience: 2.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:cooked_whole_crab');

    event.remove({output: 'quarkdelight:crab_pasta', type: 'farmersdelight:cooking'}); // Паста с крабовым мясом
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            {
                item: 'ecologics:crab_meat'
            },
            {
                item: 'farmersdelight:raw_pasta'
            },
            {
                tag: 'forge:vegetables'
            }
        ],
        result: {
            item: 'quarkdelight:crab_pasta', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:crab_pasta');



    event.remove({output: 'tidesdelight:barracuda_burger'}); // Рыбный бургер
    event.shapeless('tidesdelight:barracuda_burger', [
        'minecraft:bread',
        'tide:cooked_fish_slice',
        'farmersdelight:tomato',
        'farmersdelight:cabbage_leaf'
    ]);

    event.remove({output: 'tidesdelight:caprese'}); // Капрезе
    event.shapeless('tidesdelight:caprese', [
        'brewinandchewin:flaxen_cheese_wedge',
        'farmersdelight:tomato',
        '#forge:salad_ingredients',
        'minecraft:bowl'
    ]);

    event.remove({output: 'tidesdelight:crystal_shrimp_scampi', type: 'farmersdelight:cooking'}); // Морская блестящая паста
    event.custom({
        type: 'farmersdelight:cooking',
        container: {
            item: 'minecraft:bowl'
        },
        ingredients: [
            {
                item: 'farmersdelight:raw_pasta'
            },
            {
                item: 'tidesdelight:minced_midas_fish'
            },
            {
                item: 'tide:crystal_shrimp'
            }
        ],
        result: {
            item: 'tidesdelight:crystal_shrimp_scampi', count: 1
        },
        cookingtime: 200,
        experience: 1.0,
        recipe_book_tab: 'meals'
    }).id('kubejs:crystal_shrimp_scampi');

    event.remove({output: 'tide:cooked_fish'}) // Приготовленная рыба
    event.smelting(
        'tide:cooked_fish', 
        '#stardew_fishing:starts_minigame',
        0.35,
        200
    ).id('kubejs:cooked_fish_smelting');

    event.remove({output: 'tidesdelight:grouper_caprese'}); // Рыбное капрезе
    event.shapeless('tidesdelight:grouper_caprese', [
        'brewinandchewin:flaxen_cheese_wedge',
        'tide:cooked_fish_slice',
        'farmersdelight:tomato',
        '#forge:salad_ingredients',
        'minecraft:bowl'
    ]);

    event.remove({id: 'farmersdelight:cutting/fish_slice_cutting'});
    event.remove({id: 'tidesdelight:tuna_cutting'});
    event.custom({ // Филе тунца
        type: 'farmersdelight:cutting',
        ingredients: [
        {
            item: 'tide:tuna'
        }
        ],
        result: [
        {
            count: 2,
            item: 'tidesdelight:tuna_slice'
        }
        ],
        tool: {
        tag: 'forge:tools/knives'
        }
    }).id('kubejs:tuna_cutting');

    event.remove({output: 'tidesdelight:tuna_roll'}) // Ролл с тунцом
    event.shaped(
        'tidesdelight:tuna_roll',
        [
            "RXR",
            "###"
        ],
        {
            '#': 'minecraft:dried_kelp',
            'R': 'farmersdelight:cooked_rice',
            'X': 'tidesdelight:tuna_slice'
        }
    ).group('misc').id('kubejs:tuna_roll');

    event.remove({output: 'tidesdelight:tuna_salad'}) // Салат с тунцом
    event.shapeless('tidesdelight:tuna_salad', [
        '#forge:salad_ingredients',
        'mynethersdelight:boiled_egg',
        'tidesdelight:tuna_slice',
        'minecraft:bowl'
    ]);



    event.remove({output: 'vc_gliders:paraglider_gold'}) // Золотой планер
    event.shaped(
        'vc_gliders:paraglider_gold',
        [
            "RRR",
            "SWS",
            "WOW"
        ],
        {
            'R': 'vc_gliders:reinforced_paper_gold',
            'S': 'minecraft:string',
            'W': 'minecraft:stick',
            'O': 'wan_ancient_beasts:glider_feather'
        }
    ).group('gliders').id('kubejs:paraglider_gold');

    event.remove({output: 'vc_gliders:paraglider_diamond'}) // Алмазный планер
    event.shaped(
        'vc_gliders:paraglider_diamond',
        [
            "RRR",
            "SWS",
            "WOW"
        ],
        {
            'R': 'vc_gliders:reinforced_paper_diamond',
            'S': 'minecraft:string',
            'W': 'minecraft:stick',
            'O': 'wan_ancient_beasts:glider_feather'
        }
    ).group('gliders').id('kubejs:paraglider_diamond');

    event.remove({output: 'vc_gliders:paraglider_iron'}) // Железный планер
    event.shaped(
        'vc_gliders:paraglider_iron',
        [
            "RRR",
            "SWS",
            "WOW"
        ],
        {
            'R': 'vc_gliders:reinforced_paper_iron',
            'S': 'minecraft:string',
            'W': 'minecraft:stick',
            'O': 'wan_ancient_beasts:glider_feather'
        }
    ).group('gliders').id('kubejs:paraglider_iron');

    event.remove({output: 'vc_gliders:paraglider_netherite'}) // Незеритовый планер
    event.shaped(
        'vc_gliders:paraglider_netherite',
        [
            "RRR",
            "SWS",
            "WOW"
        ],
        {
            'R': 'vc_gliders:reinforced_paper_netherite',
            'S': 'minecraft:string',
            'W': 'minecraft:stick',
            'O': 'wan_ancient_beasts:glider_feather'
        }
    ).group('gliders').id('kubejs:paraglider_netherite');

    event.remove({output: 'vc_gliders:paraglider_wood'}) // Базовый планер
    event.shaped(
        'vc_gliders:paraglider_wood',
        [
            "RRR",
            "SWS",
            "WOW"
        ],
        {
            'R': 'vc_gliders:reinforced_paper',
            'S': 'minecraft:string',
            'W': 'minecraft:stick',
            'O': 'wan_ancient_beasts:glider_feather'
        }
    ).group('gliders').id('kubejs:paraglider_wood');



    event.remove({output: 'wardrobe:snowy_boots'}) // Арктические ботинки
    event.shaped(
        'wardrobe:snowy_boots',
        [
            "aba",
            "c c"
        ],
        {
            'a': 'cold_sweat:goat_fur',
            'b': 'minecraft:leather_boots',
            'c': 'wardrobe:hardened_leather'
        }
    ).group('misc').id('kubejs:wd_snowy_boots');

    event.remove({output: 'wardrobe:snowy_chestplate'}) // Арктическая шуба
    event.shaped(
        'wardrobe:snowy_chestplate',
        [
            "a a",
            "bcb",
            "ddd"
        ],
        {
            'a': 'cold_sweat:goat_fur',
            'b': 'minecraft:iron_ingot',
            'c': 'minecraft:leather_chestplate',
            'd': 'wardrobe:hardened_leather'
        }
    ).group('misc').id('kubejs:wd_snowy_chestplate');

    event.remove({output: 'wardrobe:snowy_helmet'}) // Арктический капюшон
    event.shaped(
        'wardrobe:snowy_helmet',
        [
            "aaa",
            "bcb",
            "a a"
        ],
        {
            'a': 'cold_sweat:goat_fur',
            'b': 'wardrobe:hardened_leather',
            'c': 'minecraft:leather_helmet'
        }
    ).group('misc').id('kubejs:wd_snowy_helmet');

    event.remove({output: 'wardrobe:snowy_leggings'}) // Арктические штаны
    event.shaped(
        'wardrobe:snowy_leggings',
        [
            "aba",
            "cdc",
            "b b"
        ],
        {
            'a': 'cold_sweat:goat_fur',
            'b': 'wardrobe:hardened_leather',
            'c': 'minecraft:iron_ingot',
            'd': 'minecraft:leather_leggings'
        }
    ).group('misc').id('kubejs:wd_snowy_leggings');



    event.remove({output: 'cnb:apple_slice'}) // Ломтики яблока
    event.custom({ 
        type: 'farmersdelight:cutting',
        ingredients: [
        {
            item: 'minecraft:apple'
        }
        ],
        result: [
        {
            count: 4,
            item: 'cnb:apple_slice'
        }
        ],
        tool: {
        tag: 'forge:tools/knives'
        }
    }).id('kubejs:apple_slice');



    event.remove({id: 'delightful:cantaloupe_slice'}) // Семена мускусной дыни
    event.shapeless(
        Item.of('delightful:cantaloupe_seeds', 4), [
            'delightful:cantaloupe'
    ]);



    event.remove({output: 'delightful:nut_dough'}); // Ореховое тесто
    event.shaped(
        'delightful:nut_dough',
        [
            "FG ",
            "SS ",
        ],
        {
            'F': '#forge:eggs',
            'G': 'create:wheat_flour',
            'S': 'delightful:nut_butter_bottle'
        }
    ).id('kubejs:nut_dough_df');



    event.remove({output: 'farmersdelight:apple_pie'}); // Яблочный пирог
    event.shaped(
        'farmersdelight:apple_pie',
        [
            "###",
            "aaa",
            "xOx"
        ],
        {
            '#': 'minecraft:wheat',
            'a': 'cnb:apple_slice',
            'x': 'minecraft:sugar',
            'O': 'farmersdelight:pie_crust'
        }
    ).group('misc').id('kubejs:apple_pie_fd');

    event.remove({output: 'farmersdelight:fruit_salad'}); // Фркутовый салат
    event.shapeless('farmersdelight:fruit_salad', [
        'cnb:apple_slice',
        'minecraft:melon_slice',
        'minecraft:melon_slice',
        '#forge:berries',
        '#forge:berries',
        'farmersdelight:pumpkin_slice',
        'minecraft:bowl'
    ]);



    event.remove({output: 'warriorsofpastepoch:gunpowder_barrel'}); // Бочонок с порохом
    event.shaped(
        'warriorsofpastepoch:gunpowder_barrel',
        [
            "###",
            "#X#",
            "###"
        ],
        {
            '#': 'minecraft:gunpowder',
            'X': 'minecraft:barrel'
        }
    ).group('misc').id('kubejs:gunpowder_barrel');

    event.remove({output: 'rottencreatures:tnt_barrel'}); // Взрывная бочка
    event.shaped(
        'rottencreatures:tnt_barrel',
        [
            "#S#",
            "GXG",
            "#G#"
        ],
        {
            '#': 'minecraft:sand',
            'S': 'minecraft:string',
            'G': 'minecraft:gunpowder',
            'X': 'minecraft:barrel'
        }
    ).group('misc').id('kubejs:tnt_barrel');



    event.recipes.createCrushing( // Замена кусочков незеритового лома из Bygone Nether на Grape's Adventure
        [
            Item.of('minecraft:quartz', 9),
            Item.of('minecraft:quartz', 4).withChance(0.5),
            Item.of('bygonenether:crushed_withered_debris', 2).withChance(0.12),
            Item.of('grapesadventures:netherite_scrap_nugget').withChance(0.02)
        ],
        'bygonenether:withered_quartz_block',
        250
    ).id('bygonenether:crushing/withered_quartz_block');

    event.recipes.createCrushing(
        [
            Item.of('bygonenether:crushed_withered_debris').withChance(0.0075),
            Item.of('grapesadventures:netherite_scrap_nugget').withChance(0.00075)
        ],
        '#bygonenether:withered_stone_slab',
        250
    ).id('bygonenether:crushing/withered_stone_slab');

    event.recipes.createCrushing(
        [
            'minecraft:basalt',
            Item.of('bygonenether:crushed_withered_debris', 2).withChance(0.12),
            Item.of('grapesadventures:netherite_scrap_nugget').withChance(0.12)
        ],
        'bygonenether:withered_basalt',
        250
    ).id('bygonenether:crushing/withered_basalt');

    event.recipes.createCrushing(
        [
            'bygonenether:crushed_withered_debris',
            Item.of('bygonenether:crushed_withered_debris', 2).withChance(0.12),
            Item.of('grapesadventures:netherite_scrap_nugget').withChance(0.02)
        ],
        'bygonenether:withered_debris',
        250
    ).id('bygonenether:crushing/withered_debris');

    event.recipes.createCrushing(
        [
            Item.of('bygonenether:crushed_withered_debris').withChance(0.01),
            Item.of('grapesadventures:netherite_scrap_nugget').withChance(0.0015)
        ],
        '#bygonenether:withered_stone',
        250
    ).id('bygonenether:crushing/withered_stone');

    event.recipes.createSplashing(
        [
            Item.of('grapesadventures:netherite_scrap_nugget').withChance(0.2),
        ],
        'bygonenether:crushed_withered_debris',
    ).id('bygonenether:splashing/crushed_withered_debris');



    event.remove({id: 'fruitsdelight:pineapple_cutting'}) // Кусочек ананаса
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
        {
            item: 'fruitsdelight:pineapple'
        }
        ],
        result: [
        {
            count: 6,
            item: 'fruitsdelight:pineapple_slice'
        },
        {
            count: 2,
            item: 'fruitsdelight:pineapple_sapling'
        }
        ],
        tool: {
        tag: 'forge:tools/knives'
        }
    }).id('kubejs:pineapple_cutting');

    event.remove({type: 'farmersdelight:cutting', output: 'fruitsdelight:durian_flesh'}); // Резка дуриана
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            {
                item: 'fruitsdelight:durian'
            }
        ],
        result: [
            {
                count: 6,
                item: 'fruitsdelight:durian_flesh'
            },
            {
                item: 'fruitsdelight:durian_helmet'
            },
            {
                item: 'fruitsdelight:durian_shell'
            },
            {
                item: 'fruitsdelight:durian_sapling'
            }
        ],
        tool: {
            tag: 'c:tools/knives'
        }
    }).id('kubejs:cutting/durian');



    event.remove({id: 'brewinandchewin:fermenting/steel_toe_stout_from_strongroot_ale'}) // Стальной Стаут
    event.custom({
        type: 'brewinandchewin:fermenting',
        basefluid: {
            count: 1000,
            fluid: 'brewinandchewin:strongroot_ale'
        },
        ingredients: [
        {
            item: 'minecraft:iron_nugget',
            count: 3
        },
        {
            item: 'minecraft:crimson_fungus'
        },
        {
            item: 'minecraft:nether_wart'
        },
        {
            item: 'minecraft:wheat'
        }
        ],
        experience: 1.0,
        fermentingtime: 4800,
        recipe_book_tab: 'drinks',
        result: {
            count: 1000,
            fluid: 'brewinandchewin:steel_toe_stout'
        },
        temperature: 1
    }).id('kubejs:steel_toe_stout');

    event.remove({id: 'brewinandchewin:fermenting/strongroot_ale_from_beer'}) // Крепкий Эль
    event.custom({
        type: 'brewinandchewin:fermenting',
        basefluid: {
            count: 1000,
            fluid: 'brewinandchewin:beer'
        },
        ingredients: [
        {
            tag: 'forge:vegetables/beetroot',
        },
        {
            tag: 'forge:vegetables/potato'
        },
        {
            item: 'minecraft:brown_mushroom'
        },
        {
            item: 'upgrade_aquatic:mulberry'
        }
        ],
        experience: 1.0,
        fermentingtime: 4800,
        recipe_book_tab: 'drinks',
        result: {
            count: 1000,
            fluid: 'brewinandchewin:strongroot_ale'
        },
        temperature: 3
    }).id('kubejs:strongroot_ale');


    event.remove({id:'irons_spellbooks:hogskin_to_leather'}) // Шкура хоглина
    event.replaceInput(
    {},                        
    'irons_spellbooks:hogskin', 
    'cold_sweat:hoglin_hide'      
    );



    event.remove({output: 'suppsquared:daub_frame_stairs'}); // Известняковые ступеньки в раме
    event.shaped(
        'suppsquared:daub_frame_stairs',
        [
            "#  ",
            "GG ",
            "#G#"
        ],
        {
            '#': 'minecraft:stick',
            'G': 'supplementaries:daub',
        }
    ).id('kubejs:daub_frame_stairs');

    event.remove({output: 'suppsquared:daub_frame_slab'}); // Известняковая плита в раме
    event.shaped(
        'suppsquared:daub_frame_slab',
        [
            "   ",
            "#G#",
            "   "
        ],
        {
            '#': 'minecraft:stick',
            'G': 'supplementaries:daub',
        }
    ).id('kubejs:daub_frame_slab');
});
