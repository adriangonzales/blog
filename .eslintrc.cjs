module.exports = {
    env: {
        node: true,
    },
    plugins: ['import', "unused-imports"],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off', // certain the content passed to v-html is sanitized HTML
        'vue/require-default-prop': 'off',

        'import/no-unresolved': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    ['sibling', 'parent'],
                    'index',
                    'unknown',
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './components']],
            },
        },
    },
    globals: {
        axios: 'readonly',
        route: 'readonly',
    },
};
