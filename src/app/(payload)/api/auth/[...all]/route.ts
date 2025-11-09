import { toNextJsHandler } from "better-auth/next-js";
import { getPayload } from "payload";
import type { Payload } from "@/lib/auth";
import config from "../../../../../../payload.config";

const payload = (await getPayload({ config })) as Payload;
const { handler } = payload.betterAuth;

export const { GET, POST } = toNextJsHandler(handler);
