import { Scissors } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Scissors className="w-6 h-6 text-gold" />
          <h1 className="font-cinzel text-2xl md:text-3xl font-bold tracking-[0.3em] text-gold">
            VIA MARCA
          </h1>
          <Scissors className="w-6 h-6 text-gold rotate-180" />
        </div>
      </div>
    </header>
  );
}
