import React from 'react';
import FinancingForm from '../components/FinancingForm.tsx';
import FinancingCalculator from '../components/FinancingCalculator.tsx';

export default function FinancingPage() {
  return (
    <div className="min-h-screen bg-white">
      <FinancingCalculator />
      <FinancingForm />
    </div>
  );
}
