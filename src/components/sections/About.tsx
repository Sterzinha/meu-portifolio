import Image from 'next/image';
import { stacks } from '@/constants/stacks';

export function About() {
   const marqueeItems = [...stacks, ...stacks];

   return (
      <section
         id='sobre'
         className='mx-auto w-full max-w-screen-xl px-6 py-24'>
         <h2 className='text-glow mb-16 text-center text-4xl font-extrabold text-primary-light md:text-5xl'>
            Sobre Mim
         </h2>

         <div className='mx-auto max-w-3xl text-center'>
            <p className='text-base leading-relaxed text-gray-300 md:text-lg'>
               Sou Sterphane Roque, desenvolvedora front-end com mais de 2 anos
               de experiência em projetos freelance. Meu interesse em TI começou
               em 2019, durante meu curso técnico em informática, onde estudei C,
               C++, Java, PHP, SQL, HTML, CSS e JavaScript.
            </p>
            <p className='mt-6 text-base leading-relaxed text-gray-300 md:text-lg'>
               Formei-me em 2021 e desenvolvi um projeto de conclusão de curso
               utilizando Java no Android Studio. Desde então, venho me
               especializando no desenvolvimento mobile e web, sempre buscando
               criar soluções inovadoras e funcionais.
            </p>
            <span className='mt-6 inline-flex items-center gap-2 text-gray-200'>
               <span className='text-lg'>📍</span>
               Wenceslau Braz, Paraná, Brasil
            </span>
         </div>

         <div className='mt-16'>
            <h3 className='mb-8 text-center text-lg font-semibold text-primary-light'>
               Tecnologias que uso
            </h3>

            <div className='marquee-mask overflow-hidden'>
               <ul className='marquee-track flex w-max animate-marquee gap-4'>
                  {marqueeItems.map((item, index) => (
                     <li
                        key={`${item.stack}-${index}`}
                        className='flex shrink-0 items-center gap-3 rounded-full border border-primary/20 bg-dark-card/60 px-5 py-3 transition-colors hover:border-primary/50'>
                        <Image
                           src={item.icon}
                           width={28}
                           height={28}
                           alt={item.stack}
                           className='h-7 w-7 object-contain'
                        />
                        <span className='whitespace-nowrap text-sm text-gray-200'>
                           {item.stack}
                        </span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}
