MoreJSEvents.villagerTrades((event) => {
  const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
  const ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

  const enchantLists = {
    'iron_helmet': ['minecraft:protection', 'minecraft:fire_protection', 'minecraft:projectile_protection', 'minecraft:blast_protection', 'minecraft:respiration', 'minecraft:aqua_affinity', 'minecraft:unbreaking', 'minecraft:thorns'],
    'iron_chestplate': ['minecraft:protection', 'minecraft:fire_protection', 'minecraft:projectile_protection', 'minecraft:blast_protection', 'minecraft:unbreaking', 'minecraft:thorns'],
    'iron_leggings': ['minecraft:protection', 'minecraft:fire_protection', 'minecraft:projectile_protection', 'minecraft:blast_protection', 'minecraft:swift_sneak', 'minecraft:unbreaking', 'minecraft:thorns'],
    'iron_boots': ['minecraft:protection', 'minecraft:fire_protection', 'minecraft:projectile_protection', 'minecraft:blast_protection', 'minecraft:feather_falling', 'minecraft:frost_walker', 'minecraft:depth_strider', 'minecraft:soul_speed', 'minecraft:unbreaking', 'minecraft:thorns'],
    'iron_pickaxe': ['minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking'],
    'iron_shovel': ['minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking'],
    'iron_axe': ['minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:sharpness', 'minecraft:smite', 'minecraft:bane_of_arthropods', 'minecraft:unbreaking'],
    'iron_hoe': ['minecraft:efficiency', 'minecraft:fortune', 'minecraft:silk_touch', 'minecraft:unbreaking'],
    'iron_sword': ['minecraft:sharpness', 'minecraft:smite', 'minecraft:bane_of_arthropods', 'minecraft:knockback', 'minecraft:fire_aspect', 'minecraft:looting', 'minecraft:sweeping', 'minecraft:unbreaking']
  };

  const blacklisted = [
          'minecraft:mending',
          'domesticationinnovation:disc_jockey',
          'betterarcheology:penetrating_strike',
          'betterarcheology:soaring_winds',
          'betterarcheology:tunneling'
      ];

  // Armorer: уровни 4 и 5 (enchanted железная броня вместо алмазной, с кастомными подходящими зачарованиями)
  event.removeVanillaTrades('minecraft:armorer', 4);
  let bootsTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 13, 27), 'minecraft:iron_boots');
  bootsTrade.transform((offer, entity, random) => {
    let itemId = offer.output.id.replace('minecraft:', '');
    let list = enchantLists[itemId] || [];
    offer.output = Item.of(offer.output.id); // Очищаем NBT
    if (list.length > 0) {
      let numEnchs = random.nextInt(1, 4); // 1-3 зачарования
      let usedEnchs = [];
      for (let j = 0; j < numEnchs; j++) {
        let filteredList = list.filter(e => !usedEnchs.includes(e));
        if (filteredList.length === 0) break;
        let enchId = filteredList[random.nextInt(filteredList.length)];
        usedEnchs.push(enchId);
        let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
        let maxLvl = enchObj.getMaxLevel();
        let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1; // Понижаем на 1, фикс ошибки
        offer.output = offer.output.enchant(enchId, lvl);
      }
    }
    return offer;
  }).maxUses(3).villagerExperience(20);
  event.addTrade('minecraft:armorer', 4, bootsTrade);

  let leggingsTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 19, 33), 'minecraft:iron_leggings');
  leggingsTrade.transform((offer, entity, random) => {
    let itemId = offer.output.id.replace('minecraft:', '');
    let list = enchantLists[itemId] || [];
    offer.output = Item.of(offer.output.id);
    if (list.length > 0) {
      let numEnchs = random.nextInt(1, 4);
      let usedEnchs = [];
      for (let j = 0; j < numEnchs; j++) {
        let filteredList = list.filter(e => !usedEnchs.includes(e));
        if (filteredList.length === 0) break;
        let enchId = filteredList[random.nextInt(filteredList.length)];
        usedEnchs.push(enchId);
        let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
        let maxLvl = enchObj.getMaxLevel();
        let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
        offer.output = offer.output.enchant(enchId, lvl);
      }
    }
    return offer;
  }).maxUses(3).villagerExperience(20);
  event.addTrade('minecraft:armorer', 4, leggingsTrade);

  event.removeVanillaTrades('minecraft:armorer', 5);
  let helmetTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 13, 27), 'minecraft:iron_helmet');
  helmetTrade.transform((offer, entity, random) => {
    let itemId = offer.output.id.replace('minecraft:', '');
    let list = enchantLists[itemId] || [];
    offer.output = Item.of(offer.output.id);
    if (list.length > 0) {
      let numEnchs = random.nextInt(1, 4);
      let usedEnchs = [];
      for (let j = 0; j < numEnchs; j++) {
        let filteredList = list.filter(e => !usedEnchs.includes(e));
        if (filteredList.length === 0) break;
        let enchId = filteredList[random.nextInt(filteredList.length)];
        usedEnchs.push(enchId);
        let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
        let maxLvl = enchObj.getMaxLevel();
        let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
        offer.output = offer.output.enchant(enchId, lvl);
      }
    }
    return offer;
  }).maxUses(3).villagerExperience(30);
  event.addTrade('minecraft:armorer', 5, helmetTrade);

  let chestTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 21, 35), 'minecraft:iron_chestplate');
  chestTrade.transform((offer, entity, random) => {
    let itemId = offer.output.id.replace('minecraft:', '');
    let list = enchantLists[itemId] || [];
    offer.output = Item.of(offer.output.id);
    if (list.length > 0) {
      let numEnchs = random.nextInt(1, 4);
      let usedEnchs = [];
      for (let j = 0; j < numEnchs; j++) {
        let filteredList = list.filter(e => !usedEnchs.includes(e));
        if (filteredList.length === 0) break;
        let enchId = filteredList[random.nextInt(filteredList.length)];
        usedEnchs.push(enchId);
        let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
        let maxLvl = enchObj.getMaxLevel();
        let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
        offer.output = offer.output.enchant(enchId, lvl);
      }
    }
    return offer;
  }).maxUses(3).villagerExperience(30);
  event.addTrade('minecraft:armorer', 5, chestTrade);

  // Сохраняем ванильный bell на level 5
  event.addTrade('minecraft:armorer', 5, TradeItem.of('minecraft:emerald', 36, 36), 'minecraft:bell').maxUses(12).villagerExperience(30);

  // Toolsmith: уровень 3 (незачарованные железные инструменты), уровни 4-5 (enchanted железные)
  event.removeVanillaTrades('minecraft:toolsmith', 3);
  event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 9, 12), 'minecraft:iron_axe').maxUses(12).villagerExperience(10);
  event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 7, 9), 'minecraft:iron_shovel').maxUses(12).villagerExperience(10);
  event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 8, 11), 'minecraft:iron_pickaxe').maxUses(12).villagerExperience(10);
  event.addTrade('minecraft:toolsmith', 3, TradeItem.of('minecraft:emerald', 7, 9), 'minecraft:iron_hoe').maxUses(12).villagerExperience(10);

  ['4', '5'].forEach(lvl => {
    let xp = lvl === '4' ? 20 : 30;
    event.removeVanillaTrades('minecraft:toolsmith', parseInt(lvl));
    let axeTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 17, 31), 'minecraft:iron_axe');
    axeTrade.transform((offer, entity, random) => {
      let itemId = offer.output.id.replace('minecraft:', '');
      let list = enchantLists[itemId] || [];
      offer.output = Item.of(offer.output.id);
      if (list.length > 0) {
        let numEnchs = random.nextInt(1, 4);
        let usedEnchs = [];
        for (let j = 0; j < numEnchs; j++) {
          let filteredList = list.filter(e => !usedEnchs.includes(e));
          if (filteredList.length === 0) break;
          let enchId = filteredList[random.nextInt(filteredList.length)];
          usedEnchs.push(enchId);
          let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
          let maxLvl = enchObj.getMaxLevel();
          let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
          offer.output = offer.output.enchant(enchId, lvl);
        }
      }
      return offer;
    }).maxUses(3).villagerExperience(xp);
    event.addTrade('minecraft:toolsmith', parseInt(lvl), axeTrade);

    let shovelTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 11, 27), 'minecraft:iron_shovel');
    shovelTrade.transform((offer, entity, random) => {
      let itemId = offer.output.id.replace('minecraft:', '');
      let list = enchantLists[itemId] || [];
      offer.output = Item.of(offer.output.id);
      if (list.length > 0) {
        let numEnchs = random.nextInt(1, 4);
        let usedEnchs = [];
        for (let j = 0; j < numEnchs; j++) {
          let filteredList = list.filter(e => !usedEnchs.includes(e));
          if (filteredList.length === 0) break;
          let enchId = filteredList[random.nextInt(filteredList.length)];
          usedEnchs.push(enchId);
          let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
          let maxLvl = enchObj.getMaxLevel();
          let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
          offer.output = offer.output.enchant(enchId, lvl);
        }
      }
      return offer;
    }).maxUses(3).villagerExperience(xp);
    event.addTrade('minecraft:toolsmith', parseInt(lvl), shovelTrade);

    let pickTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 18, 32), 'minecraft:iron_pickaxe');
    pickTrade.transform((offer, entity, random) => {
      let itemId = offer.output.id.replace('minecraft:', '');
      let list = enchantLists[itemId] || [];
      offer.output = Item.of(offer.output.id);
      if (list.length > 0) {
        let numEnchs = random.nextInt(1, 4);
        let usedEnchs = [];
        for (let j = 0; j < numEnchs; j++) {
          let filteredList = list.filter(e => !usedEnchs.includes(e));
          if (filteredList.length === 0) break;
          let enchId = filteredList[random.nextInt(filteredList.length)];
          usedEnchs.push(enchId);
          let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
          let maxLvl = enchObj.getMaxLevel();
          let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
          offer.output = offer.output.enchant(enchId, lvl);
        }
      }
      return offer;
    }).maxUses(3).villagerExperience(xp);
    event.addTrade('minecraft:toolsmith', parseInt(lvl), pickTrade);

    let hoeTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 10, 22), 'minecraft:iron_hoe');
    hoeTrade.transform((offer, entity, random) => {
      let itemId = offer.output.id.replace('minecraft:', '');
      let list = enchantLists[itemId] || [];
      offer.output = Item.of(offer.output.id);
      if (list.length > 0) {
        let numEnchs = random.nextInt(1, 4);
        let usedEnchs = [];
        for (let j = 0; j < numEnchs; j++) {
          let filteredList = list.filter(e => !usedEnchs.includes(e));
          if (filteredList.length === 0) break;
          let enchId = filteredList[random.nextInt(filteredList.length)];
          usedEnchs.push(enchId);
          let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
          let maxLvl = enchObj.getMaxLevel();
          let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
          offer.output = offer.output.enchant(enchId, lvl);
        }
      }
      return offer;
    }).maxUses(3).villagerExperience(xp);
    event.addTrade('minecraft:toolsmith', parseInt(lvl), hoeTrade);
  });

  // Weaponsmith: уровень 3 (незачарованное железное оружие), уровни 4-5 (enchanted железное)
  event.removeVanillaTrades('minecraft:weaponsmith', 3);
  event.addTrade('minecraft:weaponsmith', 3, TradeItem.of('minecraft:emerald', 9, 12), 'minecraft:iron_axe').maxUses(12).villagerExperience(10);
  event.addTrade('minecraft:weaponsmith', 3, TradeItem.of('minecraft:emerald', 7, 10), 'minecraft:iron_sword').maxUses(12).villagerExperience(10);

  event.removeVanillaTrades('minecraft:weaponsmith', 4);
  let axeTradeW = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 17, 31), 'minecraft:iron_axe');
  axeTradeW.transform((offer, entity, random) => {
    let itemId = offer.output.id.replace('minecraft:', '');
    let list = enchantLists[itemId] || [];
    offer.output = Item.of(offer.output.id);
    if (list.length > 0) {
      let numEnchs = random.nextInt(1, 4);
      let usedEnchs = [];
      for (let j = 0; j < numEnchs; j++) {
        let filteredList = list.filter(e => !usedEnchs.includes(e));
        if (filteredList.length === 0) break;
        let enchId = filteredList[random.nextInt(filteredList.length)];
        usedEnchs.push(enchId);
        let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
        let maxLvl = enchObj.getMaxLevel();
        let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
        offer.output = offer.output.enchant(enchId, lvl);
      }
    }
    return offer;
  }).maxUses(3).villagerExperience(20);
  event.addTrade('minecraft:weaponsmith', 4, axeTradeW);

  event.removeVanillaTrades('minecraft:weaponsmith', 5);
  let swordTrade = VillagerUtils.createEnchantedItemTrade(TradeItem.of('minecraft:emerald', 11, 27), 'minecraft:iron_sword');
  swordTrade.transform((offer, entity, random) => {
    let itemId = offer.output.id.replace('minecraft:', '');
    let list = enchantLists[itemId] || [];
    offer.output = Item.of(offer.output.id);
    if (list.length > 0) {
      let numEnchs = random.nextInt(1, 4);
      let usedEnchs = [];
      for (let j = 0; j < numEnchs; j++) {
        let filteredList = list.filter(e => !usedEnchs.includes(e));
        if (filteredList.length === 0) break;
        let enchId = filteredList[random.nextInt(filteredList.length)];
        usedEnchs.push(enchId);
        let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
        let maxLvl = enchObj.getMaxLevel();
        let lvl = maxLvl > 1 ? random.nextInt(1, maxLvl) : 1;
        offer.output = offer.output.enchant(enchId, lvl);
      }
    }
    return offer;
  }).maxUses(3).villagerExperience(30);
  event.addTrade('minecraft:weaponsmith', 5, swordTrade);

  // Librarian: все уровни 1-5
  for (let level = 1; level <= 5; level++) {
      let xp = level * 5 + (level > 3 ? 10 : 0);
      event.removeTrades({firstItem: 'minecraft:book', secondItem: 'minecraft:emerald', outputItem: 'minecraft:enchanted_book', level: level, professions: 'minecraft:librarian'});

      let bookTrade = VillagerUtils.createEnchantedItemTrade(['minecraft:book', TradeItem.of('minecraft:emerald', 5, 64)], 'minecraft:enchanted_book');
      bookTrade.transform((offer, entity, random) => {
          let sell = offer.output;
          let storedEnchs = sell.nbt.getList('StoredEnchantments', 10);
          if (storedEnchs.size() > 0) {
              let enchTag = storedEnchs.get(0);
              let enchId = enchTag.getString('id');
              let enchLvl = enchTag.getShort('lvl');

              // Сначала проверяем чёрный список
              if (blacklisted.includes(enchId)) {
                  // Делаем трейд бесполезным: книга + изумруды → обычная книга
                  offer.output = Item.of('minecraft:book');
                  return offer;
              }

              // Оригинальная логика для НЕзапрещённых зачарований (понижение max уровня и удвоение цены для lvl 1)
              let enchObj = ForgeRegistries.ENCHANTMENTS.getValue(new ResourceLocation(enchId));
              if (enchObj) {
                  let maxLvl = enchObj.getMaxLevel();
                  if (enchLvl === maxLvl) {
                      if (maxLvl === 1) {
                          if (offer.costB) offer.costB.count *= 2; // Удваиваем изумруды для одноуровневых
                      } else {
                          offer.output = Item.of('minecraft:enchanted_book').enchant(enchId, maxLvl - 1); // Понижаем на 1 уровень
                      }
                  }
              }
          }
          return offer;
      }).maxUses(12).villagerExperience(xp);

      event.addTrade('minecraft:librarian', level, bookTrade);
  }
});