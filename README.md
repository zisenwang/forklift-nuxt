# Forklift-Nuxt

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Backend setup

1. Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

2. Initialise Prisma:
```bash
npx prisma migrate dev
npx prisma migrate reset
```

3. Seed the database:
```bash
npx prisma db seed
```

4. Have a .env file at root folder with the following format:
```yaml
SUPABASE_URL="<URL HERE>"
SUPABASE_KEY="<ANON KEY HERE>"
DATABASE_URL="<PGSQL URL HERE>"
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
