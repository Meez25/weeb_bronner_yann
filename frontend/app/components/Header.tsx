import React, { useEffect, useRef } from 'react';
import { BurgerMenu } from './BurgerMenu';
import { useState } from 'react';

export const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setModalOpen(false)
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [isModalOpen])

    return (
        <header className="sticky top-0 bg-[#0F172A] px-5 py-[15px] md:h-[144px] md:p-6">
            <nav className="flex justify-between md:bg-white/5 md:bg-opacity-5 max-w-[1000px] md:rounded-[20px] md:mx-auto md:px-6 md:h-24" >
                <div className="flex justify-center gap-9">
                    <a href="/" className="text-white font-bold text-[32px] font-roboto self-center cursor-pointer hover:text-purple-500">weeb</a>
                    <a href="/contact" className="text-white hidden md:block self-center cursor-pointer hover:text-purple-500">Contact</a>
                </div>
                <div className='hidden md:flex'>
                    <a href="/connexion" className='flex justify-center items-center text-white bg-[#9333EA] md:h-12 md:w-[156px] md:rounded-lg md:self-center hover:bg-purple-500'>Se connecter</a>
                </div>
                <BurgerMenu isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
            </nav>
            {isModalOpen && <div ref={modalRef} className='absolute md:hidden bg-purple-500 rounded-lg top-[78px] left-0 w-full text-white cursor-pointer flex flex-col px-6 py-4 gap-4 border-purple-900 border-2'>
                <a href="/contact" className='cursor-pointer'>Contact</a>
                <a href="/connexion" className='cursor-pointer'>Se connecter</a>
            </div>}
        </header >
    )
}
