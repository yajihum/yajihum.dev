import H2WithId from '@/components/atoms/H2WithId';
import { LinkToPage } from '@/components/atoms/LinkToPage';
import { PostLinks } from '@/components/molecules/PostLinks';
import { SnsLinks } from '@/components/molecules/SnsLinks';
import SpeachLinks from '@/components/molecules/SpeachLinks';
import { getPostsByTag } from '@/lib/blog';
import { Metadata } from 'next';
import Image from 'next/image';
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

  return (
    <>
      <div className="grid grid-cols-1 gap-20">
        <div className="grid grid-cols-1 gap-16 py-14 md:py-24">
          <Image
            src="https://images.site.yajihum.dev/rorisu.png"
            alt="Icon"
            width={240}
            height={240}
            className="mx-auto"
          />

          <h1 className="text-center text-4xl md:text-6xl">
            Hello, I&apos;m yajihum
          </h1>
        </div>

        <section
          className="grid grid-cols-1 place-items-stretch gap-6"
          aria-label="about"
        >
          <SectionTitle id="about" title="About" />
          <div className="md:py-6d flex flex-col justify-center gap-4 py-0">
            <h2 className="text-xl md:text-3xl">やじはむ / yajihum</h2>

            <p className="flex flex-col gap-1 text-zinc-300">
              <span className="block">Frontend Engineer</span>
              <span className="block text-sm md:text-base">
                ぬいぐるみとヨルシカがとても好き。毎日ほっこり生きている...
              </span>
            </p>

            <SnsLinks />
          </div>
        </section>

        <section
          className="grid grid-cols-1 place-items-stretch gap-3"
          aria-label="talk"
        >
          <SectionTitle id="talks" title="Talk / New Slide" />

          <SpeachLinks speackerDeckEmbeddings={speakerDeckEmbeddings} />

          <LinkToPage
            href="https://speakerdeck.com/yajihum"
            title="To Speaker Deck"
            icon="arrowUpRight"
          />
        </section>

        <section
          className="grid grid-cols-1 place-items-stretch gap-6"
          aria-label="blog"
        >
          <SectionTitle id="blog-new-posts" title="Blog / New Posts" />
          <PostLinks posts={newPosts} tag="tech" />

          <LinkToPage href="/blog" title="Blog Page" />
        </section>
      </div>
    </>
  );
}

const SectionTitle = ({ id, title }: { id: string; title: string }) => {
  return <H2WithId id={id} title={title} />;
};
