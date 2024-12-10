export default {
    // Disallow use other than available lang
    'vue/block-lang': 'off',

    // Enforce order of component top-level elements
    'vue/block-order': ['error', {
        order: [
            'docs',
            'script:not([setup])',
            'script[setup]',
            'template',
            'style:not([scoped])',
            'style[scoped]',
        ],
    }],

    // Enforce line breaks after opening and before closing block-level tags
    // 'vue/block-tag-newline': 'off',

    // Enforce component API style
    'vue/component-api-style': ['error', ['script-setup', 'composition']],

    // TODO: enable?
    // Enforce specific casing for the component naming style in template
    'vue/component-name-in-template-casing': 'off',

    // Enforce the casing of component name in components options
    'vue/component-options-name-casing': 'off',

    // Enforce specific casing for custom event name
    'vue/custom-event-name-casing': 'off',

    // Enforce declaration style of defineEmits
    'vue/define-emits-declaration': ['error', 'type-based'],

    // Enforce order of defineEmits and defineProps compiler macros
    'vue/define-macros-order': 'off',

    // Enforce declaration style of defineProps
    'vue/define-props-declaration': ['error', 'type-based'],

    // TODO: enable?
    // Enforce or forbid the use of the scoped and module attributes in SFC top level style tags
    'vue/enforce-style-attribute': 'off',

    // Disallow usage of button without an explicit type attribute
    'vue/html-button-has-type': ['error', {
        button: true,
        submit: true,
        reset: true,
    }],

    // Enforce unified line brake in HTML comments
    'vue/html-comment-content-newline': ['error', {
        singleline: 'never',
        multiline: 'always',
    }],

    // Enforce unified spacing in HTML comments
    'vue/html-comment-content-spacing': ['error', 'always'],

    // Enforce consistent indentation in HTML comments
    'vue/html-comment-indent': ['error', 4],

    // Require component name property to match its file name
    'vue/match-component-file-name': ['error', {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
        shouldMatchCase: false,
    }],

    // Require the registered component name to match the imported component name
    'vue/match-component-import-name': 'error',

    // Enforce maximum number of lines in Vue SFC blocks
    'vue/max-lines-per-block': 'off',

    // ???
    // 'vue/max-props': null,

    // ???
    // 'vue/max-template-depth': null,

    // Enforce new lines between multi-line properties in Vue components
    'vue/new-line-between-multi-line-property': 'off',

    // Enforce Promise or callback style in nextTick
    'vue/next-tick-style': ['error', 'callback'],

    // Disallow the use of bare strings in <template>
    'vue/no-bare-strings-in-template': 'off',

    // Disallow boolean defaults
    'vue/no-boolean-default': 'off',

    // ???
    // 'vue/no-deprecated-delete-set': null,

    // Disallow deprecated model definition
    'vue/no-deprecated-model-definition': 'error',

    // Enforce inheritAttrs to be set to false when using v-bind="$attrs"
    'vue/no-duplicate-attr-inheritance': 'error',

    // Disallow the <template> <script> <style> block to be empty
    'vue/no-empty-component-block': 'error',

    // Disallow to pass multiple objects into array to class
    'vue/no-multiple-objects-in-class': 'error',

    // Disallow a potential typo in your component property
    // 'vue/no-potential-component-option-typo': 'error',

    // Disallow usages of ref objects that can lead to loss of reactivity
    // 'vue/no-ref-object-reactivity-loss': 'error',

    // Enforce props with default values to be optional
    'vue/no-required-prop-with-default': ['error', {
        autofix: false,
    }],

    // Disallow specific block
    'vue/no-restricted-block': 'off',

    // Disallow asynchronously called restricted methods
    // 'vue/no-restricted-call-after-await': 'error',

    // Disallow specific classes in Vue components
    'vue/no-restricted-class': 'off',

    // Disallow specific component names
    'vue/no-restricted-component-names': 'off',

    // Disallow specific component option
    'vue/no-restricted-component-options': 'off',

    // Disallow specific custom event
    'vue/no-restricted-custom-event': 'off',

    // Disallow specific HTML elements
    'vue/no-restricted-html-elements': 'off',

    // Disallow specific props
    'vue/no-restricted-props': 'off',

    // Disallow specific attribute
    'vue/no-restricted-static-attribute': 'off',

    // Disallow specific argument in v-bind
    'vue/no-restricted-v-bind': 'off',

    // ???
    // 'vue/no-restricted-v-on': null,

    // Disallow v-if directives on root element
    'vue/no-root-v-if': 'off',

    // Disallow usages that lose the reactivity of props passed to setup
    'vue/no-setup-props-reactivity-loss': 'off',

    // Disallow static inline style attributes
    'vue/no-static-inline-styles': 'off',

    // Disallow target="_blank" attribute without rel="noopener noreferrer"
    'vue/no-template-target-blank': 'error',

    // Disallow this usage in a beforeRouteEnter method
    'vue/no-this-in-before-route-enter': 'error',

    // Disallow use of undefined components in <template>
    // This rule cannot check globally registered components and components registered in mixins unless you add them as part of the ignored patterns
    'vue/no-undef-components': 'off',

    // Disallow undefined properties
    'vue/no-undef-properties': 'error',

    // Disallow unsupported Vue.js syntax on the specified version
    // 'vue/no-unsupported-features': 'off',

    // Disallow unused emit declarations
    'vue/no-unused-emit-declarations': 'off',

    // Disallow unused properties
    'vue/no-unused-properties': 'off',

    // Disallow unused refs
    'vue/no-unused-refs': 'off',

    // Disallow using v-else-if/v-else on the same element as v-for
    'vue/no-use-v-else-with-v-for': 'error',

    // Disallow unnecessary mustache interpolations
    'vue/no-useless-mustaches': 'error',

    // Disallow unnecessary v-bind directives
    'vue/no-useless-v-bind': 'error',

    // Disallow use of v-text
    'vue/no-v-text': 'error',

    // Require or disallow padding lines between blocks
    'vue/padding-line-between-blocks': ['error', 'always'],

    // Require or disallow newlines between sibling tags in template
    'vue/padding-line-between-tags': 'off',

    // Require or disallow padding lines in component definition
    'vue/padding-lines-in-component-definition': 'off',

    // Enforce use of defineOptions instead of default export.
    'vue/prefer-define-options': 'error',

    // Enforce Boolean comes first in component prop types
    'vue/prefer-prop-type-boolean-first': 'error',

    // Require static class names in template to be in a separate class attribute
    'vue/prefer-separate-static-class': 'error',

    // Require shorthand form attribute when v-bind value is true
    'vue/prefer-true-attribute-shorthand': 'off',

    // ???
    // 'vue/prefer-use-template-ref': null,

    // ???
    // 'vue/require-default-export': null,

    // Require the component to be directly exported
    'vue/require-direct-export': ['error', {
        disallowFunctionalComponentFunction: false,
    }],

    // Require type definitions in emits
    'vue/require-emit-validator': 'error',

    // ???
    // 'vue/require-explicit-slots': null,

    // Require declare public properties using expose
    'vue/require-expose': 'off',

    // Require a certain macro variable name
    'vue/require-macro-variable-name': ['error', {
        defineProps: 'props',
        defineEmits: 'emit',
        defineSlots: 'slots',
        useSlots: 'slots',
        useAttrs: 'attrs',
    }],

    // Require a name property in Vue components
    'vue/require-name-property': 'off',

    // Require props to have a comment
    'vue/require-prop-comment': 'off',

    // Enforce adding type declarations to object props
    'vue/require-typed-object-prop': 'error',

    // Require ref and shallowRef functions to be strongly typed
    'vue/require-typed-ref': 'error',

    // ???
    // 'vue/restricted-component-names': null,

    // Enforce consistent indentation in <script>
    'vue/script-indent': ['error', 4, {
        baseIndent: 1,
        switchCase: 1,
    }],

    // ???
    // 'vue/slot-name-casing': null,

    // Enforce sort-keys in a manner that is compatible with order-in-components
    'vue/sort-keys': 'off',

    // Enforce static class names order
    'vue/static-class-names-order': 'off',

    // Enforce v-for directive's delimiter style
    'vue/v-for-delimiter-style': ['error', 'in'],

    // Require key attribute for conditionally rendered repeated components
    'vue/v-if-else-key': 'off',

    // Enforce writing style for handlers in v-on directives
    'vue/v-on-handler-style': 'off',

    // Enforce valid defineOptions compiler macro
    'vue/valid-define-options': 'error',
};
