import { auth } from '@/lib/auth/server';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{ path: string[] }>;
};

export async function GET(request: Request, context: RouteContext) {
  return auth.handler().GET(request, context);
}

export async function POST(request: Request, context: RouteContext) {
  return auth.handler().POST(request, context);
}

export async function PUT(request: Request, context: RouteContext) {
  return auth.handler().PUT(request, context);
}

export async function DELETE(request: Request, context: RouteContext) {
  return auth.handler().DELETE(request, context);
}

export async function PATCH(request: Request, context: RouteContext) {
  return auth.handler().PATCH(request, context);
}

