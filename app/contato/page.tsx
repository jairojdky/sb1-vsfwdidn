import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contato | Oficina de Porcelanato',
  description: 'Entre em contato conosco para orçamentos, dúvidas ou agendamento de visitas técnicas. Atendemos Sapiranga e região.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-lg text-gray-600">
          Estamos prontos para atender você e transformar seu projeto em realidade.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Nossa Localização</h2>
          
          <div className="rounded-lg overflow-hidden mb-8 h-[300px] md:h-[400px] relative">
            {/* This would be a Google Map in a real implementation */}
            <Image
              src="https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg"
              alt="Mapa de localização da Oficina de Porcelanato"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <p className="text-white text-xl font-bold">Mapa carregando...</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Moinhos de Vento, nº 246<br />
                      Bairro Voo Livre<br />
                      Sapiranga/RS
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">
                      Segunda - Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-2">Informações de Contato</h3>
            
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-green-600 mr-3" />
              <a 
                href="https://wa.me/5551997778490" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                (51) 99777-8490
              </a>
            </div>
            
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <a 
                href="mailto:contato@oficinaportcelanato.com.br"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                contato@oficinaportcelanato.com.br
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Como Chegar</h3>
              <div className="flex space-x-4">
                <Button asChild variant="outline" className="flex-1">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=Rua+Moinhos+de+Vento+246+Sapiranga+RS" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Google Maps
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a 
                    href="https://waze.com/ul?ll=-29.6345,-50.5803&navigate=yes" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Car className="mr-2 h-4 w-4" />
                    Waze
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}