#!/usr/bin/env node

import { Command } from 'commander'
import { checkStatus } from './commands'
import { initCommand } from './commands/init'
import { readFileSync } from 'fs'
import { join } from 'path'

const packageJson = JSON.parse(
  readFileSync(join(__dirname, '..', 'package.json'), 'utf8'),
)

const program = new Command()

program
  .name('dlabs-env')
  .description('CLI tool for environment management')
  .version(packageJson.version)

program.addCommand(checkStatus)
program.addCommand(initCommand)
program.parse()
