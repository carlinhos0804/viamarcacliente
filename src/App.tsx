import Header from './components/Header';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import Features from './components/Features';
import CEOSection from './components/CEOSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <Features />
        <CEOSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
