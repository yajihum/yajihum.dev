import Link from 'next/link';
import { SVGElement } from '../icons';
import { SnsSvgWrapper } from '../icons/svg-wapper';

const snsLinks = [
  {
    name: 'X',
    url: 'https://twitter.com/yajihum',
    icon: SVGElement.x,
    userName: '@yajihum',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yajihum',
    icon: SVGElement.github,
    userName: '@yajihum',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/rorisutarou',
    icon: SVGElement.zenn,
    userName: '@rorisutarou',
    fill: '#3EA8FF',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yajihum',
    icon: SVGElement.instagram,
    userName: '@yajihum',
    fill: '#E4405F',
  },
  {
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/yajihum',
    icon: SVGElement.speakerDeck,
    userName: '@yajihum',
    fill: '#009287',
  },
];

export default function SnsLinks() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-0">
      {snsLinks.map((link) => (
        <li key={link.name}>
          <Link href={link.url} target="_blank" className="flex gap-2">
            <SnsSvgWrapper
              fill={link.fill}
              className="rounded-md bg-white p-1.5"
            >
              {link.icon}
            </SnsSvgWrapper>
            <div className="grid grid-cols-1">
              <p className="text-sm">{link.name}</p>
              <p className="text-xs text-neutral-400 md:text-sm">
                {link.userName}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
