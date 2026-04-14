LootJS.modifiers((event) => {
    event.addEntityLootModifier("oceanicrealms:crab").removeLoot("oceanicrealms:crab_claw");
	event.addEntityLootModifier("friendsandfoes:crab").removeLoot("friendsandfoes:crab_claw");

    event.addEntityLootModifier("minecraft:bat").removeLoot("miners_delight:bat_wing")
});