import tsEslint from 'typescript-eslint';
// import semivanJsEslintConfig from '../../eslint-config/src/index.js';
import semivanJsEslintConfig from '@semivan/eslint-config';
import rules from './rules/index.js';

const EXTENSIONS = ['**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx'];
const DEFAULT_OPT = {
    useTypeChecked: false,
    extraFileExtensions: [],
};

export default (opt = DEFAULT_OPT) => {
    const {
        extraFileExtensions,
        useTypeChecked,
    } = {
        ...DEFAULT_OPT,
        ...opt,
    };
    const extensions = [
        ...EXTENSIONS,
        ...extraFileExtensions,
    ];

    return [
        ...semivanJsEslintConfig({
            extraFileExtensions: extensions,
        }),
        ...tsEslint.configs.recommended,
        {
            name: 'semivan-ts-rules',
            files: extensions,
            rules: {
                ...rules.ts.main,
                ...(useTypeChecked ? rules.ts.typeChecked : {}),
            },
        },
        {
            files: ['**/shims-tsx.d.ts'],
            rules: {
                '@typescript-eslint/no-empty-object-type': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
        {
            files: ['**/*.js', '**/*.cjs'],
            rules: {
                '@typescript-eslint/no-require-imports': 'off',
            },
        },
    ];
};
