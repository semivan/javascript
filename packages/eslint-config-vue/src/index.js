const configTs = require('@semivan/eslint-config-ts');

module.exports = {
    extends: [
        '@semivan/eslint-config',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        ...configTs.rules,
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
    },
};
