import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Hand Crafted Haven',
    default: 'Hand Crafted Haven',
  },
  icons: {
    icon: "/favicon.ico", 
  },
  description: 'Give a hand and buy now, sell later.',
  metadataBase: new URL('https://hand-crafted-haven.vercel.app/'),
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}