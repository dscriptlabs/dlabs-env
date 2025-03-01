# Contributing to dlabs-env

First off, thank you for considering contributing to dlabs-env! It's people like you that make dlabs-env such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Be respectful and inclusive
- Exercise consideration and empathy
- Focus on what is best for the community
- Use welcoming and inclusive language

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

1. **Use a clear and descriptive title**
2. **Describe the exact steps to reproduce the problem**
3. **Provide specific examples to demonstrate the steps**
4. **Describe the behavior you observed after following the steps**
5. **Explain which behavior you expected to see instead and why**
6. **Include screenshots if possible**
7. **Include your environment details:**
   - Node.js version
   - npm/yarn version
   - Operating system and version
   - dlabs-env version

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

1. **Use a clear and descriptive title**
2. **Provide a step-by-step description of the suggested enhancement**
3. **Provide specific examples to demonstrate the steps**
4. **Describe the current behavior and explain the behavior you expected to see**
5. **Explain why this enhancement would be useful**

### Pull Requests

1. **Fork the repo and create your branch from `main`**
2. **Set up your development environment:**

   ```bash
   git clone <your-fork>
   cd dlabs-env
   npm install
   ```

3. **Make your changes:**

   - Follow the coding style
   - Add or update tests as needed
   - Update documentation as needed

4. **Run the test suite:**

   ```bash
   npm test
   ```

5. **Commit your changes:**

   - Use clear commit messages
   - Reference issues and pull requests

6. **Push to your fork and submit a pull request**

### Development Guidelines

#### Code Style

- Use TypeScript
- Follow the existing code style
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

#### Testing

- Write tests for new features
- Update tests for bug fixes
- Ensure all tests pass before submitting
- Aim for high test coverage

#### Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update command documentation
- Add examples for new features

#### Security

- Follow security best practices
- Never commit sensitive data
- Use strong encryption methods
- Report security issues privately

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests liberally after the first line

Example:

```
feat: add environment variable encryption

- Implement AES-256-GCM encryption
- Add key derivation function
- Update documentation

Fixes #123
```

### Branch Naming Convention

- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Documentation: `docs/description`
- Performance improvements: `perf/description`

## Project Structure

```
dlabs-env/
├── src/           # Source code
├── docs/          # Documentation
└── scripts/       # Build and maintenance scripts
```

## Getting Help

If you need help, you can:

1. Check the [documentation](https://dscriptlabs.github.io/dlabs-env/)
2. Open a [GitHub Discussion](https://github.com/dscriptlabs/dlabs-env/discussions)
3. Join our community channels

## Recognition

Contributors are recognized in:

- Release notes
- Contributors list
- Documentation

Thank you for contributing to dlabs-env! 🚀
