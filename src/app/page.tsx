import SnsLinks from '@/components/molecules/SnsLinks';
import WorksCards from '@/components/molecules/WorksCards';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-1 place-items-center gap-10 py-16 md:grid-cols-2">
        <section className="my-auto">
          <h2 className="text-5xl font-semibold lg:text-7xl">こんちゃ！</h2>
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
          <h2 className="px-2 text-2xl font-semibold">ABOUT</h2>
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
            <Separator className="my-2 bg-neutral-700" />
            <CardContent>
              <SnsLinks />
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>
        </section>
        <section
          className="grid grid-cols-1 place-items-stretch gap-3"
          aria-label="works"
        >
          <h2 className="px-2 text-2xl font-semibold">WORKS</h2>
          <WorksCards />
        </section>
      </div>
    </>
  );
}
