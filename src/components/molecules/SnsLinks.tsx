import { SVGElement } from '../icons';
import { SnsSvgWrapper } from '../icons/svg-wapper';
import { Separator } from '../ui/separator';

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
    <div className="mt-6 flex gap-3 text-lg text-neutral-500 ">
      {snsLinks.map((link, index) => (
        <a href={link.url} key={link.name} className="flex gap-3">
          <SnsSvgWrapper fill={link.fill}>{link.icon}</SnsSvgWrapper>
          <p className="hover:underline">{link.userName}</p>
          {index !== snsLinks.length - 1 && (
            <Separator orientation="vertical" className="mx-2" />
          )}
        </a>
      ))}
    </div>
  );
}
