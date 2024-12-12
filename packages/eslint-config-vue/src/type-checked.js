import rules from '@semivan/eslint-config/rules';
import base from './base.js';

export default [
    ...base,
    {
        rules: {
            ...rules.js,
            ...rules.ts.main,
            ...rules.ts.typeChecked,
            'dot-notation': 'off',
            ...rules.vue,
        },
    },
];
