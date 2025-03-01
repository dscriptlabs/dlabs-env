# Getting Started

This guide will help you get started with dlabs-env. You can use it without installation (recommended) or install it globally.

## Quick Usage (No Installation Required)

The fastest way to get started is using `npx`, which runs dlabs-env directly without installation:

```bash
# Initialize dlabs-env
npx dlabs-env@latest init

# Check status
npx dlabs-env@latest status
```

This method:

- Always uses the latest version
- Requires no installation
- Avoids permission issues
- Works immediately

## System Requirements

- **Node.js**: Version 14 or higher
- **npm** or **yarn** package manager
- **Operating System**: macOS, Linux, and Windows

## Global Installation (Optional)

If you prefer having dlabs-env installed globally:

### Using npm

```bash
npm install -g dlabs-env
```

### Using yarn

```bash
yarn global add dlabs-env
```

After global installation, you can use shorter commands:

```bash
dlabs-env init
dlabs-env status
```

## First-Time Setup

1. Initialize dlabs-env with a master password:

```bash
# Using npx (recommended)
npx dlabs-env@latest init

# Or if installed globally
dlabs-env init
```

2. Follow the prompts to create your master password. The password must meet these requirements:
   - Minimum 12 characters
   - At least 1 uppercase letter (A-Z)
   - At least 1 lowercase letter (a-z)
   - At least 1 number (0-9)
   - At least 1 special character (!@#$%^&\*)

## Configuration Directory

dlabs-env creates its configuration directory at:

- Unix-like systems (Linux/macOS): `~/.dlabs-env/`
- Windows: `%USERPROFILE%\.dlabs-env\`

The directory contains:

- `.master.key`: Encrypted master key
- `.salt`: Salt for key derivation
- `.config`: Tool configuration
- `.db-config`: Encrypted environment variables

## Version Management

### Using npx (Recommended)

Always get the latest version automatically:

```bash
npx dlabs-env@latest <command>
```

### Global Installation

If installed globally, update manually:

```bash
npm install -g dlabs-env@latest
```

## Verifying Setup

Check that dlabs-env is working correctly:

```bash
# Using npx
npx dlabs-env@latest --version

# Or if installed globally
dlabs-env --version
```

## Troubleshooting

### Common Issues

1. **Command not found**

   - Ensure Node.js is properly installed
   - For global installation: Check if npm/yarn bin directory is in PATH
   - Try using npx instead of global installation

2. **Permission errors**

   - Use npx to avoid permission issues
   - For global installation:
     - On Unix: Use `sudo`
     - On Windows: Run terminal as administrator

3. **Initialization fails**
   - Check write permissions in home directory
   - Ensure adequate disk space

- [Commands](/reference/commands) - Explore available commands
