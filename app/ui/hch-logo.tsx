import { lusitana } from '@/app/ui/fonts';

export default function HandLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <img src="./favicon.ico" alt="" className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Handcrafted Haven</p>
    </div>
  );
}
