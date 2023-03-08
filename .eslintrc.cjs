module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'parser': 'vue-eslint-parser',
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'vue/multi-word-component-names': 'off',
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 逗号前后空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 换行时 逗号风格在行首尾
    'comma-style': [2, 'last'],
    // 必须使用if(){} 中的 {}
    curly: [2, 'multi-line'],
    // 全等 ===
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 生成器前后的函数空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // node.js 错误处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进风格
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 字面量：前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 去末尾分号
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 单引号代替双引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
  }
}
