import { RiArrowRightLine } from "@remixicon/react"
import image from '../assets/Desktop.png';

export const LearnSection = () => {
    return (
        <section className="bg-[#0F172A] px-5 font-roboto font-bold text-xl flex flex-col lg:flex-row justify-center">
            <div className="max-w-[500px] lg:flex-1/2">
                <h3 className="uppercase text-white mb-4">Des ressources pour tous les niveaux</h3>
                <h4 className="text-[#C084FC] font-extrabold text-4xl md:text-7xl mb-8">Apprenez <span className="text-white">et</span> progressez</h4>
                <p className="md:mx-auto max-w-[1000px] text-white md:text-lg mb-6">Que vous débutiez en développement web ou que vous soyez un expert cherchant à approfondir vos connaissances, nous vous proposons des tutoriels, guides et bonnes pratiques pour apprendre efficacement.</p>

                <div className="inline-flex gap-2 mb-10">
                    <p className="text-white">Explorer les ressources</p><RiArrowRightLine color="white" />
                </div>
            </div>
            <div className="max-w-[500px] lg:flex-1/2 self-center">
                <img src={image} alt="Concept" />
            </div>
        </section>
    )
}
