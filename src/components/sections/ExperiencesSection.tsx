import { experiences } from '@/constants/experiences';
import { PiSuitcaseSimpleBold } from 'react-icons/pi';

function formatDate(date: string) {
   if (date.toLowerCase() === 'atual') return 'Atual';
   const [, month, year] = date.split('/');
   const months = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
   ];
   return `${months[Number(month) - 1]}/${year}`;
}

export function ExperiencesSection() {
   return (
      <section
         id='experiencias'
         className='mx-auto w-full max-w-screen-xl px-6 py-24'>
         <h2 className='text-glow mb-16 text-center text-4xl font-extrabold text-primary-light md:text-5xl'>
            Experiências
         </h2>

         <div className='mx-auto grid max-w-4xl gap-6 sm:grid-cols-2'>
            {experiences.map((experience) => (
               <div
                  key={experience.name}
                  className='flex flex-col rounded-2xl border border-primary/20 bg-dark-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow'>
                  <div className='mb-4 flex items-center justify-between'>
                     <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-xl text-primary'>
                        <PiSuitcaseSimpleBold />
                     </span>
                     <span className='rounded-full border border-primary/40 px-3 py-1 text-xs font-medium text-primary'>
                        {formatDate(experience.start)} —{' '}
                        {formatDate(experience.end)}
                     </span>
                  </div>

                  <h3 className='text-lg font-semibold text-primary-light'>
                     {experience.name}
                  </h3>
                  <span className='text-sm font-medium text-primary'>
                     {experience.role}
                  </span>
                  <p className='mt-3 text-sm leading-relaxed text-gray-300'>
                     {experience.description}
                  </p>
               </div>
            ))}
         </div>
      </section>
   );
}
