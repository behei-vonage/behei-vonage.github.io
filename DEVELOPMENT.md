# Development Guide

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier
- **Styling**: CSS3 with CSS Modules

## Project Structure

```
src/
├── components/          # React components
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.css
│   │   └── About.test.tsx
│   ├── Contact/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Projects/
│   └── Skills/
├── assets/             # Static assets (images, etc.)
├── test/               # Test configuration
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Code Conventions

### Component Pattern

All components follow the arrow function const pattern:

```typescript
import { ReactElement } from 'react'
import './ComponentName.css'

const ComponentName = (): ReactElement => {
  return (
    <div>
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

### TypeScript Guidelines

- Use explicit types for function parameters and return types
- Define interfaces for complex data structures
- Use `ReactElement` for component return types
- Avoid `any` type (linter will warn)
- Use type inference where appropriate

### Code Style

The project uses Prettier for consistent formatting:

- Single quotes for strings
- No semicolons
- 2 space indentation
- 100 character line width
- Trailing commas in ES5 style
- Arrow function parentheses always

## Available Scripts

### Development

```bash
yarn dev              # Start development server
yarn build            # Build for production (includes type checking)
yarn preview          # Preview production build
```

### Code Quality

```bash
yarn lint             # Run ESLint
yarn lint:fix         # Fix ESLint errors automatically
yarn format           # Format code with Prettier
yarn format:check     # Check code formatting
yarn type-check       # Run TypeScript type checking
```

### Testing

```bash
yarn test             # Run tests in watch mode
yarn test --run       # Run tests once
yarn test:ui          # Run tests with UI
yarn test:coverage    # Run tests with coverage report
```

## Linting Rules

### TypeScript

- Unused variables must start with `_` or will error
- Explicit function return types are optional
- `any` type triggers a warning
- Strict mode enabled

### React

- React Hooks rules enforced
- Exhaustive dependencies checked (warning)
- Only export components from component files

### Code Style

- No `console.log` (use `console.warn` or `console.error`)
- Prefer `const` over `let`
- No `var` declarations
- Use object shorthand
- Quote object properties only when needed

## Pre-commit Checklist

Before committing code, ensure:

1. ✅ `yarn lint` passes with no errors
2. ✅ `yarn type-check` passes
3. ✅ `yarn test --run` all tests pass
4. ✅ `yarn format` has been run
5. ✅ `yarn build` succeeds

## IDE Setup

### VS Code (Recommended)

Install these extensions:

- ESLint
- Prettier - Code formatter
- TypeScript and JavaScript Language Features (built-in)

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Common Issues

### TypeScript Errors

If you see JSX namespace errors, ensure:
- `tsconfig.json` has `"jsx": "react-jsx"`
- Components import `ReactElement` from 'react'

### Linting Errors

Run `yarn lint:fix` to automatically fix most issues.

For persistent issues, check:
- ESLint configuration in `eslint.config.mjs`
- Prettier configuration in `.prettierrc`

### Test Failures

If tests fail after TypeScript conversion:
- Check that mock types use `as unknown as HTMLElement`
- Ensure test files have proper imports
- Verify `@testing-library/jest-dom` types are available

## Adding New Components

1. Create component folder: `src/components/NewComponent/`
2. Create files:
   - `NewComponent.tsx` (component)
   - `NewComponent.css` (styles)
   - `NewComponent.test.tsx` (tests)
3. Follow the arrow function const pattern
4. Add proper TypeScript types
5. Write tests for key functionality
6. Run linter and formatter before committing

## Performance Optimization

- Use React.memo() for expensive components
- Implement proper key props in lists
- Lazy load components when appropriate
- Optimize images (use WebP format)
- Code split with dynamic imports

## Deployment

The project builds to the `dist/` directory:

```bash
npm run build
```

Deploy the `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [Prettier Options](https://prettier.io/docs/en/options.html)
