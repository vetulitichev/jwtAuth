module.exports = {
  'extends': [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  'plugins': [
    'react'
  ],
  'globals': {
    '$': true,
    'jQuery': true
  },
  'rules': {
    'prettier/prettier': 'error',
    'react/jsx-uses-vars': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "components": ["Link"],
                "specialLink": ["to", "hrefLeft", "hrefRight"],
                "aspects": ["noHref", "invalidHref", "preferButton"]
            }
        ],
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
  },
  
  'parser': 'babel-eslint',

  'parserOptions': {
    'ecmaVersion': 2017,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module'
  },
}
