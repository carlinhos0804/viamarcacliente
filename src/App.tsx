import React from 'react';
import { Instagram, Mail, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';

function App() {
  const catalog = [
    "Pomadas 100g (Teia, Brilho, Matte, Dry)",
    "Pomadas 150g (Black, Matte, Black Extra)",
    "Shampoos e Condicionadores 200ml",
    "Shampoo Especial para Barba 200ml",
    "Óleo para Barba 30ml e Forthair 60ml",
    "Géis 300g (Transparente e Black)",
    "Leave-in 200ml"
  ];

  const references = [
    { id: 1, img: "/produtos/ref1.jpg", title: "Pomadas Premium" },
    { id: 2, img: "/produtos/ref2.jpg", title: "Linha de Banho" },
    { id: 3, img: "/produtos/ref3.jpg", title: "Cuidado com a Barba" },
    { id: 4, img: "/produtos/ref4.jpg", title: "Finalizadores Géis" },
    { id: 5, img: "/produtos/ref5.jpg", title: "Tratamento Leave-in" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header com Logo */}
      <header className="py-6 text-center border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-serif tracking-[0.3em] text-[#C5A059]">VIA MARCA</h1>
        <p className="text-[10px] tracking-widest text-zinc-500 uppercase">Produtos Personalizados</p>
      </header>

      {/* Hero / CEO Section */}
      <section className="py-12 px-6 text-center bg-gradient-to-b from-zinc-900 to-black">
        <div className="mb-6 relative inline-block">
          <img 
            src="/david-foto-ceo.jpeg" 
            alt="David Pinheiro CEO" 
            className="w-40 h-40 rounded-full border-2 border-[#C5A059] object-cover mx-auto shadow-2xl shadow-gold/20"
          />
        </div>
        <h2 className="text-[#C5A059] text-xl font-bold uppercase tracking-tighter">David Pinheiro</h2>
        <p className="text-zinc-400 text-sm mt-2 max-w-md mx-auto italic">
          "Transformando barbearias em marcas de luxo através da personalização exclusiva."
        </p>
      </section>

      {/* Galeria de Referência (Substitui a Esteira) */}
      <section className="py-10 px-4">
        <h3 className="text-center text-zinc-500 uppercase text-xs tracking-widest mb-8">Como ficaria sua marca</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {references.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg border border-zinc-800">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover grayscale-[50%] group-hover:grayscale-0 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-[10px] text-center text-[#C5A059] font-bold">
                SUA MARCA AQUI
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lista de Produtos Disponíveis */}
      <section className="py-12 px-6 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[#C5A059] text-2xl font-serif mb-8 text-center uppercase tracking-widest">Produtos Disponíveis</h2>
          <div className="grid gap-4">
            {catalog.map((prod, i) => (
              <div key={i} className="flex items-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 group hover:border-[#C5A059] transition-colors">
                <CheckCircle2 className="text-[#C5A059] mr-4 w-5 h-5 flex-shrink-0" />
                <span className="text-zinc-300 group-hover:text-white">{prod}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-zinc-500 text-sm mb-6">Entre em contato para solicitar seu orçamento personalizado e catálogo completo.</p>
            <a 
              href="https://wa.me/5531984242944?text=Olá David, vim pelo site e gostaria de saber sobre a personalização dos produtos."
              className="inline-flex items-center gap-2 bg-[#C5A059] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#d4b577] transition-all transform hover:scale-105"
            >
              <MessageCircle size={20} /> Falar com Especialista
            </a>
          </div>
        </div>
      </section>

      {/* Footer Profissional */}
      <footer className="py-12 px-6 bg-black border-t border-zinc-900 text-center">
        <div className="flex justify-center gap-6 mb-8 text-zinc-400">
          <a href="https://instagram.com/via.marca" className="hover:text-[#C5A059]"><Instagram /></a>
          <a href="mailto:viamarca.david@gmail.com" className="hover:text-[#C5A059]"><Mail /></a>
          <div className="flex items-center gap-1 hover:text-[#C5A059]"><MapPin size={20} /> <span className="text-xs uppercase">Belo Horizonte - MG</span></div>
        </div>
        <p className="text-zinc-600 text-[10px] tracking-widest">© 2026 VIA MARCA - TODOS OS DIREITOS RESERVADOS</p>
      </footer>
    </div>
  );
}

export default App;
