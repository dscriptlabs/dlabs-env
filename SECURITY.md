# Security Policy

## Supported Versions

Only the latest version of dlabs-env is actively maintained and receives security updates. We strongly recommend using `npx dlabs-env@latest` to ensure you're always running the most secure version.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Security Features

dlabs-env implements several security measures:

- AES-256-GCM encryption for all stored data
- Secure master password with strict requirements
- Local-only storage (no cloud transmission)
- Salt-based key derivation
- Encrypted configuration files

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

1. **Do Not** disclose the vulnerability publicly
2. Email us at [security@dscriptlabs.com](mailto:security@dscriptlabs.com) with:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Your contact information

### What to Expect

- **Initial Response**: Within 48 hours
- **Status Update**: Within 5 business days
- **Resolution Timeline**: Typically within 30 days

### Process

1. Submit your report
2. Receive acknowledgment within 48 hours
3. Our team will investigate and validate the issue
4. We'll work on a fix and keep you updated
5. Once resolved, we'll:
   - Release a security patch
   - Notify all users
   - Credit you (if desired) in the security advisory

## Best Practices

To ensure maximum security when using dlabs-env:

1. Always use `npx dlabs-env@latest` to run the latest version
2. Follow password requirements strictly
3. Never share your master password
4. Keep your Node.js environment updated
5. Regularly check the status of your installation:
   ```bash
   npx dlabs-env@latest status
   ```

## Security Advisories

Security advisories are published through:

1. GitHub Security Advisories
2. npm Security Advisories
3. Our official documentation

## Contact

For security-related inquiries:

- Email: [dscriptlabs@gmail.com](mailto:dscriptlabs@gmail.com)

For general questions:

- GitHub Issues
- Documentation Support
