# Monorepo containing all client applications for the client-server-application

This is a TypeScript monorepo containing all client applications for the client-server-application. It is structured as
a [NPM workspaces](https://docs.npmjs.com/cli/v11/using-npm/workspaces) and contains all
[NPM scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts) for the entire client wokspace.

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

## Project Structure

```
/clients
├── /config                                         # Shared packages for all clients
│   └── eslint/                                     # Base ESLint configuration inherited by all clients
│   └── tsconfig/                                   # Base TypeScript configuration inherited by all clients
│   └── prettier/                                   # Base Prettier configuration inherited by all clients
├── /web                                            # Next.js web client
├── .nvmrc                                          # Node.js version. Activate with 'nvm use'
├── package.json                                    # Dependencies and scripts
├── package-lock.json                               # Lock file
```

## Scripts Reference

| Command                | Description                                                          |
|------------------------|----------------------------------------------------------------------|
| `npm run web:dev`      | Start development server for web client                              |
| `npm run web:build`    | Build web client for production                                      |
| `npm run web:start`    | Preview production build for web client locally                      |
| `npm run web:lint`     | Run ESLint for web client                                            |
| `npm run web:prettier` | Run prettier for web client and edit files in-place                  |
| `npm run lint`         | Run ESLint for the entire client workspace                           |
| `npm run prettier`     | Run prettier for the entire client workspace and edit files in-place |

## Dependency and SDK Updates

Update the `clients/**/package.json` files to update dependencies. After updating, run the following command to apply
the changes:

```bash
npm install
```

To update the Node.js version, update the `.nvmrc` file and run:

```bash
nvm use
```

## Need help or learn more?

To learn more about NPM workspaces or scripts, take a look at the following resources:

- [NPM workspaces](https://docs.npmjs.com/cli/v11/using-npm/workspaces)
- [NPM scripts](https://docs.npmjs.com/cli/v11/using-npm/scripts)
