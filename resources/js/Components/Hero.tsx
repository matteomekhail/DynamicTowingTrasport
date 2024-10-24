import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617886903355-9354bb57b5a5?auto=format&fit=crop&w=2000&q=80"
          alt="Tow truck at sunset"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            Professional<br />Towing Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12">
            24/7 reliable towing and transport solutions for vehicles of all sizes
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Service
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}