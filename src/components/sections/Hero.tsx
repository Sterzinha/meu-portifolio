import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
   return (
      <section
         id='inicio'
         className='flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-16 text-center'>
         <div className='relative mb-8 animate-float'>
            <div className='absolute inset-0 rounded-full bg-primary/40 blur-2xl' />
            <div className='glow-ring relative h-40 w-40 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary-light md:h-48 md:w-48'>
               <Image
                  src='https://github.com/SterRoque.png'
                  width={200}
                  height={200}
                  alt='Ster Roque'
                  className='h-full w-full object-cover'
                  priority
               />
            </div>
         </div>

         <h1 className='text-glow animate-fade-up text-5xl font-extrabold text-primary-light md:text-7xl'>
            Ster Roque
         </h1>

         <h2 className='mt-4 animate-fade-up text-xl font-medium text-primary md:text-2xl'>
            Desenvolvedora Fullstack
         </h2>

         <p className='mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-gray-300 md:text-lg'>
            Transformando ideias em experiências digitais incríveis com mais de
            2 anos de experiência em desenvolvimento fullstack. Especializada em
            React, React Native, TypeScript e criação de interfaces modernas e
            funcionais.
         </p>

         <Link
            href='/#projetos'
            className='mt-10 inline-block animate-fade-up rounded-full bg-gradient-to-r from-primary to-primary-light px-10 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-glow-lg'>
            Ver Meus Projetos
         </Link>
      </section>
   );
}
