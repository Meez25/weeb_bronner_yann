import SmartFinderIcon from '../assets/SmartFinder.svg';
import ZoomerrIcon from '../assets/Zoomerr.svg';
import ShellsIcon from '../assets/SHELLS.svg';
import WavesIcon from '../assets/WAVES.svg';
import ArtVenueIcon from '../assets/ArtVenue.svg';

export const Customers = () => {
    return (
        <div className="bg-[#0F172A] py-20 flex flex-col gap-20 md:px-5">
            <h2 className="text-white font-roboto font-extrabold text-4xl md:text-7xl px-5 text-center">Ils nous font confiance</h2>

            {/* Scroll mobile */}
            <div className="w-full inline-flex flex-nowrap lg:hidden">
                <ul className="flex items-center justify-center lg:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll md:animate-none">
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={SmartFinderIcon} alt="SmartFinderLogo" />
                        <p className='font-roboto font-bold self-center'>SmartFinder</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ZoomerrIcon} alt="ZoomerrLogo" />
                        <p className='font-roboto font-bold self-center'>Zoomerr</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ShellsIcon} alt="ShellsLogo" />
                        <p className='font-roboto font-bold self-center'>SHELLS</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={WavesIcon} alt="WavesLogo" />
                        <p className='font-roboto font-bold self-center'>WAVES</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ArtVenueIcon} alt="ArtVenueLogo" />
                        <p className='font-roboto font-bold self-center'>ArtVenue</p>
                    </li>
                </ul>

                <ul className="flex items-center justify-center lg:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll lg:animate-none lg:hidden" aria-hidden="true">
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={SmartFinderIcon} alt="SmartFinderLogo" />
                        <p className='font-roboto font-bold self-center'>SmartFinder</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ZoomerrIcon} alt="ZoomerrLogo" />
                        <p className='font-roboto font-bold self-center'>Zoomerr</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ShellsIcon} alt="ShellsLogo" />
                        <p className='font-roboto font-bold self-center'>SHELLS</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={WavesIcon} alt="WavesLogo" />
                        <p className='font-roboto font-bold self-center'>WAVES</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ArtVenueIcon} alt="ArtVenueLogo" />
                        <p className='font-roboto font-bold self-center'>ArtVenue</p>
                    </li>
                </ul>
            </div>

            <div className="hidden lg:flex w-full flex-nowrap">
                <ul className="flex items-center justify-center lg:justify-start [&_li]:mx-8 [&_img]:max-w-none mx-auto">
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={SmartFinderIcon} alt="SmartFinderLogo" />
                        <p className='font-roboto font-bold self-center'>SmartFinder</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ZoomerrIcon} alt="ZoomerrLogo" />
                        <p className='font-roboto font-bold self-center'>Zoomerr</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ShellsIcon} alt="ShellsLogo" />
                        <p className='font-roboto font-bold self-center'>SHELLS</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={WavesIcon} alt="WavesLogo" />
                        <p className='font-roboto font-bold self-center'>WAVES</p>
                    </li>
                    <li className='flex gap-2 text-white'>
                        <img className='w-[33px] h-[32px]' src={ArtVenueIcon} alt="ArtVenueLogo" />
                        <p className='font-roboto font-bold self-center'>ArtVenue</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
