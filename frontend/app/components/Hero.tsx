import React from 'react';
import hero from '../assets/Desktop.png';

export const Hero = () => {
    return (
        <main className="mx-auto bg-[#0F172A] text-white font-roboto px-5 flex justify-center py-10 flex-col">
            <h1 className="mx-auto max-w-[1000px] font-extrabold text-4xl md:text-7xl mb-10">Explorez le <span className="text-[#C084FC] font-light">Web</span> sous toutes ses <span className="underline decoration-[#C084FC] underline-offset-6">facettes</span></h1>
            <p className="mx-auto max-w-[1000px] font-normal mb-10 text-lg">Le monde du web évolue constamment, et nous sommes là pour vous guider à travers ses tendances, technologies et meilleures pratiques. Que vous soyez développeur, designer ou passionné du digital, notre blog vous offre du contenu de qualité pour rester à la pointe.
            </p>
            <div className="max-w-[1000px] flex flex-col mx-auto gap-2 md:gap-4 md:flex-row mb-10">
                <button className="text-lg bg-[#9333EA] w-[237px] rounded-lg border-2 border-[#9333EA] h-12 cursor-pointer font-medium hover:bg-purple-500">
                    Découvrir les articles
                </button>
                <button className="text-lg border-2 rounded-lg h-12 w-[237px] cursor-pointer font-medium hover:bg-white/10">
                    S'abonner à la newsletter
                </button>
            </div>
            <img className='lg:mx-auto max-w-[1000px]' src={hero} alt="Image conceptuelle d'une interface" />
        </main>
    )
}
