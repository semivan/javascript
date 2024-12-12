import vueTsEslintConfig from '@vue/eslint-config-typescript';
import stylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';

export default [
    ...pluginVue.configs['flat/essential'],
    ...vueTsEslintConfig(),
    {
        plugins: {
            '@stylistic': stylistic,
        },
    },
    {
        name: 'app/files-to-ignore',
        ignores: [
            '**/dist/**',
            '**/dist-ssr/**',
            '**/coverage/**',
            '**/.yarn/**',
            '**/.idea/**',
            '**/.vscode/**',
        ],
    },
    {
        files: ['**/shims-tsx.d.ts'],

        rules: {
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    },
    {
        files: ['**/*.js', '**/*.cjs'],

        rules: {
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
    {
        files: ['**/*.vue'],

        rules: {
            'indent': 'off',
            '@stylistic/indent': 'off',
        },
    },
];
