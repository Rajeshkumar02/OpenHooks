# Contributing to Open-Hook

Thanks for helping improve `open-hook`! Here's how to contribute safely and effectively.

---

## 🧾 Guidelines

- All changes must go through a **pull request** (PR)
- PRs must be reviewed and approved before being merged
- PRs that affect CLI behavior or hooks must be tested
- PR titles should follow this format: `feat:`, `fix:`, `docs:`, `chore:`, etc.

---

## 📂 Adding a New Hook

1. Add your hook to the correct directory:
   - `hooks/js/useSomething.js` or `hooks/ts/useSomething.ts`

2. Update `hooks/manifest.json`:

```json
{
  "name": "useSomething",
  "description": "Brief description here",
  "js": true,
  "ts": true
}
```

3. Run `pnpm start` or `pnpm build` and test with CLI:
```bash
pnpm open-hooks-cli add useSomething
```

---

## 🚫 What Will Be Rejected

- Hooks with unsafe or untested logic
- Incomplete `manifest.json` entries
- PRs with unrelated files or changes
- PRs containing secrets, credentials, or keys

---

## 💬 Questions?

Open a GitHub Discussion or Issue to ask before submitting!