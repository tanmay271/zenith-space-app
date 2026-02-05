import Hero from '@/components/Hero';
import DestinationList from '@/components/DestinationList';
import { getDestinations } from '@/lib/api';

export default async function Home() {
  const destinations = await getDestinations();

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <DestinationList destinations={destinations} />

      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© 2026 Zenith Space Tourism. All systems nominal.</p>
      </footer>
    </main>
  );
}
