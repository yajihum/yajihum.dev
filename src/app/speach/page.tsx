import H2WithId from '@/components/atoms/H2WithId';
import SpeachLinks from '@/components/molecules/SpeachLinks';
import { speakerDeckEmbeddings } from '@/speaker-deck';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speach',
  description: '今までLT会などで発表してきたものをまとめたページ',
};

export default function Speach() {
  return (
    <section className="grid grid-cols-1 gap-10">
      <h1 className="text-3xl font-bold">Speach</h1>
      <section className="grid grid-cols-1 gap-3">
        <H2WithId id="all-slides" title="All Slides" />
        <SpeachLinks
          sliceCount={speakerDeckEmbeddings.length}
          className="grid grid-cols-1 gap-10"
        />
      </section>
    </section>
  );
}
