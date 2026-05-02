import Navbar from './Components/navbar';
import Hero from './Components/hero';
import TrustedSection from './Components/TrustedSection';
import HouseWiringSection from './Components/HouseWiringSection';

export default function Page() {
  return (
    <main className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <TrustedSection />
      <HouseWiringSection />
    </main>
  );
}