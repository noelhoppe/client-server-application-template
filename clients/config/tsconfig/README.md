# Reusable TypeScript configuration for TypeScript based clients
This exports a reusable TypeScript configuration for TypeScript-based clients.

## Base configuration
Currently, the following tsconfig.json file serves as the base configuration for TypeScript based clients.
It extends the following two configurations from the [tsconfig/bases](https://github.com/tsconfig/bases):
- [Recommended](https://github.com/tsconfig/bases/blob/main/bases/recommended.json)
- [Strictest](https://github.com/tsconfig/bases/blob/main/bases/strictest.json)
```json
{
  "extends": ["@tsconfig/recommended/tsconfig.json", "@tsconfig/strictest/tsconfig.json"]
}
```

and resolves to the following configuration:
```json
{
    "compilerOptions": {
        "allowUnreachableCode": false,
        "allowUnusedLabels": false,
        "exactOptionalPropertyTypes": true,
        "forceConsistentCasingInFileNames": true,
        "isolatedModules": true,
        "module": "commonjs",
        "noFallthroughCasesInSwitch": true,
        "noImplicitReturns": true,
        "noPropertyAccessFromIndexSignature": true,
        "noUncheckedIndexedAccess": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitOverride": true,
        "skipLibCheck": true,
        "strict": true,
        "target": "es2016",
        "esModuleInterop": true,
        "preserveConstEnums": true,
        "useDefineForClassFields": false
    }
}
```

> You can show the resolved configuration by running the following command in your terminal:
>```bash
>npx tsc --showConfig
>```
