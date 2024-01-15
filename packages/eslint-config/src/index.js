module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: [
        '@stylistic',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    rules: {
        ...require('./rules').js,
        ...require('./rules').legacy,
    },
};
