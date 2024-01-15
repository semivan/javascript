module.exports = {
    // Enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // Disallow deletion of variables
    'no-delete-var': 'error',

    // Disallow labels that share a name with a variable
    'no-label-var': 'error',

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

    // Disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // Disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // Disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // Disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // Disallow use of undefined variable
    'no-undefined': 'off',

    // Disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
    }],

    // Disallow use of variables before they are defined
    'no-use-before-define': ['error', {
        functions: false,
        classes: false,
        variables: true,
    }],
};
