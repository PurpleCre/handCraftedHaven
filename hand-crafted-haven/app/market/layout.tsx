import SideNav from '../ui/sidenav';
//import { inter } from '../ui/fonts';
import '../ui/global.css';

export default function Layout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="market-layout">
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="market-content">{children}</div>
    </div>
  );
}
