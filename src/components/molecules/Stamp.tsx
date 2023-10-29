'use client';

import { SVGElement } from '@/components/icons';
import { EmojiType, Picker } from 'ms-3d-emoji-picker';
import 'ms-3d-emoji-picker/styles/index.css';
import { HeroiconsSvgWrapper } from '../icons/svg-wapper';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedEmoji: EmojiType[] | undefined;
  handleSelectEmoji: (selectedEmoji: EmojiType) => void;
};

export default function Stamp({
  open,
  setOpen,
  selectedEmoji,
  handleSelectEmoji,
}: Props) {
  return (
    <section className="flex flex-col gap-4 px-4 md:flex-row md:justify-between md:gap-0 md:px-8">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger className="h-9 w-9 shrink-0">
          <p className="shrink-0 rounded-lg bg-neutral-800 p-2">
            {open ? (
              <HeroiconsSvgWrapper className="h-5 w-5">
                {SVGElement.minus}
              </HeroiconsSvgWrapper>
            ) : (
              <HeroiconsSvgWrapper className="h-5 w-5">
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
