# AGENTS.md - Guidelines for Agentic Coding in GleanApp

## Build/Lint/Test Commands

- Build Android: `react-native run-android`
- Build iOS: `react-native run-ios`
- Lint: `eslint .`
- Test all: `jest`
- Test single file: `jest path/to/file.test.tsx`
- Test single test: `jest --testNamePattern="test name"`
- Start Metro: `react-native start`
- Generate API: `openapi-ts`

## Code Style Guidelines

- **Imports**: Use absolute paths with `@/*` for src (e.g., `@/components/ui/button`).
- **Formatting**: Prettier with single quotes, trailing commas, avoid arrow parens.
- **Types**: TypeScript strict mode, extend React Native config, use `type` for type aliases.
- **Naming**: PascalCase for components/functions, camelCase for variables/props.
- **Error Handling**: Use try/catch in async functions, Zustand for state management.
- **Styling**: NativeWind/Tailwind CSS classes, platform-specific with `Platform.select`.
- **Structure**: Functional components, hooks for state, no prop drilling.

Follow React Native best practices, keep components modular and reusable.
