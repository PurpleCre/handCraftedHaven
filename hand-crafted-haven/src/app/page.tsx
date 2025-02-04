import { lusitana } from '@/app/ui/fonts'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Hand Crafted Haven',
};

 
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Hand Crafted Haven
      </h1>
      <a href="/market">Enter</a>
    </main>
  );
}