'use client';

import { useState } from 'react';
import DestinationCard from './DestinationCard';
import BookingModal from './BookingModal';

export default function DestinationList({ destinations }: { destinations: any[] }) {
    const [selectedDestination, setSelectedDestination] = useState<any>(null);

    return (
        <section id="destinations" className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Voyage</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    From orbital hotels to lunar bases, select the next frontier for your adventure.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((dest) => (
                    <DestinationCard
                        key={dest.id}
                        destination={dest}
                        onSelect={setSelectedDestination}
                    />
                ))}
            </div>

            <BookingModal
                destination={selectedDestination}
                isOpen={!!selectedDestination}
                onClose={() => setSelectedDestination(null)}
            />
        </section>
    );
}
