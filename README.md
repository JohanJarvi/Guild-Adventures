# Getting Started

This project uses [pnpm](https://pnpm.io) (pinned via `packageManager` in `package.json`) and requires Node `^20.19.0 || ^22.13.0 || >=24` (see `.nvmrc` / `engines.node`). If you use `nvm`, run `nvm use` first.

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Other scripts:

```bash
pnpm build   # production build
pnpm start   # run the production build
pnpm lint    # run ESLint
```
