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
    url: 'https://www.instagram.com/yajium/',
    icon: SVGElement.instagram,
    userName: '@yajium',
    fill: '#E4405F',
  },
];

export default function SnsLinks() {
  return (
    <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {snsLinks.map((link) => (
        <li key={link.name} className="flex gap-2 md:gap-3">
          <SnsSvgWrapper fill={link.fill} className="rounded-md bg-white p-1.5">
            {link.icon}
          </SnsSvgWrapper>
          <a href={link.url} target="_blank" className="grid grid-cols-1">
            <p className="text-sm">{link.name}</p>
            <p className="text-xs text-neutral-400 hover:underline md:text-sm">
              {link.userName}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
