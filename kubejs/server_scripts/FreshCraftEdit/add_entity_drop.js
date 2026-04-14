LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("friendsandfoes:crab")
		.randomChanceWithEnchantment("minecraft:looting", [0.3, 0.4, 0.5, 0.7]) 
        .addLoot("crabbersdelight:crab_claw");
	event
        .addEntityLootModifier("oceanicrealms:crab")
        .addLoot("crabbersdelight:crab");	
	event
        .addEntityLootModifier("ecologics:coconut_crab")
		.randomChance(0.5)
        .addLoot("quark:crab_leg"); 
	event
        .addEntityLootModifier("ecologics:coconut_crab")
		.randomChance(0.5)
        .addLoot("quark:crab_shell"); 
});