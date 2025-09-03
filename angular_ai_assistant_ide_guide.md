# Angular AI Coding Assistant for IDE

## Overview

This assistant is designed to help **senior Angular developers** write clean, maintainable, and modern Angular code using the latest **Angular 20** and **TypeScript** best practices. The assistant performs:
- Live code generation
- Real-time critical code reviews
- Best practice enforcement
- Quality grading (senior-level standards)

---

## 🧠 AI Features

### ✅ Code Generation
- Generates `standalone` Angular components, directives, pipes
- Uses `signals` and `computed()` for reactive state
- Follows `ChangeDetectionStrategy.OnPush` by default
- Uses `inject()` instead of constructor injection
- Applies new control flow syntax (`@if`, `@for`, `@switch`)
- Implements `NgOptimizedImage` for static assets

### 🔎 Code Review Rules
- ❌ No usage of `any`, prefer `unknown` with explicit narrowing
- ❌ Avoid `ngClass`/`ngStyle` — use `[class]` and `[style]` bindings
- ❌ No `@HostBinding` or `@HostListener` — use `host` object instead
- ❌ No `ngModel` — always use reactive forms
- ⚠️ Prefer inline templates for small components
- ⚠️ Keep templates logic-free and minimal
- ✅ Use `input()` / `output()` functions, not decorators

### 🧪 Testing Review
- Encourages `TestBed.inject()` and `jest`/`vitest` setup
- Flags complex components without unit tests
- Suggests testing signals and derived states

---

## 🧱 Architectural Enforcement

### Suggested Project Structure (Feature-Based)

```
src/
  app/
    features/
      dashboard/
        dashboard.component.ts
        dashboard.routes.ts
      user/
        user.component.ts
        user.routes.ts
    shared/
      ui/
      utils/
      directives/
      pipes/
```

### Layered Libraries (Nx Monorepo Friendly)
- `feature/` - Smart components & routes
- `ui/` - Dumb/presentational components
- `data-access/` - Services, HTTP, signals
- `util/` - Pure functions & shared logic

---

## 🎯 Grading Criteria (Senior Level)

| Criteria                     | Expectation                                          |
|-----------------------------|------------------------------------------------------|
| Code Quality                | Follows Angular & TS best practices strictly         |
| Scalability                 | Feature-based and signal-driven                      |
| Performance                 | Zone-less, OnPush, lazy-loaded modules               |
| Maintainability             | Small components, SRP, typed services                |
| Accessibility               | Semantic HTML, keyboard support, a11y attributes     |
| Test Coverage               | Unit tested signals, logic, components               |
| Template Simplicity         | Uses new control flow syntax, async pipes            |

---

## ⚙️ Recommended Tools

- Angular CLI >= 17 or Nx >= 18
- ESLint + Prettier + Angular ESLint plugin
- TypeScript `strict: true`
- VSCode with:
  - Angular Language Service
  - ESLint & Prettier extensions
  - AI Copilot or GPT Plugin (for reviews)

---

## 🧩 Example Command for New Project

```bash
npx @angular/cli new ai-assistant-app --standalone --routing --style=scss --strict
```

---

## 🚀 Notes

This AI Assistant assumes you're working with Angular 17–20+ and TypeScript 5+. The goal is not just automation, but **mentorship-level feedback** to ensure consistent quality and architectural soundness.