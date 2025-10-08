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

Follow React Native best practices, keep components modular and reusable. This app does not use Expo, instead it uses React Native CLI.

## Installed Packages Documentation

### Dependencies

- [@atproto/api](https://www.npmjs.com/package/@atproto/api)
- [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/)
- [@react-native/new-app-screen](https://www.npmjs.com/package/@react-native/new-app-screen)
- [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)
- [@react-navigation/elements](https://reactnavigation.org/docs/elements/)
- [@react-navigation/native](https://reactnavigation.org/docs/getting-started/)
- [@react-navigation/native-stack](https://reactnavigation.org/docs/stack-navigator/)
- [@rn-primitives/label](https://www.npmjs.com/package/@rn-primitives/label)
- [@rn-primitives/portal](https://www.npmjs.com/package/@rn-primitives/portal)
- [@rn-primitives/separator](https://www.npmjs.com/package/@rn-primitives/separator)
- [@rn-primitives/slot](https://www.npmjs.com/package/@rn-primitives/slot)
- [buffer](https://www.npmjs.com/package/buffer)
- [class-variance-authority](https://cva.style/docs)
- [clsx](https://www.npmjs.com/package/clsx)
- [fast-text-encoding](https://www.npmjs.com/package/fast-text-encoding)
- [graphemer](https://www.npmjs.com/package/graphemer)
- [install](https://www.npmjs.com/package/install)
- [nativewind](https://www.nativewind.dev/)
- [react](https://react.dev/)
- [react-native](https://reactnative.dev/)
- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)
- [react-native-fs](https://github.com/itinance/react-native-fs)
- [react-native-quick-crypto](https://www.npmjs.com/package/react-native-quick-crypto)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
- [react-native-screens](https://github.com/software-mansion/react-native-screens)
- [react-native-url-polyfill](https://www.npmjs.com/package/react-native-url-polyfill)
- [react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/)
- [react-native-webview](https://github.com/react-native-webview/react-native-webview)
- [react-native-worklets](https://docs.swmansion.com/react-native-worklets/)
- [shadcn](https://www.npmjs.com/package/shadcn)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- [web-streams-polyfill](https://www.npmjs.com/package/web-streams-polyfill)
- [zustand](https://zustand-demo.pmnd.rs/)

### DevDependencies

- [@babel/core](https://babeljs.io/docs/babel-core)
- [@babel/preset-env](https://babeljs.io/docs/babel-preset-env)
- [@babel/runtime](https://babeljs.io/docs/babel-runtime)
- [@hey-api/openapi-ts](https://heyapi.dev/openapi-ts/)
- [@react-native-community/cli](https://github.com/react-native-community/cli)
- [@react-native-community/cli-platform-android](https://github.com/react-native-community/cli)
- [@react-native-community/cli-platform-ios](https://github.com/react-native-community/cli)
- [@react-native-reusables/cli](https://www.npmjs.com/package/@react-native-reusables/cli)
- [@react-native/babel-preset](https://www.npmjs.com/package/@react-native/babel-preset)
- [@react-native/eslint-config](https://www.npmjs.com/package/@react-native/eslint-config)
- [@react-native/metro-config](https://www.npmjs.com/package/@react-native/metro-config)
- [@react-native/typescript-config](https://www.npmjs.com/package/@react-native/typescript-config)
- [@types/jest](https://www.npmjs.com/package/@types/jest)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [@types/react](https://www.npmjs.com/package/@types/react)
- [@types/react-test-renderer](https://www.npmjs.com/package/@types/react-test-renderer)
- [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)
- [eslint](https://eslint.org/)
- [jest](https://jestjs.io/)
- [openapi-typescript](https://github.com/drwpow/openapi-typescript)
- [prettier](https://prettier.io/)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [react-test-renderer](https://react.dev/reference/react-dom/components/common#test-renderer)
- [tailwindcss](https://tailwindcss.com/)
- [typescript](https://www.typescriptlang.org/)
