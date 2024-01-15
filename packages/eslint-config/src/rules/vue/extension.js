const jsRules = require('../js');

module.exports = {
    // Enforce linebreaks after opening and before closing array brackets in <template>
    'vue/array-bracket-newline': jsRules['@stylistic/array-bracket-newline'] ?? 'off',

    // Enforce consistent spacing inside array brackets in <template>
    'vue/array-bracket-spacing': jsRules['@stylistic/array-bracket-spacing'] ?? 'off',

    // Enforce line breaks after each array element in <template>
    'vue/array-element-newline': jsRules['@stylistic/array-element-newline'] ?? 'off',

    // Enforce consistent spacing before and after the arrow in arrow functions in <template>
    'vue/arrow-spacing': jsRules['@stylistic/arrow-spacing'] ?? 'off',

    // Disallow or enforce spaces inside of blocks after opening block and before closing block in <template>
    'vue/block-spacing': jsRules['@stylistic/block-spacing'] ?? 'off',

    // Enforce consistent brace style for blocks in <template>
    'vue/brace-style': jsRules['@stylistic/brace-style'] ?? 'off',

    // Enforce camelcase naming convention in <template>
    'vue/camelcase': jsRules.camelcase ?? 'off',

    // Require or disallow trailing commas in <template>
    'vue/comma-dangle': jsRules['@stylistic/comma-dangle'] ?? 'off',

    // Enforce consistent spacing before and after commas in <template>
    'vue/comma-spacing': jsRules['@stylistic/comma-spacing'] ?? 'off',

    // Enforce consistent comma style in <template>
    'vue/comma-style': jsRules['@stylistic/comma-style'] ?? 'off',

    // Enforce consistent newlines before and after dots in <template>
    'vue/dot-location': jsRules['@stylistic/dot-location'] ?? 'off',

    // Enforce dot notation whenever possible in <template>
    // 'vue/dot-notation': jsRules['dot-notation'] ?? 'off',

    // Require the use of === and !== in <template>
    'vue/eqeqeq': jsRules.eqeqeq ?? 'off',

    // Require or disallow spacing between function identifiers and their invocations in <template>
    'vue/func-call-spacing': jsRules['@stylistic/func-call-spacing'] ?? 'off',

    // Enforce consistent spacing between keys and values in object literal properties in <template>
    'vue/key-spacing': jsRules['@stylistic/key-spacing'] ?? 'off',

    // Enforce consistent spacing before and after keywords in <template>
    'vue/keyword-spacing': jsRules['@stylistic/keyword-spacing'] ?? 'off',

    // enforce a maximum line length in .vue files
    'vue/max-len': [jsRules['@stylistic/max-len']?.[0] ?? 'off', {
        ...jsRules['@stylistic/max-len']?.[1],
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
    }],

    // Enforce newlines between operands of ternary expressions in <template>
    'vue/multiline-ternary': jsRules['@stylistic/multiline-ternary'] ?? 'off',

    // Disallow the use of console in <template>
    'vue/no-console': jsRules['no-console'] ?? 'off',

    // Disallow constant expressions in conditions in <template>
    'vue/no-constant-condition': jsRules['no-constant-condition'] ?? 'off',

    // Disallow empty destructuring patterns in <template>
    'vue/no-empty-pattern': jsRules['no-empty-pattern'] ?? 'off',

    // Disallow unnecessary parentheses in <template>
    'vue/no-extra-parens': jsRules['@stylistic/no-extra-parens'] ?? 'off',

    // disallow irregular whitespace in .vue files
    'vue/no-irregular-whitespace': jsRules['no-irregular-whitespace'] ?? 'off',

    // Disallow literal numbers that lose precision in <template>
    'vue/no-loss-of-precision': jsRules['no-loss-of-precision'] ?? 'off',

    // Disallow specified syntax in <template>
    'vue/no-restricted-syntax': jsRules['no-restricted-syntax'] ?? 'off',

    // Disallow sparse arrays in <template>
    'vue/no-sparse-arrays': jsRules['no-sparse-arrays'] ?? 'off',

    // Disallow unnecessary concatenation of literals or template literals in <template>
    'vue/no-useless-concat': jsRules['no-useless-concat'] ?? 'off',

    // Enforce consistent line breaks after opening and before closing braces in <template>
    'vue/object-curly-newline': jsRules['@stylistic/object-curly-newline'] ?? 'off',

    // Enforce consistent spacing inside braces in <template>
    'vue/object-curly-spacing': jsRules['@stylistic/object-curly-spacing'] ?? 'off',

    // Enforce placing object properties on separate lines in <template>
    'vue/object-property-newline': jsRules['@stylistic/object-property-newline'] ?? 'off',

    // Require or disallow method and property shorthand syntax for object literals in <template>
    'vue/object-shorthand': jsRules['object-shorthand'] ?? 'off',

    // Enforce consistent linebreak style for operators in <template>
    'vue/operator-linebreak': jsRules['@stylistic/operator-linebreak'] ?? 'off',

    // Require template literals instead of string concatenation in <template>
    'vue/prefer-template': jsRules['prefer-template'] ?? 'off',

    // Require quotes around object literal property names in <template>
    'vue/quote-props': jsRules['@stylistic/quote-props'] ?? 'off',

    // Enforce consistent spacing inside parentheses in <template>
    'vue/space-in-parens': jsRules['@stylistic/space-in-parens'] ?? 'off',

    // Require spacing around infix operators in <template>
    'vue/space-infix-ops': jsRules['@stylistic/space-infix-ops'] ?? 'off',

    // Enforce consistent spacing before or after unary operators in <template>
    'vue/space-unary-ops': jsRules['@stylistic/space-unary-ops'] ?? 'off',

    // Require or disallow spacing around embedded expressions of template strings in <template>
    'vue/template-curly-spacing': jsRules['@stylistic/template-curly-spacing'] ?? 'off',
};
