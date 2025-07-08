import React from 'react'
import { Hero } from '../components/Hero';
import { Customers } from '../components/Customers';
import { LearnSection } from '../components/Learn';
import { StayUpdatedSection } from '../components/StayUpdated';

export function Home() {
  return (
    <>
      <Hero />
      <Customers />
      <LearnSection />
      <StayUpdatedSection />
    </>
  );
}
