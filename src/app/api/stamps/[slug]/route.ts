import { emojiListEntryPoint } from '@/lib/cloudflare';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const postName = params.slug;

  try {
    const res = await fetch(`${emojiListEntryPoint}${postName}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from ${emojiListEntryPoint}${postName}`);
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

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  },
) {
  const postName = params.slug;
  const selectedEmoji = await request.json();

  try {
    const res = await fetch(`${emojiListEntryPoint}${postName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedEmoji),
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from ${emojiListEntryPoint}${postName}`);
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
