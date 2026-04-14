function replaceTooltip(itemId, newLines) {
  ItemEvents.tooltip(event => {
    event.addAdvanced(itemId, (item, advanced, text) => {
      let advancedLines = 0;
      if (advanced) {
        advancedLines = 1; // ID всегда
        if (item.nbt !== null && Object.keys(item.nbt).length > 0) { // NBT всегда для этого предмета
          advancedLines = 2; // + NBT
        }
      }

      // Удаляем только средние строки (чиним прикол с динамическим NBT/лором)
      let startClear = 1; // После имени
      let endClear = text.size() - advancedLines;
      if (endClear > startClear) {
        text.subList(startClear, endClear).clear();
      }

      // Вставляем все строки сразу после имени, сохраняя порядок
      text.addAll(1, newLines);
    });
  });
}

replaceTooltip('call_of_yucutan:xocolatl', [
  Text.gray('При употреблении:'),
  Text.blue('Увеличивает продолжительность Ах Пуча и благословление Кукулкана на 30 минут')
]);

replaceTooltip('call_of_yucutan:chili_pepper', [
  Text.blue('Сила (00:10)'),
  Text.red('Горячо')
]);

replaceTooltip('call_of_yucutan:sentient_vine', [
  Text.gray('При использовании:'),
  Text.blue('Меняет форму на тот инструмент, которым можно быстрее сломать блок')
]);

replaceTooltip('call_of_yucutan:macuahuitl', [
  Text.darkGray('Прекрасный и острый')
]);

replaceTooltip('call_of_yucutan:jades_helmet', [
  Text.gray('При надевании полного комплекта:'),
  Text.blue('Даёт иммунитет к отравлению и иссушению')
]);

replaceTooltip('call_of_yucutan:jades_chestplate', [
  Text.gray('При надевании полного комплекта:'),
  Text.blue('Даёт иммунитет к отравлению и иссушению')
]);

replaceTooltip('call_of_yucutan:jades_leggings', [
  Text.gray('При надевании полного комплекта:'),
  Text.blue('Даёт иммунитет к отравлению и иссушению')
]);

replaceTooltip('call_of_yucutan:jades_boots', [
  Text.gray('При надевании полного комплекта:'),
  Text.blue('Даёт иммунитет к отравлению и иссушению')
]);

replaceTooltip('call_of_yucutan:warrior_helmet', [
  Text.gray('Когда надета жадеитовая броня:'),
  Text.blue('Может заменить жадеитовый шлем, если надеты остальные части брони')
]);

replaceTooltip('call_of_yucutan:monkey_helmet', [
  Text.gray('Когда надета жадеитовая броня:'),
  Text.blue('Может заменить жадеитовый шлем, если надеты остальные части брони')
]);

replaceTooltip('call_of_yucutan:huracan_helmet', [
  Text.gray('Когда надета жадеитовая броня:'),
  Text.blue('Может заменить жадеитовый шлем, если надеты остальные части брони')
]);

replaceTooltip('call_of_yucutan:obsidian_arrow', [
  Text.red('-50% урона')
]);

replaceTooltip('call_of_yucutan:wand_of_radiance', [
  Text.gray('При правом клике:'),
  Text.blue('Стреляет мощным лучом света'),
  Text.darkGray('Удерживайте для стрельбы'),
  Text.darkGray('Усиленно благословением Кукулкана')
]);

replaceTooltip('call_of_yucutan:jei_kukulkan', [
  Text.gray('Необходимо благословление Кукулкана, чтобы выполнить ритуал')
]);

replaceTooltip('call_of_yucutan:jei_ah_puch', [
  Text.gray('Необходимо благословление Ах Пуча, чтобы выполнить ритуал')
]);

replaceTooltip('call_of_yucutan:jei_full_moon', [
  Text.gray('Это жертвоприношение должно быть совершено в полнолуние'),
  Text.darkGray('Для получения дополнительной информации воспользуйтесь календарём майя')
]);

replaceTooltip('call_of_yucutan:jei_new_moon', [
  Text.gray('Это жертвоприношение должно быть совершено в новолуние'),
  Text.darkGray('Для получения дополнительной информации воспользуйтесь календарём майя')
]);

replaceTooltip('call_of_yucutan:ancient_gold_ingot', [
  Text.darkGray('Пропитанный могущественным существом').italic()
]);

replaceTooltip('call_of_yucutan:hematite', [
  Text.darkGray('Пропитанный могущественным существом').italic()
]);

replaceTooltip('call_of_yucutan:mystic_vine', [
  Text.gray('При использовании в ряде из 3 блоков ритуальных камней во время дождя:'),
  Text.blue('Призывает каменного ягуара')
]);

replaceTooltip('call_of_yucutan:hematite_shield', [
  Text.gray('При блокировании:'),
  Text.blue('Перенаправляет солнечные лучи')
]);

replaceTooltip('call_of_yucutan:mayan_calendar', [
  Text.gray('При наличии в инвентаре:'),
  Text.blue('Указывает на лунные события'),
  Text.darkGray('Щёлкните ПКМ для получения дополнительной информации')
]);

replaceTooltip('call_of_yucutan:hanging_vine_hook', [
  Text.gray('При правом клике:'),
  Text.blue('Цепляется за блоки'),
  Text.darkGray('Красться, чтобы притянуться и сорваться')
]);

replaceTooltip('call_of_yucutan:poisonous_dart', [
  Text.darkGray('Используется духовой трубкой')
]);

