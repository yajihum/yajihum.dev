'use client';

import { EmojiType } from 'ms-3d-emoji-picker';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Stamp from './Stamp';

export default function StampContainer() {
  const pathname = usePathname();
  const postName = pathname.split('/').slice(-1)[0];

  const [open, setOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType[] | undefined>(
    undefined,
  );

  useEffect(() => {
    const fetchStampList = async () => {
      const res = await fetch(`/api/stamps/${postName}`);
      const stampList: EmojiType[] = await res.json();
      setSelectedEmoji(stampList);
    };
    fetchStampList();

    return () => {
      setSelectedEmoji(undefined);
    };
  }, [postName]);

  const handleSelectEmoji = async (selectedEmoji: EmojiType) => {
    const res = await fetch(`/api/stamps/${postName}`, {
      method: 'POST',
      body: JSON.stringify(selectedEmoji),
    });
    const emojiList: EmojiType[] = await res.json();
    setSelectedEmoji(emojiList);
    setOpen(false);
  };

  return (
    <Stamp
      open={open}
      selectedEmoji={selectedEmoji}
      setOpen={setOpen}
      handleSelectEmoji={handleSelectEmoji}
    />
  );
}
