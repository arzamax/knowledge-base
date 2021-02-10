module.exports = {
  env: {
    es6: true,
      jest: true,
      browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'prettier/@typescript-eslint',
    ],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'avoid',
          trailingComma: 'es5',
          tabWidth: 2,
          singleQuote: true,
          printWidth: 100,
        },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
    },
};