replaceTooltip('call_of_yucutan:blow_gun', [
  Text.darkGray('Удерживайте, чтобы стрелять')
]);

replaceTooltip('call_of_yucutan:jade_amulet', [
  Text.gray('При наличии в инвентаре:'),
  Text.blue('Удача (00:03)')
]);

replaceTooltip('call_of_yucutan:fist_of_doom', [
  Text.gray('ПКМ по земле:'),
  Text.blue('Создаёт мощную ударную волну')
]);

replaceTooltip('call_of_yucutan:ancient_gold', [
  Text.gray('Во время благословления Кукулкана:'),
  Text.blue('Может быть использовано для призыва големов')
]);

replaceTooltip('call_of_yucutan:ancient_gold_pillar', [
  Text.gray('Во время благословления Кукулкана:'),
  Text.blue('Может быть использовано для призыва големов')
]);

replaceTooltip('call_of_yucutan:reflector', [
  Text.gray('Может отражать солнечные лучи')
]);

replaceTooltip('call_of_yucutan:solar_projector', [
  Text.gray('Создаёт солнечные лучи')
]);

replaceTooltip('call_of_yucutan:ah_puch_idol', [
  Text.gray('Даёт благословление Ах Пуча, как награду за жертвоприношение')
]);

replaceTooltip('call_of_yucutan:kukulkan_idol', [
  Text.gray('Даёт благословление Кукулкана, как награду за жертвоприношение')
]);

replaceTooltip('call_of_yucutan:hematite_block', [
  Text.darkGray('Может отражать солнечные лучи')
]);

replaceTooltip('call_of_yucutan:ritual_rock_tiles', [
  Text.gray('Во время дождя:'),
  Text.blue('Может быть использован, для создания каменного ягуара')
]);



replaceTooltip('royalvariations:spiritual_crown', [
  Text.darkGray('Нажатием ПКМ превращает существо в его королевскую версию (если она есть).')
]);

replaceTooltip('royalvariations:royal_staff', [
  Text.darkGray('Нажатием ПКМ увеличивает силу и защиту всех игроков и контролирует существ вокруг вас.')
]);

replaceTooltip('royalvariations:royal_bone_meal', [
  Text.darkGray('Ускоряет рост растений по площади 3 на 3.')
]);

replaceTooltip('royalvariations:royal_bomb', [
  Text.darkGray('Метательная бомба с большим радиусом взрыва.')
]);



replaceTooltip('luckys_armory:heavy_iron_armor_helmet', [
  Text.gray('Нажмите F4 для переключения шлема')
]);

replaceTooltip('luckys_armory:heavy_iron_armor_open_helmet', [
  Text.gray('Нажмите F4 для переключения шлема')
]);

replaceTooltip('luckys_armory:heavy_golden_armor_helmet', [
  Text.gray('Нажмите F4 для переключения шлема')
]);

replaceTooltip('luckys_armory:heavy_golden_armor_open_helmet', [
  Text.gray('Нажмите F4 для переключения шлема')
]);



replaceTooltip('wardrobe:taiga_helmet', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:taiga_chestplate', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:taiga_leggings', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:taiga_boots', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:snowy_helmet', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:snowy_chestplate', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:snowy_leggings', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:snowy_boots', [
  Text.gray('Полный комплект:'),
  Text.aqua('Отлично согревает')
]);

replaceTooltip('wardrobe:lantern_on_a_stick', [
  Text.gray('Излучает свет')
]);

replaceTooltip('wardrobe:soul_lantern_on_a_stick', [
  Text.gray('Излучает тусклый свет')
]);

replaceTooltip('wardrobe:backpack', [
  Text.gray('Полный комплект:'),
  Text.gray('9 слотов')
]);

replaceTooltip('wardrobe:large_backpack', [
  Text.gray('Полный комплект:'),
  Text.gray('18 слотов')
]);

replaceTooltip('wardrobe:travel_backpack', [
  Text.gray('Полный комплект:'),
  Text.gray('27 слотов')
]);

replaceTooltip('wardrobe:breathing_reed', [
  Text.gray('Позволяет дышать под водой на глубине до 2 блоков')
]);



replaceTooltip('nethers_exoticism:kiwano_juice', [
  Text.blue('Огнестойкость (0:30)'),
  Text.blue('Отравление (0:04)')
]);

replaceTooltip('nethers_exoticism:pitaya_juice', [
  Text.blue('Иммунитет к иссушению (0:01)')
]);

replaceTooltip('nethers_exoticism:rambutan_juice', [
  Text.blue('Регенерация II (0:10)')
]);

replaceTooltip('nethers_exoticism:bouddha_s_hand_juice', [
  Text.blue('Ночное зрение (0:20)')
]);

replaceTooltip('nethers_exoticism:jaboticaba', [
  Text.blue('Лечение (0:01)')
]);

replaceTooltip('nethers_exoticism:kiwano', [
  Text.blue('Огнестойкость (0:30)'),
  Text.red('Отравление (0:04)')
]);

replaceTooltip('nethers_exoticism:pitaya', [
  Text.blue('Иммунитет к иссушению (0:01)')
]);

replaceTooltip('nethers_exoticism:ramboutan', [
  Text.blue('Регенерация II (0:10)')
]);

replaceTooltip('nethers_exoticism:bouddha_s_hand', [
  Text.blue('Ночное зрение (0:20)')
]);

replaceTooltip('nethers_exoticism:kiwano_helmet', [
  Text.blue('Ослабление ожогов')
]);

