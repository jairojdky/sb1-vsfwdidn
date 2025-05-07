import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calculator, Calendar, ClipboardList } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transforme sua casa com porcelanato sob medida
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Solicite um orçamento personalizado e descubra como nossas soluções 
              em porcelanato podem trazer elegância e durabilidade para seu espaço.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/orcamento">
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular Orçamento
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-blue-700">
                <Link href="https://wa.me/5551997778490?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20técnica." target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Visita
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-blue-700 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ClipboardList className="mr-3 h-6 w-6" />
              Por que escolher nossos serviços
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <div className="mr-4 h-6 w-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Qualidade Superior</h4>
                  <p className="text-blue-100">Acabamento impecável com técnicas avançadas de fabricação.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 h-6 w-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Medidas Exatas</h4>
                  <p className="text-blue-100">Todas as peças são fabricadas sob medida para seu espaço.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 h-6 w-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Assessoria Completa</h4>
                  <p className="text-blue-100">Orientação técnica na escolha do porcelanato ideal para seu projeto.</p>
                </div>
              </li>
              <li className="flex">
                <div className="mr-4 h-6 w-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Garantia</h4>
                  <p className="text-blue-100">Nossos serviços possuem garantia de 1 ano contra defeitos de fabricação.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;