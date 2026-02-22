import { BlogCards } from '@/components/molecules/BlogCards';
import { PhotoCards } from '@/components/molecules/PhotoCards';
import { SnsLinks } from '@/components/molecules/SnsLinks';
import SpeachLinks from '@/components/molecules/SpeachLinks';
import { getPostsByTag } from '@/lib/blog';
import { getAllPhotos } from '@/lib/photos';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { speakerDeckEmbeddings } from '../speacker-deck';
import { metadata, ogImageUrl } from './layout';

export async function generateMetadata(): Promise<Metadata> {
  const baseMetadata = metadata;

  return {
    openGraph: {
      ...baseMetadata.openGraph,
      images: [ogImageUrl],
    },
    twitter: {
      images: [ogImageUrl],
    },
  };
}

export default async function Home() {
  const newPosts = getPostsByTag('tech', 4);
  const photos = getAllPhotos().reverse();

  return (
    <>
      <div className="grid grid-cols-1 gap-20">
        <section
          className="flex flex-col items-center gap-5 pt-10 pb-4 md:pt-28 md:pb-20"
          aria-label="about"
        >
          <Image
            src="https://images.site.yajihum.dev/rorisu.png"
            alt="Icon"
            width={120}
            height={120}
            className="size-[100px] rounded-full md:size-40"
          />

          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-bold md:text-4xl">yajihum</h1>
            <span className="text-neutral-600">/</span>
            <span className="text-xs tracking-[0.15em] text-neutral-400 md:text-base">
              FRONTEND ENGINEER
            </span>
          </div>

          <p className="flex flex-col items-center gap-1 text-sm leading-relaxed text-neutral-400 md:text-base">
            <span>ぬいぐるみとヨルシカがとても好き。</span>
            <span>毎日ほっこり生きている...</span>
          </p>

          <SnsLinks />
        </section>

        {/* Blog */}
        <section
          className="grid grid-cols-1 gap-6 border-t border-neutral-800 pt-10 md:grid-cols-[140px_1fr] md:gap-12"
          aria-label="blog"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-medium tracking-[0.2em] text-neutral-300">
              BLOG
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-0.5 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              All Posts
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <BlogCards posts={newPosts} tag="tech" />
        </section>

        {/* Talk */}
        <section
          className="grid grid-cols-1 gap-6 border-t border-neutral-800 pt-10 md:grid-cols-[140px_1fr] md:gap-12"
          aria-label="talk"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-medium tracking-[0.2em] text-neutral-300">
              TALK
            </h2>
            <a
              href="https://speakerdeck.com/yajihum"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-0.5 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              Speaker Deck
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <SpeachLinks speackerDeckEmbeddings={speakerDeckEmbeddings} />
        </section>

        {/* Photos */}
        <section
          className="grid grid-cols-1 gap-6 border-t border-neutral-800 pt-10 md:grid-cols-[140px_1fr] md:gap-12"
          aria-label="photos"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-xs font-medium tracking-[0.2em] text-neutral-300">
              PHOTOS
            </h2>
            <Link
              href="/photos"
              className="flex items-center gap-0.5 text-sm text-neutral-400 transition-colors hover:text-neutral-100"
            >
              All
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <PhotoCards photos={photos} />
        </section>
      </div>
    </>
  );
}
