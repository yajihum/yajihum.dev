'use client';

import { EmojiType, Picker } from 'ms-3d-emoji-picker';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SVGElement } from '../icons';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

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
    <section className="flex flex-col gap-4 p-1 md:flex-row md:justify-between md:gap-0">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="h-9 w-9 shrink-0">
          <p className="shrink-0 rounded-lg bg-neutral-800 p-2">
            {open ? (
              <HeroiconsSvgWrapper
                className="h-5 w-5"
                aria-label="絵文字ピッカーを開く"
              >
                {SVGElement.minus}
              </HeroiconsSvgWrapper>
            ) : (
              <HeroiconsSvgWrapper
                className="h-5 w-5"
                aria-label="絵文字ピッカーを閉じる"
              >
                {SVGElement.plus}
              </HeroiconsSvgWrapper>
            )}
          </p>
        </PopoverTrigger>
        <PopoverContent
          className="z-10 border-none bg-inherit p-0"
          side="top"
          sideOffset={10}
          align="start"
        >
          <Picker isOpen={open} onEmojiSelect={handleSelectEmoji} />
        </PopoverContent>
      </Popover>
      <div className="flex gap-1 md:grid md:grid-flow-col md:grid-cols-none">
        {selectedEmoji &&
          selectedEmoji.map((emoji) => (
            <img
              key={`${emoji.category} | ${emoji.name}`}
              src={emoji.url}
              alt={emoji.name}
              width={36}
              height={36}
              className="h-8 w-8 rounded-lg bg-neutral-800 p-1 md:h-9 md:w-9"
            />
          ))}
      </div>
    </section>
  );
}
