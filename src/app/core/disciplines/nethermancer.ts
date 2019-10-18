import { Discipline } from '../../core/models/discipline';
import { Talent } from '../../core/models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteNethermancy, spellcasting, spellMatrixNethermancy,
    threadWeavingSpecial, astralSight, frighten, spiritTalk,
    animalPossession, spiritHold, summon, lifeSight, willforce,
    enhancedMatrixNethermancy, spiritDodge, orbitingSpy, arcaneMutterings,
    armoredMatrixNethermancy, astralPocket, animateObject,
    summoningCircle, bargainwithSummoned, matrixStrike, netherwalk,
    crystalSpellLock, sharedMatrixNethermancy, detectInfluence,
    multiWeaving, soulShatter} from '../library/disciplineTalents';


export const nethermancer: Discipline = {
    name: 'Nethermancer',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteNethermancy, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrixNethermancy, 1, false),
        new Talent(spellMatrixNethermancy, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        new Talent(astralSight, 2, true),
        durability,
        new Talent(frighten, 2, false),
        new Talent(spellMatrixNethermancy, 3, false),
        new Talent(spiritTalk, 3, true),
        new Talent(animalPossession, 4, false),
        new Talent(spellMatrixNethermancy, 4, false),
        new Talent(spiritHold, 5, true),
        new Talent(summon, 5, true),
        new Talent(lifeSight, 6, true),
        new Talent(willforce, 6, false),
        new Talent(enhancedMatrixNethermancy, 7, false),
        new Talent(spiritDodge, 7, true),
        new Talent(enhancedMatrixNethermancy, 8, false),
        new Talent(orbitingSpy, 8, true),
        new Talent(arcaneMutterings, 9, false),
        new Talent(armoredMatrixNethermancy, 9, false),
        new Talent(astralPocket, 9, true),
        new Talent(animateObject, 10, false),
        new Talent(summoningCircle, 10, true),
        new Talent(armoredMatrixNethermancy, 11, false),
        new Talent(bargainwithSummoned, 11, true),
        new Talent(matrixStrike, 12, true),
        new Talent(netherwalk, 12, true),
        new Talent(crystalSpellLock, 13, true),
        new Talent(sharedMatrixNethermancy, 13, false),
        new Talent(detectInfluence, 14, true),
        new Talent(multiWeaving, 14, true),
        new Talent(sharedMatrixNethermancy, 15, false),
        new Talent(soulShatter, 15, true)
    ]
};
