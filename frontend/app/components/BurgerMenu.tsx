import React from 'react';
export const BurgerMenu = ({ isModalOpen, setModalOpen }: { isModalOpen: boolean, setModalOpen: (prev: boolean) => void }) => {
    if (!isModalOpen) return (
        <div className="bg-[#9333EA] h-11 w-12 rounded-lg flex flex-col justify-center gap-1 md:hidden self-center cursor-pointer"
            onClick={() => setModalOpen(!isModalOpen)}>
            <div className="w-7 h-1 bg-white rounded-[5px] mx-auto"></div>
            <div className="w-7 h-1 bg-white rounded-[5px] mx-auto"></div>
            <div className="w-7 h-1 bg-white rounded-[5px] mx-auto"></div>
        </div>
    )

    return (
        <div className="bg-[#9333EA] h-11 w-12 rounded-lg flex flex-col justify-center gap-1 md:hidden text-white self-center text-center text-2xl cursor-pointer"
            onClick={() => setModalOpen(!isModalOpen)}>
            X
        </div>
    )
}
