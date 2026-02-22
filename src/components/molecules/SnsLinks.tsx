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
    name: 'Speaker Deck',
    url: 'https://speakerdeck.com/yajihum',
    icon: SVGElement.speakerDeck,
    userName: '@yajihum',
    fill: '#009287',
  },
];

export const SnsLinks = () => {
  return (
    <ul className="flex items-center gap-4 py-2">
      {snsLinks.map((link, index) => (
        <li key={link.name} className="flex items-center gap-4">
          {index > 0 && (
            <span className="text-neutral-700">/</span>
          )}
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-neutral-500 transition-colors hover:text-neutral-200"
          >
            <SnsSvgWrapper className="size-4 md:size-5" fill="currentColor">
              {link.icon}
            </SnsSvgWrapper>
          </a>
        </li>
      ))}
    </ul>
  );
};
