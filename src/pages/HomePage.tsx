import React from 'react';
import Hero from '../components/Hero.tsx';
import ProductGrid from '../components/ProductGrid.tsx';
import Specs from '../components/Specs.tsx';
import ContactForm from '../components/ContactForm.tsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Specs />
      <ContactForm />
    </>
  );
}
