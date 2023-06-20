module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ['./tsconfig.json']
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "settings": {
    "import/resolver": {
      "typescript": {}
    },
  },
  "globals": {
    "cy": true,
    "describe": true,
    "it": true
  },
  "rules": {
    "no-restricted-exports": ["error", {"restrictedNamedExports": [] }],
    "react/function-component-definition": ["error", {
      "namedComponents": ["arrow-function"],
      "unnamedComponents": ["arrow-function"],
    }],
    "react/react-in-jsx-scope": "off",
    "comma-dangle": ["error", "never"],
    "react/button-has-type": "off",
    "react/require-default-props": "off"
  }
}
