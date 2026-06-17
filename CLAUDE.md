# StudyHub — project guide

Personal exam-prep **study website**: static HTML/CSS/JS, hosted on **GitHub Pages**.
Owner: Rafi Adifa Maulana. Upcoming finals: **Calculus A2 — 23 Jun 2026**, **Linear Algebra — 25 Jun 2026** (C++ final 10 Jun and the Chinese exam are already past).

## Workflow / hosting — IMPORTANT
- GitHub repo: `github.com/Rafiadifa/StudySpace` → GitHub Pages.
- **The user pushes manually via the GitHub Desktop app. Do NOT run git push / commit unless asked.** After making changes, just tell them to "push via GitHub Desktop."
- **Local-only folders** (in `.gitignore`, ~hundreds of MB, large/copyrighted — never commit): `C++_Material/`, `Calculus_Material/`, `Linear_Algebra_Material/`, `General_Management_Material/`, `Chinese_Material/`. They hold the real course PDFs **including past exams** — use them to ground new content. (They were once deleted off GitHub and pulled-deleted locally; recovered from git history — keep them gitignored.)
- Real past finals to match difficulty against: `Calculus_Material/Final2025S.pdf`, `Linear_Algebra_Material/past Finals/`. The finals are **hard, multi-part synthesis**; the practice was mostly easy/moderate, so new content should ramp toward exam difficulty.

## Layout
- `index.html` (domains) · `style.css` (shared, defines `--accent`, `subject-{calc,la,cpp,mgmt,lang}` themes).
- `hub/` → `stem.html` (main STEM hub), `humanities.html`, `language.html`.
- `content/stem/{calc,la,cpp,other}/*.html` — daily practice pages.
- `content/stem/cheatsheet.html` — shared cheat-sheet builder (`?subj=la` / `?subj=calc`).
- `content/language/chinese/` — index, vocab, flashcards, grammar, exercises, **mock.html** (3 timed papers), **writing.html** (Hanzi Writer stroke order), `js/data.js` (VOCAB/GRAMMAR/EXERCISES), `js/store.js`.
- `content/humanities/management/` — `concepts.html` (concept library), `mock.html` (2-hr, identify-the-framework), `notes.html` (slides via local path, Google-Drive fallback in a `DRIVE` config).

## Practice-page conventions (`content/stem/{calc,la}/*.html`)
- Shared `style.css` + **MathJax 3** (CDN): inline `\( \)`, display `\[ \]`. `psmallmatrix` is NOT built in — define it via `tex.environments` in the page's MathJax config (see `la/jun8_gramschmidt.html`).
- Two templates exist: minified single-line, and multi-line (`jun6_line`, `jun7_flux`). Answers toggle with `toggleAns(btn)` → `.ans-btn` + `.answer`.
- Each page = a `formula-ref` box, a **`★ Connected Problem`** (`.problem.conn-problem`, multi-part `(a)-(d)`, chained), then `Problem 1/2/3`. Some now end with a **`★ Challenge`** capstone modeled on the real past finals.
- **Rules learned from the user:** every page's Connected/Challenge problem should be **unique** (no copy-paste across pages), **on-topic for the page title**, and respect the **learning timeline** (e.g. no eigenvalues on the Jun-7 Cholesky page — eigenvalues are taught ~Jun 11). Show answers with **the teacher's method** when known.

## Key custom systems
- **`hub/stem.html`** — subject tabs; a Google-Calendar-style **day timeline** (period→clock map P1 08:00–09:35 … P6 19:20–21:45 from the weekly-schedule PDF); a **per-card review modal** (✎ pencil button): self-understanding **score 1–10** (5 bands), **difficulty 1–5**, "questions I got wrong", **editable notes**, **mark-done** checkbox, and **time-on-task** (auto: click card → return to hub adds elapsed). Stored in `localStorage` (`studyhub_review`, `studyhub_timing`, …), feeds the **Study Log** + "Export for AI analysis".
- **Cheat-sheet builder** (`content/stem/cheatsheet.html`) — go method-by-method ("can you do this cold?"), mark "need it", and it builds a dense **3-column ≤ 2-page printable** sheet with topic headers + a page-fill gauge. Linked from each subject's Exams & Mocks.
- **Chinese**: `mock.html` = 3 timed papers in Mu Laoshi's format (写拼音 with tone-graded input / 选词填空 / 用指定的词 / 连词成句 / 翻译). `writing.html` uses the Hanzi Writer CDN. `vocab.html` has official + "EXTRA" class vocab with a Source filter.

## Verifying without a browser (preview/Chrome MCP are often disconnected)
- **JS syntax check** via macOS JavaScriptCore: extract the page's main `<script>`, then `jsc` with `new Function(code)` (catches syntax errors like a duplicate `const`/`function` that once blanked `stem.html`). Path: `/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc`.
- **Serve + curl** for HTTP 200: `python3 -m http.server <port>` then `curl`. `python3` is available but **numpy is not** — verify math with plain `math`.
- Always hand-derive AND numerically check the math in any problem you add.

## Open / possible follow-ups
- Some practice pages may still use one "reveal-all" button instead of per-question reveals (user wants per-question) — convert on request.
- Remaining duplicated Connected-Problem families could be de-duped: "Gram–Schmidt → least squares" (×4), "char-poly → eigen → diagonalise" (×6), "subspace → basis → rank-nullity" (×4).
