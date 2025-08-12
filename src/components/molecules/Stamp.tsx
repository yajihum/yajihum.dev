'use client';

import { EmojiType, Picker } from 'ms-3d-emoji-picker';
import Image from 'next/image';
import { useState } from 'react';
import { SVGElement } from '../icons';
import { SmilePlus } from '../icons/SmilePlus';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

interface StampProps {
  stamps: EmojiType[];
  postName: string;
}

export const Stamp: React.FC<StampProps> = ({ stamps, postName }) => {
  const [open, setOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<EmojiType[]>(stamps);

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
        <PopoverTrigger className="h-9 w-9 shrink-0 cursor-pointer md:h-10 md:w-10">
          <p className="flex shrink-0 items-center justify-center rounded-lg bg-neutral-800 p-1.5">
            {open ? (
              <HeroiconsSvgWrapper
                className="h-6 w-6"
                aria-label="絵文字ピッカーを閉じる"
              >
                {SVGElement.minus}
              </HeroiconsSvgWrapper>
            ) : (
              <SmilePlus
                className="h-6 w-6"
                aria-label="絵文字ピッカーを開く"
              />
            )}
          </p>
        </PopoverTrigger>
        <PopoverContent
          className="z-10 border-none bg-inherit p-0"
          side="top"
          sideOffset={10}
          align="start"
        >
          <Picker isOpen={open} handleEmojiSelect={handleSelectEmoji} />
        </PopoverContent>
      </Popover>
      <div className="flex gap-1 md:grid md:grid-flow-col md:grid-cols-none">
        {selectedEmoji?.map((emoji) => (
          <Image
            key={`${emoji.category} | ${emoji.name}`}
            src={emoji.url}
            alt={emoji.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg bg-neutral-800 p-1 md:h-10 md:w-10"
          />
        ))}
      </div>
    </section>
  );
};
