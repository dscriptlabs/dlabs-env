#!/usr/bin/env node

import { Command } from 'commander'
import { checkStatus } from './commands'

const program = new Command()

program
  .name('dlabs-env')
  .description('CLI tool for environment management')
  .version('0.0.1')

program.addCommand(checkStatus)
program.parse()
