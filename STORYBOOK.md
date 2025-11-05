# Storybook & Running the component library

This repo contains a small component library used for a front-end assessment. Components live under `src/components` and include:

- `Input` — text / password toggle / clearable
- `Toast` — bottom-right notifications with auto-dismiss
- `SidebarMenu` — sliding right sidebar with nested items

To run Storybook locally once dependencies are installed:

```bash
# install dependencies (if you haven't already)
npm install

# initialize storybook (first-time only — this will add Storybook packages)
npx storybook@latest init

# run storybook
npm run storybook
```

Screenshots: add screenshots of component states under `storybook-screenshots/` and reference them here. I included stories for each component under their folders (e.g. `src/components/Input/Input.stories.tsx`).
