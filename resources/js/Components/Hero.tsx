import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen bg-dynamic-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="./img/truck.jpg"
          alt="Tow truck at sunset"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dynamic-black/70 to-dynamic-black" />
      </div>
      
      <div className="relative h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-dynamic-silver mb-6 tracking-tight">
            Professional<br /><span className="text-dynamic-red">Towing Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-dynamic-silver max-w-3xl mb-12">
            24/7 reliable towing and transport solutions for vehicles of all sizes
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-dynamic-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dynamic-red-dark transition-colors"
          >
            Request Service
          </motion.button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dynamic-black to-transparent" />
    </div>
  );
}