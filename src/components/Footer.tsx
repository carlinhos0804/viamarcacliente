import { Instagram, Mail, MapPin, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-zinc-950 border-t border-gold/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-gold" />
              <h3 className="font-cinzel text-xl font-bold text-gold tracking-[0.2em]">
                VIA MARCA
              </h3>
            </div>
            <p className="text-gray-400 font-inter text-sm leading-relaxed">
              Transformando negócios em marcas de prestígio através de produtos personalizados de alta qualidade.
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-lg font-semibold text-white mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/via.marca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter text-sm">@via.marca</span>
              </a>
              <a
                href="mailto:viamarca.david@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-inter text-sm">viamarca.david@gmail.com</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-lg font-semibold text-white mb-4">
              Localização
            </h4>
            <div className="flex items-start gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
              <div className="font-inter text-sm">
                <p>Belo Horizonte</p>
                <p>Minas Gerais - MG</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 text-center">
          <p className="text-gray-500 font-inter text-sm">
            &copy; {new Date().getFullYear()} Via Marca. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
