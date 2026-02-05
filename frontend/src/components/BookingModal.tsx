import { motion, AnimatePresence } from 'framer-motion';

export default function BookingModal({ destination, isOpen, onClose }: { destination: any, isOpen: boolean, onClose: () => void }) {
    if (!destination) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-500/20"
                        >
                            <div className="relative h-64 w-full">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={destination.imageUrl || 'https://via.placeholder.com/800x400'}
                                    alt={destination.name}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{destination.name}</h2>
                                        <p className="text-blue-400 font-medium flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
                                            </svg>
                                            {destination.flightDuration || 'TBD'}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-2xl font-bold text-white">${destination.price?.toLocaleString()}</p>
                                        <p className="text-gray-400 text-sm">per person</p>
                                    </div>
                                </div>

                                <div className="prose prose-invert max-w-none mb-8 text-gray-300">
                                    <p>{/* Basic rich text rendering - assuming blocks or text for now. If blocks, needs a renderer. */}</p>
                                    {/* Fallback simply dumping json if it's blocks, or text if string */}
                                    {Array.isArray(destination.description)
                                        ? destination.description.map((block: any, i: number) => (
                                            block.children?.map((child: any, j: number) => <span key={`${i}-${j}`}>{child.text} </span>)
                                        ))
                                        : <p>{destination.description}</p>
                                    }
                                </div>

                                <button
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg transform hover:-translate-y-1"
                                    onClick={() => alert(`Booking initiated for ${destination.name}!`)}
                                >
                                    Confirm Booking
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
