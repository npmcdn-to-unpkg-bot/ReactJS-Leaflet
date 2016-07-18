module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": [
        "react"
    ],
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module",
        "allowImportExportEverywhere": false
    },
    "parser": "babel-eslint",
    "rules": {
        "strict": 0,
        "react/jsx-uses-react": "warn",
        "react/jsx-uses-vars": "warn",
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "off",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ]
    }
};