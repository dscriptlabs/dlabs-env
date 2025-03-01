# dlabs-env

A secure and efficient CLI tool for environment variable management.

## Overview

dlabs-env is a command-line tool designed to help developers manage environment variables securely across different projects and environments. It provides encryption-based storage and easy-to-use commands for managing sensitive configuration data.

## Key Features

- 🔐 **Secure Storage**: Military-grade encryption (AES-256-GCM) for environment variables
- 🔑 **Master Key Management**: Single master password to manage all your environment configurations
- 🚀 **Simple CLI**: Intuitive commands for managing environment variables
- 💼 **Cross-Platform**: Works on macOS, Linux, and Windows

## Quick Start

```bash
# Run directly with npx (recommended)
npx dlabs-env@latest init

# Check the environment status
npx dlabs-env@latest status
```

You can also install globally if preferred:

```bash
# Optional: Install globally
npm install -g dlabs-env

# Then use without npx
dlabs-env init
dlabs-env status
```

## Why dlabs-env?

- **Security First**: Your sensitive data is encrypted using industry-standard algorithms
- **Developer Friendly**: Simple commands that integrate into your workflow
- **No Cloud Dependencies**: Everything is stored locally and encrypted
- **Version Control Safe**: Encrypted files can be safely committed to version control

## Documentation

Get started with our comprehensive guides:

- [Introduction](/guide/introduction) - Learn about dlabs-env
- [Installation](/guide/installation) - Detailed installation instructions
- [Commands](/reference/commands) - Complete command reference

## Community & Support

- [GitHub Repository](https://github.com/dscriptlabs/dlabs-env)
- [Report Issues](https://github.com/dscriptlabs/dlabs-env/issues)
- [MIT License](https://github.com/dscriptlabs/dlabs-env/blob/main/LICENSE)
