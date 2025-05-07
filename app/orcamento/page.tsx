import { Metadata } from 'next';
import PriceCalculator from '@/components/calculator/PriceCalculator';
import QuoteRequestForm from '@/components/forms/QuoteRequestForm';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento | Oficina de Porcelanato',
  description: 'Calcule o valor estimado para seu projeto de porcelanato e solicite um orçamento personalizado.',
};

export default function QuotePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Solicite seu Orçamento</h1>
        <p className="text-lg text-gray-600">
          Calcule o valor estimado do seu projeto e solicite um orçamento detalhado
          ou agende uma visita técnica para avaliação precisa.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Calculadora de Preço</h2>
          <PriceCalculator />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Formulário de Solicitação</h2>
          <QuoteRequestForm />
        </div>
      </div>
    </div>
  );
}