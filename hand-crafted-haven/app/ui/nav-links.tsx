'use client';

// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { usePathname } from 'next/navigation';
//import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/market' },
  {name: 'Crafts', href: '/market/crafts'
  },
  { name: 'User Page', href: '/market/user' },
];

export default function NavLinks() {
  //const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={'navlink-layout'}
          >
            <p className="navlink-content">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
