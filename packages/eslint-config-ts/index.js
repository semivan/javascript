module.exports = {
    extends: [
        '@semivan/eslint-config',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        'indent': 'off',
        'no-shadow': 'off',
        'no-invalid-this': 'off',
        'no-useless-constructor': 'off',
        '@stylistic/indent': 'off',
        '@typescript-eslint/no-shadow': 'error',
    },
};
