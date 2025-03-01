#!/usr/bin/env node

import { Command } from 'commander'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { initCommand } from './commands/init'
import { checkStatus } from './commands/status'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(join(__dirname, 'package.json'), 'utf8'))

const program = new Command()

program
  .name('dlabs-env')
  .description('CLI tool for environment management')
  .version(pkg.version)

program.addCommand(initCommand)
program.addCommand(checkStatus)
program.parse()
