module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@stylistic/disable-legacy',
    ],
    plugins: [
        '@stylistic',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    env: {
        node: true,
    },
    rules: {
        ...require('./rules/best-practices.js'),
        ...require('./rules/errors.js'),
        ...require('./rules/es6.js'),
        ...require('./rules/node.js'),
        ...require('./rules/strict.js'),
        ...require('./rules/style.js'),
        ...require('./rules/stylistic.js'),
        ...require('./rules/variables.js'),
    },
};
