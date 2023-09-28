module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
};
