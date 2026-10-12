import { createNeonAuth, type NeonAuth } from '@neondatabase/auth/next/server';

function getAuthConfig() {
  const baseUrl = process.env.NEON_AUTH_BASE_URL?.trim().replace(/\/+$/, '');
  const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET?.trim();

  const missing: string[] = [];
  if (!baseUrl) missing.push('NEON_AUTH_BASE_URL');
  if (!cookieSecret) missing.push('NEON_AUTH_COOKIE_SECRET');

  if (missing.length > 0) {
    throw new Error(
      `Neon Auth configuration error: Missing environment variable(s): ${missing.join(', ')}. Please configure these in your deployment environment.`
    );
  }

  if (cookieSecret!.length < 32) {
    throw new Error(
      'Neon Auth configuration error: NEON_AUTH_COOKIE_SECRET must be at least 32 characters long.'
    );
  }

  return {
    baseUrl: baseUrl!,
    cookies: {
      secret: cookieSecret!,
      sessionDataTtl: 300,
    },
  };
}

export function isAuthConfigured(): boolean {
  const baseUrl = process.env.NEON_AUTH_BASE_URL?.trim();
  const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET?.trim();
  return Boolean(baseUrl && cookieSecret && cookieSecret.length >= 32);
}

let authInstance: NeonAuth | null = null;

export function getAuth(): NeonAuth {
  if (!authInstance) {
    const config = getAuthConfig();
    authInstance = createNeonAuth(config);
  }
  return authInstance;
}

export const auth = new Proxy({} as NeonAuth, {
  get(_target, prop: string | symbol) {
    const instance = getAuth();
    const value = Reflect.get(instance, prop);
    if (typeof value === 'function') {
      return value.bind(instance);
    }
    return value;
  },
});

