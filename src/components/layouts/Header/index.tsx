import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 border-b bg-black/75 py-1 backdrop-blur transition-colors md:py-2 ">
      <div className="mx-auto flex max-w-4xl justify-between px-4">
        <div className="py-2">
          <a href="https://yajium.day" className="hover:underline">
            <h2 className="text-xl font-bold">yajihum.day</h2>
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
