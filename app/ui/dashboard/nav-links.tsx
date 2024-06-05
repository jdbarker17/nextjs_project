'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { link } from 'fs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { IoMdFitness } from "react-icons/io";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Exercises', href: '/dashboard/exercises', icon: IoMdFitness}
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-barker-tertiary bg-opacity-20 p-3 text-sm font-medium hover:bg-[#6ee7b7] hover:text-emerald-950 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-[#059669] text-emerald-950 bg-opacity-20': pathname === link.href,
              },
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
