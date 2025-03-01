# What is dlabs-env?

dlabs-env is a command-line interface (CLI) tool designed to solve the common challenges of managing environment variables in development projects. It provides a secure, efficient, and developer-friendly way to handle sensitive configuration data.

## The Problem

Managing environment variables across different projects and environments presents several challenges:

- **Security**: Storing sensitive data like API keys and passwords safely
- **Consistency**: Maintaining consistent configurations across team members
- **Version Control**: Safely tracking environment changes without exposing secrets

## The Solution

dlabs-env addresses these challenges by providing:

1. **Secure Storage**

   - Uses AES-256-GCM encryption for all sensitive data
   - Stores encrypted configurations locally
   - Protects data with a master password

2. **Simple Command Interface**

   - Easy-to-use CLI commands
   - Clear initialization process
   - Status checking capabilities

3. **Local-First Architecture**
   - No cloud dependencies
   - Works offline
   - Complete control over your data

## Core Components

### Master Key Management

- Single master password to access all configurations
- Secure key derivation using PBKDF2
- Salt-based encryption for additional security

### Configuration Storage

- Encrypted storage in `~/.dlabs-env/`
- Separate files for different security aspects
- Version control friendly

### Command Line Interface

- Simple initialization command
- Status checking functionality
- Help system for command documentation

## Security Model

dlabs-env implements several security best practices:

- **Encryption**: AES-256-GCM for data encryption
- **Key Derivation**: PBKDF2 with 100,000 iterations
- **Salt**: Unique salt for each encryption
- **Authentication**: GCM authentication tags
- **Local Storage**: No remote servers or cloud storage

## Next Steps

- [Installation Guide](/guide/installation) - Install dlabs-env
- [Commands](/reference/commands) - Explore available commands
