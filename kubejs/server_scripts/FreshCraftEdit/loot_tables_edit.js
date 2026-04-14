LootJS.modifiers((event) => {
  // Древний страж
  event
      .addEntityLootModifier("minecraft:elder_guardian")
      .removeLoot("endrem:guardian_eye")
      .addAlternativesLoot(
        LootEntry.of("endrem:guardian_eye").when((c) => c.randomChance(1))
      )
      .removeLoot("upgrade_aquatic:elder_eye")
      .addAlternativesLoot(
        LootEntry.of("upgrade_aquatic:elder_eye").when((c) => c.randomChance(0.5))
      );

  // Визер
  event
      .addEntityLootModifier("minecraft:wither")
      .addLoot("unusualend:withering_orb")
      .addLoot("minecraft:wither_rose")
      .addLoot("bygonenether:wither_waltz_music_disc")
      .removeLoot("endrem:wither_eye")
      .addAlternativesLoot(
        LootEntry.of("endrem:wither_eye").when((c) => c.randomChance(1))
      );

  // Незеритовое Чудище
  event
      .addEntityLootModifier("cataclysm:netherite_monstrosity")
      .removeLoot("cataclysm:music_disc_netherite_monstrosity")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_netherite_monstrosity").when((c) => c.randomChance(1))
      );

  // Страж Энда
  event
      .addEntityLootModifier("cataclysm:ender_guardian")
      .removeLoot("cataclysm:music_disc_ender_guardian")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_ender_guardian").when((c) => c.randomChance(1))
      );
  
  // Игнис
  event
      .addEntityLootModifier("cataclysm:ignis")
      .removeLoot("cataclysm:music_disc_ignis")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_ignis").when((c) => c.randomChance(1))
      );

  // Левиафан
  event
      .addEntityLootModifier("cataclysm:the_leviathan")
      .removeLoot("cataclysm:music_disc_the_leviathan")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_the_leviathan").when((c) => c.randomChance(1))
      );

  // Маледиктум
  event
      .addEntityLootModifier("cataclysm:maledictus")
      .removeLoot("cataclysm:music_disc_maledictus")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_maledictus").when((c) => c.randomChance(1))
      );

  // Древние останки
  event
      .addEntityLootModifier("cataclysm:ancient_remnant")
      .removeLoot("cataclysm:music_disc_ancient_remnant")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_ancient_remnant").when((c) => c.randomChance(1))
      );

  // Сцилла
  event
      .addEntityLootModifier("cataclysm:scylla")
      .removeLoot("cataclysm:music_disc_scylla")
      .addAlternativesLoot(
        LootEntry.of("cataclysm:music_disc_scylla").when((c) => c.randomChance(1))
      );

  
  
  // Прозиратель
  event
      .addEntityLootModifier("alexsmobs:farseer")
      .removeLoot("alexsmobs:farseer_arm")
      .addAlternativesLoot(
        LootEntry.of("unusualend:spectral_cloth").limitCount([1, 2])
      );

  // Рудокоп
  event.addEntityLootModifier("alexsmobs:underminer")
      .removeLoot("alexsmobs:ghostly_pickaxe")
      .addLoot(
          LootEntry.of("minecraft:diamond_pickaxe")
              .when(c => c.randomChance(0.5))
              .when(c =>
                  c.matchDamageSource(src => {
                      src.anyType("magic");
                      src.anyType("indirectMagic");
                  })
              )
      )
      .addLoot(
          LootEntry.of("grapesadventures:spelunker_helmet")
              .when(c => c.randomChance(0.5))
              .when(c =>
                  c.matchDamageSource(src => {
                      src.anyType("magic");
                      src.anyType("indirectMagic");
                  })
              )
      )
      .addLoot(
          LootEntry.of("quark:soul_bead")
              .when(c =>
                  c.matchDamageSource(src => {
                      src.anyType("magic");
                      src.anyType("indirectMagic");
                  })
              )
      );

  // Краб
  event
      .addEntityLootModifier("friendsandfoes:crab")
      .addLoot(
        LootEntry.of("ecologics:crab_meat").limitCount([1, 4])
      );

  // Спрут
  event
      .addEntityLootModifier("minecraft:squid")
      .addLoot(
        LootEntry.of("miners_delight:squid").limitCount([1, 3])
      );

  // Светящийся спрут    
  event
      .addEntityLootModifier("minecraft:glow_squid")
      .addLoot(
        LootEntry.of("miners_delight:glow_squid").limitCount([1, 3])
      );
});
