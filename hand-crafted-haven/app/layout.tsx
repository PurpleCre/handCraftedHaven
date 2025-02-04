import { inter } from './ui/fonts';
import './ui/global.css';

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
