# Init Command

The `init` command initializes dlabs-env and sets up the master password for secure environment variable management.

## Usage

```bash
# Using npx (recommended)
npx dlabs-env@latest init

# Or if installed globally
dlabs-env init
```

## Description

The `init` command is the first command you should run when setting up dlabs-env. It performs the following steps:

1. Checks if dlabs-env is already initialized
2. Creates the configuration directory if it doesn't exist
3. Guides you through creating a secure master password
4. Sets up the encryption system with your master password
5. Initializes the configuration files with proper permissions

## Master Password Requirements

When creating your master password, it must meet these security requirements:

- Minimum 12 characters
- At least 1 uppercase letter (A-Z)
- At least 1 lowercase letter (a-z)
- At least 1 number (0-9)
- At least 1 special character (!@#$%^&\*)

## Files Created

The initialization process creates several files in your configuration directory:

- `.master.key`: Encrypted master key file
- `.salt`: Salt used for key derivation
- `.config`: Tool configuration file
- `.db-config`: Encrypted environment variables storage

## Examples

### First-time initialization

```bash
npx dlabs-env@latest init
```

### Reinitializing (requires confirmation)

```bash
npx dlabs-env@latest init
# You will be prompted for confirmation
```

## Common Issues

1. **Permission Denied**

   - Solution: Check directory permissions
   - For global installation: Use sudo (Unix) or run as administrator (Windows)
   - Recommended: Use npx to avoid permission issues

2. **Already Initialized**

   - The tool will ask for confirmation before reinitializing
   - Reinitializing will create a new master key and reset all configurations

3. **Invalid Password**
   - Make sure your password meets all requirements
   - The tool will keep prompting until a valid password is provided

## Related Commands

- [status](/reference/commands/status) - Check the environment status
