# Client-Server-Application Documentation Site

This directory contains an [Astro Starlight](https://starlight.astro.build/) documentation site.

## What's Inside?

This documentation site automatically displays your:

- **skills/** - Agent skills documentation following the [agentskills.io](https://agentskills.io) specification
- **wiki/** - Your personal knowledge base following the [Open Knowledge Format (OKF)](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing?hl=enen) specification
- **AGENTS.md** - Working memory for AI agents
- **CONTRIBUTING.md** - Contribution guidelines for your repository
- **pull_request_template.md** - Pull request template for your repository
- **README.md** - Project overview

All Markdown files are **symlinked** from the parent directory, so any changes you make to your Agentic Productivity files are automatically reflected in the docs site.

## Quick Start

### Prerequisites
- [nvm](https://www.nvmnode.com/) and Node.js version **v24.18.0**

### Activate Node.js version
```bash
nvm use
```

### Installation
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```
or
```bash
npm run start
```

This will start the site at `http://localhost:4321` with hot-reload enabled.

### Build for Production

```bash
npm run build
```

Builds the static site to `./dist/`

### Preview Production Build

```bash
npm run preview
```

Preview the production build locally before deploying.

## Symlinked Content

The documentation automatically includes your files through symlinks:

```
.web/src/content/docs/
└── skills/ -> ../../../../skills/
├── wiki -> ../../../../wiki
├── agents.md -> ../../../../AGENTS.md
├── contributing.md -> ../../../../CONTRIBUTING.md
├── pull_request_template.md -> ../../../../.github/pull_request_template.md
├── readme.md -> ../../../../README.md
```

**This means:**
- Edit your files in the root directory as usual
- Changes appear immediately in the docs site (with hot-reload in dev mode)
- No need to manually sync or copy files

## Customization

### Update Site Title and Branding

Edit `.web/astro.config.mjs`:

```js
starlight({
  title: 'My Agentic Productivity', // Change this
  social: {
    github: 'https://github.com/yourusername/your-repo',
  },
  // ... other config
})
```

### Add Custom Pages

Create new `.md` or `.mdx` files in `src/content/docs/`:

```bash
touch src/content/docs/my-page.md
```

### Configure Navigation

Starlight automatically generates navigation from your file structure. To customize:

Edit `astro.config.mjs` and add a `sidebar` configuration:

```js
// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My client-server application',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/client-server-application' }],
            sidebar: [
                {
                    label: "README",
                    slug: "readme"
                },
                {
                    label: "CONTRIBUTING",
                    slug: "contributing"
                },
                {
                    label: 'AGENTS',
                    slug: 'agents'
                },
                {
                    label: 'Pull Request Template',
                    slug: 'pull_request_template'
                },
                {
                    label: "wiki",
                    items: [
                        {
                            autogenerate: { directory: 'wiki' }
                        }
                    ]
                },
                {
                    label: "skills",
                    items: [
                        {
                            autogenerate: { directory: 'skills' }
                        }
                    ]
                }
            ],
        }),
    ]
});
```

## Deployment

### Deploy to Netlify

1. Push your repository to GitHub
2. Connect to Netlify
3. Set build command: `cd .web && pnpm build`
4. Set publish directory: `.web/dist`

### Deploy to Vercel

1. Push your repository to GitHub
2. Import project in Vercel
3. Set root directory: `.web`
4. Build command: `pnpm build`
5. Output directory: `dist`

### Deploy to GitHub Pages

Add this to your `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
  // ...
});
```

Then build and deploy:

```bash
pnpm build
# Deploy the ./dist directory to GitHub Pages
```

### Deploy to Cloudflare Pages

1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Build command: `cd .web && pnpm build`
4. Build output directory: `.web/dist`

## Project Structure

```
.starlight/
├── .gitignore                                      # Files to ignore in git version control
├── .nvmrc                                          # Node.js version. Activate with 'nvm use'
├── AGENTS.md                                       # Instructions for AI agents to work with this module
├── astro.config.mjs                                # Astro configuration
├── CLAUDE.md                                       # Symlink to AGENTS.md
├── GEMINI.md                                       # Symlink to AGENTS.md
├── package.json                                    # Dependencies and scripts
├── package-lock.json                               # Lock file
├── tsconfig.json                                   # TypeScript config
├── README.md                                       # Module overview - you are here
├── public/                                         # Static assets
│   └── favicon.svg
└── src/
    ├── content/
    │   ├── content.config.ts                       # Content collections config
    │   └── docs/                                   # Documentation pages
    │       ├── skills/                             # Symlink to ../../../../skills/
    │       ├── wiki/                               # Symlink to ../../../../wiki/
    │       ├── agents.md                           # Symlink to ../../../../AGENTS.md
    |       ├── contributing.md                     # Symlink to ../../../../CONTRIBUTING.md
    |       ├── pull_request_template.md            # Symlink to ../../../../.github/pull_request_template.md
    |       ├── readme.md                           # Symlink to ../../../../README.md
```

## Troubleshooting

### Symlinks not working?

**On Windows:** You may need to enable Developer Mode or run as administrator to create symlinks. Alternatively, copy the files instead of symlinking.

**On macOS/Linux:** Symlinks should work out of the box.


### Build errors?

Make sure all symlinked files exist in the parent directory:
- `../skills/`
- `../wiki/`
- `../AGENTS.md`
- `../CONTRIBUTING.md`
- `../.github/pull_request_template.md`
- `../README.md`


## Scripts Reference

| Command                          | Description                      |
|----------------------------------|----------------------------------|
| `npm run dev` or `npm run start` | Start development server         |
| `npm run build`                  | Build for production             |
| `npm run preview`                | Preview production build locally |
| `npm run astro`                  | Run Astro CLI commands           |

## Need help or learn more?

- Visit [Astro docs](https://docs.astro.build)
- Visit [Starlight docs](https://starlight.astro.build)
- Check the [project's main README.md](../README.md)
