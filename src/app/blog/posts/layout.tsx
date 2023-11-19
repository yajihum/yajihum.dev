import type { Metadata } from 'next';
//import 'ms-3d-emoji-picker/styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://yajium.day/'),
  title: {
    default: 'yajium.day',
    template: '%s | yajium.day',
  },
  description: `Yajihum's personal website`,
  openGraph: {
    type: 'website',
    title: 'Home | yajihum.day',
    description: `Yajihum's personal website`,
    url: 'https://yajium.day',
    siteName: 'yajium.day',
    images: ['https://images.yajium.day/ogp.png'],
  },
  twitter: {
    card: 'summary',
    title: 'Home | yajihum.day',
    description: `Yajihum's personal website`,
    creator: '@yajihum',
    images: ['https://images.yajium.day/ogp.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
