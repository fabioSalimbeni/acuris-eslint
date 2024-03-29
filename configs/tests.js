'use strict'

/* eslint-disable node/no-unpublished-require */
/* eslint-disable global-require */

const eslintSupport = require('../core/eslint-support')

let testOverrides = {
  files: ['*.test.*', '*.spec.*', 'test/**/*', 'tests/**/*', 'testUtils/**/*', '__mocks__/**/*'],
  env: {
    mocha: true,
    jest: true
  },
  rules: {
    'global-require': 0,
    ...(eslintSupport.hasEslintPluginNode && { 'node/no-unpublished-require': 0 })
  }
}

if (eslintSupport.hasEslintPluginJest) {
  const eslintPluginJestConfigs = require('eslint-plugin-jest').configs

  testOverrides = eslintSupport.mergeEslintConfigs(
    testOverrides,
    eslintPluginJestConfigs.recommended,
    eslintPluginJestConfigs.style,
    {
      plugins: ['jest'],
      rules: {
        'jestno-jasmine-globals': 0,
        'jest/no-jest-import': 0,
        'jest/no-disabled-tests': 1,
        'jest/no-focused-tests': 1,
        'jest/no-identical-title': 0,
        'jest/no-test-prefixes': 0,
        'jest/prefer-to-have-length': 1,
        'jest/valid-expect': 2,
        'jest/prefer-to-be-null': 1,
        'jest/prefer-to-be-undefined': 1,
        'jest/prefer-to-contain': 1,
        'jest/no-test-callback': 1,
        'jest/no-empty-title': 1
      }
    }
  )
}

if (eslintSupport.hasEslintPluginMocha) {
  const eslintPluginMochaConfigs = require('eslint-plugin-mocha').configs

  testOverrides = eslintSupport.mergeEslintConfigs(testOverrides, eslintPluginMochaConfigs.recommended, {
    plugins: ['mocha'],
    rules: {
      'no-unused-expressions': 0, // for chai

      'mocha/no-exclusive-tests': 1,
      'mocha/no-pending-tests': 1,
      'mocha/no-skipped-tests': 1,
      'mocha/handle-done-callback': 2,
      'mocha/no-synchronous-tests': 0,
      'mocha/no-global-tests': 2,
      'mocha/no-return-and-callback': 2,
      'mocha/valid-test-description': 0,
      'mocha/valid-suite-description': 0,
      'mocha/no-mocha-arrows': 0,
      'mocha/no-hooks': 0,
      'mocha/no-hooks-for-single-case': 0,
      'mocha/no-sibling-hooks': 0,
      'mocha/no-top-level-hooks': 0,
      'mocha/no-identical-title': 0,
      'mocha/max-top-level-suites': 0,
      'mocha/no-nested-tests': 2,
      'mocha/no-setup-in-describe': 0,
      'mocha/prefer-arrow-callback': 0,
      'mocha/no-async-describe': 2
    }
  })
}

if (eslintSupport.hasEslintPluginChaiExpect) {
  testOverrides = eslintSupport.mergeEslintConfigs(testOverrides, {
    plugins: ['chai-expect'],
    rules: {
      'chai-expect/missing-assertion': 2,
      'chai-expect/terminating-properties': 1
    }
  })
}

module.exports = {
  overrides: [
    testOverrides,
    {
      files: ['**/testUtils/**/*'],
      rules: {
        'no-console': 0
      }
    }
  ]
}
