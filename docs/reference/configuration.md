# Configuration Reference

This document details all configuration options and files used by dlabs-env.

## Configuration Directory

By default, dlabs-env stores all its configuration in:

```bash
# Unix-like systems (Linux/macOS)
~/.dlabs-env/

# Windows
%USERPROFILE%\.dlabs-env\
```

## Configuration Files

### File Structure

```
.dlabs-env/
├── .master.key    # Encrypted master key
├── .salt          # Salt for key derivation
├── .config        # Tool configuration
└── .db-config     # Encrypted environment variables
```

### File Details

#### .master.key

Stores the encrypted master key. Format:

```json
{
  "encryptedKey": "hex-encoded-string",
  "iv": "hex-encoded-string",
  "authTag": "hex-encoded-string",
  "version": 1
}
```

#### .salt

Contains the salt used for key derivation. Binary file with 32 bytes of random data.

#### .config

General tool configuration. Format:

```json
{
  "version": 1,
  "currentEnvironment": "development",
  "environments": ["development", "production"],
  "settings": {
    "outputFormat": "table",
    "colorOutput": true,
    "debugMode": false
  }
}
```

#### .db-config

Encrypted environment variables. When decrypted, follows this format:

```json
{
  "version": 1,
  "environments": {
    "development": {
      "variables": {
        "API_KEY": "value",
        "DB_URL": "value"
      }
    },
    "production": {
      "variables": {
        "API_KEY": "value",
        "DB_URL": "value"
      }
    }
  }
}
```

## Environment Variables

dlabs-env can be configured using these environment variables:

| Variable               | Description                  | Default        |
| ---------------------- | ---------------------------- | -------------- |
| `DLABS_ENV_CONFIG_DIR` | Custom config directory path | `~/.dlabs-env` |
| `DLABS_ENV_NO_COLOR`   | Disable colored output       | `false`        |
| `DLABS_ENV_DEBUG`      | Enable debug logging         | `false`        |

## Security Settings

### Encryption

- **Algorithm**: AES-256-GCM
- **Key Derivation**: PBKDF2
- **Iterations**: 100,000
- **Salt Length**: 32 bytes
- **Key Length**: 32 bytes

### File Permissions

| File             | Unix Permissions | Windows Equivalent |
| ---------------- | ---------------- | ------------------ |
| Config Directory | 700              | User Full Control  |
| .master.key      | 600              | User Read/Write    |
| .salt            | 600              | User Read/Write    |
| .config          | 600              | User Read/Write    |
| .db-config       | 600              | User Read/Write    |

## Configuration Options

### Output Formats

Available formats for the `list` and `export` commands:

| Format   | Description            |
| -------- | ---------------------- |
| `table`  | Formatted table output |
| `json`   | JSON format            |
| `dotenv` | .env file format       |
| `shell`  | Shell export commands  |

### Debug Mode

When debug mode is enabled (`DLABS_ENV_DEBUG=true`):

- Verbose logging is activated
- Stack traces are shown for errors
- Operation timing is displayed
- File operations are logged

## Version Compatibility

### File Format Versions

| Version | Description     |
| ------- | --------------- |
| 1       | Initial version |

### Node.js Compatibility

- Minimum version: 14.x
- Recommended: Latest LTS
- Tested up to: 20.x

## Migration

When file formats are updated:

1. Backup of old files is created
2. Data is migrated to new format
3. Backup is retained until confirmed success

## Best Practices

1. **Configuration Directory**

   - Keep in default location when possible
   - Ensure proper permissions
   - Include in backup strategy

2. **Environment Variables**

   - Use uppercase names
   - Group related variables
   - Document special requirements

3. **Security**
   - Regular master password updates
   - Periodic security audits
   - Monitor file permissions

## Troubleshooting

### Common Issues

1. **Permission Errors**

   ```bash
   # Fix directory permissions
   chmod 700 ~/.dlabs-env
   chmod 600 ~/.dlabs-env/*
   ```

2. **Configuration Corruption**

   ```bash
   # Backup current config
   cp -r ~/.dlabs-env ~/.dlabs-env.backup

   # Reinitialize
   dlabs-env init
   ```

3. **Version Mismatch**

   ```bash
   # Check current version
   dlabs-env --version

   # Update to latest
   npm install -g dlabs-env@latest
   ```
