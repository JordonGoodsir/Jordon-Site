module.exports = {
    "parser": "vue-eslint-parser",
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "standard-with-typescript",
    ],
    "overrides": [
        {
            "env": {
                "node": true,
                'vue/setup-compiler-macros': true,
            },
            "files": [
                ".eslintrc.{js,cjs,vue,ts}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "extraFileExtensions": [".vue"]
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        "@typescript-eslint/no-floating-promises": "off"
    }
}
