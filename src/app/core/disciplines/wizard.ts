import { Discipline } from '../../core/models/discipline';
import { Talent } from '../../core/models/talent';
import { karmaRitual, durability } from '../library/staticTalents';

import { readandWriteWizardry, spellcasting, spellMatrixWizardry,
    threadWeavingSpecial, evidenceAnalysis, arcaneMutterings,
    readandWriteLanguage, astralSight, bookMemory, lipReading,
    willforce, enhancedMatrixWizardry, speakLanguage, holdThread,
    itemHistory, resistTaunt, armoredMatrixWizardry, matrixStrike,
    rangePattern, lifeCheck, spiritStrike, castingPattern,
    woundTransfer, sharedMatrixWizardry, trueSight, multiWeaving,
    effectPattern, } from '../library/disciplineTalents';


export const wizard: Discipline = {
    name: 'Wizard',
    circle: 1,
    talents: [
        karmaRitual,
        new Talent(readandWriteWizardry, 1, true),
        new Talent(spellcasting, 1, true),
        new Talent(spellMatrixWizardry, 1, false),
        new Talent(spellMatrixWizardry, 1, false),
        new Talent(threadWeavingSpecial, 1, true),
        durability,
        new Talent(evidenceAnalysis, 2, true),
        new Talent(spellMatrixWizardry, 2, false),
        new Talent(arcaneMutterings, 3, true),
        new Talent(readandWriteLanguage, 3, true),
        new Talent(astralSight, 4, true),
        new Talent(bookMemory, 4, true),
        new Talent(lipReading, 5, false),
        new Talent(willforce, 5, false),
        new Talent(enhancedMatrixWizardry, 6, false),
        new Talent(speakLanguage, 6, true),
        new Talent(holdThread, 7, true),
        new Talent(itemHistory, 7, true),
        new Talent(enhancedMatrixWizardry, 8, false),
        new Talent(resistTaunt, 8, false),
        new Talent(armoredMatrixWizardry, 9, false),
        new Talent(matrixStrike, 9, true),
        new Talent(rangePattern, 9, true),
        new Talent(lifeCheck, 10, false),
        new Talent(spiritStrike, 10, true),
        new Talent(armoredMatrixWizardry, 11, false),
        new Talent(castingPattern, 11, true),
        new Talent(armoredMatrixWizardry, 12, false),
        new Talent(woundTransfer, 12, true),
        new Talent(sharedMatrixWizardry, 13, false),
        new Talent(trueSight, 13, false),
        new Talent(multiWeaving, 14, true),
        new Talent(sharedMatrixWizardry, 14, false),
        new Talent(effectPattern, 15, true),
        new Talent(sharedMatrixWizardry, 15, false)
    ]
};
