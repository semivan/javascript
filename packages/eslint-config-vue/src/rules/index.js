import extension from './extension.js';
import uncategorized from './uncategorized.js';
import parentRules from '@semivan/eslint-config/rules';

export default {
    ...parentRules,
    vue: {
        ...extension,
        ...uncategorized,
    },
};
