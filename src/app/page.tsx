import Image from 'next/image';

export default function Home() {
  return (
    <section className="my-16 grid grid-cols-1 place-items-center gap-10 md:grid-cols-2">
      <section className="my-auto">
        <h2 className="text-5xl font-semibold md:text-7xl">こんちゃ！</h2>
      </section>
      <Image
        src="https://images.yajium.day/rorisu.png"
        width={500}
        height={500}
        alt="正面から見て左に体を傾け左腕をあげているロリスの画像"
      />
    </section>
  );
}
