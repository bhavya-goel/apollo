module.exports = {
  moduleFileExtensions: [
    'js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  testMatch: [
    '**/tests/**/*.(test|spec).(js)'
  ],
  testEnvironment: 'node'
}
