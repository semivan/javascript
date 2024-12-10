const rules = require('@semivan/eslint-config/rules');

module.exports = {
    ...require('./base'),
    rules: {
        ...rules.js,
        ...rules.ts.main,
        ...rules.vue,
    },
};
