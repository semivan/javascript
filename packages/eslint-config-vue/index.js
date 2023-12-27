module.exports = {
    extends: [
        '@semivan/eslint-config',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
    ],
    plugins: [
        'vue',
    ],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                'indent': 'off',
                '@stylistic/indent': 'off',
            },
        },
    ],
    rules: {
        'no-shadow': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
    },
};
