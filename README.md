# Electron Template

## Introduction
This is a template for creating Electron applications. It's designed to streamline the development 
of Windows & macOS desktop apps using Electron by providing some basic boilerplate configuration.

## CI/CD
Our project employs GitHub Actions for Continuous Integration (CI) and Continuous Deployment (CD), 
ensuring each push to the main branch triggers a series of automated tasks:
1. **Build and Test**: The code is automatically built and tested on macOS and Windows platforms.
2. **Caching**: Node modules are cached for faster workflow execution.
3. **Artifact Upload**: Post-build, the macOS and Windows executable files are uploaded as artifacts.

## Project Scripts
Here are some key scripts you can use:

* **npm start**: Launches the app using Electron Forge.
* **npm test**: Runs tests with Jest.
* **npm run package**: Packages the app with Electron Forge.
* **npm run make**: Builds the app for macOS.
* **npm run make:win**: Builds the app for Windows.

## Commit Message Format
We use Angular's commit message format. This is enforced by `commitlint` and `husky`.

1. **Type**: A short prefix that specifies the type of change the commit makes. Common types include feat (a new feature), fix (a bug fix), docs (documentation changes), style (code style changes), refactor (code refactoring), test (adding or modifying tests), and chore (maintenance tasks).
   - Type must be one of: build, ci, docs, feat, fix, perf, refactor, revert, style, test
2. **Scope**: An optional part of the commit message that specifies the part of the codebase that the change affects. For example, (compiler), (http), (core), etc.
3. **Subject**: A brief description of the change. The subject should be written in the imperative mood (as if commanding what this commit does) and should not exceed 50 characters.
4. **Body**: An optional longer description of the commit. This is where you can explain the rationale behind the change and any additional details.
5. **Footer**: An optional section used to reference GitHub issues, JIRA tickets, etc., that the commit addresses.

## Branching Strategy and Versioning with Semantic Release
We use semantic-release to automate version management and package publishing. The release process is triggered based on the branch:

* **main**: Standard releases.
* **feature/***: Pre-releases labeled as 'feature'.
* **bug-fix/***: Pre-releases labeled as 'bugfix'.
* **chore/***: Pre-releases labeled as 'chore'.

## Code Style
We use Prettier with automatic formatting on save. Please make sure to have the Prettier extension 
installed in your editor.