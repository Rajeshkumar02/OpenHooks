# 🧰 open-hook

> A powerful CLI to manage and install reusable React custom hooks from a centralized GitHub repository.

![GitHub](https://img.shields.io/github/license/Rajeshkumar02/OpenHooks?style=flat-square)
![PRs](https://img.shields.io/github/issues-pr/Rajeshkumar02/OpenHooks?style=flat-square)
![Hooks Count](https://img.shields.io/badge/hooks-dynamic-blue?style=flat-square)

🌐 **Hosted at:** [openhooks.is-a.dev](https://openhooks.is-a.dev)

## 📦 Overview

**`open-hook`** is a CLI tool designed to simplify the process of managing custom React hooks. It allows you to:

- 🔍 List available hooks
- 📥 Install one or more hooks into your project
- ⚙️ Initialize your configuration
- 🛠️ Choose between JavaScript or TypeScript
- 🪝 Automatically update `hooks/manifest.json` for shared metadata

## 📁 Project Structure

```
.
├── cli/            # CLI source code (Node + TypeScript)
├── hooks/          # Public hook repository
│   ├── js/         # JavaScript hooks
│   ├── ts/         # TypeScript hooks
│   └── manifest.json
├── docs/           # Optional documentation site (e.g., Docusaurus, VitePress, etc.)
├── .github/        # GitHub workflows, templates, CODEOWNERS
├── README.md       # You are here
└── package.json
```

## 🧪 Installation

```bash
npm install -g open-hook
```

Or with `pnpm`:

```bash
pnpm add -g open-hook
```

## 🚀 Usage

### 🔧 Initialize Configuration

```bash
open-hook init
```

You'll be prompted to set:

- Hook installation directory (e.g., `src/hooks`)
- Preferred language (`js` or `ts`)

### 📥 Add Hooks

```bash
open-hook add
# or
open-hook add useDebounce useClickOutside --language ts
```

### 📃 List All Available Hooks

```bash
open-hook list
```

## 📚 Documentation

You can explore available hooks and their documentation in the [`docs/`](./docs) folder or at the hosted site [openhooks.is-a.dev](https://openhooks.is-a.dev).

## 🧑‍💻 Contributing

We welcome contributions from the community!

> Please read our [CONTRIBUTING.md](./.github/CONTRIBUTING.md) before submitting a pull request.

### To add a new hook:

1. Create the hook inside `hooks/js/` or `hooks/ts/`
2. Update `hooks/manifest.json`
3. Test with:
   ```bash
   open-hook add useMyNewHook
   ```
4. Open a PR using the [PR Template](./.github/pull_request_template.md)

## 🛡️ Maintainers & Code Owners

This project is maintained by:

- [@Rajeshkumar S](https://github.com/Rajeshkumar02)
- [@vigneshwar R](https://github.com/vigneshwarr26001)

## 📝 License

[MIT](./LICENSE)

## ❤️ Support

If you find this project useful, please consider giving it a ⭐️ and sharing it with others.