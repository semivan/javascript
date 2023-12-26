module.exports = {
    // Enforce linebreaks after opening and before closing array brackets
    '@stylistic/array-bracket-newline': ['error', 'consistent'],

    // Enforce consistent spacing inside array brackets
    '@stylistic/array-bracket-spacing': ['error', 'never'],

    // Enforce line breaks after each array element
    '@stylistic/array-element-newline': ['error', 'consistent'],

    // Require parentheses around arrow function arguments
    '@stylistic/arrow-parens': ['error', 'as-needed', {
        requireForBlockBody: false,
    }],

    // Enforce consistent spacing before and after the arrow in arrow functions
    '@stylistic/arrow-spacing': ['error', {
        before: true,
        after: true,
    }],

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    '@stylistic/block-spacing': ['error', 'always'],

    // Enforce consistent brace style for blocks
    '@stylistic/brace-style': ['error', '1tbs', {
        allowSingleLine: true,
    }],

    // Require or disallow trailing commas
    '@stylistic/comma-dangle': ['error', 'always-multiline'],

    // Enforce consistent spacing before and after commas
    '@stylistic/comma-spacing': ['error', {
        before: false,
        after: true,
    }],

    // Enforce consistent comma style
    '@stylistic/comma-style': ['error', 'last', {
        exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
        },
    }],

    // Enforce consistent spacing inside computed property brackets
    '@stylistic/computed-property-spacing': ['error', 'never'],

    // Enforce consistent newlines before and after dots
    '@stylistic/dot-location': ['error', 'property'],

    // Require or disallow newline at the end of files
    '@stylistic/eol-last': ['error', 'always'],

    // Require or disallow spacing between function identifiers and their invocations. Alias of `function-call-spacing`.
    '@stylistic/func-call-spacing': ['error', 'never'],

    // Enforce line breaks between arguments of a function call
    '@stylistic/function-call-argument-newline': ['error', 'consistent'],

    // Require or disallow spacing between function identifiers and their invocations
    '@stylistic/function-call-spacing': ['error', 'never'],

    // Enforce consistent line breaks inside function parentheses
    '@stylistic/function-paren-newline': ['error', 'multiline-arguments'],

    // Enforce consistent spacing around `*` operators in generator functions
    '@stylistic/generator-star-spacing': ['error', {
        before: false,
        after: true,
    }],

    // Enforce the location of arrow function bodies
    '@stylistic/implicit-arrow-linebreak': ['error', 'beside'],

    // Enforce consistent indentation
    '@stylistic/indent': ['error', 4, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        StaticBlock: { body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: false,
        ignoreComments: false,
    }],

    // Indentation for binary operators
    '@stylistic/indent-binary-ops': ['error', 4],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    '@stylistic/jsx-child-element-spacing': 'off',

    // Enforce closing bracket location in JSX
    '@stylistic/jsx-closing-bracket-location': 'error',

    // Enforce closing tag location for multiline JSX
    '@stylistic/jsx-closing-tag-location': 'error',

    // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals
    // in JSX children or attributes
    '@stylistic/jsx-curly-brace-presence': ['error', 'never'],

    // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
    '@stylistic/jsx-curly-newline': ['error', {
        multiline: 'consistent',
        singleline: 'consistent',
    }],

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
    '@stylistic/jsx-curly-spacing': ['error', {
        when: 'never',
    }],

    // Enforce or disallow spaces around equal signs in JSX attributes
    '@stylistic/jsx-equals-spacing': ['error', 'never'],

    // Enforce JSX indentation
    '@stylistic/jsx-indent': ['error', 4],

    // Enforce props indentation in JSX
    '@stylistic/jsx-indent-props': ['error', 4],

    // Enforce maximum of props on a single line in JSX
    '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: {
            single: 4,
            multi: 1,
        },
    }],

    // Require or prevent a new line after jsx elements and expressions
    '@stylistic/jsx-newline': 'off',

    // Require one JSX element per line
    '@stylistic/jsx-one-expression-per-line': 'off',

    // Disallow multiple spaces between inline JSX props
    '@stylistic/jsx-props-no-multi-spaces': 'error',

    // Enforce the consistent use of either double or single quotes in JSX attributes
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],

    // Disallow extra closing tags for components without children
    '@stylistic/jsx-self-closing-comp': ['error', {
        component: true,
        html: true,
    }],

    // Enforce props alphabetical sorting
    '@stylistic/jsx-sort-props': 'off',

    // Enforce whitespace in and around the JSX opening and closing brackets
    '@stylistic/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow',
    }],

    // Disallow missing parentheses around multiline JSX
    '@stylistic/jsx-wrap-multilines': 'off',

    // Enforce consistent spacing between keys and values in object literal properties
    '@stylistic/key-spacing': ['error', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
    }],

    // Enforce consistent spacing before and after keywords
    '@stylistic/keyword-spacing': ['error', {
        before: true,
        after: true,
    }],

    // Enforce consistent linebreak style
    '@stylistic/linebreak-style': ['error', 'unix'],

    // Require empty lines around comments
    '@stylistic/lines-around-comment': 'off',

    // Require or disallow an empty line between class members
    '@stylistic/lines-between-class-members': ['error', 'always', {
        exceptAfterSingleLine: false,
    }],

    // Enforce a maximum line length
    '@stylistic/max-len': ['error', 120, 4, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
    }],

    // Enforce a maximum number of statements allowed per line
    '@stylistic/max-statements-per-line': ['off', {
        max: 1,
    }],

    // Require a specific member delimiter style for interfaces and type literals
    '@stylistic/member-delimiter-style': ['error', {
        multiline: {
            delimiter: 'semi',
            requireLast: true,
        },
        singleline: {
            delimiter: 'semi',
            requireLast: false,
        },
        multilineDetection: 'brackets',
    }],

    // Enforce newlines between operands of ternary expressions
    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    '@stylistic/new-parens': 'error',

    // Require a newline after each call in a method chain
    '@stylistic/newline-per-chained-call': ['error', {
        ignoreChainWithDepth: 4,
    }],

    // Disallow arrow functions where they could be confused with comparisons
    '@stylistic/no-confusing-arrow': ['error', {
        allowParens: true,
    }],

    // Disallow unnecessary parentheses
    '@stylistic/no-extra-parens': ['off', 'all', {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
    }],

    // Disallow unnecessary semicolons
    '@stylistic/no-extra-semi': 'error',

    // Disallow leading or trailing decimal points in numeric literals
    '@stylistic/no-floating-decimal': 'error',

    // Disallow mixed binary operators
    '@stylistic/no-mixed-operators': ['error', {
        // The list of arithmetic groups disallows mixing `%` and `**` with other arithmetic operators.
        groups: [
            ['%', '**'],
            ['%', '+'],
            ['%', '-'],
            ['%', '*'],
            ['%', '/'],
            ['/', '*'],
            ['&', '|', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!=='],
            ['&&', '||'],
        ],
        allowSamePrecedence: false,
    }],

    // Disallow mixed spaces and tabs for indentation
    '@stylistic/no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple spaces
    '@stylistic/no-multi-spaces': ['error', {
        ignoreEOLComments: false,
    }],

    // Disallow multiple empty lines
    '@stylistic/no-multiple-empty-lines': ['error', {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
    }],

    // Disallow all tabs
    '@stylistic/no-tabs': 'error',

    // Disallow trailing whitespace at the end of lines
    '@stylistic/no-trailing-spaces': ['error', {
        skipBlankLines: false,
        ignoreComments: false,
    }],

    // Disallow whitespace before properties
    '@stylistic/no-whitespace-before-property': 'error',

    // Enforce the location of single-line statements
    '@stylistic/nonblock-statement-body-position': ['error', 'beside'],

    // Enforce consistent line breaks after opening and before closing braces
    '@stylistic/object-curly-newline': ['error', {
        consistent: true,
    }],

    // Enforce consistent spacing inside braces
    '@stylistic/object-curly-spacing': ['error', 'always'],

    // Enforce placing object properties on separate lines
    '@stylistic/object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
    }],

    // Require or disallow newlines around variable declarations
    '@stylistic/one-var-declaration-per-line': ['error', 'always'],

    // Enforce consistent linebreak style for operators
    '@stylistic/operator-linebreak': ['error', 'before', {
        overrides: { '=': 'none' },
    }],

    // Require or disallow padding within blocks
    '@stylistic/padded-blocks': ['error', 'never', {
        allowSingleLineBlocks: true,
    }],

    // Require or disallow padding lines between statements
    '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],

    // Require quotes around object literal property names
    '@stylistic/quote-props': ['error', 'consistent-as-needed', {
        keywords: false,
    }],

    // Enforce the consistent use of either backticks, double, or single quotes
    '@stylistic/quotes': ['error', 'single', {
        avoidEscape: true,
    }],

    // Enforce spacing between rest and spread operators and their expressions
    '@stylistic/rest-spread-spacing': ['error', 'never'],

    // Require or disallow semicolons instead of ASI
    '@stylistic/semi': ['error', 'always', {
        omitLastInOneLineBlock: true,
    }],

    // Enforce consistent spacing before and after semicolons
    '@stylistic/semi-spacing': ['error', {
        before: false,
        after: true,
    }],

    // Enforce location of semicolons
    '@stylistic/semi-style': ['error', 'last'],

    // Enforce consistent spacing before blocks
    '@stylistic/space-before-blocks': 'error',

    // Enforce consistent spacing before `function` definition opening parenthesis
    '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
    }],

    // Enforce consistent spacing inside parentheses
    '@stylistic/space-in-parens': ['error', 'never'],

    // Require spacing around infix operators
    '@stylistic/space-infix-ops': 'error',

    // Enforce consistent spacing before or after unary operators
    '@stylistic/space-unary-ops': ['error', {
        words: true,
        nonwords: false,
    }],

    // Enforce consistent spacing after the `//` or `/*` in a comment
    '@stylistic/spaced-comment': ['error', 'always', {
        line: {
            exceptions: ['-', '+'],
            markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
        },
        block: {
            exceptions: ['-', '+'],
            markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
            balanced: true,
        },
    }],

    // Enforce spacing around colons of switch statements
    '@stylistic/switch-colon-spacing': ['error', {
        after: true,
        before: false,
    }],

    // Require or disallow spacing around embedded expressions of template strings
    '@stylistic/template-curly-spacing': 'error',

    // Require or disallow spacing between template tags and their literals
    '@stylistic/template-tag-spacing': ['error', 'never'],

    // Require consistent spacing around type annotations
    '@stylistic/type-annotation-spacing': 'error',

    // Enforces consistent spacing inside TypeScript type generics
    '@stylistic/type-generic-spacing': ['error'],

    // Expect space before the type declaration in the named tuple
    '@stylistic/type-named-tuple-spacing': ['error'],

    // Require parentheses around immediate `function` invocations
    '@stylistic/wrap-iife': ['error', 'outside', {
        functionPrototypeMethods: false,
    }],

    // Require parenthesis around regex literals
    '@stylistic/wrap-regex': 'off',

    // Require or disallow spacing around the `*` in `yield*` expressions
    '@stylistic/yield-star-spacing': ['error', 'after'],
};
