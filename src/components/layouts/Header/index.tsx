import Link from 'next/link';
import Navigation from './Navigation';
import { getTokyoWeatherImage } from '@/lib/weather';
import Image from 'next/image';

export default async function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-stone-800 bg-neutral-900 py-2 transition-colors">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 md:px-0">
        <Link href="/" className="flex items-center gap-1.5">
          <h2 className="text-lg text-neutral-400 hover:text-neutral-200 md:text-xl">
            yajihum.dev
          </h2>
        </Link>

        <Navigation />
      </div>
    </header>
  );
}
