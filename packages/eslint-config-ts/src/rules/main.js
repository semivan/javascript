import parentRules from '@semivan/eslint-config/rules';

export default {
    'class-methods-use-this': 'off',
    'default-param-last': 'off',
    'init-declarations': 'off',
    'max-params': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': 'off',
    'no-invalid-this': 'off',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    // 'no-restricted-imports': 'off',
    'no-shadow': 'off',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'no-return-await': 'off',

    // Require that function overload signatures be consecutive
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Require consistently using either T[] or Array<T> for arrays
    '@typescript-eslint/array-type': ['error', {
        default: 'array',
    }],

    // Disallow @ts-<directive> comments or require descriptions after directives
    '@typescript-eslint/ban-ts-comment': 'error',

    // Disallow // tslint:<rule-flag> comments
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Enforce that literals on classes are exposed in a consistent style
    '@typescript-eslint/class-literal-property-style': 'error',

    // Enforce that class methods utilize this
    '@typescript-eslint/class-methods-use-this': parentRules['class-methods-use-this'] ?? 'off',

    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
    '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],

    // Require or disallow the Record type
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Enforce consistent usage of type assertions
    '@typescript-eslint/consistent-type-assertions': ['error', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
    }],

    // Enforce type definitions to consistently use either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Enforce consistent usage of type imports
    '@typescript-eslint/consistent-type-imports': ['error', {
        fixStyle: 'inline-type-imports',
    }],

    // Enforce default parameters to be last
    '@typescript-eslint/default-param-last': parentRules['default-param-last'] ?? 'off',

    // Require explicit return types on functions and class methods
    '@typescript-eslint/explicit-function-return-type': 'off',

    // Require explicit accessibility modifiers on class properties and methods
    '@typescript-eslint/explicit-member-accessibility': 'off',

    // Require explicit return and argument types on exported functions' and classes' public class methods
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Require or disallow initialization in variable declarations
    '@typescript-eslint/init-declarations': parentRules['init-declarations'] ?? 'off',

    // Enforce a maximum number of parameters in function definitions
    '@typescript-eslint/max-params': parentRules['max-params'] ?? 'off',

    // Require a consistent member declaration order
    '@typescript-eslint/member-ordering': 'off',

    // Enforce using a particular method signature syntax
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    // Disallow generic Array constructors
    '@typescript-eslint/no-array-constructor': parentRules['no-array-constructor'] ?? 'off',

    // Disallow non-null assertion in locations that may be confusing
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Disallow duplicate class members
    '@typescript-eslint/no-dupe-class-members': 'off',

    // Disallow duplicate enum member values
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Disallow using the delete operator on computed key expressions
    '@typescript-eslint/no-dynamic-delete': 'off',

    // Disallow empty functions
    '@typescript-eslint/no-empty-function': [parentRules['no-empty-function']?.[0] ?? 'off', {
        allow: [
            ...(parentRules['no-empty-function']?.[1].allow ?? []),
            'private-constructors',
            'protected-constructors',
            'decoratedFunctions',
            'overrideMethods',
        ],
    }],

    // Disallow accidentally using the "empty object" type
    '@typescript-eslint/no-empty-object-type': 'error',

    // Disallow the any type
    '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: true,
    }],

    // Disallow extra non-null assertions
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Disallow classes used as namespaces
    '@typescript-eslint/no-extraneous-class': 'error',

    // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
    '@typescript-eslint/no-import-type-side-effects': 'error',

    // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
    '@typescript-eslint/no-inferrable-types': ['error', {
        ignoreParameters: false,
        ignoreProperties: false,
    }],

    // Disallow this keywords outside of classes or class-like objects
    '@typescript-eslint/no-invalid-this': 'off',

    // Disallow void type outside of generic or return types
    '@typescript-eslint/no-invalid-void-type': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements
    '@typescript-eslint/no-loop-func': parentRules['no-loop-func'] ?? 'off',

    // Disallow magic numbers
    '@typescript-eslint/no-magic-numbers': parentRules['no-magic-numbers'] ?? 'off',

    // Enforce valid definition of new and constructor
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow TypeScript namespaces
    '@typescript-eslint/no-namespace': 'error',

    // Disallow non-null assertions in the left operand of a nullish coalescing operator
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

    // Disallow non-null assertions after an optional chain expression
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallow non-null assertions using the ! postfix operator
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Disallow variable redeclaration
    '@typescript-eslint/no-redeclare': 'off',

    // Disallow invocation of require()
    '@typescript-eslint/no-require-imports': 'off',

    // Disallow specified modules when loaded by import
    // '@typescript-eslint/no-restricted-imports': 'off',

    // Disallow certain types
    // '@typescript-eslint/no-restricted-types': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    '@typescript-eslint/no-shadow': parentRules['no-shadow'] ?? 'off',

    // Disallow aliasing this
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow unnecessary assignment of constructor property parameter
    '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

    // Disallow unnecessary constraints on generic types
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Disallow unsafe declaration merging
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    // Disallow using the unsafe built-in Function type
    '@typescript-eslint/no-unsafe-function-type': 'error',

    // Disallow unused expressions
    '@typescript-eslint/no-unused-expressions': parentRules['no-unused-expressions'] ?? 'off',

    // Disallow unused variables
    '@typescript-eslint/no-unused-vars': parentRules['no-unused-vars'] ?? 'off',

    // Disallow the use of variables before they are defined
    '@typescript-eslint/no-use-before-define': [parentRules['no-use-before-define']?.[0] ?? 'off', {
        ...(parentRules['no-use-before-define']?.[1] ?? {}),
        enums: false,
        typedefs: false,
    }],

    // Disallow unnecessary constructors
    '@typescript-eslint/no-useless-constructor': parentRules['no-useless-constructor'] ?? 'off',

    // Disallow empty exports that don't change anything in a module file
    '@typescript-eslint/no-useless-empty-export': 'off',

    // Disallow using confusing built-in primitive class wrappers
    '@typescript-eslint/no-wrapper-object-types': 'error',

    // Require or disallow parameter properties in class constructors
    '@typescript-eslint/parameter-properties': 'off',

    // Enforce the use of as const over literal type
    '@typescript-eslint/prefer-as-const': 'error',

    // Require each enum member value to be explicitly initialized
    '@typescript-eslint/prefer-enum-initializers': 'error',

    // Enforce the use of for-of loop over the standard for loop where possible
    '@typescript-eslint/prefer-for-of': 'error',

    // Enforce using function types instead of interfaces with call signatures
    '@typescript-eslint/prefer-function-type': 'error',

    // Require all enum members to be literal values
    '@typescript-eslint/prefer-literal-enum-member': 'error',

    // Require using namespace keyword over module keyword to declare custom TypeScript modules
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Disallow certain triple slash directives in favor of ES6-style import declarations
    '@typescript-eslint/triple-slash-reference': 'error',

    // Require type annotations in certain places
    '@typescript-eslint/typedef': 'off',

    // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
    '@typescript-eslint/unified-signatures': 'off',
};
