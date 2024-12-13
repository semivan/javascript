import parentRules from '@semivan/eslint-config/rules';

export default {
    'dot-notation': 'off',
    'no-implied-eval': 'off',
    'no-throw-literal': 'off',
    'prefer-destructuring': 'off',
    'prefer-promise-reject-errors': 'off',
    'require-await': 'off',

    // Disallow awaiting a value that is not a Thenable
    '@typescript-eslint/await-thenable': 'error',

    // Require return statements to either always or never specify values
    // '@typescript-eslint/consistent-return': 'off',

    // Enforce consistent usage of type exports
    '@typescript-eslint/consistent-type-exports': ['error', {
        fixMixedExportsWithInlineTypeSpecifier: true,
    }],

    // Enforce dot notation whenever possible
    '@typescript-eslint/dot-notation': parentRules['dot-notation'] ?? 'off',

    // TODO: enable?
    // Enforce naming conventions for everything across a codebase
    '@typescript-eslint/naming-convention': 'off',

    // Disallow using the delete operator on array values
    '@typescript-eslint/no-array-delete': 'error',

    // Require .toString() to only be called on objects which provide useful information when stringified
    '@typescript-eslint/no-base-to-string': 'error',

    // Require expressions of type void to appear in statement position
    '@typescript-eslint/no-confusing-void-expression': ['error', {
        ignoreVoidOperator: true,
    }],

    // Disallow using code marked as @deprecated
    '@typescript-eslint/no-deprecated': 'error',

    // Disallow duplicate constituents of union or intersection types
    '@typescript-eslint/no-duplicate-type-constituents': ['error', {
        ignoreIntersections: false,
        ignoreUnions: false,
    }],

    // Require Promise-like statements to be handled appropriately
    '@typescript-eslint/no-floating-promises': ['error', {
        ignoreVoid: true,
    }],

    // Disallow iterating over an array with a for-in loop
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallow the use of eval()-like methods
    '@typescript-eslint/no-implied-eval': parentRules['no-implied-eval'] ?? 'off',

    // Disallow the void operator except when used to discard a value
    '@typescript-eslint/no-meaningless-void-operator': 'error',

    // Disallow Promises in places not designed to handle them
    '@typescript-eslint/no-misused-promises': ['error', {
        checksConditionals: true,
        checksVoidReturn: true,
        checksSpreads: true,
    }],

    // Disallow enums from having both number and string members
    '@typescript-eslint/no-mixed-enums': 'error',

    // Disallow members of unions and intersections that do nothing or override type information
    '@typescript-eslint/no-redundant-type-constituents': 'error',

    // Disallow throwing literals as exceptions
    // '@typescript-eslint/no-throw-literal': parentRules['no-throw-literal'] ?? 'off',

    // Disallow unnecessary equality comparisons against boolean literals
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // Disallow conditionals where the type is always truthy or always falsy
    '@typescript-eslint/no-unnecessary-condition': 'off',

    // Disallow unnecessary namespace qualifiers
    '@typescript-eslint/no-unnecessary-qualifier': 'error',

    // Disallow unnecessary template expressions
    '@typescript-eslint/no-unnecessary-template-expression': 'error',

    // Disallow type arguments that are equal to the default
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',

    // Disallow type assertions that do not change the type of an expression
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallow type parameters that aren't used multiple times
    '@typescript-eslint/no-unnecessary-type-parameters': 'error',

    // Disallow calling a function with a value with type any
    '@typescript-eslint/no-unsafe-argument': 'error',

    // Disallow assigning a value with type any to variables and properties
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // Disallow calling a value with type any
    '@typescript-eslint/no-unsafe-call': 'error',

    // Disallow comparing an enum value with a non-enum value
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',

    // Disallow member access on a value with type any
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // Disallow returning a value with type any from a function
    '@typescript-eslint/no-unsafe-return': 'error',

    // Disallow type assertions that narrow a type
    '@typescript-eslint/no-unsafe-type-assertion': 'error',

    // Require unary negation to take a number
    '@typescript-eslint/no-unsafe-unary-minus': 'off',

    // Enforce non-null assertions over explicit type casts
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',

    // Disallow throwing non-Error values as exceptions
    '@typescript-eslint/only-throw-error': parentRules['no-throw-literal'] ?? 'off',

    // Require destructuring from arrays and/or objects
    '@typescript-eslint/prefer-destructuring': parentRules['prefer-destructuring'] ?? 'off',

    // Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
    '@typescript-eslint/prefer-find': 'error',

    // Enforce includes method over indexOf method
    '@typescript-eslint/prefer-includes': 'error',

    // Enforce using the nullish coalescing operator instead of logical assignments or chaining
    '@typescript-eslint/prefer-nullish-coalescing': 'off',

    // Enforce using concise optional chain expressions instead of chained logical ands,
    // negated logical ors, or empty objects
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Require using Error objects as Promise rejection reasons
    '@typescript-eslint/prefer-promise-reject-errors': ['error', {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
    }],

    // Require private members to be marked as readonly if they're never modified outside of the constructor
    '@typescript-eslint/prefer-readonly': 'off',

    // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Enforce using type parameter when calling Array#reduce instead of casting
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',

    // Enforce RegExp#exec over String#match if no global flag is provided
    '@typescript-eslint/prefer-regexp-exec': 'off',

    // Enforce that this is used when only this type is returned
    '@typescript-eslint/prefer-return-this-type': 'error',

    // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    // Require any function or method that returns a Promise to be marked async
    '@typescript-eslint/promise-function-async': 'off',

    // Enforce that get() types should be assignable to their equivalent set() type
    '@typescript-eslint/related-getter-setter-pairs': 'off',

    // Require Array#sort and Array#toSorted calls to always provide a compareFunction
    '@typescript-eslint/require-array-sort-compare': 'off',

    // Disallow async functions which have no await expression
    '@typescript-eslint/require-await': parentRules['require-await'] ?? 'off',

    // Require both operands of addition to be the same type and be bigint, number, or string
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Enforce template literal expressions to be of string type
    '@typescript-eslint/restrict-template-expressions': ['error', {
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true,
    }],

    // Enforce consistent returning of awaited values
    '@typescript-eslint/return-await': parentRules['no-return-await'] ?? 'off',

    // Disallow certain types in boolean expressions
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Require switch-case statements to be exhaustive
    '@typescript-eslint/switch-exhaustiveness-check': 'off',

    // Enforce unbound methods are called with their expected scope
    '@typescript-eslint/unbound-method': 'error',

    // Enforce typing arguments in Promise rejection callbacks as unknown
    '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
};
