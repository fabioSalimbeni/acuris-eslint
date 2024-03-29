'use strict'

const eslintSupport = require('../core/eslint-support')

module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true
  },
  rules: {
    curly: 1,
    'global-require': 1,
    'no-process-exit': 2,
    'symbol-description': 1,
    'array-callback-return': 2,
    'arrow-body-style': [0, 'as-needed'],
    'block-scoped-var': 2,
    'callback-return': 0,
    'class-methods-use-this': 0,
    'consistent-return': [
      'warn',
      {
        treatUndefinedAsUnspecified: false
      }
    ],
    'no-array-constructor': 0,
    'no-useless-constructor': 1,
    'constructor-super': 2,
    'dot-notation': 2,
    eqeqeq: [1, 'always'],
    'for-direction': 2,
    'func-names': 0,
    'getter-return': [
      2,
      {
        allowImplicit: true
      }
    ],
    'guard-for-in': 0,
    'handle-callback-err': 2,
    'implicit-arrow-linebreak': 0,
    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'new-parens': 2,
    'no-alert': 2,
    'no-underscore-dangle': 0,
    'no-await-in-loop': 0,
    'no-bitwise': 0,
    'no-buffer-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 0,
    'no-class-assign': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': [2, 'always'],
    'no-confusing-arrow': [
      'warn',
      {
        allowParens: true
      }
    ],
    'no-console': 1,
    'no-const-assign': 2,
    'no-constant-condition': 1,
    'no-control-regex': 2,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 1,
    'no-else-return': 1,
    'no-empty': [
      2,
      {
        allowEmptyCatch: true
      }
    ],
    'no-empty-pattern': 1,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 0,
    'no-extra-bind': 1,
    'no-extra-boolean-cast': 1,
    'no-extra-label': 2,
    'no-floating-decimal': 1,
    'no-func-assign': 2,
    'no-global-assign': [
      2,
      {
        exceptions: []
      }
    ],
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-invalid-this': 0,
    'no-iterator': 0,
    'no-label-var': 2,
    'no-labels': 0,
    'no-lone-blocks': 1,
    'no-lonely-if': 2,
    'no-loop-func': 2,
    'no-mixed-operators': [
      'warn',
      {
        allowSamePrecedence: false,
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ]
      }
    ],
    'no-mixed-spaces-and-tabs': 0,
    'no-multi-assign': 2,
    'no-multi-str': 2,
    'no-nested-ternary': 0,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-prototype-builtins': 2,
    'no-redeclare': 2,
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-return-assign': 0,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 1,
    'no-self-compare': 1,
    'no-sequences': 2,
    'no-shadow': 1,
    'no-shadow-restricted-names': 1,
    'no-template-curly-in-string': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unmodified-loop-condition': 2,
    'no-unreachable': 1,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false
      }
    ],
    'no-unused-labels': 2,
    'no-unused-vars': [
      1,
      {
        args: 'after-used',
        ignoreRestSiblings: true,
        vars: 'all',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '(^_)|(^react$)'
      }
    ],
    'no-use-before-define': [
      2,
      {
        classes: false,
        functions: false
      }
    ],
    'no-useless-call': 1,
    'no-useless-computed-key': 2,
    'no-useless-concat': 1,
    'no-useless-escape': 1,
    'no-useless-rename': [
      2,
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false
      }
    ],
    'no-useless-return': 1,
    'no-var': 2,
    'no-void': 2,
    'no-with': 2,
    'object-shorthand': [
      1,
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false
      }
    ],
    'one-var': [1, 'never'],
    'one-var-declaration-per-line': [1, 'always'],
    'operator-assignment': [1, 'always'],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        next: 'import',
        prev: 'let'
      },
      {
        blankLine: 'always',
        next: 'import',
        prev: 'var'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'directive'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'function'
      },
      {
        blankLine: 'always',
        next: 'function',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'class'
      },
      {
        blankLine: 'always',
        next: 'class',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: 'export',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'export'
      },
      {
        blankLine: 'always',
        next: 'cjs-export',
        prev: '*'
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'cjs-export'
      },
      {
        blankLine: 'always',
        next: 'cjs-import',
        prev: 'let'
      },
      {
        blankLine: 'always',
        next: 'cjs-import',
        prev: 'var'
      },
      {
        blankLine: 'always',
        next: 'cjs-import',
        prev: 'import'
      },
      {
        blankLine: 'always',
        next: 'import',
        prev: 'cjs-import'
      },
      {
        blankLine: 'always',
        next: 'class',
        prev: 'cjs-import'
      },
      {
        blankLine: 'always',
        next: 'function',
        prev: 'cjs-import'
      },
      {
        blankLine: 'always',
        next: 'let',
        prev: 'cjs-import'
      },
      {
        blankLine: 'always',
        next: 'var',
        prev: 'cjs-import'
      },
      {
        blankLine: 'always',
        next: 'class',
        prev: 'import'
      },
      {
        blankLine: 'always',
        next: 'function',
        prev: 'import'
      },
      {
        blankLine: 'always',
        next: 'let',
        prev: 'import'
      },
      {
        blankLine: 'always',
        next: 'var',
        prev: 'import'
      }
    ],
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true
      }
    ],
    'prefer-const': [
      1,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],
    'prefer-numeric-literals': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'quote-props': [
      1,
      'as-needed',
      {
        keywords: false,
        numbers: false,
        unnecessary: true
      }
    ],
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    'vars-on-top': 1,
    yoda: 2
  }
}

if (eslintSupport.hasBabelEslintParser) {
  module.exports.parser = 'babel-eslint'
}
