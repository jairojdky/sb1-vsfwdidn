import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Oficina de Porcelanato</h3>
            <p className="mb-4">Serviços especializados de fabricação de peças em porcelanato sob medida para sua casa ou projeto.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.threads.com/@porcelanataria_rolim" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-white transition-colors">
                  Galeria de Projetos
                </Link>
              </li>
              <li>
                <Link href="/orcamento" className="hover:text-white transition-colors">
                  Solicitar Orçamento
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-500" />
                <span>Rua Moinhos de Vento, nº 246<br />Bairro Voo Livre, Sapiranga/RS</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-500" />
                <a 
                  href="https://wa.me/5551997778490" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (51) 99777-8490
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-500" />
                <a 
                  href="mailto:jairojdky@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  jairojdky@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5 text-yellow-500" />
                <span>
                  Segunda - Sábado: 07:45 às 20:00<br />
                  Aberto ao meio-dia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Oficina de Porcelanato. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;