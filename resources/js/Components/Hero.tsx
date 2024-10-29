import { motion } from 'framer-motion';
import { PhoneCall, Clock, Shield } from 'lucide-react';

function App() {
    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-b from-black via-black to-gray-900">
            <div className="absolute inset-0">
                <img
                    src="/img/lambo.jpg"
                    alt="Professional tow truck at night"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            </div>

            <div className="relative h-full flex items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
                >
                    <div className="max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
                        >
                            <span className="text-white">Fast &</span><br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                                Reliable Towing
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl text-gray-300 max-w-2xl mb-8"
                        >
                            Professional 24/7 emergency towing and roadside assistance when you need it most. We're here to help you get back on the road.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex gap-4 mb-12"
                        >
                            <button className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-red-500/30 transition-all duration-300 flex items-center gap-2">
                                <PhoneCall className="w-5 h-5" />
                                Call Now
                            </button>
                            <a href={route('services')}>
                                <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
                                    Our Services
                                </button>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-6"
                        >
                            <div className="flex items-center gap-3 text-gray-300">
                                <Clock className="w-6 h-6 text-red-500" />
                                <span>24/7 Service</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Shield className="w-6 h-6 text-red-500" />
                                <span>Licensed & Insured</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <PhoneCall className="w-6 h-6 text-red-500" />
                                <span>Quick Response</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
    );
}

export default App;