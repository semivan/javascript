import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
// import semivanTsEslintConfig from '../../eslint-config-ts/src/index.js';
import semivanTsEslintConfig from '@semivan/eslint-config-ts';
import rules from './rules/index.js';

const EXTENSIONS = ['**/*.vue'];
const DEFAULT_OPT = {
    extraFileExtensions: [],
    useTypeChecked: false,
};

function excludeConfigs(configs, names) {
    return configs
        .filter(config => !names.includes(config.name));
}

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
        ...excludeConfigs(
            semivanTsEslintConfig({
                extraFileExtensions: extensions,
                useTypeChecked,
            }),
            ['typescript-eslint/base', 'typescript-eslint/eslint-recommended'],
        ),
        ...pluginVue.configs['flat/essential'],
        ...excludeConfigs(
            vueTsEslintConfig(),
            ['typescript-eslint/recommended'],
        ),
        {
            name: 'semivan-vue-rules',
            files: extensions,
            rules: {
                ...rules.vue,
                ...(useTypeChecked ? { 'dot-notation': 'off' } : {}),
            },
        },
        {
            name: 'disable-conflicting-rules-for-vue',
            files: ['**/*.vue'],
            rules: {
                'no-useless-assignment': 'off',
                '@stylistic/indent': 'off',
            },
        },
    ];
};
