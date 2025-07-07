import './App.css'
import { Customers } from './components/Customers.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { LearnSection } from './components/Learn.tsx';
import { StayUpdatedSection } from './components/StayUpdated.tsx';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Customers />
      <LearnSection />
      <StayUpdatedSection />
    </>
  )
}

export default App
