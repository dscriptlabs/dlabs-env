# Getting Started

This guide will walk you through the basic usage of dlabs-env. We'll cover the essential commands and workflows to help you start managing your environment variables securely.

## Prerequisites

Before starting, ensure you have:

- dlabs-env [installed](/guide/installation) on your system
- A master password ready that meets the security requirements

## Basic Workflow

### 1. Initialization

First, initialize dlabs-env:

```bash
dlabs-env init
```

You'll be prompted to create a master password. This password will be used to encrypt and decrypt your environment variables.

### 2. Adding Environment Variables

Add variables one at a time:

```bash
dlabs-env add API_KEY=your-secret-key
```

Or add multiple variables at once:

```bash
dlabs-env add DB_USER=admin DB_PASS=secret
```

### 3. Listing Variables

View your stored variables:

```bash
dlabs-env list
```

This will show all your environment variables in a secure way.

### 4. Updating Variables

Update existing variables:

```bash
dlabs-env update API_KEY=new-secret-key
```

### 5. Removing Variables

Remove a single variable:

```bash
dlabs-env remove API_KEY
```

## Working with Multiple Environments

### Creating Environments

Create different environments for your project:

```bash
dlabs-env env create development
dlabs-env env create production
```

### Switching Environments

Switch between environments:

```bash
dlabs-env env use development
```

### Environment-Specific Variables

Add variables to specific environments:

```bash
dlabs-env env use development
dlabs-env add API_URL=http://dev-api.example.com

dlabs-env env use production
dlabs-env add API_URL=http://api.example.com
```

## Best Practices

1. **Master Password**

   - Use a strong, memorable password
   - Store it securely in a password manager
   - Never share or expose it

2. **Variable Names**

   - Use UPPERCASE for consistency
   - Use underscores for spaces
   - Be descriptive but concise

3. **Security**

   - Don't commit encrypted files unnecessarily
   - Regularly backup your master password
   - Update sensitive variables periodically

4. **Organization**
   - Group related variables
   - Use clear naming conventions
   - Document special variables

## Common Commands

Here's a quick reference of common commands:

```bash
# Basic operations
dlabs-env init              # Initialize
dlabs-env add KEY=VALUE    # Add variable
dlabs-env list             # List variables
dlabs-env update KEY=VALUE # Update variable
dlabs-env remove KEY       # Remove variable

# Environment management
dlabs-env env list         # List environments
dlabs-env env create NAME  # Create environment
dlabs-env env use NAME     # Switch environment
dlabs-env env remove NAME  # Remove environment
```

## Next Steps

- [Security Model](/guide/security-model) - Learn about the security features
- [Command Reference](/reference/commands) - Explore all available commands
- [Best Practices](/guide/best-practices) - Advanced usage tips
