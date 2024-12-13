import parentRules from '@semivan/eslint-config/rules';

export default {
    // Enforce linebreaks after opening and before closing array brackets in <template>
    'vue/array-bracket-newline': parentRules['@stylistic/array-bracket-newline'] ?? 'off',

    // Enforce consistent spacing inside array brackets in <template>
    'vue/array-bracket-spacing': parentRules['@stylistic/array-bracket-spacing'] ?? 'off',

    // Enforce line breaks after each array element in <template>
    'vue/array-element-newline': parentRules['@stylistic/array-element-newline'] ?? 'off',

    // Enforce consistent spacing before and after the arrow in arrow functions in <template>
    'vue/arrow-spacing': parentRules['@stylistic/arrow-spacing'] ?? 'off',

    // Disallow or enforce spaces inside of blocks after opening block and before closing block in <template>
    'vue/block-spacing': parentRules['@stylistic/block-spacing'] ?? 'off',

    // Enforce consistent brace style for blocks in <template>
    'vue/brace-style': parentRules['@stylistic/brace-style'] ?? 'off',

    // Enforce camelcase naming convention in <template>
    'vue/camelcase': parentRules.camelcase ?? 'off',

    // Require or disallow trailing commas in <template>
    'vue/comma-dangle': parentRules['@stylistic/comma-dangle'] ?? 'off',

    // Enforce consistent spacing before and after commas in <template>
    'vue/comma-spacing': parentRules['@stylistic/comma-spacing'] ?? 'off',

    // Enforce consistent comma style in <template>
    'vue/comma-style': parentRules['@stylistic/comma-style'] ?? 'off',

    // Enforce consistent newlines before and after dots in <template>
    'vue/dot-location': parentRules['@stylistic/dot-location'] ?? 'off',

    // Enforce dot notation whenever possible in <template>
    // 'vue/dot-notation': parentRules['dot-notation'] ?? 'off',

    // Require the use of === and !== in <template>
    'vue/eqeqeq': parentRules.eqeqeq ?? 'off',

    // Require or disallow spacing between function identifiers and their invocations in <template>
    'vue/func-call-spacing': parentRules['@stylistic/func-call-spacing'] ?? 'off',

    // Enforce consistent spacing between keys and values in object literal properties in <template>
    'vue/key-spacing': parentRules['@stylistic/key-spacing'] ?? 'off',

    // Enforce consistent spacing before and after keywords in <template>
    'vue/keyword-spacing': parentRules['@stylistic/keyword-spacing'] ?? 'off',

    // enforce a maximum line length in .vue files
    'vue/max-len': [parentRules['@stylistic/max-len']?.[0] ?? 'off', {
        ...parentRules['@stylistic/max-len']?.[1],
        ignoreHTMLAttributeValues: true,
        ignoreHTMLTextContents: true,
    }],

    // Enforce newlines between operands of ternary expressions in <template>
    'vue/multiline-ternary': parentRules['@stylistic/multiline-ternary'] ?? 'off',

    // Disallow the use of console in <template>
    'vue/no-console': parentRules['no-console'] ?? 'off',

    // Disallow constant expressions in conditions in <template>
    'vue/no-constant-condition': parentRules['no-constant-condition'] ?? 'off',

    // Disallow empty destructuring patterns in <template>
    'vue/no-empty-pattern': parentRules['no-empty-pattern'] ?? 'off',

    // Disallow unnecessary parentheses in <template>
    'vue/no-extra-parens': parentRules['@stylistic/no-extra-parens'] ?? 'off',

    // disallow irregular whitespace in .vue files
    'vue/no-irregular-whitespace': parentRules['no-irregular-whitespace'] ?? 'off',

    // Disallow literal numbers that lose precision in <template>
    'vue/no-loss-of-precision': parentRules['no-loss-of-precision'] ?? 'off',

    // Disallow specified syntax in <template>
    'vue/no-restricted-syntax': parentRules['no-restricted-syntax'] ?? 'off',

    // Disallow sparse arrays in <template>
    'vue/no-sparse-arrays': parentRules['no-sparse-arrays'] ?? 'off',

    // Disallow unnecessary concatenation of literals or template literals in <template>
    'vue/no-useless-concat': parentRules['no-useless-concat'] ?? 'off',

    // Enforce consistent line breaks after opening and before closing braces in <template>
    'vue/object-curly-newline': parentRules['@stylistic/object-curly-newline'] ?? 'off',

    // Enforce consistent spacing inside braces in <template>
    'vue/object-curly-spacing': parentRules['@stylistic/object-curly-spacing'] ?? 'off',

    // Enforce placing object properties on separate lines in <template>
    'vue/object-property-newline': parentRules['@stylistic/object-property-newline'] ?? 'off',

    // Require or disallow method and property shorthand syntax for object literals in <template>
    'vue/object-shorthand': parentRules['object-shorthand'] ?? 'off',

    // Enforce consistent linebreak style for operators in <template>
    'vue/operator-linebreak': parentRules['@stylistic/operator-linebreak'] ?? 'off',

    // Require template literals instead of string concatenation in <template>
    'vue/prefer-template': parentRules['prefer-template'] ?? 'off',

    // Require quotes around object literal property names in <template>
    'vue/quote-props': parentRules['@stylistic/quote-props'] ?? 'off',

    // Enforce consistent spacing inside parentheses in <template>
    'vue/space-in-parens': parentRules['@stylistic/space-in-parens'] ?? 'off',

    // Require spacing around infix operators in <template>
    'vue/space-infix-ops': parentRules['@stylistic/space-infix-ops'] ?? 'off',

    // Enforce consistent spacing before or after unary operators in <template>
    'vue/space-unary-ops': parentRules['@stylistic/space-unary-ops'] ?? 'off',

    // Require or disallow spacing around embedded expressions of template strings in <template>
    'vue/template-curly-spacing': parentRules['@stylistic/template-curly-spacing'] ?? 'off',
};
