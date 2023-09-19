import Footer from '../Footer';
import Header from '../Header';

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 md:px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
