module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
   
    plugins: ["react", 'import', '@typescript-eslint'],
    extends: ["plugin:@typescript-eslint/recommended"],
    
}