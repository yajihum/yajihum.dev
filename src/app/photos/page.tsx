import PhotoWithModal from '@/app/photos/_components/PhotoWithModal';
import H2WithId from '@/components/atoms/H2WithId';
import { getAllPhotos } from '@/lib/photos';
import { Metadata } from 'next';
import { metadata as baseMetadata, ogImageUrl } from '../layout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Photos',
    description: 'やじはむの写真ギャラリー',
    openGraph: {
      ...baseMetadata.openGraph,
      title: 'Photos | yajihum.dev',
      description: 'やじはむの写真ギャラリー',
      images: [ogImageUrl],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: 'Photos | yajihum.dev',
      description: 'やじはむの写真ギャラリー',
      images: [ogImageUrl],
    },
  };
}

export default async function PhotosPage() {
  const photos = getAllPhotos();
  const sortedPhotos = photos.sort().reverse(); // 新しい順に並び替え

  return (
    <div className="grid grid-cols-1 gap-10">
      <H2WithId id="photos" title="Photos" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {sortedPhotos.map((photo) => (
          <PhotoWithModal key={photo} photo={photo} />
        ))}
      </div>
    </div>
  );
}
