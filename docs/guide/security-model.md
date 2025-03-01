# Security Model

dlabs-env is built with security as a primary concern. This document details the security model and encryption methods used to protect your sensitive data.

## Overview

The security model of dlabs-env is based on these core principles:

1. **Zero Trust**: Never store sensitive data in plain text
2. **Local First**: All data stays on your machine
3. **Strong Encryption**: Industry-standard encryption algorithms
4. **Key Isolation**: Separate keys for different security contexts

## Encryption Details

### Algorithm Selection

dlabs-env uses the following cryptographic primitives:

- **Encryption Algorithm**: AES-256-GCM

  - 256-bit key length
  - Galois/Counter Mode (GCM) for authenticated encryption
  - Provides both confidentiality and authenticity

- **Key Derivation**: PBKDF2
  - 100,000 iterations for computational intensity
  - SHA-256 as the hash function
  - 32-byte derived key length
  - Unique salt for each master key

### Data Protection Flow

1. **Master Key Generation**

   ```
   Master Password + Salt → PBKDF2 → Master Key
   ```

2. **Data Encryption**

   ```
   Data + Master Key + IV → AES-256-GCM → Encrypted Data + Auth Tag
   ```

3. **Data Decryption**
   ```
   Encrypted Data + Master Key + IV + Auth Tag → AES-256-GCM → Original Data
   ```

## File Security

### Configuration Directory Structure

```
~/.dlabs-env/
├── .master.key    # Encrypted master key
├── .salt          # Salt for key derivation
├── .config        # Tool configuration
└── .db-config     # Encrypted environment variables
```

### File Permissions

- All sensitive files are created with restricted permissions (600)
- Directory is created with restricted access (700)
- Only the owner can read or write the files

## Password Requirements

Master password must meet these minimum requirements:

- 12 characters minimum length
- At least 1 uppercase letter (A-Z)
- At least 1 lowercase letter (a-z)
- At least 1 number (0-9)
- At least 1 special character (!@#$%^&\*)

## Security Considerations

### What's Protected

- Environment variable names and values
- Master key (stored encrypted)
- Configuration data

### What's Not Protected

- The existence of environment variables
- Number of variables stored
- Names of environments

## Best Security Practices

1. **Master Password**

   - Use a unique, strong password
   - Never share or expose the password
   - Store securely in a password manager
   - Change if compromised

2. **System Security**

   - Keep your system updated
   - Use disk encryption
   - Protect against malware
   - Secure your user account

3. **Usage Guidelines**
   - Don't store master password in scripts
   - Avoid logging environment variables
   - Regular security audits
   - Update sensitive variables periodically

## Implementation Details

### Encryption Process

```typescript
// Key derivation
const derivedKey = pbkdf2(
  password,
  salt,
  iterations: 100000,
  keyLength: 32,
  digest: 'sha256'
)

// Encryption
const iv = randomBytes(16)
const cipher = createCipheriv('aes-256-gcm', derivedKey, iv)
const encrypted = cipher.update(data) + cipher.final()
const authTag = cipher.getAuthTag()

// Storage format
{
  encrypted: hex(encrypted),
  iv: hex(iv),
  authTag: hex(authTag)
}
```

### Security Guarantees

- **Confidentiality**: Data cannot be read without the master password
- **Integrity**: Tampering with encrypted data is detected
- **Authentication**: Each encryption operation is authenticated
- **Forward Secrecy**: Changing the master password re-encrypts all data

## Security Recommendations

1. **Backup Strategy**

   - Regularly backup encrypted configuration
   - Store master password securely
   - Document recovery procedures

2. **Access Control**

   - Limit system access to trusted users
   - Use principle of least privilege
   - Monitor access logs

3. **Incident Response**
   - Plan for password compromise
   - Document recovery steps
   - Regular security reviews

## Additional Resources

- [Cryptographic Details](/reference/crypto)
- [Security Best Practices](/guide/best-practices)
- [Troubleshooting Guide](/guide/troubleshooting)
