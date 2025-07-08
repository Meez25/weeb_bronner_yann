import React from 'react';
import { BurgerMenu } from './BurgerMenu';
import { useState } from 'react';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-[#0F172A] px-5 py-[15px] md:h-[144px] md:p-6">
      <div className="flex justify-between md:bg-white/5 md:bg-opacity-5 max-w-[1000px] md:rounded-[20px] md:mx-auto md:px-6 md:h-24" >
        <div className="flex justify-center gap-9">
          <a href="/" className="text-white font-bold text-[32px] font-roboto self-center cursor-pointer">weeb</a>
          <a href="/contact" className="text-white hidden md:block self-center cursor-pointer">Contact</a>
        </div>
        <div className='hidden md:flex md:justify-center'>
          <button className='text-white bg-[#9333EA] md:h-12 md:w-[156px] md:rounded-lg md:self-center'>
            Se connecter
          </button>
        </div>
        <BurgerMenu isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      </div>
      {isModalOpen && <div className='absolute md:hidden bg-[#0F172A] top-[78px] left-0 w-full text-white cursor-pointer flex flex-col px-6 py-2 gap-2'>
        <a href="/contact" className='cursor-pointer'>
          Contact
        </a>
        <div>
          Se connecter
        </div>
      </div>}
    </header >
  )
}
