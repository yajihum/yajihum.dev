import { Card, CardContent } from '../ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

type Items = {
  name: string;
  'aria-label': string;
  url: string;
};

const items: Items[] = [
  {
    name: 'ロリスと海',
    'aria-label': '海をバックに撮ったロリスの写真',
    url: 'https://images.site.yajihum.dev/yajihum-dev-carousel%2Frorisu_sea.png',
  },
  {
    name: 'ロリスと桜と菜の花',
    'aria-label': '河津桜と菜の花をバックに撮ったロリスの写真',
    url: 'https://images.site.yajihum.dev/yajihum-dev-carousel%2Frorisu_spring.png',
  },
  {
    name: 'ロリスとカラちゃん',
    'aria-label': 'ロリスとポケモンのカラナクシのぬいぐるみの写真',
    url: 'https://images.site.yajihum.dev/yajihum-dev-carousel%2Frorisu_to_kara.jpg',
  },
  {
    name: 'ニット帽を被ったロリス',
    'aria-label': '青い手作りニット帽を被ったロリスの写真',
    url: 'https://images.site.yajihum.dev/yajihum-dev-carousel%2Frorisu_knit_hat.png',
  },
  {
    name: 'ブランケットを頭から被ったロリス',
    'aria-label': 'ブランケットを頭から被ったロリスの写真',
    url: 'https://images.site.yajihum.dev/yajihum-dev-carousel%2Fmakimaki_rorisu.jpg',
  },
  {
    name: 'ブランケットをかけてお昼寝するピータンとロリス',
    'aria-label': 'ブランケットをかけてお昼寝するピータンとロリスの写真',
    url: 'https://images.site.yajihum.dev/yajihum-dev-carousel%2Frorisu_peetan_neru.png',
  },
];

export const PhotosCarousel = () => {
  return (
    <Carousel className='w-full max-w-xl'>
      <CarouselContent className='p-0'>
        {items.map(({ name, 'aria-label': ariaLabel, url }) => (
          <CarouselItem key={name} className='rounded-xl'>
            <Card className='border-none bg-inherit'>
              <CardContent className='flex aspect-square items-center justify-center p-0'>
                <img
                  src={url}
                  alt={ariaLabel}
                  className='object-cover w-full h-full rounded-xl'
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:flex bg-inherit border-neutral-600 hover:bg-neutral-800 hover:text-white' />
      <CarouselNext className='hidden md:flex bg-inherit border-neutral-600 hover:bg-neutral-800 hover:text-white' />
    </Carousel>
  );
};
