import Link from 'next/link';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { ExperiencesSection } from '@/components/sections/ExperiencesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
   return (
      <main className='flex flex-col'>
         <Hero />
         <About />
         <ExperiencesSection />
         <ProjectsSection />
         <ContactSection />

         <footer className='border-t border-primary/20 py-8 text-center text-sm text-gray-400'>
            <p>
               Feito com <span className='text-primary'>♥</span> por{' '}
               <Link
                  href='/#inicio'
                  className='text-primary hover:underline'>
                  Ster Roque
               </Link>
            </p>
         </footer>
      </main>
   );
}
