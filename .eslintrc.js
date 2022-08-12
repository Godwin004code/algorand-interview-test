module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ["react", 'import']
}