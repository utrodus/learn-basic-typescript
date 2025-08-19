# Conventional Commit Message Format

This repository uses the **Conventional Commit** specification to keep commit history clear, consistent, and meaningful. Below is a guide for writing commit messages when working on this project.

---

## Format

```
<type>[optional scope]: <description>
```

- **type**: The nature of the change (see common types below).
- **scope** (optional): The section or topic affected (e.g. `enum`, `array`, `README`).
- **description**: Short summary of the change, written in present tense.

---

## Common Types

- `feat`: Add a new feature, topic, or example  
  _Example_: `feat: add say hello function example`

- `docs`: Documentation changes (README, notes, comments)  
  _Example_: `docs: update README progress for enum topic`

- `fix`: Bug fixes or corrections  
  _Example_: `fix: correct type usage in say hello function`

- `refactor`: Code refactoring without changing functionality  
  _Example_: `refactor: simplify array type example`

- `test`: Add or update tests  
  _Example_: `test: add tests for type alias usage`

- `chore`: Miscellaneous tasks (config, dependencies, etc.)  
  _Example_: `chore: update .gitignore for build output`

---

## Example Commit Messages for Learning Topics

When you finish a topic, use a clear and descriptive message:

- `feat: implement primitive data types examples`
- `feat: add union type examples`
- `feat: demonstrate enum usage`
- `docs: mark enum topic as completed in README`
- `fix: correct logic in switch statement example`

You may use scope for clarity:

- `feat(enum): add enum topic examples`
- `docs(readme): update progress for array topic`

---

## Tips

- Use present tense (“add”, not “added”).
- Be specific about the topic or change.
- Keep the description concise.
- Use scope if it helps clarify the affected area.

---

## References

- [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)

---

_This guide helps maintain a clean and understandable commit history for your TypeScript learning journey._