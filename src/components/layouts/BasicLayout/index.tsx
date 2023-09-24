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
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="my-10">{children}</div>;
}
