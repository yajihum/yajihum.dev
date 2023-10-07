import Image from 'next/image';

const works = [
  {
    name: 'ロリスとおしゃべりタイム🐒',
    url: 'https://rorisu-chat.vercel.app/',
    image: 'https://images.yajium.day/rorisu-tochat.png',
    description: 'ChatGPT APIを使ったチャットアプリ',
    technologies: ['Next.js', 'ChatGPT-API'],
  },
  {
    name: 'Poketto',
    url: 'https://poketto-mon.vercel.app/',
    image: 'https://images.yajium.day/poketto.png',
    description: '好きなポケモンをシェアできるアプリ',
    technologies: ['React', 'Next.js', 'Firebase'],
  },
];

export default function WorksCards() {
  return (
    <ul className="grid grid-cols-2 gap-10">
      {works.map((work) => (
        <li
          key={work.name}
          className="rounded-xl border border-neutral-700 bg-neutral-900"
        >
          <a href={work.url} className="grid grid-cols-1 gap-1">
            <div className="relative" style={{ aspectRatio: '2' }}>
              <Image
                src={work.image}
                alt={work.name}
                layout="fill"
                objectFit="cover"
                className="absolute rounded-t-xl object-fill"
              />
            </div>
            <section className="grid grid-cols-1 gap-6 p-4 text-center">
              <section className="grid grid-cols-1 gap-1">
                <p className="text-lg font-bold">{work.name}</p>
                <p className="text-sm text-neutral-300">{work.description}</p>
              </section>
              <ul className="flex justify-center gap-2">
                {work.technologies.map((t) => (
                  <li
                    key={t}
                    className="rounded-md bg-white px-2 py-1 text-sm font-bold text-black"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>
          </a>
        </li>
      ))}
    </ul>
  );
}
