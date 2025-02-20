import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function HandLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`} >
      <Image src="/logo.png" alt="Logo" width={64} height={64} />
      <p className="text-[44px]">Handcrafted Haven</p>
    </div>
  );
}
