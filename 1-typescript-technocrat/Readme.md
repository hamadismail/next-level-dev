# 📦 TypeScript Project Setup

## This guide explains how to set up a TypeScript project, run `.ts` files, compile them to JavaScript with learning typescript with tweaking with typescript.

## 📁 Project Structure

```
typescript-technocrat/
├── module-1/
│   └── src/
        └── index.ts
├── module-1/
    └── dist/
        └── index.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have one of the following installed:

- Node.js

A package manager (pick one):

- pnpm
- yarn
- npm

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hamadismail/next-level-dev.git
cd next-level-dev
```

```bash
cd 1-typescript-technocrat
```

### 1. Navigate to a directory (Ex. module-1, module-2, ...)

```bash
cd module-1
```

### 2. Install Dependencies

Choose one of the following:

```bash
npm install
# or
yarn install
# or
pnpm install
```

---

## 🛠️ Initialize TypeScript

To generate a `tsconfig.json` file (if not already included):

```bash
npx tsc --init
```

Then, modify it to output JavaScript files into the `dist/` folder then changes module where you are in:

```jsonc
{
  "compilerOptions": {
    "outDir": "./module-1/dist",
    "rootDir": "./module-1/src",
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["module-(ex. 1, 2, 3, ...)/**/*"],
  "exclude": ["node_modules"]
}
```

---

## 🏗️ Compile TypeScript

```bash
npx tsc
```

This will output compiled `.js` files into the `dist/` folder.

---

## ▶️ Run TypeScript File (Directly with ts-node)

```bash
npx ts-node src/index.ts
# or
yarn ts-node src/index.ts
# or
pnpm ts-node src/index.ts
```

---

## 📜 Scripts in package.json

You can simplify commands using NPM/Yarn/PNPM scripts:

```json
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "ts-node src/index.ts"
  }
}
```

Then run:

```bash
npm run build
npm run start
npm run dev
```

---

## ✅ Final Tips

- Always place `.ts` source files in `module/`
- Use `dist/` only for compiled JS
- Keep `tsconfig.json` and `package.json` at the root level
