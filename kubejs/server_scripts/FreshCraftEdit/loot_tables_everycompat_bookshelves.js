ServerEvents.blockLootTables(event => {
    const bookshelves = [
        'everycomp:q/upgrade_aquatic/driftwood_bookshelf',
        'everycomp:q/atmospheric/grimwood_bookshelf',
        'everycomp:q/atmospheric/rosewood_bookshelf',
        'everycomp:q/unusualend/chorus_nest_bookshelf',
        'everycomp:q/nethers_exoticism/jabuticaba_bookshelf',
        'everycomp:q/gardens_of_the_dead/soulblight_bookshelf',
        'everycomp:q/gardens_of_the_dead/whistlecane_bookshelf',
        'everycomp:q/ecologics/flowering_azalea_bookshelf',
        'everycomp:q/ecologics/azalea_bookshelf',
        'everycomp:q/nethers_exoticism/ramboutan_bookshelf',
        'everycomp:q/phantasm/pream_bookshelf',
        'everycomp:q/vanillabackport/pale_oak_bookshelf',
        'everycomp:q/biomesoplenty/fir_bookshelf',
        'everycomp:q/biomesoplenty/pine_bookshelf',
        'everycomp:q/biomesoplenty/maple_bookshelf',
        'everycomp:q/biomesoplenty/redwood_bookshelf',
        'everycomp:q/biomesoplenty/mahogany_bookshelf',
        'everycomp:q/biomesoplenty/jacaranda_bookshelf',
        'everycomp:q/biomesoplenty/palm_bookshelf',
        'everycomp:q/biomesoplenty/willow_bookshelf',
        'everycomp:q/biomesoplenty/dead_bookshelf',
        'everycomp:q/biomesoplenty/magic_bookshelf',
        'everycomp:q/biomesoplenty/umbran_bookshelf',
        'everycomp:q/biomesoplenty/hellbark_bookshelf',
        'everycomp:q/biomesoplenty/empyreal_bookshelf',
        'everycomp:q/ecologics/coconut_bookshelf',
        'everycomp:q/ecologics/walnut_bookshelf',
        'everycomp:q/snifferplus/stone_pine_bookshelf',
        'everycomp:q/beachparty/palm_bookshelf',
        'everycomp:q/autumnity/maple_bookshelf',
        'everycomp:q/upgrade_aquatic/river_bookshelf',
        'everycomp:q/regions_unexplored/alpha_bookshelf',
        'everycomp:q/regions_unexplored/baobab_bookshelf',
        'everycomp:q/regions_unexplored/blue_bioshroom_bookshelf',
        'everycomp:q/regions_unexplored/brimwood_bookshelf',
        'everycomp:q/regions_unexplored/cobalt_bookshelf',
        'everycomp:q/regions_unexplored/cypress_bookshelf',
        'everycomp:q/regions_unexplored/dead_bookshelf',
        'everycomp:q/regions_unexplored/eucalyptus_bookshelf',
        'everycomp:q/regions_unexplored/green_bioshroom_bookshelf',
        'everycomp:q/regions_unexplored/joshua_bookshelf',
        'everycomp:q/regions_unexplored/kapok_bookshelf',
        'everycomp:q/regions_unexplored/larch_bookshelf',
        'everycomp:q/regions_unexplored/magnolia_bookshelf',
        'everycomp:q/regions_unexplored/yellow_bioshroom_bookshelf',
        'everycomp:q/regions_unexplored/willow_bookshelf',
        'everycomp:q/regions_unexplored/socotra_bookshelf',
        'everycomp:q/regions_unexplored/redwood_bookshelf',
        'everycomp:q/regions_unexplored/pink_bioshroom_bookshelf',
        'everycomp:q/regions_unexplored/pine_bookshelf',
        'everycomp:q/regions_unexplored/palm_bookshelf',
        'everycomp:q/regions_unexplored/mauve_bookshelf',
        'everycomp:q/regions_unexplored/maple_bookshelf',
        'everycomp:q/atmospheric/morado_bookshelf',
        'everycomp:q/atmospheric/yucca_bookshelf',
        'everycomp:q/atmospheric/aspen_bookshelf',
        'everycomp:q/atmospheric/laurel_bookshelf',
        'everycomp:q/atmospheric/kousa_bookshelf'
    ];

    bookshelves.forEach(bookshelf => {
        event.addBlock(bookshelf, table => {
            table.clearPools();
            table.addPool(pool => {
                pool.rolls = 1;
                pool.survivesExplosion();
                pool.addEntry({
                    type: 'minecraft:alternatives',
                    children: [
                        {
                            type: 'minecraft:item',
                            name: bookshelf,
                            conditions: [
                                {
                                    condition: 'minecraft:match_tool',
                                    predicate: {
                                        enchantments: [
                                            {
                                                enchantment: 'minecraft:silk_touch',
                                                levels: { min: 1 }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        {
                            type: 'minecraft:item',
                            name: 'minecraft:book',
                            functions: [
                                {
                                    function: 'minecraft:set_count',
                                    count: 3
                                }
                            ]
                        }
                    ]
                });
            });
        });
    });
});