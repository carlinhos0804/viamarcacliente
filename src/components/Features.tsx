import { Package, Palette, Rocket, Shield } from 'lucide-react';

const features = [
  {
    icon: Palette,
    title: 'Personalização Total',
    description: 'Desenvolva produtos com sua identidade visual, fragrância e formulação exclusivas.',
  },
  {
    icon: Shield,
    title: 'Qualidade Premium',
    description: 'Ingredientes selecionados e processos rigorosos para garantir excelência.',
  },
  {
    icon: Package,
    title: 'Embalagens Exclusivas',
    description: 'Design sofisticado que reflete o posicionamento da sua marca.',
  },
  {
    icon: Rocket,
    title: 'Fidelização Garantida',
    description: 'Transforme clientes em fãs da sua marca com produtos únicos.',
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">
            Por Que Escolher a Via Marca
          </h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto">
            Desenvolvemos produtos que elevam sua marca a um novo patamar de excelência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-black border border-gold/20 rounded-2xl p-6 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-cinzel text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-inter text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
