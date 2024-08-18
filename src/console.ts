import 'dotenv/config'

import { Command } from 'commander'

const program = new Command()

program.name('console').description('Console Script for running commands').version('1.0.0')

program.command('hello-world').action(() => {
  console.log('Hello World!')
})

program.parse()
