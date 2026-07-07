import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
   title: 'Ster Roque | Desenvolvedora Fullstack',
   description:
      'Portfólio de Ster Roque, desenvolvedora fullstack especializada em React,TypeScript, FiveM e outras stacks.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='pt-BR'>
         <body className={poppins.className}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}
