import { Check, Ruler, Calculator, ShoppingBag, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: Ruler,
    title: "Medição",
    description: "Realizamos a medição precisa do seu espaço para garantir o encaixe perfeito das peças de porcelanato.",
    highlight: "Precisão milimétrica"
  },
  {
    icon: Calculator,
    title: "Orçamento",
    description: "Desenvolvemos um orçamento detalhado com base nas suas necessidades específicas.",
    highlight: "Transparência total"
  },
  {
    icon: ShoppingBag,
    title: "Compra do Material",
    description: "O cliente adquire o porcelanato em lojas parceiras ou de sua preferência. Fornecemos todas as especificações técnicas necessárias.",
    highlight: "Assessoria na escolha"
  },
  {
    icon: Wrench,
    title: "Fabricação e Instalação",
    description: "Fabricamos as peças sob medida em nossa oficina e realizamos a instalação com acabamento profissional.",
    highlight: "Qualidade garantida"
  }
];

const HowItWorks = () => {
  return (
    <section 
      id="como-funciona" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça o processo completo, desde a medição até a instalação das suas peças de porcelanato personalizadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              
              <div className="mt-6 text-center">
                <step.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="inline-flex items-center text-sm text-blue-700 font-medium">
                  <Check className="w-4 h-4 mr-1" />
                  {step.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-blue-50 border border-blue-100 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Check className="w-6 h-6 text-blue-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Como funciona a compra do porcelanato?</h3>
              <p className="text-gray-700">
                Você compra o porcelanato em qualquer loja e nós cuidamos da mão de obra especializada.
                Podemos indicar lojas parceiras com materiais de qualidade e preços competitivos,
                além de fornecer todas as especificações técnicas necessárias para uma compra acertada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;