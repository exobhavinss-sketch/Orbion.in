import { betterAuth } from "better-auth";
import { prismaAdapter } from "@better-auth/prisma-adapter";
import { getPrisma, isDatabaseConfigured } from "./prisma";

export { isDatabaseConfigured };

const origins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
  process.env.BETTER_AUTH_URL,
  process.env.NEXT_PUBLIC_SITE_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined,
].filter((url): url is string => Boolean(url));

const baseURL =
  process.env.BETTER_AUTH_URL ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

function createAuthInstance() {
  const activePrisma = getPrisma();
  if (!activePrisma) {
    return null;
  }
  return betterAuth({
    database: prismaAdapter(activePrisma, {
      provider: "postgresql",
    }),
    baseURL,
    trustedOrigins: Array.from(new Set(origins)),
    emailAndPassword: {
      enabled: true,
      minPasswordLength: 8,
    },
  });
}

type AuthInstance = ReturnType<typeof createAuthInstance>;
let authInstance: AuthInstance = null;

export function getAuth(): AuthInstance {
  if (!isDatabaseConfigured()) {
    return null;
  }
  if (!authInstance) {
    authInstance = createAuthInstance();
  }
  return authInstance;
}

const unconfiguredAuthResponse = () =>
  new Response(
    JSON.stringify({
      error: "Service Unavailable",
      message:
        "Authentication service is temporarily unavailable because server-side database configuration has not been enabled.",
    }),
    {
      status: 503,
      headers: { "Content-Type": "application/json" },
    }
  );

// Safe export that guards against missing database configuration
export const auth = {
  get api() {
    const activeAuth = getAuth();
    if (!activeAuth) {
      return {
        getSession: async () => null,
      } as any;
    }
    return activeAuth.api;
  },
  get handler() {
    const activeAuth = getAuth();
    if (!activeAuth) {
      return async () => unconfiguredAuthResponse();
    }
    return activeAuth.handler;
  },
};
