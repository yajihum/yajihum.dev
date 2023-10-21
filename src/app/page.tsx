import { SVGElement } from '@/components/icons';
import { HeroiconsSvgWrapper } from '@/components/icons/svg-wapper';
import PostLinks from '@/components/molecules/PostLinks';
import SnsLinks from '@/components/molecules/SnsLinks';
import SpeachLinks from '@/components/molecules/SpeachLinks';
import WorksCards from '@/components/molecules/WorksCards';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { getPosts } from '@/lib/blog';
import Image from 'next/image';

export default function Home() {
  const newPosts = getPosts(
    ['title', 'description', 'pubDate', 'tags', 'icon', 'slug'],
    4,
  );

  return (
    <>
      <section className="grid grid-cols-1 place-items-center gap-10 py-16 md:grid-cols-2">
        <section className="my-auto">
          <h2 className="tracking-in-expand text-shadow text-5xl font-semibold shadow-neutral-300 lg:text-7xl">
            Welcome!
          </h2>
        </section>
        <Image
          src="https://images.yajium.day/rorisu.png"
          width={500}
          height={500}
          alt="正面から見て左に体を傾け左腕をあげているロリスの画像"
        />
      </section>
      <div className="grid grid-cols-1 gap-20">
        <section
          className="grid grid-cols-1 place-items-stretch gap-3"
          aria-label="About me"
        >
          <h2
            id="about"
            className="flex scroll-mt-20 items-center gap-2 px-2 text-lg font-semibold md:text-2xl"
          >
            <a id="about" href="#about">
              <HeroiconsSvgWrapper className="text-neutral-400 hover:text-neutral-200">
                {SVGElement.hashtag}
              </HeroiconsSvgWrapper>
            </a>
            About
          </h2>
          <Card className="border border-neutral-700 bg-neutral-900 text-white backdrop-blur transition-colors">
            <CardHeader className="grid grid-cols-1 gap-3">
              <CardTitle>
                <p className="flex items-center gap-2 text-xl">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/yajihum.png"
                      alt="@yajihum"
                      className="inline-block"
                    />
                    <AvatarFallback>hum</AvatarFallback>
                  </Avatar>
                  やじはむ
                </p>
              </CardTitle>
              <CardDescription className="text-neutral-200">
                {`I'm a frontend engineer working at an EdTech company.😴`}
              </CardDescription>
            </CardHeader>
            <Separator className="bg-neutral-700" />
            <CardContent className="p-6 md:p-5">
              <SnsLinks />
            </CardContent>
          </Card>
        </section>
        <section
          className="grid grid-cols-1 place-items-stretch gap-3"
          aria-label="works"
        >
          <h2
            id="works"
            className="flex scroll-mt-20 items-center gap-2 px-2 text-lg font-semibold md:text-2xl"
          >
            <a id="works" href="#works">
              <HeroiconsSvgWrapper className="text-neutral-400 hover:text-neutral-200">
                {SVGElement.hashtag}
              </HeroiconsSvgWrapper>
            </a>
            Works
          </h2>
          <WorksCards />
        </section>
        <section
          className="grid grid-cols-1 place-items-stretch gap-3"
          aria-label="works"
        >
          <div className="flex place-content-between gap-2">
            <h2
              id="speach-new-slides"
              className="flex scroll-mt-20 items-center gap-2 px-2 text-lg font-semibold md:text-2xl"
            >
              <a id="speach-new-slides" href="#speach-new-slides">
                <HeroiconsSvgWrapper className="text-neutral-400 hover:text-neutral-200">
                  {SVGElement.hashtag}
                </HeroiconsSvgWrapper>
              </a>
              Speach / New Slides
            </h2>
            <a
              href="/speach"
              className="flex items-end gap-1 text-neutral-300 hover:text-neutral-200"
            >
              <p className="text-sm md:text-base">Speach Page</p>
              <HeroiconsSvgWrapper className="h-5 w-5">
                {SVGElement.arrowUpRight}
              </HeroiconsSvgWrapper>
            </a>
          </div>
          <SpeachLinks />
        </section>
        <section
          className="grid grid-cols-1 place-items-stretch gap-3"
          aria-label="works"
        >
          <div className="flex place-content-between gap-2">
            <h2
              id="blog-new-posts"
              className="flex scroll-mt-20 items-center gap-2 px-2 text-lg font-semibold md:text-2xl"
            >
              <a id="blog-new-posts" href="#blog-new-posts">
                <HeroiconsSvgWrapper className="text-neutral-400 hover:text-neutral-200">
                  {SVGElement.hashtag}
                </HeroiconsSvgWrapper>
              </a>
              Blog / New Posts
            </h2>
            <a
              href="/blog"
              className="flex items-end gap-1 text-neutral-300 hover:text-neutral-200"
            >
              <p className="text-sm md:text-base">Blog Page</p>
              <HeroiconsSvgWrapper className="h-5 w-5">
                {SVGElement.arrowUpRight}
              </HeroiconsSvgWrapper>
            </a>
          </div>
          <PostLinks items={newPosts} />
        </section>
      </div>
    </>
  );
}
