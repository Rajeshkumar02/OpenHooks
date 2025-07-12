# open-hook 🎣

> **A CLI tool to manage and install reusable React custom hooks from a centralized repository**  
> *Supercharge your React development with community-vetted hooks!*

![npm](https://img.shields.io/npm/v/open-hook?style=flat-square&color=blue)
![license](https://img.shields.io/npm/l/open-hook?style=flat-square)
![node](https://img.shields.io/node/v/open-hook?style=flat-square)
![typescript](https://img.shields.io/badge/build-TypeScript-3178C6?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)

---

## 🚀 Quick Start

### Installation
```bash
npm install -g open-hook
# or 
pnpm add -g open-hook
```

### Basic Usage
```bash
# Initialize your project
npx open-hook init

# Browse and add hooks interactively
npx open-hook add

# Or add specific hooks
npx open-hook add useFetch useLocalStorage --language ts
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **📦 Hook Management** | Install, update, and manage hooks effortlessly |
| **⚙️ Configurable** | Customize installation directory and language |
| **🔄 Conflict Resolution** | Smart prompts when hooks exist |
| **📜 Manifest Support** | Structured hook repository format |
| **🌐 GitHub Integration** | Directly fetches from raw GitHub URLs |
| **💻 CLI Interface** | Intuitive command-line experience |

---

## 📖 Detailed Usage

### `init` Command
Initialize your project configuration:
```bash
npx open-hook init
```
Creates `open-hooks.config.json` with:
- Default hooks directory (e.g. `src/hooks`)
- Preferred language (TypeScript/JavaScript)
- Repository URL

---

### `add` Command
Install hooks with options:
```bash
# Interactive mode
npx open-hook add

# Direct installation
npx open-hook add ClickOutside LocalStorage --language ts

# Custom directory
npx open-hook add useDebounce --dir src/utils/hooks
```

**Conflict Handling:**  
🔄 Replace existing | ⏭️ Skip hook | ❌ Cancel all

---

### `list` Command
View available hooks:
```bash
npx open-hook list
```
Displays a formatted table with:
- Hook names
- Available versions (JS/TS)
- Brief descriptions

---

## ⚙️ Configuration
Example `open-hooks.config.json`:
```json
{
  "hooksDir": "src/hooks",
  "defaultLanguage": "ts",
  "repoUrl": "https://github.com/****/OpenHooks"
}
```

---

## 🛠️ Development Roadmap

### Planned Features
- 🔗 Custom repository support via `--repo` flag
- 📦 Automatic dependency installation
- 👀 Hook preview before download
- 🔍 Search functionality for hooks
- 🏷️ Version management for hooks

---

## 🤝 Contributing

We welcome contributions! Here's how:
1. Fork the repository
2. Create your feature branch
3. Submit a pull request

**Hook Submission Guidelines:**
- Include both JS and TS versions
- Add proper TypeScript types
- Include usage examples
- Document dependencies

---

## 📜 License

MIT © [Rajeshkumar S](https://github.com/Rajeshkumar02) & [Vigneshwar](https://github.com/vigneshwarr26001)

---

> **Enjoying open-hook?**  
> Give us a ⭐ on [GitHub](https://github.com/Rajeshkumar02/OpenHooks) and share with your team!