ServerEvents.recipes(event => {
    event.remove({ output: 'suppsquared:nethers_exoticism/item_shelf_jabuticaba' });
    event.shaped('suppsquared:nethers_exoticism/item_shelf_jabuticaba', [
        'SSS'
    ], {
        S: 'nethers_exoticism:jaboticaba_slab'
    });

    event.remove({ output: 'everycomp:af/nethers_exoticism/jabuticaba_shutter' });
    event.shaped('everycomp:af/nethers_exoticism/jabuticaba_shutter', [
        'SS',
        'SS',
        'SS'
    ], {
        S: 'nethers_exoticism:jaboticaba_slab'
    });

    event.remove({ output: 'everycomp:af/nethers_exoticism/jabuticaba_bench' });
    event.shaped('everycomp:af/nethers_exoticism/jabuticaba_bench', [
        'T  ',
        'SSS',
        'T T'
    ], {
        S: 'nethers_exoticism:jaboticaba_slab',
        T: 'minecraft:stick'
    });

    event.remove({ output: 'everycomp:hnhome/nethers_exoticism/jabuticaba_parquet' });
    event.shaped('everycomp:hnhome/nethers_exoticism/jabuticaba_parquet 4', [
        'S',
        'S'
    ], {
        S: 'nethers_exoticism:jaboticaba_slab'
    });
});