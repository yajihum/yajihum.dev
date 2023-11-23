import BasicLayout from '@/components/layouts/BasicLayout';
import type { Metadata } from 'next';
import './globals.css';

const siteName = 'yajium.day';
const description = `Yajihum's personal website`;
const url = 'https://yajium.day';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? 'http://localhost:3000'),
  title: {
    default: siteName,
    template: '%s | yajium.day',
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
    card: 'summary',
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
    <html lang="ja">
      <body>
        <BasicLayout>{children}</BasicLayout>
      </body>
    </html>
  );
}
