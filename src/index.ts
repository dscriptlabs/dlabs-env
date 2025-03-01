#!/usr/bin/env node

import { Command } from 'commander'
import { checkStatus } from './commands/index.js'
import { initCommand } from './commands/init.js'
import { version } from './version.js'

const program = new Command()

program
  .name('dlabs-env')
  .description('CLI tool for environment management')
  .version(version)

program.addCommand(checkStatus)
program.addCommand(initCommand)
program.parse()
