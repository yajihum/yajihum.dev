import { LinkToPage } from '@/components/atoms/LinkToPage';

export default async function NotFound() {
  return (
    <section className='grid grid-cols-1 justify-items-center gap-10 py-10'>
      <h1 className='text-4xl font-bold'>404 Not Found</h1>
      <p className='text-sm md:text-2xl'>
        Sorry, the page you are looking for cannot be found.
      </p>
      <LinkToPage href='/' title='Back to home page' />
    </section>
  );
}
