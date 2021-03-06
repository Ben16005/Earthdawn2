import { Discipline } from '../../core/models/discipline';
import { Talent } from '../../core/models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { avoidBlow, forgeWeapon, meleeWeapons, steelThought,
    weaponHistory, haggle, readandWriteLanguage, abateCurse,
    detectWeapon, speakLanguage, threadWeavingSpecial, temperSelf,
    warpMissile, concealWeapon, spotArmorFlaw, disarm, temperOther,
    improveWeapon, reshapeObject, enhancedMatrixElementalist,
    readandWriteElementalism, spellcasting, metalWard, senseMagicWeapon,
    fireblood, forgeArmor, showArmorFlaw, softenBlade, criticalHit,
    improveArmor, armoredMatrixElementalist, firstRingofPerfection,
    secondChance, sharedMatrixElementalist} from '../library/disciplineTalents';


export const weaponsmith: Discipline = {
    name: 'Weaponsmith',
    circle: 1,
    talents: [
        new Talent(avoidBlow, 1, false),
        new Talent(forgeWeapon, 1, true),
        karmaRitual,
        new Talent(meleeWeapons, 1, false),
        new Talent(steelThought, 1, true),
        new Talent(weaponHistory, 1, true),
        durability,
        new Talent(haggle, 2, true),
        new Talent(readandWriteLanguage, 2, false),
        new Talent(abateCurse, 3, true),
        new Talent(detectWeapon, 3, true),
        new Talent(speakLanguage, 4, false),
        new Talent(threadWeavingSpecial, 4, true),
        new Talent(temperSelf, 5, true),
        new Talent(warpMissile, 5, true),
        new Talent(concealWeapon, 6, false),
        new Talent(spotArmorFlaw, 6, true),
        new Talent(disarm, 7, false),
        new Talent(temperOther, 7, true),
        new Talent(improveWeapon, 8, true),
        new Talent(reshapeObject, 8, false),
        new Talent(enhancedMatrixElementalist, 9, false),
        new Talent(readandWriteElementalism, 9, false),
        new Talent(spellcasting, 9, false),
        new Talent(metalWard, 10, false),
        new Talent(senseMagicWeapon, 10, true),
        new Talent(fireblood, 11, false),
        new Talent(forgeArmor, 11, true),
        new Talent(showArmorFlaw, 12, true),
        new Talent(softenBlade, 12, true),
        new Talent(criticalHit, 13, false),
        new Talent(improveArmor, 13, true),
        new Talent(armoredMatrixElementalist, 14, false),
        new Talent(firstRingofPerfection, 14, true),
        new Talent(secondChance, 15, false),
        new Talent(sharedMatrixElementalist, 15, false)
    ]
};
