import Image from 'next/image';

const works = [
  {
    name: 'Microsoft 3D Emoji Picker',
    url: 'https://github.com/yajihum/microsoft-3d-emoji-picker',
    image: 'https://images.yajium.day/microsoft-3d-emoji-picker.png',
    description: 'Microsoft Fluent Emojiを使った絵文字ピッカー',
    technologies: ['React', 'Cloudflare R2', 'Figma API'],
  },
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
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {works.map((work) => (
        <li
          key={work.name}
          className="rounded-xl border border-neutral-700 bg-neutral-900"
        >
          <a href={work.url} target="_blank" className="grid grid-cols-1 gap-1">
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
                {work.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md bg-neutral-50 px-2 py-1 text-sm font-bold text-black"
                  >
                    {technology}
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
