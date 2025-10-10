module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-navigation|@rn-primitives)/)',
  ],
  setupFiles: ['<rootDir>/jest-setup.js'],
  moduleNameMapper: {
    '^@react-native/js-polyfills/error-guard$':
      '<rootDir>/__mocks__/error-guard.js',
    '^.*\\.(ttf|otf)$': '<rootDir>/__mocks__/font.js',
    '^.+\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
};
