import { Sparkles } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pomada Teia',
    size: '100gr',
    category: 'Pomada',
    description: 'Fixação e controle perfeitos',
    image: 'https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'Pomada Brilho',
    size: '100gr',
    category: 'Pomada',
    description: 'Brilho natural intenso',
    image: 'https://images.pexels.com/photos/3373727/pexels-photo-3373727.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Pomada Matte',
    size: '100gr',
    category: 'Pomada',
    description: 'Efeito matte de longa duração',
    image: 'https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    name: 'Pomada Dry',
    size: '100gr',
    category: 'Pomada',
    description: 'Textura seca e volumosa',
    image: 'https://images.pexels.com/photos/3373717/pexels-photo-3373717.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    name: 'Forthair',
    size: '60ml',
    category: 'Tônico',
    description: 'Tônico para cabelo e couro cabeludo',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 6,
    name: 'Óleo para Barba',
    size: '30ml',
    category: 'Óleo',
    description: 'Hidratação e maciez extrema',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 7,
    name: 'Leave-in',
    size: '200ml',
    category: 'Condicionador',
    description: 'Proteção e brilho contínuos',
    image: 'https://images.pexels.com/photos/7797370/pexels-photo-7797370.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 8,
    name: 'Shampoo',
    size: '200ml',
    category: 'Limpeza',
    description: 'Limpeza profunda e nutrição',
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 9,
    name: 'Shampoo p/ Barba',
    size: '200ml',
    category: 'Limpeza',
    description: 'Especializado para barba',
    image: 'https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 10,
    name: 'Condicionador',
    size: '200ml',
    category: 'Condicionador',
    description: 'Maciez e brilho intenso',
    image: 'https://images.pexels.com/photos/3373725/pexels-photo-3373725.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 11,
    name: 'Gel Transparente',
    size: '300gr',
    category: 'Gel',
    description: 'Fixação sem deixar resíduos',
    image: 'https://images.pexels.com/photos/4993084/pexels-photo-4993084.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 12,
    name: 'Gel Black',
    size: '300gr',
    category: 'Gel',
    description: 'Fixação intensa com brilho black',
    image: 'https://images.pexels.com/photos/3373711/pexels-photo-3373711.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 13,
    name: 'Pomada Black',
    size: '150gr',
    category: 'Pomada',
    description: 'Brilho intenso e fixação extrema',
    image: 'https://images.pexels.com/photos/3373715/pexels-photo-3373715.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 14,
    name: 'Pomada Matte',
    size: '150gr',
    category: 'Pomada',
    description: 'Efeito matte profissional',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 15,
    name: 'Pomada Black',
    size: '150gr',
    category: 'Pomada',
    description: 'Black premium com fixação máxima',
    image: 'https://images.pexels.com/photos/3373722/pexels-photo-3373722.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function ProductCarousel() {
  return (
    <section id="produtos" className="py-16 px-4 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-gold/30 rounded-full">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-inter tracking-wider">NOSSOS PRODUTOS</span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Linha Exclusiva
          </h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto">
            Produtos premium personalizados com sua marca
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
              >
                <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden bg-black">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors duration-300">
                      <div className="text-center">
                        <p className="text-gold font-cinzel font-bold text-lg md:text-xl px-4 drop-shadow-lg">
                          SUA MARCA AQUI
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-black text-xs font-inter font-semibold">
                        {product.size}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-cinzel text-xl font-semibold text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gold text-xs font-inter tracking-wider mb-3">
                      {product.category.toUpperCase()}
                    </p>
                    <p className="text-gray-400 text-sm font-inter mb-4">
                      {product.description}
                    </p>
                    <button className="w-full py-3 bg-gold text-black font-inter font-semibold rounded-full hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Personalizar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
