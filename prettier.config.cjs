module.exports = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  trailingComma: 'es5',
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 120,
  endOfLine: 'auto',
  // sort-imports
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^~/(.*)$',
    '',
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.5.4',
}
