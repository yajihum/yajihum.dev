import BasicLayout from '@/components/layouts/BasicLayout';
import type { Metadata } from 'next';
import './globals.css';
import { IBM_Plex_Sans_JP } from 'next/font/google';

const font = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const siteName = 'yajihum.dev';
const description = `Yajihum's personal website`;
const url = 'https://yajihum.dev';
export const ogImageUrl = 'https://images.site.yajihum.dev/ogp-default.png';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
  title: {
    default: siteName,
    template: '%s | yajihum.dev',
  },
  description: description,
  openGraph: {
    type: 'website',
    title: 'Home',
    description: description,
    url: url,
    siteName: siteName,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home',
    description: description,
    creator: '@yajihum',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body className={font.className}>
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  );
}
