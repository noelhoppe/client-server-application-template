# Client-Server-Application Web Client Documentation

This directory contains a [Next.js](https://nextjs.org) project
bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## What's Inside?

This module is a web client for the client-server-application.

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

This will start the site at [http://localhost:3000](http://localhost:3000) with hot-reload enabled.

### Build for Production

```bash
npm run build
```

Builds to `.next` directory. Since we are using `output: "standalone"` in [next.config.ts](./next.config.ts),
the build can be found in `.next/standalone`

### Preview Production Build

```bash
npm run start
```

Preview the production build locally before deploying.

## Technology Stack

- Next.js
- React
- React DOM
- TypeScript
- Tailwind CSS

> Refer to the `./package.json` file for the complete list of dependencies.

## Responsibilities

Displays data and handles user interactions. Uses server for:

- performance or data involved tasks
- data distribution and persistence

The frontend should:

- Render the application UI.
- Manage routing using the Next.js App Router.
- Handle forms and user input.
- Communicate with the backend API.
- Display loading, error and empty states.
- Manage client-side state where necessary.
- Cache server data when appropriate.
- Perform client-side validation.
- Provide an accessible and responsive user experience.

The frontend **should not**:

- Implement business rules that belong to the backend.
- Duplicate server-side validation beyond improving user experience.
- Store authoritative application data locally.
- Perform heavy computations that should be handled by the server.

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```
/clients/web
├── /src                                            # Next.js application source folder
│   └── /app                                        # Next.js App Router
│   |   └── /api                                    # Backend for Frontend (BFF) API routes
|   │   |  └── /<feature-name>
|   |   |         └── route.ts                                                           
│   |   └── /<feature-name>                           
|   │      └── page.tsx                             
│   |   └── layout.tsx                              # Root Layout component
│   |   └── page.tsx                                # Root Page component        
│   └── /features                                   # Feature-based project structure                                   
│       └── /<feature-name>                         # Feature-specific folder, keep naming consistent with server module if possible
│           └── /ui                                 # Feature-specific UI components
│           └── /services                           # Feature-specific services for API calls and business logic
│           └── /dtos                               # Feature-specific data transfer objects (DTOs)
│           └── /requests                           # Feature-specific request DTOs for API calls
|           └── /responses                          # Feature-specific response DTOs for API calls
|           └── /persistence                        # Feature-specific client-side persistence layer (e.g. local storage, IndexedDB)
├── /public                                         # Static assets
├── .gitignore                                      # Files to ignore in git version control
├── AGENTS.md                                       # Instructions for AI agents to work with this module
├── CLAUDE.md                                       # Symlink to AGENTS.md
├── Dockerfile                                      # Dockerfile for containerizing the web client (Next.js standalone build)
├── eslint.config.mjs                               # ESLint configuration
├── GEMINI.md                                       # Symlink to AGENTS.md
├── next.config.ts                                  # Next.js configuration
├── next-env.ts                                     # Next.js environment types
├── package.json                                    # Dependencies and scripts
├── package-lock.json                               # Lock file
├── postcss.config.mjs                              # PostCSS configuration
├── README.md                                       # Module overview - you are here
├── tsconfig.json                                   # TypeScript config
├── public/                                         # Static assets
│   └── favicon.svg
```

## Scripts Reference

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start development server             |
| `npm run build`    | Build for production                 |
| `npm run start`    | Preview production build locally     |
| `npm run lint`     | Run ESLint                           |
| `npm run prettier` | Run prettier and edit files in-place |

## Need help or learn more?

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
