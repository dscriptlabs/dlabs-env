# dlabs-env

A secure CLI tool for environment variable management with military-grade encryption.

## Quick Start

Use without installation (recommended):

```bash
# Initialize environment configuration
npx dlabs-env@latest init

# Check environment status
npx dlabs-env@latest status
```

## Features

- 🔐 **Military-grade Security**: AES-256-GCM encryption for environment variables
- 🔑 **Master Key Management**: Single master password for all configurations
- 🚀 **Zero Installation**: Run directly with npx
- 💼 **Cross-platform**: Works on macOS, Linux, and Windows

## System Requirements

- Node.js v14 or higher
- npm or yarn package manager

## Documentation

- [Getting Started Guide](https://dscriptlabs.github.io/dlabs-env/guide/installation)
- [Command Reference](https://dscriptlabs.github.io/dlabs-env/reference/commands)
  - [init](https://dscriptlabs.github.io/dlabs-env/reference/commands/init) - Initialize environment
  - [status](https://dscriptlabs.github.io/dlabs-env/reference/commands/status) - Check configuration status

## Global Installation (Optional)

If you prefer having the tool installed globally:

```bash
# Using npm
npm install -g dlabs-env

# Using yarn
yarn global add dlabs-env

# Then use without npx
dlabs-env init
dlabs-env status
```

## Security

- Military-grade encryption (AES-256-GCM)
- Secure master password with strong requirements
- Local storage of encrypted configurations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [dscriptlabs](https://github.com/dscriptlabs)
