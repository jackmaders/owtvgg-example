import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    // biome-ignore lint/style/noNonNullAssertion: DB_FILE_NAME must always be set
    url: process.env.DB_FILE_NAME!,
  },
});
