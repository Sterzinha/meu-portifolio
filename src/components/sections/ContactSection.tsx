'use client';

import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const contacts = [
   {
      icon: <MdOutlineMailOutline />,
      label: 'Email',
      value: 'stermiss2@gmail.com',
      href: 'mailto:stermiss2@gmail.com',
   },
   {
      icon: <FaWhatsapp />,
      label: 'Whatsapp',
      value: '+55 97 98443-7986',
      href: 'https://api.whatsapp.com/send/?phone=559784437986',
   },
   {
      icon: <FaGithub />,
      label: 'Github',
      value: 'github.com/SterRoque',
      href: 'https://github.com/SterRoque',
   },
   {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/sterphanevitoria',
      href: 'https://www.linkedin.com/in/sterphanevitoria',
   },
];

export function ContactSection() {
   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();

      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            form.current!,
            { publicKey: process.env.NEXT_PUBLIC_KEY! },
         )
         .then(
            () => {
               form.current?.reset();
            },
            (error) => {
               console.log('FAILED...', error.text);
            },
         );
   };

   return (
      <section
         id='contato'
         className='mx-auto w-full max-w-screen-xl px-6 py-24'>
         <h2 className='text-glow mb-16 text-center text-4xl font-extrabold text-primary-light md:text-5xl'>
            Contato
         </h2>

         <div className='grid gap-8 md:grid-cols-2'>
            <div className='flex flex-col gap-6'>
               <h3 className='text-xl font-bold text-primary-light'>
                  Informações de Contato
               </h3>
               {contacts.map((contact) => (
                  <a
                     key={contact.label}
                     href={contact.href}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='group flex items-center gap-4 rounded-xl border border-primary/20 p-4 transition-all hover:border-primary/50 hover:bg-primary/5'>
                     <span className='text-2xl text-primary transition-transform group-hover:scale-110'>
                        {contact.icon}
                     </span>
                     <div>
                        <span className='block text-xs text-gray-400'>
                           {contact.label}
                        </span>
                        <span className='text-sm text-gray-100'>
                           {contact.value}
                        </span>
                     </div>
                  </a>
               ))}
            </div>

            <form
               ref={form}
               onSubmit={sendEmail}
               className='flex flex-col gap-4 rounded-2xl border border-primary/20 bg-dark-card/60 p-8'>
               <h3 className='text-xl font-bold text-primary-light'>
                  Envie-me uma mensagem
               </h3>
               <input
                  type='text'
                  placeholder='Seu nome'
                  name='from_name'
                  className='rounded-lg border border-primary/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary'
               />
               <input
                  type='email'
                  placeholder='Seu email'
                  name='email'
                  className='rounded-lg border border-primary/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary'
               />
               <input
                  type='text'
                  placeholder='Assunto'
                  name='subject'
                  className='rounded-lg border border-primary/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary'
               />
               <textarea
                  name='message'
                  placeholder='Escreva sua mensagem'
                  rows={5}
                  className='resize-none rounded-lg border border-primary/20 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary'
               />
               <button
                  type='submit'
                  className='mt-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:shadow-glow-lg'>
                  Enviar
               </button>
            </form>
         </div>
      </section>
   );
}
