module.exports = {
  '*.{js,ts}': 'pnpm run format',
  '*.ts': "bash -c 'pnpm run typecheck'", // running this via bash https://github.com/okonet/lint-staged/issues/825#issuecomment-727185296
}
