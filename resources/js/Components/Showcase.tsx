import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Luxury Vehicle Transport",
    description: "Specialized handling for high-end and exotic cars with enclosed transport options",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    specs: [
      "Air-ride suspension",
      "Enclosed transport",
      "GPS tracking",
      "Climate control"
    ]
  },
  {
    id: 2,
    title: "Heavy Equipment Moving",
    description: "Professional transport for construction and industrial machinery",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    specs: [
      "Up to 75-ton capacity",
      "Specialized rigging",
      "Multi-axle trailers",
      "Permit handling"
    ]
  },
  {
    id: 3,
    title: "Emergency Recovery",
    description: "Advanced recovery solutions for challenging situations",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
    specs: [
      "Rotator service",
      "Underwater recovery",
      "Winching",
      "Load shifts"
    ]
  }
];

export default function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="bg-dynamic-black py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-dynamic-red/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-dynamic-silver/80 text-xl max-w-2xl mx-auto">
            Experience excellence in specialized transport solutions
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Categories */}
          <div className="space-y-6">
            {services.map((service, idx) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveIndex(idx)}
                className="w-full"
              >
                <div className={`relative rounded-3xl p-8 transition-all duration-300 group overflow-hidden ${
                  activeIndex === idx 
                    ? 'bg-gradient-to-r from-dynamic-red to-dynamic-red-dark' 
                    : 'bg-gradient-service hover:bg-gradient-to-r hover:from-dynamic-red/20 hover:to-transparent'
                }`}>
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                      activeIndex === idx 
                        ? 'text-white' 
                        : 'text-dynamic-silver group-hover:text-white'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`transition-colors ${
                      activeIndex === idx 
                        ? 'text-white/90' 
                        : 'text-dynamic-silver/60 group-hover:text-dynamic-silver'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: Service Preview */}
          <div className="h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="relative rounded-3xl overflow-hidden h-full bg-gradient-service">
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dynamic-black via-dynamic-black/50 to-transparent" />
                  </div>

                  {/* Specs Grid */}
                  <div className="absolute inset-0 p-8 flex items-end">
                    <div className="grid grid-cols-2 gap-4 w-full">
                      {activeService.specs.map((spec, idx) => (
                        <motion.div
                          key={spec}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-gradient-service backdrop-blur-sm rounded-2xl p-4 hover:bg-dynamic-black-light transition-colors group"
                        >
                          <span className="text-dynamic-silver group-hover:text-white transition-colors">
                            {spec}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white px-8 py-4 rounded-xl font-medium group"
          >
            Explore All Services
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}