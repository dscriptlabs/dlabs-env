import { Command } from 'commander'

export const checkStatus = new Command('status')
  .description('Check environment status')
  .action((): void => {
    console.log('Up and running!')
  })
