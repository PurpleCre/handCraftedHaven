import './ui/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Hand Crafted Haven Dashboard',
    default: 'Hand Crafted Haven Dashboard',
  },
  icons: {
    icon: "/favicon.ico", 
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
        <div className="home-layout">
          <div className="home-content">{children}</div>
        </div>
      </body>
    </html>
  );
}