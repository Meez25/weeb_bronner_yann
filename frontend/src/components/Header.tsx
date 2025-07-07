import { BurgerMenu } from './BurgerMenu.tsx';
import { useState } from 'react';

export const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="bg-[#0F172A] px-5 py-[15px] md:h-[144px] md:p-6">
      <div className="flex justify-between md:bg-white/5 md:bg-opacity-5 max-w-[1000px] md:rounded-[20px] md:mx-auto md:px-6 md:h-24" >
        <div className="flex justify-center gap-9">
          <h1 className="text-white font-bold text-[32px] font-roboto self-center">weeb</h1>
          <h2 className="text-white hidden md:block self-center">Contact</h2>
        </div>
        <div className='hidden md:flex md:justify-center'>
          <button className='text-white bg-[#9333EA] md:h-12 md:w-[156px] md:rounded-lg md:self-center'>
            Se connecter
          </button>
        </div>
        <BurgerMenu isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      </div>
      {isModalOpen && <div className='absolute md:hidden bg-[#0F172A] top-[78px] left-0 w-full text-white cursor-pointer flex flex-col px-6 py-2 gap-2'>
        <div>
          Contact
        </div>
        <div>
          Se connecter
        </div>
      </div>}
    </header >
  )
}
