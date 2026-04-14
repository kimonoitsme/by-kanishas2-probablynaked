ServerEvents.recipes(event => {
    event.blasting( // Переплавка дроблённого серебра
        'galosphere:silver_ingot',
        'create:crushed_raw_silver',
        0.1,
        100
    ).id('create:blasting/silver_ingot_from_crushed_raw');
    event.blasting( // Переплавка дроблённого рудного серебра
        'galosphere:silver_block',
        'galosphere:raw_silver_block',
        6.3,
        900 
    ).id('kubejs:blasting/raw_silver_block');
    event.blasting( // Переплавка дроблённого рудного цинка
        'create:zinc_block',
        'create:raw_zinc_block',
        6.3,
        900
    ).id('kubejs:blasting/raw_zinc_block');

    event.custom({ // Филе приготовленной рыбы
        type: 'farmersdelight:cutting',
        ingredients: [
        {
            item: 'tide:cooked_fish'
        }
        ],
        result: [
        {
            count: 2,
            item: 'tide:cooked_fish_slice'
        },
        {
            item: 'minecraft:bone_meal'
        }
        ],
        tool: {
        tag: 'forge:tools/knives'
        }
    }).id('kubejs:cooked_fish_slice_custom');

    event.campfireCooking( // Приготовленная рыба
        'tide:cooked_fish',
        '#stardew_fishing:starts_minigame',
        0.35,
        200
    ).id('kubejs:cooked_fish_campfire');

    event.recipes.createCutting( // Ломтики яблока
        Item.of('cnb:apple_slice', 4),
        'minecraft:apple'
    );

    event.custom({ // Мембрана фантома
        type: 'farmersdelight:cutting',
        ingredients: [
        {
            item: 'warriorsofpastepoch:batwing'
        }
        ],
        result: [
        {
            item: 'minecraft:phantom_membrane'
        },
        {
            chance: 0.5,
            count: 2,
            item: 'minecraft:phantom_membrane'
        }
        ],
        tool: {
        tag: 'forge:tools/knives'
        }
    }).id('kubejs:phantom_membrane_cutting');



    event.smelting('farmersdelight:fried_egg', 'minecraft:egg') // Жареное яйцо в обычной печи
        .xp(0.35)
        .cookingTime(200)
        .id('kubejs:fried_egg_smelting');

    event.campfireCooking('farmersdelight:fried_egg', 'minecraft:egg') // Жареное яйцо на костре
        .xp(0.35)
        .cookingTime(600)
        .id('kubejs:fried_egg_campfire');

    event.smoking('farmersdelight:fried_egg', 'minecraft:egg') // Жареное яйцо в коптильне
        .xp(0.35)
        .cookingTime(100)
        .id('kubejs:fried_egg_smoking');



    event.stonecutting(Item.of('suppsquared:daub_slab', 2), 'supplementaries:daub') // Известняковая плита
        .id('kubejs:daub_to_slab');

    event.stonecutting(Item.of('suppsquared:daub_stairs'), 'supplementaries:daub') // Известняковые ступеньки
        .id('kubejs:daub_to_stairs');
        


    event.blasting(Item.of('warriorsofpastepoch:forgotten_steel_ingot', 9), 'warriorsofpastepoch:block_of_raw_forgotten_steel') // Переплавка блока обломков забытой стали
        .xp(6.3)
        .cookingTime(900)

    event.recipes.create.crushing([ // Дробление блока обломков забытой стали
        Item.of('create:crushed_raw_silver', 9),  
        Item.of('create:experience_nugget', 9).withChance(0.5)   
    ], 'warriorsofpastepoch:block_of_raw_forgotten_steel')
    


    event.shaped('betterarcheology:radiance_totem', [ // Тотем света
        ' L ',
        'ISI',
        ' D '
    ], {
        L: 'minecraft:lantern',
        I: 'minecraft:gold_ingot',
        S: 'betterarcheology:soul_totem',
        D: 'minecraft:glowstone_dust'
    })
});