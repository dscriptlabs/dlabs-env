# Status Command

The `status` command checks the current state of your dlabs-env installation and configuration.

## Usage

```bash
# Using npx (recommended)
npx dlabs-env@latest status

# Or if installed globally
dlabs-env status
```

## Description

The `status` command performs a comprehensive health check of your dlabs-env setup. It verifies:

1. Installation state
2. Configuration directory existence and permissions
3. Required file presence and integrity
4. Encryption system status
5. Configuration file validity

## Output Information

The status command provides information about:

- Initialization status
- Configuration directory location
- File permissions
- Configuration integrity
- Version information

## Examples

### Basic status check

```bash
npx dlabs-env@latest status
```

### Common Status Messages

```bash
✓ dlabs-env is initialized
✓ Configuration directory exists
✓ File permissions are correct
✓ Encryption system is ready
```

## Troubleshooting Status Issues

1. **Not Initialized**

   - Run `npx dlabs-env@latest init` to initialize
   - Follow the initialization prompts

2. **Invalid Configuration**

   - Check file permissions
   - Verify configuration directory structure
   - Reinitialize if necessary

3. **File Permission Issues**
   - Use npx to avoid permission problems
   - Check directory ownership
   - Verify user permissions

## Related Commands

- [init](/reference/commands/init) - Initialize dlabs-env
