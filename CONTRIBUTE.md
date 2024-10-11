# Contribution Guidelines

To ensure a smooth collaboration, please follow the development lifecycle and contribution rules outlined below.

## Development Lifecycle

Please adhere to the following procedure when contributing to this repository:

### 1. Create a New Issue

- **Before starting any development**, create an issue to describe the problem or feature you intend to work on.
- Choose an appropriate issue template and fill out all necessary fields. Be clear and descriptive in both the issue title and description to help others understand the context.
  
### 2. Create a New Branch

- **Do not create a branch until an issue has been created**. Every branch must be linked to an existing issue.
- Use the “Create a branch” button on the issue page to ensure proper naming conventions and issue linkage.

### 3. Commit Your Changes

- Ensure you have both a relevant issue and branch before beginning any development work.
- Before committing, make sure to:
  - Apply code formatting tools like **Prettier**.
  - Add proper documentation for your changes.
  - Write unit tests to ensure code quality.
  
- Follow the commit message format:
  ```
  (feat|bug|hotfix|chore|test|doc) #issue_id description
  ```

- Examples:
  - `bug #3 fix API not found error`
  - `feat #143 add customizable color options`
  - `chore #2003 bump Go version to 1.23`

### 4. Create a Pull Request

- Before merging your changes into the main branch, ensure all **GitHub Actions** and CI pipelines run successfully without errors.
- After confirming everything is fine, submit your pull request, merge the changes, and delete the branch.

## Additional Guidelines

- Keep your pull requests small and focused on a single issue to make reviews easier and faster.
- When adding new features, always include tests that cover both expected behavior and edge cases.
- If you're fixing a bug, add tests to verify the issue has been resolved.
- Respect the existing code style and architecture, and document any significant changes.