replaceTooltip('nethers_exoticism:kiwano_chestplate', [
  Text.blue('Ослабление ожогов')
]);

replaceTooltip('nethers_exoticism:kiwano_leggings', [
  Text.blue('Ослабление ожогов')
]);

replaceTooltip('nethers_exoticism:kiwano_boots', [
  Text.blue('Ослабление ожогов')
]);

replaceTooltip('nethers_exoticism:kiwano_sword', [
  Text.blue('Воспламенение')
]);

replaceTooltip('nethers_exoticism:kiwano_pickaxe', [
  Text.blue('Плавление')
]);

replaceTooltip('nethers_exoticism:kiwano_axe', [
  Text.blue('Плавление')
]);

replaceTooltip('nethers_exoticism:kiwano_shovel', [
  Text.blue('Плавление')
]);

replaceTooltip('nethers_exoticism:kiwano_hoe', [
  Text.blue('Плавление')
]);

replaceTooltip('nethers_exoticism:ramboutan_helmet', [
  Text.blue('Раскидывается шипами, если покачать головой')
]);

replaceTooltip('nethers_exoticism:rambutan_shield', [
  Text.blue('Шипы')
]);

replaceTooltip('nethers_exoticism:jabuticaba_bucket', [
  Text.blue('Жидкость, которая появляется в Незере')
]);

replaceTooltip('nethers_exoticism:jaboticaba_juice_bottle', [
  Text.blue('Лечение (0:01)')
]);

replaceTooltip('nethers_exoticism:jaboticaba_juice_fire_resistance', [
  Text.blue('Огнестойкость (8:00)')
]);

replaceTooltip('nethers_exoticism:jaboticaba_juice_wither_cure', [
  Text.blue('Иммунитет к иссушению (1:30)')
]);

replaceTooltip('nethers_exoticism:jaboticaba_juice_saturation', [
  Text.blue('Насыщенность (1:00)')
]);

replaceTooltip('nethers_exoticism:jaboticaba_juice_night_vision', [
  Text.blue('Ночное зрение (6:30)')
]);

replaceTooltip('nethers_exoticism:sliced_kiwano', [
  Text.blue('Огнестойкость (0:30)'),
  Text.red('Отравление (0:04)')
]);

replaceTooltip('nethers_exoticism:unsettling_fruits_salad', [
  Text.blue('Иммунитет к иссушению (1:00)'),
  Text.blue('Регенерация II (0:10)'),
  Text.blue('Огнестойкость (1:00)'),
  Text.red('Отравление II (0:06)')
]);

replaceTooltip('nethers_exoticism:curious_fruits_salad', [
  Text.blue('Лечение (0:01)'),
  Text.blue('Регенерация II (0:10)'),
  Text.blue('Ночное зрение (1:00)')
]);

replaceTooltip('nethers_exoticism:cut_pitaya', [
  Text.blue('Иммунитет к иссушению (0:01)')
]);



replaceTooltip('quarkdelight:cavern_explorer_stew', [
  Text.blue('Ночное зрение (4:00'),
  Text.blue('Спешка (4:00)')
]);

replaceTooltip('quarkdelight:bowl_of_exotic_fruits', [
  Text.blue('Регенерация (0:10)'),
  Text.blue('При съедании даёт опыт')
]);

replaceTooltip('quarkdelight:lush_moss_salad', [
  Text.blue('Свечение (2:00)'),
  Text.blue('Регенерация (0:05)')
]);

replaceTooltip('quarkdelight:miso_with_bamboo_sprouts', [
  Text.blue('Комфорт (4:00)')
]);

replaceTooltip('quarkdelight:crab_pasta', [
  Text.blue('Сытость (4:00)')
]);

replaceTooltip('quarkdelight:cooked_whole_crab', [
  Text.blue('Сытость (6:00)'),
  Text.blue('Стойкость (2:00)')
]);

replaceTooltip('quarkdelight:cloud_latte', [
  Text.blue('Плавное падение (1:00)')
]);

replaceTooltip('quarkdelight:bucket_of_sweet_gelatine', [
  Text.blue('Прыгучесть II (2:00)')
]);



replaceTooltip('unusualend:spirit_malice_helmet', [
  Text.gray('Злоба'),
  Text.blue('Делает нейтральными эндерменов и эндерлингов')
]);

replaceTooltip('unusualend:spirit_mania_helmet', [
  Text.gray('Мания'),
  Text.blue('Делает нейтральными эндерменов и эндерлингов')
]);

replaceTooltip('unusualend:spirit_smile_helmet', [
  Text.gray('Улыбка'),
  Text.blue('Делает нейтральными эндерменов и эндерлингов')
]);

replaceTooltip('unusualend:spirit_grim_helmet', [
  Text.gray('Мрак'),
  Text.blue('Делает нейтральными эндерменов и эндерлингов')
]);

replaceTooltip('unusualend:spirit_vice_helmet', [
  Text.gray('Порок'),
  Text.blue('Делает нейтральными эндерменов и эндерлингов')
]);

replaceTooltip('unusualend:spirit_twist_helmet', [
  Text.gray('Твист'),
  Text.blue('Делает нейтральными эндерменов и эндерлингов')
]);

replaceTooltip('unusualend:chiseled_endstone_builder', [
  Text.gray('Строитель')
]);

replaceTooltip('unusualend:chiseled_endstone_us', [
  Text.gray('Мы')
]);

replaceTooltip('unusualend:chiseled_endstone_dragon', [
  Text.gray('Дракон')
]);

