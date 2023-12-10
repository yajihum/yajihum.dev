import Footer from '../Footer';
import Header from '../Header';

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-900 text-white">
      <Header />
      <main className="container mx-auto max-w-3xl flex-grow px-4 md:px-0">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="my-10">{children}</div>;
}
