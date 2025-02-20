// import { Metadata } from 'next';
import HandLogo from "./ui/hch-logo"; 
// export const metadata: Metadata = {
//   title: 'Hand Crafted Haven',
// };

 
export default async function Page() {
  return (
    <main>
      <h1 className='home-title'>
        {/* Hand Crafted Haven */}
        <HandLogo />
      </h1>
      <div className='enter-button'><a href="/market">Enter</a></div>
    </main>
  );
}