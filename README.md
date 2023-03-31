# Forklift-Nuxt

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Backend fresh deploy

1. Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

2. Have a .env file at root folder with the following format:
```yaml
SUPABASE_URL="<URL HERE>"
SUPABASE_KEY="<ANON KEY HERE>"
DATABASE_URL="<PGSQL URL HERE>"
```

3. Initialise Prisma:
```bash
npx prisma init
npx prisma generate
npx prisma db migrate dev
npx prisma db migrate reset
npx prisma db seed
```

## Backend sync to existing environment
Same steps as [above](#backend-fresh-deploy), except:

3. Sync to Prisma (DO NOT RUN MIGRATE OR DATABASE WILL BE OVERWRITTEN):
```bash
npx prisma db pull
```


## Backend API routes
```ts
/inventory
/inventory/[equipment]
/inventory/[equipment]/[model]
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```


## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
