# cb-price-check

## Commit Message Format
We use Angular's commit message format.

1. **Type**: A short prefix that specifies the type of change the commit makes. Common types include feat (a new feature), fix (a bug fix), docs (documentation changes), style (code style changes), refactor (code refactoring), test (adding or modifying tests), and chore (maintenance tasks).

2. **Scope**: An optional part of the commit message that specifies the part of the codebase that the change affects. For example, (compiler), (http), (core), etc.

3. **Subject**: A brief description of the change. The subject should be written in the imperative mood (as if commanding what this commit does) and should not exceed 50 characters.

4. **Body**: An optional longer description of the commit. This is where you can explain the rationale behind the change and any additional details.

5. **Footer**: An optional section used to reference GitHub issues, JIRA tickets, etc., that the commit addresses.


### Scope Examples
Regarding scope, here are some examples:

Example: feat(main): implement app auto-update feature
Renderer Process: For changes that affect the renderer process, which is responsible for rendering the web pages.

Example: fix(renderer): resolve rendering issue in settings page
IPC Communication: If your commit involves inter-process communication (IPC) between the main and renderer processes.

Example: refactor(ipc): optimize IPC message handling
Native Features: For commits that involve Electron's integration with native OS features.

Example: feat(native-features): add support for native notifications
Packaging/Distribution: For changes related to packaging or distributing the Electron application.

Example: chore(packaging): update build script for Windows
Dependencies: When updating or modifying external dependencies or modules used in the Electron project.

Example: chore(dependencies): upgrade Electron to version 11.0.0
General UI/UX: For general user interface or user experience improvements.

Example: style(ui): redesign the landing page layout
Specific Modules/Components: If your project has specific modules or components, the scope can be the name of that module or component.

Example: feat(settings-module): add new configuration options

## Code Style
We use Prettier with automatic formatting on save. Please make sure to have the Prettier extension 
installed in your editor.