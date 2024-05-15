import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: "postgresql",
  schema: "src/server/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL || "",
  },
  tablesFilter: ["p28zk-gallery_*"],
});