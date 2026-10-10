import { createNeonAuth, type NeonAuth } from '@neondatabase/auth/next/server';

function getAuthConfig() {
  const baseUrl = process.env.NEON_AUTH_BASE_URL;
  const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET;

  if (!baseUrl || !cookieSecret) {
    throw new Error(
      'Neon Auth configuration error: Missing NEON_AUTH_BASE_URL or NEON_AUTH_COOKIE_SECRET. Please ensure these environment variables are configured in your deployment environment.'
    );
  }

  if (cookieSecret.length < 32) {
    throw new Error(
      'Neon Auth configuration error: NEON_AUTH_COOKIE_SECRET must be at least 32 characters long.'
    );
  }

  return {
    baseUrl,
    cookies: {
      secret: cookieSecret,
      sessionDataTtl: 300,
    },
  };
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

