import { IProject } from '@/types/project-types';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';

type CardProjectProps = {
   project: IProject;
};

export function CardProject({ project }: CardProjectProps) {
   return (
      <div className='group flex h-full flex-col rounded-2xl border border-primary/20 bg-dark-card/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow'>
         <div className='overflow-hidden rounded-xl'>
            <Image
               src={project.img}
               width={350}
               height={200}
               alt={project.title}
               className='h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
         </div>

         <h3 className='mt-6 text-xl font-bold text-primary'>
            {project.title}
         </h3>

         <p className='mt-4 line-clamp-4 text-sm leading-relaxed text-gray-300'>
            {project.description}
         </p>

         <div className='mt-auto'>
            <ul className='mt-6 flex flex-wrap gap-2'>
               {project.stacks.map((stack) => (
                  <li
                     key={stack}
                     className='rounded-full border border-primary/50 px-3 py-1 text-xs font-medium text-primary-light'>
                     {stack}
                  </li>
               ))}
            </ul>

            <div className='mt-6 flex items-center justify-between gap-3'>
               <Link
                  href={`/projeto/${project.id}`}
                  className='inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2'>
                  Ver mais sobre o projeto <span aria-hidden>→</span>
               </Link>

               <div className='flex items-center gap-3'>
                  {project.urlGithub && (
                     <a
                        href={project.urlGithub}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Repositório de ${project.title} no GitHub`}
                        className='text-gray-300 transition-colors hover:text-primary'>
                        <FaGithub size={20} />
                     </a>
                  )}
                  {project.urlSite && (
                     <a
                        href={project.urlSite}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Demo do projeto ${project.title}`}
                        className='text-gray-300 transition-colors hover:text-primary'>
                        <IoGlobeOutline size={20} />
                     </a>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
