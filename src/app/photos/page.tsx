import PhotoWithModal from '@/app/photos/_components/PhotoWithModal';
import { getAllPhotos } from '@/lib/photos';
import { Metadata } from 'next';
import { metadata as baseMetadata, ogImageUrl } from '../layout';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Photos',
    description: 'photos',
    openGraph: {
      ...baseMetadata.openGraph,
      title: 'Photos | yajihum.dev',
      description: 'photos',
      images: [ogImageUrl],
    },
    twitter: {
      ...baseMetadata.twitter,
      title: 'Photos | yajihum.dev',
      description: 'photos',
      images: [ogImageUrl],
    },
  };
}

export default async function PhotosPage() {
  const photos = getAllPhotos();
  // toReversedだとNext.jsのエラーになる
  const sortedPhotos = photos.reverse();

  return (
    <div className="grid grid-cols-1 gap-10">
      <h1 className="text-3xl">Photos</h1>

      <div className="grid grid-cols-3 gap-0.5 md:gap-1">
        {sortedPhotos.map((photo) => (
          <PhotoWithModal key={photo} photo={photo} />
        ))}
      </div>
    </div>
  );
}
