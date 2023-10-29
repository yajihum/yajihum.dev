'use server';

import { EmojiType } from 'ms-3d-emoji-picker';
import { emojiListEntryPoint } from './cloudflare';

export const postEmojiStamp = async (
  postName: string,
  selectedEmoji: EmojiType,
) => {
  const response = await fetch(`${emojiListEntryPoint}${postName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(selectedEmoji),
  });
  console.log(response);
  return response.json();
};

export const getEmojiStampList = async (postName: string) => {
  const response = await fetch(`${emojiListEntryPoint}${postName}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postName),
  });
  console.log(response);
  return response.json();
};
