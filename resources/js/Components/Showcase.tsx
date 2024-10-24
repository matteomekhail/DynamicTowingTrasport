import { motion } from 'framer-motion';

export default function Showcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Towing Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From light-duty to heavy-duty towing, we've got you covered
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1562886889-42c3323e8858?auto=format&fit=crop&w=1200&q=80"
              alt="Heavy duty towing"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Heavy-Duty Towing
              </h3>
              <p className="text-gray-300">
                Specialized equipment for trucks and heavy machinery
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600706432502-77a0e2e32790?auto=format&fit=crop&w=1200&q=80"
              alt="Roadside assistance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                24/7 Emergency Service
              </h3>
              <p className="text-gray-300">
                Fast and reliable roadside assistance whenever you need it
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}