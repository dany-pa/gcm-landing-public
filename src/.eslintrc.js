module.exports = {
    globals: {
        __DEV__: true
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:promise/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    plugins: ['prettier', 'react-hooks', 'react', '@emotion'],
    settings: {
        react: {
            version: 'detect'
        },
        componentWrapperFunctions: [
            {property: 'styled'}
        ]
    },
    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser:'@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                },
                warnOnUnsupportedTypeScriptVersion: true,
                project: '/tsconfig.json'
            }
        }
    ]
}