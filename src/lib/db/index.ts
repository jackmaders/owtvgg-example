import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

// biome-ignore lint/style/noNonNullAssertion: DB_FILE_NAME must always be set
const url = process.env.DB_FILE_NAME!;

const client = createClient({ url });
export const db = drizzle(client);
