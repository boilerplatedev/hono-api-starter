# hono-api-starter

A starter repository to build Web Applications with [Hono](https://hono.dev/).
Comes pre-configured with the following:

- [Hono](https://hono.dev/) for the framework.
- Proper ESLint v9 + Prettier setup.
- Husky hooks for ensuring standards.
- [Convential commit](https://www.conventionalcommits.org/en/v1.0.0/) messages are setup via `commitlint` and `commitizen`. All the setup is done. If your commit messages don't follow that convention, it won't let you commit. Feel free to use another convention.
  - A helper NPM script `commit` has been added. Running `npm run commit` or `yarn commit` will help you craft good commit messages.
- Great Environment Variables setup.
- Prisma for working with a RDS.
- [Vitest](https://vitest.dev) for Testing.
- Sentry for AWS Lambda Environments.
