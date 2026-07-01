'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
   { label: 'Início', href: '/#inicio' },
   { label: 'Sobre', href: '/#sobre' },
   { label: 'Experiências', href: '/#experiencias' },
   { label: 'Projetos', href: '/#projetos' },
   { label: 'Contato', href: '/#contato' },
];

export function Navbar() {
   const [open, setOpen] = useState(false);

   return (
      <header className='fixed top-0 left-0 z-50 w-full border-b border-primary/20 bg-dark/70 backdrop-blur-md'>
         <div className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4'>
            <Link
               href='/#inicio'
               className='text-xl font-bold text-primary text-glow'
               onClick={() => setOpen(false)}>
               Ster Roque
            </Link>

            <nav className='hidden items-center gap-8 md:flex'>
               {links.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     className='text-sm font-medium text-gray-200 transition-colors hover:text-primary'>
                     {link.label}
                  </Link>
               ))}
            </nav>

            <button
               className='text-2xl text-primary md:hidden'
               aria-label='Abrir menu'
               onClick={() => setOpen((prev) => !prev)}>
               {open ? <HiX /> : <HiMenu />}
            </button>
         </div>

         {open && (
            <nav className='flex flex-col gap-1 border-t border-primary/20 bg-dark/95 px-6 py-4 md:hidden'>
               {links.map((link) => (
                  <Link
                     key={link.href}
                     href={link.href}
                     onClick={() => setOpen(false)}
                     className='rounded-lg px-2 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-primary/10 hover:text-primary'>
                     {link.label}
                  </Link>
               ))}
            </nav>
         )}
      </header>
   );
}
