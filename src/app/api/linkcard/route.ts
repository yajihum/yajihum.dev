import { linkcardEntryPoint } from '@/lib/cloudflare';

export const runtime = 'edge';

export async function GET(request: Request) {
  console.log('GET', request.url);
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) return new Response('Bad Request', { status: 400 });

  try {
    const res = await fetch(`${linkcardEntryPoint}/api/linkCard?url=${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from ${linkcardEntryPoint}?url=${url}`);
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.log(error);
    return new Response((error as Error).message, { status: 500 });
  }
}
