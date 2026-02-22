import Image from 'next/image';
import Link from 'next/link';

type Props = {
  photos: string[];
};

export const PhotoCards: React.FC<Props> = ({ photos }) => {
  return (
    <Link
      href="/photos"
      className="group grid grid-cols-3 gap-1.5"
    >
      {photos.slice(0, 6).map((photo) => (
        <div key={photo} className="overflow-hidden rounded-md">
          <Image
            src={`/photos/${photo}`}
            alt={photo}
            width={300}
            height={300}
            className="aspect-square object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      ))}
    </Link>
  );
};
