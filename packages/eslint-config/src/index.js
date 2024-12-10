import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import rules from './rules/index.js';

export default {
    plugins: {
        '@stylistic': stylistic,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: 'latest',
        sourceType: 'module',
    },

    rules: rules.js,
};
