import { getPostBySlug } from '@/lib/blog';
import { loadGoogleFont } from '@/lib/font';
import { ImageResponse } from 'next/server';

export const runtime = 'nodejs';
export const revalidate = 10;

export const alt = "Article's Featured Image";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type Props = {
  params: { slug: string };
};

export default async function Image({ params: { slug } }: Props) {
  const notoSansArrayBuffer = await loadGoogleFont({
    family: 'Noto Sans JP',
    weight: 700,
  });

  const post = getPostBySlug('tech', slug, ['title']);

  return new ImageResponse(
    <div
      style={{
        backgroundImage:
          'url(https://images.site.yajihum.dev/ogp-background-image.png)',
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'left',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        padding: '120px 100px',
      }}
    >
      <div
        style={{
          color: '#fff',
          wordWrap: 'break-word',
          fontSize: 60,
          width: '100%',
        }}
      >
        {post.title}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: 'notoSansJP',
          data: notoSansArrayBuffer,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}
