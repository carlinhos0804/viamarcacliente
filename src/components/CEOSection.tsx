import { Award, Target, Users } from 'lucide-react';

export default function CEOSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4 px-4 py-2 border border-gold/30 rounded-full">
              <span className="text-gold text-sm font-inter tracking-wider">LIDERANÇA</span>
            </div>

            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-6">
              Visão e Excelência
            </h2>

            <p className="text-gray-300 font-inter leading-relaxed mb-6">
              <span className="text-gold font-semibold">David</span>, fundador e CEO da Via Marca,
              revolucionou o mercado de produtos personalizados em Belo Horizonte. Com uma visão inovadora
              e compromisso com a excelência, ele criou uma empresa que transforma negócios em marcas de prestígio.
            </p>

            <p className="text-gray-400 font-inter leading-relaxed mb-8">
              Especializado em desenvolvimento de produtos exclusivos para barbeiros e salões de beleza,
              David entende que cada marca tem sua própria identidade e merece produtos que reflitam
              sua essência e valores.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-zinc-900 rounded-xl border border-gold/20">
                <Award className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-cinzel font-bold text-white">8+</div>
                <div className="text-xs text-gray-400 font-inter">Anos</div>
              </div>
              <div className="text-center p-4 bg-zinc-900 rounded-xl border border-gold/20">
                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-cinzel font-bold text-white">500+</div>
                <div className="text-xs text-gray-400 font-inter">Clientes</div>
              </div>
              <div className="text-center p-4 bg-zinc-900 rounded-xl border border-gold/20">
                <Target className="w-6 h-6 text-gold mx-auto mb-2" />
                <div className="text-2xl font-cinzel font-bold text-white">100%</div>
                <div className="text-xs text-gray-400 font-inter">Qualidade</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gold overflow-hidden shadow-2xl">
                <img
                  src="https://i.ibb.co/Z1pfFQS7/david-foto-CEO.jpg"
                  alt="David Pinheiro - CEO Via Marca"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gold px-6 py-3 rounded-full shadow-lg">
                <p className="font-cinzel font-bold text-black text-sm md:text-base whitespace-nowrap">
                  David Pinheiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
