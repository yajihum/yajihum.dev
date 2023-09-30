import { SVGElement } from '../icons';
import { SnsSvgWrapper } from '../icons/svg-wapper';

const snsLinks = [
  {
    name: 'x',
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
    <ul className="mt-6 grid grid-cols-2 gap-3 text-lg text-neutral-500 md:grid-cols-4 ">
      {snsLinks.map((link) => (
        <li key={link.name} className="flex gap-3">
          <SnsSvgWrapper fill={link.fill}>{link.icon}</SnsSvgWrapper>
          <a href={link.url}>
            <p className="text-base hover:underline md:text-lg">
              {link.userName}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
}
