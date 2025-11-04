import React from 'react';
import { motion } from "motion/react"
import { RiArrowRightLine } from "@remixicon/react"
import mainSquare from '../assets/mainSquare.svg'
import firstsquare from '../assets/square1.svg'
import secondsquare from '../assets/square2.svg'
import thirdsquare from '../assets/square3.svg'
import fourthsquare from '../assets/square4.svg'
import { Link } from 'react-router';

export const StayUpdatedSection = () => {
  return (
    <section className="bg-[#0F172A] px-5 font-roboto font-bold text-xl">
      <div className="max-w-[1000px] flex flex-col-reverse justify-center lg:flex-row gap-28 mx-auto pb-10">
        {/* Ces instrution permettent à l'image de tourner */}
        <div className="relative basis-1/3 self-center mb-10">
          <img
            className='scale-65 z-10 relative' src={mainSquare} alt="Concept"
          />
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 7 }}
            className='absolute top-0' src={firstsquare} alt="Concept" />
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8 }}
            className='absolute top-0' src={secondsquare} alt="Concept" />
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 9 }}
            className='absolute top-0' src={thirdsquare} alt="Concept" />
          <motion.img
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            className='absolute top-0' src={fourthsquare} alt="Concept" />
        </div>
        <div className="basis-2/3">
          <h3 className="uppercase text-white mb-4">Le web, un écosystème en constante évolution</h3>
          <h4 className="text-white font-extrabold text-4xl md:text-7xl mb-8">Restez informé des dernières <span className="text-[#C084FC]">tendances</span></h4>
          <p className="md:mx-auto max-w-[1000px] text-white md:text-lg mb-6">Chaque semaine, nous analysons les nouveautés du web : frameworks émergents, bonnes pratiques SEO, accessibilité, et bien plus encore. Ne manquez aucune actualité du digital !</p>

          <Link to="#" className="inline-flex gap-2 mb-10">
            <p className="text-white hover:underline">Lire les articles récents</p><RiArrowRightLine color="white" />
          </Link>
        </div>
      </div>
    </section >
  )
}

