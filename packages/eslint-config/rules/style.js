module.exports = {
    // Require camel case names
    'camelcase': ['error', {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
    }],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // Enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // Requires function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // Require function expressions to have a name
    'func-names': ['warn', 'as-needed'],

    // Enforces use of function declarations or expressions
    'func-style': 'off',

    // Disallow specified identifiers
    'id-denylist': 'off',

    // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 'off',

    // Require identifiers to match the provided regular expression
    'id-match': 'off',

    // Enforce position of line comments
    'line-comment-position': ['off', {
        position: 'above',
    }],

    // Require or disallow logical assignment logical operator shorthand
    'logical-assignment-operators': ['error', 'always', {
        enforceForIfStatements: true,
    }],

    // Specify the maximum depth that blocks can be nested
    'max-depth': ['error', 4],

    // Specify the max number of lines in a file
    'max-lines': ['off', {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
    }],

    // Enforce a maximum function length
    'max-lines-per-function': ['off', {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
    }],

    // Specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // Limits the number of parameters that can be used in the function declaration.
    'max-params': 'off',

    // Specify the maximum number of statement allowed in a function
    'max-statements': 'off',

    // Enforce a particular style for multiline comments
    'multiline-comment-style': ['off', 'starred-block'],

    // Require a capital letter for constructors
    'new-cap': ['error', {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Disallow use of the Array constructor
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    'no-bitwise': 'error',

    // Disallow use of the continue statement
    'no-continue': 'off',

    // Disallow comments inline after code
    'no-inline-comments': 'off',

    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // Disallow negated conditions
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow use of the Object constructor
    'no-new-object': 'error',

    // Disallow use of unary operators, ++ and --
    'no-plusplus': 'off',

    // Disallow certain syntax forms
    'no-restricted-syntax': ['error', {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    }],

    // Disallow the use of ternary operators
    'no-ternary': 'off',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': ['error', {
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
    }],

    // Disallow the use of Boolean literals in conditional expressions also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', {
        defaultAssignment: false,
    }],

    // Allow just one var statement per function
    'one-var': ['error', 'never'],

    // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],

    // Disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'error',

    // Requires object keys to be sorted
    'sort-keys': 'off',

    // Sort variables within the same declaration block
    'sort-vars': 'off',

    // Require or disallow the Unicode Byte Order Mark
    'unicode-bom': ['error', 'never'],
};
