'use client';

import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import Image from 'next/image';
import { useState } from 'react';

interface PhotoWithModalProps {
  photo: string;
}

export default function PhotoWithModal({ photo }: PhotoWithModalProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <button
          onClick={() => {
            setSelectedPhoto(photo);
            setIsImageLoading(true);
          }}
          className="m-auto cursor-pointer rounded-lg"
          aria-label={`${photo}を拡大表示`}
        >
          <Image
            src={`/photos/${photo}`}
            alt={photo}
            loading="lazy"
            className="max-h-[400px] object-contain transition-transform duration-200 hover:scale-105"
            width={500}
            height={400}
            quality={50}
          />
        </button>
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => {
            setSelectedPhoto(null);
            setIsImageLoading(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="画像拡大表示"
        >
          <div className="max-h-full max-w-full p-4">
            <button
              onClick={() => {
                setSelectedPhoto(null);
                setIsImageLoading(false);
              }}
              className="absolute top-2 right-2 z-10 cursor-pointer rounded-full bg-black p-2 text-white md:top-4 md:right-4"
            >
              <HeroiconsSvgWrapper
                className="h-6 w-6"
                role="img"
                aria-label="閉じる"
              >
                {SVGElement.xMark}
              </HeroiconsSvgWrapper>
            </button>

            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
              </div>
            )}

            <Image
              src={`/photos/${selectedPhoto}`}
              alt={selectedPhoto}
              width={1920}
              height={1080}
              className="h-full max-h-screen w-full max-w-screen object-contain"
              quality={50}
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
