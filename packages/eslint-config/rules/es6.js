module.exports = {
    // Enforces no braces where they can be omitted
    'arrow-body-style': ['error', 'as-needed'],

    // Verify super() callings in constructors
    'constructor-super': 'error',

    // Disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // Disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // Disallow duplicate class members
    'no-dupe-class-members': 'error',

    // Disallow importing from the same path more than once
    'no-duplicate-imports': 'off',

    // Disallow symbol constructor
    'no-new-symbol': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': ['error', {
        restrictedNamedExports: ['default', 'then'],
    }],

    // Disallow to use this/super before super() calling in constructors
    'no-this-before-super': 'error',

    // Disallow useless computed property keys
    'no-useless-computed-key': 'error',

    // Disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error', {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
    }],

    // Require let or const instead of var
    'no-var': 'error',

    // Require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always', {
        avoidQuotes: true,
        ignoreConstructors: false,
    }],

    // Suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'error',

    // Suggest using of const declaration for variables that are never modified after declared
    'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
    }],

    // Prefer destructuring from arrays and objects
    'prefer-destructuring': [
        'error',
        {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: true,
                object: false,
            },
        },
        {
            enforceForRenamedProperties: false,
        },
    ],

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // Suggest using Reflect methods where applicable
    'prefer-reflect': 'off',

    // Use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // Suggest using the spread syntax instead of .apply()
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // Disallow generator functions that do not have yield
    'require-yield': 'error',

    // Import sorting
    'sort-imports': ['off', {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // Require a Symbol description
    'symbol-description': 'error',
};
