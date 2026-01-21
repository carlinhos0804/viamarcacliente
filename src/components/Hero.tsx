export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 px-4 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-cinzel text-gold rotate-12">
          VM
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 border border-gold/30 rounded-full">
          <span className="text-gold text-sm font-inter tracking-wider">TENDÊNCIA MUNDIAL</span>
        </div>

        <h2 className="font-cinzel text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
          Sua Marca, Seu Legado
        </h2>

        <p className="text-gray-300 text-base md:text-lg font-inter leading-relaxed max-w-2xl mx-auto mb-8">
          Desenvolva produtos exclusivos com a sua marca para fidelizar clientes e gerar receita recorrente.
          Transforme seu negócio em uma marca de prestígio com produtos personalizados de alta qualidade.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produtos"
            className="px-8 py-4 bg-gold text-black font-inter font-semibold rounded-full hover:bg-gold-light transition-all duration-300 shadow-lg hover:shadow-gold/50"
          >
            Explorar Produtos
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border-2 border-gold text-gold font-inter font-semibold rounded-full hover:bg-gold/10 transition-all duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
