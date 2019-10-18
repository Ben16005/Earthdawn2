import { Discipline } from '../../core/models/discipline';
import { Talent } from '../../core/models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteIllusionism, spellcasting, spellMatrixIllusionist,
    threadWeavingSpecial, disguiseSelf, deadFall, speakLanguage,
    falseSight, sloughBlame, willforce, astralSight, fastHand,
    engagingBanter, enhancedMatrixIllusionist, trueSight,
    armoredMatrixIllusionist, detectFalsehood, resistTaunt,
    memorizeImage, mindWave, hypnotize, safeThought, thoughtfulExpression,
    matrixStrike, sharedMatrixIllusionist, multiWeaving,
    secondChance } from '../library/disciplineTalents';


export const illusionist: Discipline = {
    name: 'Illusionist',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteIllusionism, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrixIllusionist, 1, false),
        new Talent(spellMatrixIllusionist, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        new Talent(disguiseSelf, 2, true),
        durability,
        new Talent(spellMatrixIllusionist, 2, false),
        new Talent(deadFall, 3, true),
        new Talent(speakLanguage, 3, false),
        new Talent(falseSight, 4, true),
        new Talent(spellMatrixIllusionist, 4, false),
        new Talent(sloughBlame, 5, true),
        new Talent(willforce, 5, false),
        new Talent(astralSight, 6, true),
        new Talent(fastHand, 6, true),
        new Talent(engagingBanter, 7, true),
        new Talent(enhancedMatrixIllusionist, 7, false),
        new Talent(enhancedMatrixIllusionist, 8, false),
        new Talent(trueSight, 8, true),
        new Talent(armoredMatrixIllusionist, 9, false),
        new Talent(detectFalsehood, 9, true),
        new Talent(resistTaunt, 9, true),
        new Talent(memorizeImage, 10, false),
        new Talent(mindWave, 10, true),
        new Talent(armoredMatrixIllusionist, 11, false),
        new Talent(hypnotize, 11, true),
        new Talent(safeThought, 12, true),
        new Talent(thoughtfulExpression, 12, true),
        new Talent(matrixStrike, 13, false),
        new Talent(sharedMatrixIllusionist, 13, false),
        new Talent(multiWeaving, 14, true),
        new Talent(sharedMatrixIllusionist, 14, false),
        new Talent(secondChance, 15, true),
        new Talent(sharedMatrixIllusionist, 15, false)
    ]
};
