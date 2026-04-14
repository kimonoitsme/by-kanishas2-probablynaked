ServerEvents.recipes(event => {
    event.remove({output: 'cataclysm:ignitium_elytra_chestplate'}); // Игнитумовый нагрудник с элитрами

    event.remove({output: 'create:netherite_backtank'}); // Незеритовые лаволазные ботинки и шлем, а также незеритовый балон, схем. пушка и ящик для инструментов
    event.remove({output: 'create:netherite_diving_helmet'});
    event.remove({output: 'create:netherite_diving_boots'});
    event.remove({output: 'create:schematicannon'});
    event.remove({output: 'create:brown_toolbox'});
    const boatTypes = [ // Дрель, пила, комбайн, плуг и каток
      'drill',
      'saw',
      'harvester',
      'plough',
      'roller'
    ];

    boatTypes.forEach(type => {
      event.remove({ output: `create:mechanical_${type}` });
    });
    event.remove({id: 'create:splashing/soul_sand'}) // Промывка песка душ

    event.remove({output: 'incubation:fried_egg'}); // Яичница

    event.remove({id: 'minecraft:bread'}); // Хлеб из пшеницы
    event.remove({ // Плавление (smelting) хлеба из ячменя
      output: 'minecraft:bread',
      input: 'regions_unexplored:barley',
      type: 'minecraft:smelting'
    });
    event.remove({ // Копчение (smoking) хлеба из ячменя
      output: 'minecraft:bread',
      input: 'regions_unexplored:barley',
      type: 'minecraft:smoking'
    });

    const colors = [ // Спальные мешки
      'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
      'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ];
    colors.forEach(color => {
      event.remove({output: `valhelsia_structures:${color}_sleeping_bag`});
    });

    event.remove({output: 'tidesdelight:minced_midas_fish'}); // Зелье Мидаса
    event.remove({id: 'tidesdelight:oak_fish_cutting'}); // Дубовые брёвна из дубовой рыбы

    event.remove({output: 'wan_ancient_beasts:ancient_club'}); // Древняя дубина
    event.remove({output: 'wan_ancient_beasts:straw_block'}); // Древняя солома

    event.remove({output: 'galosphere:cured_membrane_block'}) // Затвердевший мембранный блок
    event.remove({output: 'galosphere:stranded_membrane_block'}) // Липкий мембранный блок
    event.remove({output: 'galosphere:shadow_frame'}) // Теневая оболочка

    event.remove({output: 'minecraft:saddle'}) // Седло
    event.remove({output: 'minecraft:chainmail_helmet'}) // Койф
    event.remove({output: 'minecraft:chainmail_chestplate'}) // Кольчуга
    event.remove({output: 'minecraft:chainmail_leggings'}) // Кольчужные поножи
    event.remove({output: 'minecraft:chainmail_boots'}) // Кольчужные ботинки
});