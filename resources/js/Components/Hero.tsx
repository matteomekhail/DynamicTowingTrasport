import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Clock, Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-dynamic-black">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src="/img/lambo.jpg"
          alt="Professional tow truck at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dynamic-black via-dynamic-black/90 to-dynamic-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dynamic-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-dynamic-red/10 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex items-center z-[4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-bold tracking-wider uppercase text-dynamic-red mb-4 block">
                Premium Towing Services
              </span>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="text-dynamic-silver">Fast &</span>
                <br />
                <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                  Reliable Towing
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-dynamic-silver/80 max-w-2xl mb-8"
            >
              Professional 24/7 emergency towing and roadside assistance when you need it most. 
              We're here to help you get back on the road.
            </motion.p>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white px-8 py-4 rounded-xl font-medium shadow-custom flex items-center gap-3 group"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-service text-dynamic-silver px-8 py-4 rounded-xl font-medium group hover:text-white transition-colors flex items-center gap-3"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { icon: <Clock className="w-6 h-6" />, text: "24/7 Service" },
                { icon: <Shield className="w-6 h-6" />, text: "Licensed & Insured" },
                { icon: <PhoneCall className="w-6 h-6" />, text: "Quick Response" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-gradient-service backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 group hover:bg-dynamic-black-light transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-dynamic-red to-dynamic-red-dark rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-dynamic-silver group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}