import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': tsEslintPlugin,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    }, {
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],

        rules: {
            'constructor-super': 'off', // ts(2335) & ts(2377)
            'getter-return': 'off', // ts(2378)
            'no-class-assign': 'off', // ts(2629)
            'no-const-assign': 'off', // ts(2588)
            'no-dupe-args': 'off', // ts(2300)
            'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
            'no-dupe-keys': 'off', // ts(1117)
            'no-func-assign': 'off', // ts(2630)
            'no-import-assign': 'off', // ts(2632) & ts(2540)
            'no-new-symbol': 'off', // ts(7009)
            'no-new-native-nonconstructor': 'off', // ts(7009)
            'no-obj-calls': 'off', // ts(2349)
            'no-redeclare': 'off', // ts(2451)
            'no-setter-return': 'off', // ts(2408)
            'no-this-before-super': 'off', // ts(2376) & ts(17009)
            'no-undef': 'off', // ts(2304) & ts(2552)
            'no-unreachable': 'off', // ts(7027)
            'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
            'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
            'prefer-const': 'error', // ts provides better types with const
            'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
            'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
        },
    }, {
        files: ['**/shims-tsx.d.ts'],

        rules: {
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
        },
    }, {
        files: ['**/*.js', '**/*.cjs'],

        rules: {
            '@typescript-eslint/no-var-requires': 'off',
        },
    },
];
