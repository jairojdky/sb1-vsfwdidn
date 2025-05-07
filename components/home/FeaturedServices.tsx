import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const services = [
  {
    title: "Bancadas de Cozinha",
    image: "https://images.pexels.com/photos/6207815/pexels-photo-6207815.jpeg",
    description: "Bancadas em porcelanato com acabamento perfeito, resistentes a manchas e altas temperaturas.",
    price: "A partir de R$ 850/metro linear",
    link: "/servicos/bancadas-cozinha"
  },
  {
    title: "Pias e Cubas Integradas",
    image: "https://images.pexels.com/photos/6585756/pexels-photo-6585756.jpeg",
    description: "Pias e cubas esculpidas no próprio porcelanato, criando uma peça única e sem emendas.",
    price: "A partir de R$ 1.200 (até 70x45cm)",
    link: "/servicos/pias-cubas"
  },
  {
    title: "Nichos e Prateleiras",
    image: "https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg",
    description: "Nichos e prateleiras em porcelanato para banheiros, cozinhas e áreas de lazer.",
    price: "Solicite orçamento via WhatsApp",
    link: "/servicos/nichos-prateleiras"
  }
];

const FeaturedServices = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Conheça nossas soluções em porcelanato para transformar sua casa com elegância e durabilidade.
            </p>
          </div>
          <Button 
            variant="outline" 
            asChild 
            className="mt-4 md:mt-0"
          >
            <Link href="/servicos" className="flex items-center">
              Ver todos os serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-3">{service.description}</p>
                <div className="text-blue-600 font-medium">{service.price}</div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button asChild variant="outline" className="w-full">
                  <Link href={service.link}>
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;