'use client';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background Starfield Effect (Simple CSS or placeholder) */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-50 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-lg">
                    Zenith: Experience the Cosmos
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Embark on a journey beyond the stars. Luxury space tourism for the modern explorer.
                </p>
                <button
                    onClick={() => {
                        document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/50"
                >
                    Explore Destinations
                </button>
            </div>
        </section>
    );
}
