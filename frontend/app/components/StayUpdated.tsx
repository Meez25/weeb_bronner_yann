import React from 'react';
import { RiArrowRightLine } from "@remixicon/react"
import shapes from '../assets/Shapes.svg';

export const StayUpdatedSection = () => {
    return (
        <section className="bg-[#0F172A] px-5 font-roboto font-bold text-xl">
            <div className="max-w-[1000px] flex flex-col-reverse justify-center lg:flex-row gap-28 mx-auto pb-10">
                <div className="basis-1/3 self-center">
                    <img src={shapes} alt="Concept" />
                </div>
                <div className="basis-2/3">
                    <h3 className="uppercase text-white mb-4">Le web, un écosystème en constante évolution</h3>
                    <h4 className="text-white font-extrabold text-4xl md:text-7xl mb-8">Restez informé des dernières <span className="text-[#C084FC]">tendances</span></h4>
                    <p className="md:mx-auto max-w-[1000px] text-white md:text-lg mb-6">Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !</p>

                    <a href="#" className="inline-flex gap-2 mb-10">
                        <p className="text-white hover:underline">Lire les articles récents</p><RiArrowRightLine color="white" />
                    </a>
                </div>
            </div>
        </section >
    )
}
