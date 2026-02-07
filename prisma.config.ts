// prisma.config.ts
import { defineConfig } from 'prisma/config';

export default defineConfig({
  datasource: {
    //provider: 'postgresql', // or 'mysql', 'sqlite', etc.
    url: process.env.DATABASE_URL, // Use your environment variable
  },
});