import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="border-b py-1 md:py-2">
      <div className="mx-auto flex max-w-4xl justify-between px-4">
        <div className="py-2.5">
          <a
            href="https://yajium.day"
            className="flex items-center gap-4 hover:underline"
          >
            {/* <Avatar>
              <AvatarImage alt="yajihum" src="https://github.com/yajihum.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            <h2 className="text-xl font-bold md:text-2xl">yajihum.day</h2>
          </a>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
