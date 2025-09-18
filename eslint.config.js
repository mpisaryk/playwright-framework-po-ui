import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-config-prettier';
export default [
    {
        files: ['**/*.{ts,js}'],
        ignores: [
            'node_modules/**',
            'dist/**',
            '.playwright/**',
            'coverage/**',
            'eslint.config.js',
        ],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: process.cwd(),
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            playwright,
        },
        rules: {
            // TypeScript rules
            ...tsPlugin.configs.recommended.rules,
            ...tsPlugin.configs['recommended-requiring-type-checking'].rules,
            // Playwright rules
            ...playwright.configs.recommended.rules,
            quotes: 'off',
        },
    },
    prettier,
];
