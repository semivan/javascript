import main from './main.js';
import typeChecked from './type-checked.js';
import parentRules from '@semivan/eslint-config/rules';

// Object.values(document.querySelectorAll('.rulesTable_X3vb tr > td:first-child code:first-child')).map(code => `'${code.innerText}': null`).join(', ')

export default {
    js: parentRules,
    ts: {
        main,
        typeChecked,
    },
};
