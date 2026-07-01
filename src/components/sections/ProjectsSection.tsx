import { projects } from '@/constants/projects';
import { CardProject } from '../CardProject';

export function ProjectsSection() {
   return (
      <section
         id='projetos'
         className='mx-auto w-full max-w-screen-xl px-6 py-24'>
         <h2 className='text-glow mb-16 text-center text-4xl font-extrabold text-primary-light md:text-5xl'>
            Meus Projetos
         </h2>

         <div className='grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
               <CardProject
                  key={project.id}
                  project={project}
               />
            ))}
         </div>
      </section>
   );
}
