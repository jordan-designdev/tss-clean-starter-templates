# TanStack Start clean starter templates

I kept wanting to start from scratch without a pile of dependencies and libraries I never use. This was a private repo; I made it public so others can use the same templates.

Each template is a minimal [TanStack Start](https://tanstack.com/start) app. Formatting and linting use [Biome](https://biomejs.dev). Pick one and copy it into a new project. Each block lists bun, then npm, then pnpm:

**TanStack Start + Tailwind CSS**

```bash
bunx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-twcss my-app
npx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-twcss my-app
pnpm dlx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-twcss my-app
```

**TanStack Start + TanStack Query integration + Tailwind CSS**

```bash
bunx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-query-twcss my-app
npx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-query-twcss my-app
pnpm dlx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-query-twcss my-app
```

**TanStack Start + Base UI + Tailwind CSS**

```bash
bunx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-bui-twcss my-app
npx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-bui-twcss my-app
pnpm dlx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-bui-twcss my-app
```

**TanStack Start + TanStack Query integration + Base UI + Tailwind CSS**

```bash
bunx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-query-bui-twcss my-app
npx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-query-bui-twcss my-app
pnpm dlx degit jordan-designdev/tss-clean-starter-templates/templates/tss-with-query-bui-twcss my-app
```

Then, with bun, npm, or pnpm:

```bash
cd my-app
bun install && bun run dev
npm install && npm run dev
pnpm install && pnpm run dev
```
