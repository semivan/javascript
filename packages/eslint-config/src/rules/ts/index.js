import main from './main.js';
import typeChecked from './type-checked.js';

// Object.values(document.querySelectorAll('.rulesTable_X3vb tr > td:first-child code:first-child')).map(code => `'${code.innerText}': null`).join(', ')

export default {
    main,
    typeChecked,
};
