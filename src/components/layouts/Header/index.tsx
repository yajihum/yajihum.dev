import Link from 'next/link';
import Navigation from './Navigation';
import { getTokyoWeatherImage } from '@/lib/weather';
import Image from 'next/image';

export default async function Header() {
  const { url, alt } = await getTokyoWeatherImage();

  return (
    <header className="sticky top-0 z-10 border-b border-stone-800 bg-neutral-900 py-2 transition-colors">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 md:px-0">
        <Link href="/" className="flex items-center gap-1.5 hover:underline">
          <Image
            src={url}
            width="30"
            height="30"
            className="inline-block h-5 w-5 md:h-7 md:w-7"
            alt={alt}
          />

          <h2 className="text-lg font-bold md:text-xl">yajihum.dev</h2>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
