import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTruck, 
  FaCar, 
  FaIndustry, 
  FaCogs, 
  FaCalendarAlt, 
  FaWrench,
  FaRoad,
  FaShip,
  FaTools,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';
import Layout from '@/Layouts/Layout';

const services = [
  {
    icon: <FaTruck />,
    title: "Motorsport Towing",
    description: "Specialized transport for high-performance vehicles, race cars, and supercars. Our expertise ensures your valuable assets are handled with exceptional care and precision.",
    category: "Motorsport"
  },
  {
    icon: <FaCar />,
    title: "Prestige & Luxury Towing",
    description: "Premium transport services for luxury and prestige vehicles. Experience unmatched care and attention to detail, ensuring your high-end vehicle arrives in perfect condition.",
    category: "Luxury"
  },
  {
    icon: <FaIndustry />,
    title: "Heavy Machinery Transport",
    description: "Specialized transport for machinery up to 8 tonnes including excavators, cherry pickers, bobcats, scissor lifts, and industrial lighting. We offer flexible contracts and site-to-site transport services.",
    category: "Industrial"
  },
  {
    icon: <FaCogs />,
    title: "Contract Services",
    description: "Dedicated machinery transport contracts with flexible terms. We specialize in moving equipment between multiple sites, perfect for construction and industrial projects.",
    category: "Industrial"
  },
  {
    icon: <FaTools />,
    title: "Private Events",
    description: "Professional vehicle transport for private events and gatherings. From weddings to car shows, we ensure your vehicles arrive in pristine condition.",
    category: "Events"
  },
  {
    icon: <FaCalendarAlt />,
    title: "Corporate Events",
    description: "Make an impression at your corporate events with our expert vehicle transport services. We handle the logistics so you can focus on your event.",
    category: "Events"
  },
  {
    icon: <FaWrench />,
    title: "Track Days",
    description: "Specialized transport for track day events. We ensure your performance vehicle arrives safely and on time for your track day experience.",
    category: "Motorsport"
  },
  {
    icon: <FaRoad />,
    title: "Breakdown Service",
    description: "24/7 emergency breakdown service for all vehicle types. Fast response times and professional assistance when you need it most.",
    category: "Emergency"
  },
  {
    icon: <FaShip />,
    title: "Port Services",
    description: "Comprehensive port services for vehicle transport and logistics. We handle all aspects of port-to-destination vehicle movement.",
    category: "Industrial"
  },
  {
    icon: <FaIndustry />,
    title: "Equipment Relocation",
    description: "Professional relocation of industrial and construction equipment between multiple sites. Specialized transport for heavy machinery and equipment.",
    category: "Industrial"
  }
];

const categories = ["All", "Motorsport", "Luxury", "Industrial", "Events", "Emergency"];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredService, setHoveredService] = useState(null);

  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <Layout title="Our Services">
      <div className="min-h-screen bg-dynamic-black">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dynamic-red/10 via-transparent to-transparent" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
              <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                Premium Transport
              </span>
              <br />
              <span className="text-dynamic-silver">Solutions</span>
            </h1>
            <p className="text-xl text-dynamic-silver text-center max-w-2xl mx-auto">
              Specialized transport services for your most valuable assets
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300
                  ${selectedCategory === category 
                    ? 'bg-dynamic-red text-white shadow-custom' 
                    : 'bg-dynamic-gray-custom text-dynamic-silver hover:bg-dynamic-black-light'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-service"
                  onMouseEnter={() => setHoveredService(service.title as any)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-dynamic-red/0 via-dynamic-red/0 to-dynamic-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-dynamic-red to-dynamic-red-dark text-white rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-custom">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-dynamic-silver mb-4 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-dynamic-silver/80 mb-8 group-hover:text-dynamic-silver transition-colors">
                      {service.description}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredService === service.title ? 1 : 0,
                        y: hoveredService === service.title ? 0 : 20
                      }}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="text-dynamic-red font-medium">Learn More</span>
                      <FaArrowRight className="text-dynamic-red transform group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dynamic-red/5 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <h2 className="text-5xl font-bold">
                  <span className="text-dynamic-silver">Need a </span>
                  <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                    Premium Transport
                  </span>
                  <span className="text-dynamic-silver"> Solution?</span>
                </h2>
                <p className="text-xl text-dynamic-silver/80 max-w-lg">
                  Get in touch with our expert team for a personalized quote tailored to your specific requirements. Available 24/7 for your transport needs.
                </p>
                <div className="space-y-4">
                  <motion.a
                    href="tel:+1234567890"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 text-dynamic-silver hover:text-dynamic-red transition-colors"
                  >
                    <div className="w-12 h-12 bg-dynamic-gray-custom rounded-xl flex items-center justify-center">
                      <FaPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-dynamic-silver/60">Call us 24/7</div>
                      <div className="font-semibold">+1 (234) 567-890</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="mailto:contact@example.com"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 text-dynamic-silver hover:text-dynamic-red transition-colors"
                  >
                    <div className="w-12 h-12 bg-dynamic-gray-custom rounded-xl flex items-center justify-center">
                      <FaEnvelope className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-dynamic-silver/60">Email us</div>
                      <div className="font-semibold">contact@example.com</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href="https://wa.me/1234567890"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 text-dynamic-silver hover:text-dynamic-red transition-colors"
                  >
                    <div className="w-12 h-12 bg-dynamic-gray-custom rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-dynamic-silver/60">WhatsApp</div>
                      <div className="font-semibold">Message us directly</div>
                    </div>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-service rounded-3xl p-8 shadow-custom relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-dynamic-red/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-dynamic-red/10 blur-3xl" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-dynamic-silver mb-6">Get a Quick Quote</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                      />
                      <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                      />
                    </div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                    />
                    <textarea 
                      placeholder="Tell us about your transport needs" 
                      rows={4}
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red resize-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white py-4 rounded-xl font-medium shadow-custom flex items-center justify-center gap-2 group"
                    >
                      Get Quote Now
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}