replaceTooltip('unusualend:chiseled_endstone_scared', [
  Text.gray('Испуг')
]);

replaceTooltip('unusualend:chiseled_endstone_work', [
  Text.gray('Работа')
]);

replaceTooltip('unusualend:chiseled_endstone_friendship', [
  Text.gray('Дружба')
]);

replaceTooltip('unusualend:gloopslate_pedestral', [
  Text.red('В разработке')
]);



replaceTooltip('naturalist:glow_goop', [
  Text.gray('Можно разместить до 3 штук в одном месте!')
]);



replaceTooltip('delightful:kiwano_knife', [
  Text.blue('Воспламенение')
]);



replaceTooltip('cnb:heal_spell_book_1', [
  Text.green('Уровень 1')
]);

replaceTooltip('cnb:heal_spell_book_2', [
  Text.red('Уровень 2')
]);

replaceTooltip('cnb:heal_spell_book_3', [
  Text.yellow('Уровень 3')
]);



replaceTooltip('oceanic_delight:sea_grape', [
  Text.blue('Мгновенный вдох')
]);

replaceTooltip('oceanic_delight:nautilus_juice', [
  Text.blue('Сопротивление (1:00)')
]);

replaceTooltip('oceanic_delight:squid_salad', [
  Text.blue('Мгновенный вдох')
]);

replaceTooltip('oceanic_delight:globular_rice', [
  Text.blue('Комфорт (5:00)')
]);

replaceTooltip('oceanic_delight:pasta_with_eyeball', [
  Text.blue('Сытость (5:00)')
]);

replaceTooltip('oceanic_delight:shrimp_stew', [
  Text.blue('Комфорт (5:00)')
]);

replaceTooltip('oceanic_delight:shrimp_rice', [
  Text.blue('Сытость (3:00)')
]);

replaceTooltip('oceanic_delight:bowl_of_paella', [
  Text.blue('Сытость (5:00)')
]);

replaceTooltip('oceanic_delight:plate_of_stuffed_pufferfish', [
  Text.blue('Сытость (5:00)')
]);

replaceTooltip('oceanic_delight:fish_egg_noodle_soup', [
  Text.blue('Комфорт (5:00)')
]);

replaceTooltip('oceanic_delight:squid_and_pickles', [
  Text.blue('Сытость (3:00)')
]);

replaceTooltip('oceanic_delight:glow_squid_stew', [
  Text.blue('Комфорт (3:00)')
]);

replaceTooltip('oceanic_delight:ancient_fish_eggs', [
  Text.blue('Сила источника (0:45)')
]);

replaceTooltip('oceanic_delight:sea_grape_juice', [
  Text.blue('Водное дыхание (1:00)')
]);


// Fantasy
replaceTooltip('arthys_rpg_arms:infusing_table', [
  Text.lightPurple('[Стол для крафта]'),
  Text.white('Используется для изготовления всех предметов в ARA.'),
  Text.red('[Можно изготовить с использованием осколков аметиста, обсидиана и алмаза на верстаке]')
]);

replaceTooltip('arthys_rpg_arms:the_axe_of_quiet', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Оружие, жаждущее крови, отличается силой и скрытностью, идеально подходящими для быстрого удара или бегства. У них даже не будет времени кричать.'),
  Text.lightPurple('[Мастер изобретательной торговли]')
]);

