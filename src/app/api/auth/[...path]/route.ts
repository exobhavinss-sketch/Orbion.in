import { auth, isAuthConfigured } from '@/lib/auth/server';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{ path?: string[] }>;
};

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

async function handleAuthRequest(
  method: HttpMethod,
  request: Request,
  context: RouteContext
) {
  let subpath = '';
  try {
    const resolvedParams = await context.params;
    subpath = Array.isArray(resolvedParams?.path) ? resolvedParams.path.join('/') : '';
  } catch {
    subpath = 'unknown';
  }

  if (!isAuthConfigured()) {
    console.error(
      `[Auth API Error] ${method} /api/auth/${subpath}: Missing required environment variables (NEON_AUTH_BASE_URL or NEON_AUTH_COOKIE_SECRET).`
    );
    return Response.json(
      {
        message:
          'Authentication service configuration missing. Please verify NEON_AUTH_BASE_URL and NEON_AUTH_COOKIE_SECRET are set in your environment variables.',
        code: 'AUTH_CONFIG_MISSING',
      },
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const handler = auth.handler();
    return await handler[method](request, context as { params: Promise<{ path: string[] }> });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(
      `[Auth API Exception] ${method} /api/auth/${subpath}:`,
      errorMessage
    );
    return Response.json(
      {
        message: 'Authentication service encountered an unexpected error. Please try again.',
        code: 'AUTH_INTERNAL_ERROR',
      },
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function GET(request: Request, context: RouteContext) {
  return handleAuthRequest('GET', request, context);
}

export async function POST(request: Request, context: RouteContext) {
  return handleAuthRequest('POST', request, context);
}

export async function PUT(request: Request, context: RouteContext) {
  return handleAuthRequest('PUT', request, context);
}

export async function DELETE(request: Request, context: RouteContext) {
  return handleAuthRequest('DELETE', request, context);
}

export async function PATCH(request: Request, context: RouteContext) {
  return handleAuthRequest('PATCH', request, context);
}

