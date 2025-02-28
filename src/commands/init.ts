import { Command } from 'commander'
import { MasterKeyManager } from '../utils/master-key'
import { createPromptModule } from 'inquirer'

const prompt = createPromptModule()

export const initCommand = new Command('init')
  .description('Initialize the environment manager with a master password')
  .action(async () => {
    try {
      if (MasterKeyManager.isInitialized()) {
        const { reinitialize } = await prompt([
          {
            type: 'confirm',
            name: 'reinitialize',
            message: 'Master key already exists. Do you want to reinitialize?',
            default: false,
          },
        ])

        if (!reinitialize) {
          console.log('Initialization cancelled')
          return
        }
      }

      console.log('\nWelcome to dScriptLabs env Manager!')
      console.log("\nLet's set up your master password.")
      console.log('\n📝 Important Information:')
      console.log(
        '- This password will be used to encrypt all your sensitive information',
      )
      console.log('- Store it in a secure password manager or safe location')
      console.log('- There is no way to recover this password if lost')
      console.log(
        '- All your secrets will become inaccessible if password is forgotten',
      )

      console.log('\n🔐 Password Requirements:')
      console.log('- Minimum 12 characters')
      console.log('- At least 1 uppercase letter (A-Z)')
      console.log('- At least 1 lowercase letter (a-z)')
      console.log('- At least 1 number (0-9)')
      console.log('- At least 1 special character (!@#$%^&*...)')

      console.log(
        '\n💡 Tip: Use a memorable passphrase that only you would know',
      )
      console.log('Example: "MyCompany2023!SecurePass"\n')

      const { password, confirmPassword } = await prompt([
        {
          type: 'password',
          name: 'password',
          message: 'Create your master password:',
          mask: '*',
          validate: (input: string) => {
            if (input.length < 12) {
              return 'Password must be at least 12 characters long'
            }
            if (!/[A-Z]/.test(input)) {
              return 'Password must contain at least one uppercase letter'
            }
            if (!/[a-z]/.test(input)) {
              return 'Password must contain at least one lowercase letter'
            }
            if (!/[0-9]/.test(input)) {
              return 'Password must contain at least one number'
            }
            if (!/[^A-Za-z0-9]/.test(input)) {
              return 'Password must contain at least one special character'
            }
            return true
          },
        },
        {
          type: 'password',
          name: 'confirmPassword',
          message: 'Confirm master password:',
          mask: '*',
        },
      ])

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match')
      }

      await MasterKeyManager.initialize(password)

      console.log('\n🔐 Security Information:')
      console.log('- Master key encrypted with your password')
      console.log('- Configuration stored in ~/.dlabs-env/')
      console.log('- File permissions set to user-only access')

      console.log('\n⚠️  Important:')
      console.log('- Keep your master password safe')
      console.log('- There is no password recovery option')
      console.log('- All secrets will be encrypted with this key')
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', error.message)
      } else {
        console.error('Error:', String(error))
      }
      process.exit(1)
    }
  })
