import { Talent } from '../../core/models/talent';

export const durability: Talent = {
    name: 'Durability',
    attribute: '',
    strain: 0,
    rank: 0,
    rankSave: 0,
    circle: 3,
    discipline: false,
    karma: false,
    action: false
};

export const karmaRitual: Talent = {
    name: 'Karma Ritual',
    circle: 1,
    attribute: '',
    strain: 0,
    rank: 0,
    rankSave: 0,
    discipline: false,
    karma: false,
    action: false,
    description: 'Allows a character to generate Karma every morning based upon their race.'
};
