//import Link from 'next/link';
import NavLinks from './nav-links';


export default function SideNav() {
  return (
    <div className="sidenav-frame">
      <div className="nav-links">
      <div className="haven-logo">Placeholder for Logo</div>
        <NavLinks />
        <div className="sidenav-layout"></div>
      </div>
    </div>
  );
}