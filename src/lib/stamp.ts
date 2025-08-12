import type { EmojiType } from 'ms-3d-emoji-picker';
import { emojiListEntryPoint } from '@/lib/cloudflare';

export async function getStamps(postSlug: string): Promise<EmojiType[]> {
  try {
    const res = await fetch(`${emojiListEntryPoint}${postSlug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from ${emojiListEntryPoint}${postSlug}`);
    }

    const stampList: EmojiType[] = await res.json();
    return stampList;
  } catch (error) {
    console.error('Failed to fetch stamps:', error);
    return [];
  }
}
