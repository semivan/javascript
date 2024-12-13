import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import rules from './rules/index.js';

const EXTENSIONS = ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.jsx'];
const DEFAULT_OPT = {
    extraFileExtensions: [],
};

export default (opt = DEFAULT_OPT) => {
    const { extraFileExtensions } = {
        ...DEFAULT_OPT,
        ...opt,
    };
    const extensions = [
        ...EXTENSIONS,
        ...extraFileExtensions,
    ];

    return [
        {
            name: 'semivan-base-config',
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
            name: 'semivan-js-rules',
            files: extensions,
            rules,
        },
    ];
};
