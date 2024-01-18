# cb-price-check

## Commit Message Format
We use Angular's commit message format. This is enforced by `commitlint` and `husky`.

1. **Type**: A short prefix that specifies the type of change the commit makes. Common types include feat (a new feature), fix (a bug fix), docs (documentation changes), style (code style changes), refactor (code refactoring), test (adding or modifying tests), and chore (maintenance tasks).
   - Type must be one of: build, ci, docs, feat, fix, perf, refactor, revert, style, test

2. **Scope**: An optional part of the commit message that specifies the part of the codebase that the change affects. For example, (compiler), (http), (core), etc.

3. **Subject**: A brief description of the change. The subject should be written in the imperative mood (as if commanding what this commit does) and should not exceed 50 characters.

4. **Body**: An optional longer description of the commit. This is where you can explain the rationale behind the change and any additional details.

5. **Footer**: An optional section used to reference GitHub issues, JIRA tickets, etc., that the commit addresses.

## Code Style
We use Prettier with automatic formatting on save. Please make sure to have the Prettier extension 
installed in your editor.