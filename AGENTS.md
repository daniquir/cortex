# AGENTS.md — Cortex Project Conventions

## Internationalization (i18n)

### Languages

Cortex supports 7 languages. **English is always the primary/source language.**

| Code | Language | Flag |
|------|-------------|------|
| `en` | English | 🇺🇸 |
| `es` | Español | 🇪🇸 |
| `pt` | Português | 🇧🇷 |
| `fr` | Français | 🇫🇷 |
| `de` | Deutsch | 🇩🇪 |
| `ja` | 日本語 | 🇯🇵 |
| `zh` | 中文 | 🇨🇳 |

### Landing Page (Astro) — `cortex/`

- **Default language**: English (`en`) — root pages at `/`
- **Translations**: Each language has its own prefix (`/es/`, `/pt/`, `/fr/`, `/de/`, `/ja/`, `/zh/`)
- **Every screen must exist in all 7 languages** (landing, docs, changelog, and any future page)
- **Components**: Accept a `lang` prop; never hardcode user-facing strings
- **Links**: Use `langHref(lang, path)` from `src/i18n/paths.ts`
- **LanguageSwitcher**: preserves the current path when switching languages

### Source of truth for strings

| Content | File |
|---------|------|
| Landing / nav / footer | `cortex/src/i18n/translations.ts` |
| Docs | `cortex/src/i18n/docs.ts` |
| Changelog | `cortex/src/i18n/changelog.ts` |
| Path helpers | `cortex/src/i18n/paths.ts` |

### Strict workflow

1. **Always write new content in English first**
2. **Then add translations for ALL other languages in the same change**
3. **Never hardcode strings** in components — always use `getT` / `getDocs` / `getChangelog`
4. **When adding a new key**, add it to the interface and to ALL 7 languages
5. **When adding a new page**: shared component + English route + `pages/[lang]/…` route via `localizedLangs`
6. **Run `npm run build`** in `cortex/` to verify all locales build

### README Files

- `README.md` — English (primary)
- `README.es.md` — Spanish
- `README.pt.md` — Portuguese
- `README.fr.md` — French
- `README.de.md` — German
- `README.ja.md` — Japanese
- `README.zh.md` — Chinese

### Rules

- English is the source language — never translate FROM a non-English language
- Keep translations concise and natural, not literal
- Technical terms (VS Code, OpenCode, API, etc.) stay in English
- Brand names (Cortex, Cursor, Windsurf, OpenAI, etc.) stay in English
- Incomplete translations (missing a language) are not allowed
- When in doubt, prefer clarity over literal translation

## Git / Commits

- **Co-author convention**: When the AI agent generates a commit, always append a co-author line:
  ```
  Co-authored-by: codex <noreply@codex.ai>
  ```
