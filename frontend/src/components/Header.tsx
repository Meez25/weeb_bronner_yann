import { BurgerMenu } from './BurgerMenu.tsx';

export const Header = () => {
  return (
    <header className="bg-[#0F172A] px-5 py-[15px] md:h-[144px] md:p-6">
      <div className="flex justify-between md:bg-white/5 md:bg-opacity-5 max-w-[1000px] md:rounded-[20px] md:mx-auto md:px-6 md:h-24" >
        <div className="flex justify-center gap-9">
          <h1 className="text-white font-bold text-[32px] font-roboto self-center">weeb</h1>
          <h2 className="text-white hidden md:block self-center">Contact</h2>
        </div>
        <BurgerMenu />
      </div>
    </header >
  )
}
