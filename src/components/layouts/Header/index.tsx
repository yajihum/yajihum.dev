import Link from 'next/link';
import Navigation from './Navigation';

export default async function Header() {
  return (
    <header className="sticky top-0 z-10 flex justify-center px-4 py-4">
      <div className="flex items-center gap-4 rounded-full border border-neutral-700/50 bg-neutral-800/60 px-4 py-2 backdrop-blur-xl md:gap-6 md:px-6 md:py-2.5">
        <Link
          href="/"
          className="mr-4 text-sm font-medium text-neutral-300 transition-colors hover:text-neutral-100"
        >
          yajihum.dev
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
