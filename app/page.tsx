import { Metadata } from 'next';
import Image from 'next/image';
import styles from './ui/home.module.css';
import Link from 'next/link';
 
export const metadata: Metadata = {
  title: 'Hand Crafted Haven',
};

 
export default async function Page() {
  return (
    <main>
      <h1 className='home-title'>
      <Image
        src="/hc_banner.png"
        width={1000}
        height={500}
        className={styles.responsive}
        alt="Logo and motto for hand crafete haven"
      />
      </h1>
      <div className='enter-button'>
      <Link
          href="./market"
          className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
          <span>Explore our Works 👉</span>
      </Link>
      </div>
    </main>
  );
}