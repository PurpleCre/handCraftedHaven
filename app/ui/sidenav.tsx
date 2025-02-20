//import Link from 'next/link';
import NavLinks from './nav-links';
import { signOut } from '@/auth';
import HCLogo from './hc-logo';


export default function SideNav() {
  return (
    <div className="sidenav-frame">
      <div className="nav-links">
      <div className="haven-logo"><HCLogo /></div>
        <NavLinks />
        <div className="sidenav-layout"></div>
        <form
          action={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          <button className="signout">
            <div className="hidden">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}