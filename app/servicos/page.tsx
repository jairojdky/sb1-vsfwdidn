import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Ruler, Droplets, Flame, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nossos Serviços | Oficina de Porcelanato',
  description: 'Conheça nossos serviços especializados de fabricação em porcelanato sob medida. Bancadas, pias, nichos e mais.',
};

const services = [
  {
    id: 'bancadas-cozinha',
    title: 'Bancadas de Cozinha',
    description: 'Transforme sua cozinha com bancadas de porcelanato elegantes e duráveis.',
    image: 'https://images.pexels.com/photos/6207827/pexels-photo-6207827.jpeg',
    price: 'A partir de R$ 850/metro linear',
    features: [
      { icon: Ruler, text: 'Espessura recomendada: 10mm a 12mm' },
      { icon: Droplets, text: 'Resistente a manchas e umidade' },
      { icon: Flame, text: 'Suporta altas temperaturas' },
      { icon: Clock, text: 'Prazo de fabricação: 5 a 7 dias úteis' },
    ],
    longDescription: 'Nossas bancadas de cozinha em porcelanato combinam estética refinada com alta durabilidade. Fabricadas sob medida, elas oferecem resistência a manchas, arranhões e calor, sendo uma alternativa mais acessível às pedras naturais, com acabamento perfeito e sem emendas visíveis.',
  },
  {
    id: 'pias-cubas',
    title: 'Pias e Cubas Integradas',
    description: 'Pias e cubas esculpidas no próprio porcelanato, criando uma peça única e sem emendas.',
    image: 'https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg',
    price: 'A partir de R$ 1.200 (até 70x45cm)',
    features: [
      { icon: Ruler, text: 'Espessura recomendada: 12mm' },
      { icon: Droplets, text: 'Design sem emendas, fácil limpeza' },
      { icon: Flame, text: 'Impermeável e higiênico' },
      { icon: Clock, text: 'Prazo de fabricação: 7 a 10 dias úteis' },
    ],
    longDescription: 'Nossas pias e cubas integradas representam o que há de mais moderno em design de banheiros e cozinhas. Esculpidas diretamente no porcelanato, eliminam junções e emendas, criando uma superfície contínua que facilita a limpeza e confere um aspecto sofisticado ao ambiente.',
  },
  {
    id: 'nichos-prateleiras',
    title: 'Nichos e Prateleiras',
    description: 'Nichos e prateleiras em porcelanato para banheiros, cozinhas e áreas de lazer.',
    image: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg',
    price: 'Solicite orçamento via WhatsApp',
    features: [
      { icon: Ruler, text: 'Totalmente personalizáveis' },
      { icon: Droplets, text: 'Ideal para áreas úmidas' },
      { icon: Flame, text: 'Disponível em diversos acabamentos' },
      { icon: Clock, text: 'Prazo de fabricação: 3 a 5 dias úteis' },
    ],
    longDescription: 'Nossos nichos e prateleiras em porcelanato são soluções elegantes para organização e decoração. Ideais para banheiros, cozinhas e áreas de lazer, podem ser produzidos em diferentes formatos e tamanhos, com acabamentos que combinam perfeitamente com outros elementos do ambiente.',
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-lg text-gray-600">
          Conheça nossa gama completa de serviços especializados em porcelanato.
          Todos os trabalhos são feitos sob medida e com acabamento impecável.
        </p>
      </div>
      
      <div className="space-y-24">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="scroll-mt-20">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="relative h-[300px] md:h-[400px] lg:h-full rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.longDescription}</p>
                  <div className="text-xl font-bold text-blue-600 mb-6">{service.price}</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <Card key={idx} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4 flex items-center">
                        <feature.icon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href="/orcamento">
                      Solicitar Orçamento
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/galeria">Ver Exemplos</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {index < services.length - 1 && (
              <div className="my-12 border-b border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}