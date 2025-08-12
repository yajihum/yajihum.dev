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

export const SnsLinks = () => {
  return (
    <ul className="flex gap-6 py-2">
      {snsLinks.map((link) => (
        <li key={link.name} className="my-auto">
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 text-neutral-400 hover:text-neutral-200"
          >
            <SnsSvgWrapper className="size-5 md:size-6" fill="currentColor">
              {link.icon}
            </SnsSvgWrapper>
          </a>
        </li>
      ))}
    </ul>
  );
};