replaceTooltip('arthys_rpg_arms:runic_tablet_of_instant_repair', [
  Text.white('Мгновенно чинит предметы ТОЛЬКО из этом модификации, на наковальне.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:cavers_pendant', [
  Text.green('[Пассивный]'),
  Text.white('Сила шахтера может быть лучшим другом спелеолога.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:aetheric_pendant', [
  Text.green('[Пассивный]'),
  Text.white('Эфирная магия смягчает ваше падение, предотвращая урон от падения.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:emerald_pendant', [
  Text.green('[Пассивный]'),
  Text.white('Блеск ожерелья торговца привлекает внимание жителей деревни. Они будут более снисходительны к вам в плане цен.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:amethyst_pendant', [
  Text.green('[Пассивный]'),
  Text.white('Неограниченная регенерация при ношении.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:purifying_pendant', [
  Text.green('[Пассивный]'),
  Text.white('Даёт иммунитет к отравлению, иссушению и тьме.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:excalibur', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Лишь немногие достойны владеть легендарным мечом короля Артура, и каждый должен сначала проявить себя, убив Эндер Дракона. Только тогда его силы откроются вам.'),
  Text.lightPurple('[Мастер изобретательной торговли]')
]);

replaceTooltip('arthys_rpg_arms:ring_of_stamina', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Это кольцо позволит вам бегать немного дольше и изящнее.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:ring_of_absorbtion', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Это кольцо дает вам временные дополнительные 2 сердца здоровья при использовании.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:crystal_heart', [
  Text.red('[Расходники]'),
  Text.white('При использовании дает дополнительно 5 постоянных сердец.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:creeping_totem', [
  Text.red('[Одноразовое использование]'),
  Text.white('Взорвется, если держать его в руках при смерти, возможно, забрав с собой еще кого-нибудь.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:skywarp', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Немедленно телепортирует вас на максимальную высоту мира. Однако это не спасет вас от падения, поэтому обязательно возьмите с собой ведро с водой ^-^.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:weather_cycler', [
  Text.green('[Правый клик, чтобы открыть интерфейс]'),
  Text.white('Циклически переключает тип погоды в мире.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:staff_of_dispell', [
  Text.darkAqua('[Пассивно при удержании]'),
  Text.white('Стирает все эффекты с игрока при удерживании.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:fire_blade', [
  Text.darkAqua('[Воздействие]'),
  Text.white('Поджигает любую сущность, по которой попадает, на 12 секунд.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:frost_sword', [
  Text.darkAqua('[Воздействие]'),
  Text.white('Замораживает и замедляет врагов по которым попал.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:lightning_sword', [
  Text.gold('[Шанс на воздействие]'),
  Text.white('Имеет 40% шанс вызвать молнию с небес.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:poisoned_blade', [
  Text.darkAqua('[Воздействие]'),
  Text.white('Наносит длительный урон ядом при ударе.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:life_leech', [
  Text.gold('[Шанс на воздействие]'),
  Text.white('Имеет 40% шанс украсть дополнительные сердца у врага и передать их вам.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:illuminator', [
  Text.green('[Правый клик]'),
  Text.white('Подсвечивает все живые существа в радиусе 30 блоков на 5 секунд.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:skulk_hammer', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Мощный молот, питающийся душами запрещённых, просачивает души всех, кто находится поблизости.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:wraithreach', [
  Text.darkAqua('[Воздействие]'),
  Text.white('Души используются для катапультирования врагов в небо. Практически бесполезен в пещерах или в помещении.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:runic_smithing_template_of_fire', [
  Text.lightPurple('[Инструмент для крафта]'),
  Text.white('Кузнечный шаблон, используемый для создания эбонитовой брони и набора инструментов.'),
  Text.red('[Создается путем объединения огненного порошка и книги на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_armor_helmet', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются. Их естественная близость к огню защищает владельца от повреждений, вызванных огнем.'),
  Text.red('[Крафтиться путём инфузии железного шлема и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_armor_chestplate', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются. Их естественная близость к огню защищает владельца от повреждений, вызванных огнем.'),
  Text.red('[Крафтиться путём инфузии железного нагрудника и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_armor_leggings', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются. Их естественная близость к огню защищает владельца от повреждений, вызванных огнем.'),
  Text.red('[Крафтиться путём инфузии железных понож и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_armor_boots', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются. Их естественная близость к огню защищает владельца от повреждений, вызванных огнем.'),
  Text.red('[Крафтиться путём инфузии железных ботинок и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_pickaxe', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются. Автоматически перенаправляет блоки по мере их добычи.'),
  Text.gold('[Шанс на воздействие]'),
  Text.white('Имеет 40% шанс применить к противнику эффект горения.'),
  Text.red('[Крафтиться путём инфузии железной кирки и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_axe', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются.'),
  Text.gold('[Шанс на воздействие]'),
  Text.white('Имеет 40% шанс применить к противнику эффект горения.'),
  Text.red('[Крафтиться путём инфузии железного топора и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:ebonite_sword', [
  Text.green('[Пассивно]'),
  Text.white('Эбонитовая броня и инструменты самовосстанавливаются.'),
  Text.gold('[Шанс на воздействие]'),
  Text.white('40% шанс применить к противнику эффект горения.'),
  Text.red('[Крафтиться путём инфузии железного меча и рунического кузнечного шаблона огня на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:runic_smithing_template_of_water', [
  Text.lightPurple('[Инструмент для крафта]'),
  Text.white('Кузнечный шаблон, используемый для создания брони стража.'),
  Text.red('[Создается путем объединения ламинарии и книги на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:guardian_armor_helmet', [
  Text.green('[Пассивно]'),
  Text.white('Сет брони стража позволяет вам гораздо быстрее передвигаться по воде и дышать под водой, а также обеспечивает повышенную силу в воде или под дождём.'),
  Text.red('[Крафтиться путём инфузии железного шлема и рунического кузнечного шаблона воды на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:guardian_armor_chestplate', [
  Text.green('[Пассивно]'),
  Text.white('Сет брони стража позволяет вам гораздо быстрее передвигаться по воде и дышать под водой, а также обеспечивает повышенную силу в воде или под дождём.'),
  Text.red('[Крафтиться путём инфузии железного нагрудника и рунического кузнечного шаблона воды на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:guardian_armor_leggings', [
  Text.green('[Пассивно]'),
  Text.white('Сет брони стража позволяет вам гораздо быстрее передвигаться по воде и дышать под водой, а также обеспечивает повышенную силу в воде или под дождём.'),
  Text.red('[Крафтиться путём инфузии железных понож и рунического кузнечного шаблона воды на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:guardian_armor_boots', [
  Text.green('[Пассивно]'),
  Text.white('Сет брони стража позволяет вам гораздо быстрее передвигаться по воде и дышать под водой, а также обеспечивает повышенную силу в воде или под дождём.'),
  Text.red('[Крафтиться путём инфузии железных ботинок и рунического кузнечного шаблона воды на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:runic_smithing_template_of_soul', [
  Text.lightPurple('[Инструмент для крафта]'),
  Text.white('Кузнечный шаблон, используемый для создания робы охотника за душами и косы душ.'),
  Text.red('[Создается путем объединения почвы душ и книги на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:soul_hunter_armor_helmet', [
  Text.green('[Пассивно]'),
  Text.white('Лёгкие мантии используют силы захваченных душ, чтобы улучшить ваше передвижение на новом уровне'),
  Text.red('[Крафтиться путём инфузии железного шлема и рунического кузнечного шаблона души на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:soul_hunter_armor_chestplate', [
  Text.green('[Пассивно]'),
  Text.white('Лёгкие мантии используют силы захваченных душ, чтобы улучшить ваше передвижение на новом уровне'),
  Text.red('[Крафтиться путём инфузии железного нагрудника и рунического кузнечного шаблона души на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:soul_hunter_armor_leggings', [
  Text.green('[Пассивно]'),
  Text.white('Лёгкие мантии используют силы захваченных душ, чтобы улучшить ваше передвижение на новом уровне'),
  Text.red('[Крафтиться путём инфузии железных понож и рунического кузнечного шаблона души на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:soul_hunter_armor_boots', [
  Text.green('[Пассивно]'),
  Text.white('Лёгкие мантии используют силы захваченных душ, чтобы улучшить ваше передвижение на новом уровне'),
  Text.red('[Крафтиться путём инфузии железных ботинок и рунического кузнечного шаблона души на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:soul_scythe', [
  Text.darkAqua('[Воздействие]'),
  Text.white('Выкачивает души из живых, прикоснувшихся к этому лезвию.'),
  Text.red('[Крафтиться путём инфузии железного меча и рунического кузнечного шаблона души на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:runic_smithing_template_of_the_void', [
  Text.lightPurple('[Инструмент для крафта]'),
  Text.white('Шаблон кузнечного дела, используемый для изготовления '),
  Text.lightPurple('[Покрова Пустоты]'),
  Text.white('и'),
  Text.lightPurple('[Сет брони Бездны].'),
  Text.red('[Создается путем объединения ока эндера и книги на столе инфузии]')
]);

replaceTooltip('arthys_rpg_arms:devoid_armor_helmet', [
  Text.red('[При смерти]'),
  Text.white('Призрачные силы пустоты предлагают вам второй шанс на жизнь, но не спасут вас во второй раз. Эффект восстанавливается после смерти.'),
  Text.red('Крафтиться путём инфузии железного шлема и рунического кузнечного шаблона пустоты на столе инфузии')
]);

replaceTooltip('arthys_rpg_arms:devoid_armor_chestplate', [
  Text.red('[При смерти]'),
  Text.white('Призрачные силы пустоты предлагают вам второй шанс на жизнь, но не спасут вас во второй раз. Эффект восстанавливается после смерти.'),
  Text.red('Крафтиться путём инфузии железного нагрудника и рунического кузнечного шаблона пустоты на столе инфузии')
]);

replaceTooltip('arthys_rpg_arms:devoid_armor_leggings', [
  Text.red('[При смерти]'),
  Text.white('Призрачные силы пустоты предлагают вам второй шанс на жизнь, но не спасут вас во второй раз. Эффект восстанавливается после смерти.'),
  Text.red('Крафтиться путём инфузии железных понож и рунического кузнечного шаблона пустоты на столе инфузии')
]);

replaceTooltip('arthys_rpg_arms:devoid_armor_boots', [
  Text.red('[При смерти]'),
  Text.white('Призрачные силы пустоты предлагают вам второй шанс на жизнь, но не спасут вас во второй раз. Эффект восстанавливается после смерти.'),
  Text.red('Крафтиться путём инфузии железных ботинок и рунического кузнечного шаблона пустоты на столе инфузии')
]);

replaceTooltip('arthys_rpg_arms:shroud_of_the_void', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Вас накрывает разломом реальности, делая невидимым и позволяя на короткое время проходить сквозь ткань реальности.'),
  Text.red('Крафтится путём инфузии железного меча и рунического кузнечного шаблона пустоты на столе инфузии')
]);

replaceTooltip('arthys_rpg_arms:ward', [
  Text.darkBlue('[Правый клик]'),
  Text.white('Обеспечивает неуязвимость на 5 секунд за счёт скорости передвижения. Огромное время восстановления.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:pendant_of_pacification', [
  Text.green('[Пассивно]'),
  Text.white('Делает пиглинов и жителей энда невраждебными по отношению к вам, пока на них не нападёшь.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:hammer_of_agnes', [
  Text.red('[Метательный]'),
  Text.white('Ударный снаряд, наносит небольшой урон, но очень хорошо отбрасывает ^-^.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:spiked_shield', [
  Text.green('[Защищающий]'),
  Text.white('При блокировании отражает 30% встречного урона в атакующего.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:phantom_bow', [
  Text.darkAqua('[Воздействие]'),
  Text.white('Делает того, в кого стреляли, невидимым, а также вызывает у него тошноту и медлительность.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:wraithcaster', [
  Text.darkAqua('[Правый клик]'),
  Text.white('Использует силу душ, чтобы бросить игрока в том направлении куда смотрит игрок.'),
  Text.lightPurple('[Изобретательная торговля]')
]);

replaceTooltip('arthys_rpg_arms:armsbook', [
  Text.red('Недоступно - только для избранных ^-^.'),
  Text.blue('Проверьте подсказки к каждому предмету, чтобы узнать как его получить.'),
  Text.green('[Правый клик]'),
  Text.white('Руководство по получению всех без исключения артефактов и доспехов в ARA'),
  Text.red('[Можно изготовить с использованием золотых самородков, алмаза и книги на верстаке.]')
]);

replaceTooltip('arthys_rpg_arms:artificer_placement_wand', [
  Text.darkAqua('[Правый клик по блоку]'),
  Text.white('Мгновенно размещает структуру дома изобретателя мангровых зарослей.'),
  Text.red('[Только для креатива ^-^]')
]);

replaceTooltip('arthys_rpg_arms:cape', [
  Text.red('[Косметика]'),
  Text.white('Косметический предмет, который можно установить в слот для тела антиквариата.'),
  Text.lightPurple('[Изобретательная торговля первого уровня.]')
]);



replaceTooltip('realmrpg_quests:necklace_of_satiety', [
  Text.blue('Даёт иммунитет к Голоду'),
  Text.blue('Шанс +10% к исцелению при употреблении еды')
]);

replaceTooltip('realmrpg_quests:ring_of_wind_lesser', [
  Text.blue('Скорость')
]);
replaceTooltip('realmrpg_quests:ring_of_wind', [
  Text.blue('Скорость II')
]);
replaceTooltip('realmrpg_quests:ring_of_wind_greater', [
  Text.blue('Скорость III')
]);

replaceTooltip('realmrpg_quests:ring_of_fire_lesser', [
  Text.blue('+2 Дополнительный урон ледяным существам'),
  Text.blue('Шанс +15% сжечь цель')
]);

replaceTooltip('realmrpg_quests:ring_of_fire', [
  Text.blue('+3 Дополнительный урон ледяным существам'),
  Text.blue('Шанс +20% сжечь цель')
]);

replaceTooltip('realmrpg_quests:ring_of_fire_greater', [
  Text.blue('+4 Дополнительный урон ледяным существам'),
  Text.blue('Шанс +25% сжечь цель')
]);

replaceTooltip('realmrpg_quests:ring_of_ice_lesser', [
  Text.blue('+2 Дополнительный урон огненным существам'),
  Text.blue('Шанс 15% замедлить цель')
]);

replaceTooltip('realmrpg_quests:ring_of_ice', [
  Text.blue('+3 Дополнительный урон огненным существам'),
  Text.blue('Шанс 20% замедлить цель')
]);

replaceTooltip('realmrpg_quests:ring_of_greater_ice', [
  Text.blue('+4 Дополнительный урон огненным существам'),
  Text.blue('25% Шанс замедлить цель')
]);

replaceTooltip('realmrpg_quests:ring_of_exp', [
  Text.blue('Даёт дополнительный опыт с существ')
]);



replaceTooltip('gnumus:gnumus_pouch', [
  Text.darkGray('ПКМ чтобы открыть')
]);
replaceTooltip('gnumus:gnumus_pouch_2', [
  Text.darkGray('ПКМ чтобы открыть')
]);
replaceTooltip('gnumus:gnumus_pouch_3', [
  Text.darkGray('ПКМ чтобы открыть')
]);

replaceTooltip('gnumus:packaged_goods', [
  Text.darkGray('ПКМ чтобы открыть')
]);

replaceTooltip('gnumus:wrapper_with_goods', [
  Text.darkGray('ПКМ чтобы открыть')
]);

replaceTooltip('gnumus:gnumus_pickaxe', [
  Text.darkGray('Чрезвычайно низкая прочность \n При создании можно получить Удачу')
]);

replaceTooltip('gnumus:gnumus_cutlass', [
  Text.darkGray('Чрезвычайно низкая прочность \n При создании можно получить Добычу')
]);

replaceTooltip('gnumus:lucky_hat_helmet', [
  Text.darkGray('Приносит Удачу при надевании')
]);

replaceTooltip('gnumus:business_hat_helmet', [
  Text.darkGray('Постоянные скидки от крестьян')
]);

replaceTooltip('gnumus:gnumus_cheese', [
  Text.white('Убирает все эффекты')
]);

replaceTooltip('gnumus:gnumus_hummus', [
  Text.blue('Поглощение (0:30)')
]);

replaceTooltip('gnumus:overripe_carrot', [
  Text.darkGray('Использовался для разведения крупнорылых')
]);

replaceTooltip('gnumus:grilled_juicy_meat', [
  Text.darkGray('Насыщающая пища')
]);

replaceTooltip('gnumus:hearty_dinner', [
  Text.darkGray('Сохраняет чувство сытости в течение длительного времени')
]);

replaceTooltip('gnumus:gnumus_helmet_helmet', [
  Text.darkGray('Вы становитесь сильнее, пока сыты')
]);

replaceTooltip('gnumus:gnumus_totem', [
  Text.darkGray('Полностью восстанавливает ваше насыщение, когда вы очень голодны')
]);

replaceTooltip('gnumus:vintage_gnumus_pickaxe', [
  Text.darkGray('При создании можно получить Удачу')
]);

replaceTooltip('gnumus:vintage_gnumus_cutlass', [
  Text.darkGray('При создании можно получить Добычу')
]);

replaceTooltip('gnumus:hammer_vintage_universal_tool', [
  Text.darkGray('Добывает блоки любого типа \n Нажмите Shift + ПКМ, чтобы активировать временную быструю добычу блоков')
]);

replaceTooltip('gnumus:vintage_rifle', [
  Text.darkGray('Требуются старинные патроны для стрельбы')
]);

replaceTooltip('gnumus:vintage_charger', [
  Text.darkGray('Снимает Усталость и Недостаток энергии при использовании всего 30 раз')
]);



replaceTooltip('seadwellers:depth_helmet', [
  Text.white('Полный комплект брони:'),
  Text.blue('Бесконечный кислород'),
  Text.blue('Грация дельфина')
]);

replaceTooltip('seadwellers:depth_chestplate', [
  Text.white('Полный комплект брони:'),
  Text.blue('Бесконечный кислород'),
  Text.blue('Грация дельфина')
]);

replaceTooltip('seadwellers:depth_leggings', [
  Text.white('Полный комплект брони:'),
  Text.blue('Бесконечный кислород'),
  Text.blue('Грация дельфина')
]);

replaceTooltip('seadwellers:depth_boots', [
  Text.white('Полный комплект брони:'),
  Text.blue('Бесконечный кислород'),
  Text.blue('Грация дельфина')
]);

replaceTooltip('seadwellers:depth_sword', [
  Text.white('Когда в воде:'),
  Text.green('Увеличенная скорость копания')
]);

replaceTooltip('seadwellers:depth_pickaxe', [
  Text.white('Когда в воде:'),
  Text.green('Увеличенная скорость копания')
]);

replaceTooltip('seadwellers:depth_axe', [
  Text.white('Когда в воде:'),
  Text.green('Увеличенная скорость копания')
]);

replaceTooltip('seadwellers:depth_shovel', [
  Text.white('Когда в воде:'),
  Text.green('Увеличенная скорость копания')
]);

replaceTooltip('seadwellers:depth_hoe', [
  Text.white('Когда в воде:'),
  Text.green('Увеличенная скорость копания')
]);



replaceTooltip('frosted_friends:wooden_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:stone_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:iron_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:golden_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:diamond_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:netherite_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:ice_snow_shovel', [
  Text.darkGray('Убирает большую площадь снега')
]);

replaceTooltip('frosted_friends:ice_sword', [
  Text.gray('Замедляет сущностей')
]);

replaceTooltip('frosted_friends:snow_chest_1', [
  Text.gray('[Без оружия]')
]);

replaceTooltip('frosted_friends:snow_chest_2', [
  Text.gray('[С оружием]')
]);

replaceTooltip('frosted_friends:snow_head_classic_1', [
  Text.gray('[Классический]')
]);

replaceTooltip('frosted_friends:snow_head_basic_1', [
  Text.gray('[Обычный]')
]);

replaceTooltip('frosted_friends:snow_head_golem', [
  Text.gray('[Голем]')
]);

replaceTooltip('frosted_friends:snow_head_christmas', [
  Text.gray('[Рождественский]')
]);

replaceTooltip('frosted_friends:snow_head_top_hat', [
  Text.gray('[С шляпой]')
]);

replaceTooltip('festive_delight:festive_chicken_block', [
  Text.white('')
]);

replaceTooltip('festive_delight:festive_chiken', [
  Text.white('')
]);

replaceTooltip('festive_delight:salmon_verrines', [
  Text.white('')
]);

replaceTooltip('festive_delight:christmas_tea', [
  Text.blue('Даёт эффект Пылкое Сердце на 1:00')
]);

replaceTooltip('festive_delight:gingerbread_dough', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_dough_creeper', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_man_dough', [
  Text.white('')
]);

replaceTooltip('festive_delight:snow_bread_cookie_dough', [
  Text.white('')
]);

replaceTooltip('festive_delight:sword_bread_cookie_dough', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_creeper', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_man_base', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_base_flake', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_base_flake', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_man', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_base_sword', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_man_creeper', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_flake', [
  Text.white('')
]);

replaceTooltip('festive_delight:gingerbread_cookie_sword', [
  Text.white('')
]);



replaceTooltip('gift_drop:prank_festive_gift', [
  Text.of('Дайте это своим друзьям ;)').gray().italic()
]);



const ITEM_ID = 'cold_sweat:soulspring_lamp';

function translateFuelOnly(itemId) {
  ItemEvents.tooltip(event => {
    event.addAdvanced(itemId, (item, advanced, text) => {
      // Итерация по всем строкам тултипа для точной замены
      for (let i = 0; i < text.size(); i++) {
        let line = text.get(i);
        let lineStr = line.string;  // Получаем строковое представление (рендерим translatable)
        
        if (lineStr.startsWith('Fuel: ')) {
          // Извлекаем остаток после "Fuel: " (числа и слэш)
          let fuelValue = lineStr.substring(6);  // "64 / 64"
          
          let newLine = Text.white('Топливо: ' + fuelValue);
          // Заменяем старую строку на новую
          text.set(i, newLine);
        }
      }
    });
  });
}

// Применяем к лампе
translateFuelOnly(ITEM_ID);



const ARMORY_TYPES = [
  'throwing_knife',
  'shuriken',
  'chakram',
  'javelin'
];

const ARMORY_MATERIALS = [
  'wooden',
  'stone',
  'golden',
  'iron',
  'diamond',
  'netherite'
];

// Генерация полного списка itemId
const ARMORY_ITEMS = [];
for (let mat of ARMORY_MATERIALS) {
  for (let type of ARMORY_TYPES) {
    ARMORY_ITEMS.push(`dixtas_armory:${mat}_${type}`);
  }
}

// Функция перевода Ammo → Патроны
function translateAmmo(itemId) {
  ItemEvents.tooltip(event => {
    event.addAdvanced(itemId, (item, advanced, text) => {

      for (let i = 0; i < text.size(); i++) {
        let line = text.get(i);
        let raw = line.string;

        // Ищем строку Ammo: X / Y
        if (raw.startsWith('Ammo:')) {

          let value = raw.substring(6).trim(); // "8/8" или "4/4"

          let newLine = Text.white(`Снаряды: ${value}`);

          text.set(i, newLine);
        }
      }
    });
  });
}

ARMORY_ITEMS.forEach(id => translateAmmo(id));