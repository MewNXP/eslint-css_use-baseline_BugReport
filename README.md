# Repro Steps

## As-is

1. Run `npm ci` to install `@eslint/css@2.0.0` and `node@25.9.0`.
2. Run `npm run lint` to run eslint, and it should crash from exceeding maximum call stack size.

This happens when there is any .css file in the project, even if completely empty.

This only occurs with the "css/use-baseline" rule active ("warn" or "error"), seemingly regardless of any rule options.

Including or excluding the ESLint globalIgnores() for "node_modules" makes no difference.

## Different @eslint/css and node Versions

There are interesting combinations of @eslint/css and node versions which do NOT reproduce the issue.

(Use `npm install -D --save <packageName>@<packageVersion>` to install a specific version, replacing the current version if there is one. Use `npm uninstall <packageName>` to uninstall a package. Use `npm ci` after either to doubly ensure the correct version is installed for a test.)

1. `@eslint/css@1.4.0` and `node@25.9.0` does NOT reproduce the issue, meaning the latest update to @eslint/css introduced this bug (even if transiently).
2. `@eslint/css@2.0.0` and `node@26.0.0` does NOT reproduce the issue, meaning recent changes to node are likely involved too.
3. `@eslint/css@2.0.0` and uninstalling node (the package) does NOT reproduce the issue.

\#3 perplexes me, because from my understanding, user packages shouldn't affect the behavior of dependency packages.
