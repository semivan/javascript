module.exports = {
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
        '@semivan/eslint-config',
    ],
    plugins: [
        'vue',
    ],
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
    rules: {
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
        }],
    },
};
