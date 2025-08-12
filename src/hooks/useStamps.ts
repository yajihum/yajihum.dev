'use client';

import { EmojiType } from 'ms-3d-emoji-picker';
import { useEffect, useState } from 'react';

export const useStamps = (slug: string) => {
  const [stamps, setStamps] = useState<EmojiType[]>([]);

  useEffect(() => {
    const fetchStampList = async () => {
      try {
        const res = await fetch(`/api/stamps/${slug}`);
        const stampList: EmojiType[] = await res.json();
        setStamps(stampList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStampList();

    return () => {
      setStamps([]);
    };
  }, [slug]);

  const updateStamps = (newStamps: EmojiType[]) => {
    setStamps(newStamps);
  };

  return {
    stamps,
    updateStamps,
  };
};
