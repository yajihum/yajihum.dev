import BasicLayout from '@/components/layouts/BasicLayout';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'yajihum.day',
  description: `Yajihum's personal website`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body><BasicLayout>{children}</BasicLayout></body>
    </html>
  );
}
