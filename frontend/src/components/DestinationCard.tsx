interface Destination {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: any;
    flightDuration: string;
}

export default function DestinationCard({ destination, onSelect }: { destination: Destination, onSelect: (d: Destination) => void }) {
    return (
        <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={destination.imageUrl || 'https://via.placeholder.com/400x300'}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-600/90 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        {destination.flightDuration || 'Expedition'}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{destination.name}</h3>
                    <p className="text-gray-400 line-clamp-2 text-sm mb-4">
                        {/* Simple preview of description */}
                        {Array.isArray(destination.description)
                            ? "Click for details..."
                            : destination.description?.substring(0, 100) + "..."
                        }
                    </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-800">
                    <span className="text-xl font-bold text-white">${destination.price?.toLocaleString()}</span>
                    <button
                        onClick={() => onSelect(destination)}
                        className="px-5 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}
