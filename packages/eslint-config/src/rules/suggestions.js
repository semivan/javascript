export default {
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // Enforces no braces where they can be omitted
    'arrow-body-style': ['error', 'as-needed'],

    // Treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // Require camel case names
    'camelcase': ['error', {
        properties: 'always',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
    }],

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // Enforce that class methods use "this"
    'class-methods-use-this': 'error',

    // Specify the maximum cyclomatic complexity allowed in a program
    'complexity': ['off', 20],

    // Require return statements to either always or never specify values
    'consistent-return': 'off',

    // Enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // Specify curly brace conventions for all control statements
    'curly': ['error', 'multi-line'],

    // Require default case in switch statements
    'default-case': ['error', {
        commentPattern: '^no default$',
    }],

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'error',

    // Enforce default parameters to be last
    'default-param-last': 'error',

    // Encourages use of dot notation whenever possible
    'dot-notation': ['error', {
        allowKeywords: true,
        allowPattern: '^[a-z]+(_[a-z]+)+$',
    }],

    // Require the use of === and !==
    'eqeqeq': ['error', 'smart'],

    // Requires function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // Require function expressions to have a name
    'func-names': ['warn', 'as-needed'],

    // Enforces use of function declarations or expressions
    'func-style': 'off',

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'error',

    // Make sure for-in loops have an if statement
    'guard-for-in': 'off',

    // Disallow specified identifiers
    'id-denylist': 'off',

    // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': 'off',

    // Require identifiers to match the provided regular expression
    'id-match': 'off',

    // Enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // Require or disallow logical assignment logical operator shorthand
    'logical-assignment-operators': ['error', 'always', {
        enforceForIfStatements: true,
    }],

    // Enforce a maximum number of classes per file
    'max-classes-per-file': ['error', 1],

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

    // Require a capital letter for constructors
    'new-cap': ['error', {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // Disallow the use of alert, confirm, and prompt
    'no-alert': 'error',

    // Disallow use of the Array constructor
    'no-array-constructor': 'error',

    // Disallow use of bitwise operators
    'no-bitwise': 'error',

    // Disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // Disallow lexical declarations in case/default clauses
    'no-case-declarations': 'error',

    // Disallow use of console
    'no-console': 'warn',

    // Disallow use of the continue statement
    'no-continue': 'off',

    // Disallow deletion of variables
    'no-delete-var': 'error',

    // Disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',

    // Disallow else after a return in an if
    'no-else-return': 'error',

    // Disallow empty statements
    'no-empty': 'error',

    // Disallow empty functions
    'no-empty-function': ['error', {
        allow: [
            'arrowFunctions',
            'constructors',
            'functions',
            'methods',
        ],
    }],

    // Disallow empty static blocks
    'no-empty-static-block': 'error',

    // Disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // Disallow use of eval()
    'no-eval': 'error',

    // Disallow adding to native types
    'no-extend-native': 'error',

    // Disallow unnecessary function binding
    'no-extra-bind': 'error',

    // Disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // Disallow Unnecessary Labels
    'no-extra-label': 'error',

    // Disallow reassignments of native objects or read-only globals
    'no-global-assign': 'error',

    // Disallow implicit type conversions
    'no-implicit-coercion': ['error', {
        boolean: false,
        number: true,
        string: true,
    }],

    // Disallow var and named functions in global scope
    'no-implicit-globals': 'error',

    // Disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // Disallow comments inline after code
    'no-inline-comments': 'off',

    // Disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'error',

    // Disallow usage of __iterator__ property
    'no-iterator': 'error',

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

    // Disallow use of labels for anything other than loops and switches
    'no-labels': ['error', {
        allowLoop: false,
        allowSwitch: false,
    }],

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // Disallow creation of functions within loops
    'no-loop-func': 'error',

    // Disallow magic numbers
    'no-magic-numbers': 'off',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // Disallow use of multiline strings
    'no-multi-str': 'error',

    // Disallow negated conditions
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow use of new operator when not part of the assignment or comparison
    'no-new': 'error',

    // Disallow use of new operator for Function object
    'no-new-func': 'error',

    // Disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // Disallow \8 and \9 escape sequences in string literals
    'no-nonoctal-decimal-escape': 'error',

    // Disallow calls to the Object constructor without an argument
    'no-object-constructor': 'error',

    // Disallow use of (old style) octal literals
    'no-octal': 'error',

    // Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // Disallow reassignment of function parameters
    'no-param-reassign': 'off',

    // Disallow use of unary operators, ++ and --
    'no-plusplus': 'off',

    // Disallow usage of __proto__ property
    'no-proto': 'error',

    // Disallow declaring the same variable more than once
    'no-redeclare': 'error',

    // Disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': ['error', {
        restrictedNamedExports: ['default', 'then'],
    }],

    // Disallow specific globals
    'no-restricted-globals': [
        'error',
        {
            name: 'isFinite',
            message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
        },
        {
            name: 'isNaN',
            message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
        },
    ],

    // Disallow specified modules when loaded by import
    // 'no-restricted-imports': 'off',

    // Disallow certain object properties
    'no-restricted-properties': [
        'error',
        { object: 'arguments', property: 'callee', message: 'arguments.callee is deprecated' },
        { object: 'global', property: 'isFinite', message: 'Please use Number.isFinite instead' },
        { object: 'self', property: 'isFinite', message: 'Please use Number.isFinite instead' },
        { object: 'window', property: 'isFinite', message: 'Please use Number.isFinite instead' },
        { object: 'global', property: 'isNaN', message: 'Please use Number.isNaN instead' },
        { object: 'self', property: 'isNaN', message: 'Please use Number.isNaN instead' },
        { object: 'window', property: 'isNaN', message: 'Please use Number.isNaN instead' },
        { property: '__defineGetter__', message: 'Please use Object.defineProperty instead.' },
        { property: '__defineSetter__', message: 'Please use Object.defineProperty instead.' },
        { object: 'Math', property: 'pow', message: 'Use the exponentiation operator (**) instead.' },
    ],

    // Disallow certain syntax forms
    'no-restricted-syntax': ['error', {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    }],

    // Disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // Disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // Disallow use of comma operator
    'no-sequences': 'error',

    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // Disallow the use of ternary operators
    'no-ternary': 'off',

    // Restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    'no-undefined': 'off',

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

    // Disallow usage of expressions in statement position
    'no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
    }],

    // Disallow unused labels
    'no-unused-labels': 'error',

    // Disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // Disallow unnecessary catch clauses
    'no-useless-catch': 'error',

    // Disallow useless computed property keys
    'no-useless-computed-key': 'error',

    // Disallow useless string concatenation
    'no-useless-concat': 'error',

    // Disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // Disallow unnecessary string escaping
    'no-useless-escape': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': ['error', {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
    }],

    // Disallow redundant return; keywords
    'no-useless-return': 'error',

    // Require let or const instead of var
    'no-var': 'error',

    // Disallow use of void operator
    'no-void': ['error', {
        allowAsStatement: true,
    }],

    // Disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': 'off',

    // Disallow use of the with statement
    'no-with': 'error',

    // Require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always', {
        avoidQuotes: true,
        ignoreConstructors: false,
    }],

    // Allow just one var statement per function
    'one-var': ['error', 'never'],

    // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],

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

    // Disallow the use of Math.pow in favor of the ** operator
    'prefer-exponentiation-operator': 'error',

    // Suggest using named capture group in regular expression
    'prefer-named-capture-group': 'off',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
    'prefer-object-has-own': 'error',

    // Prefer use of an object spread over Object.assign
    'prefer-object-spread': 'error',

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'error',

    // Disallow use of the RegExp constructor in favor of regular expression literals
    'prefer-regex-literals': ['error', {
        disallowRedundantWrapping: true,
    }],

    // Use rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // Suggest using the spread syntax instead of .apply()
    'prefer-spread': 'error',

    // Suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // Require use of the second argument for parseInt()
    'radix': 'error',

    // Require `await` in `async function`
    'require-await': 'off',

    // Enforce the use of u flag on RegExp
    'require-unicode-regexp': 'off',

    // Disallow generator functions that do not have yield
    'require-yield': 'error',

    // Import sorting
    'sort-imports': ['off', {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    }],

    // Requires object keys to be sorted
    'sort-keys': 'off',

    // Sort variables within the same declaration block
    'sort-vars': 'off',

    // Require or disallow strict mode directives
    'strict': ['error', 'never'],

    // Require a Symbol description
    'symbol-description': 'error',

    // Requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',

    // Require or disallow Yoda conditions
    'yoda': ['error', 'never'],
};
