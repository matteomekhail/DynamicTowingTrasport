import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    title: "Luxury Vehicle Transport",
    description: "Specialized handling for high-end and exotic cars with enclosed transport options",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    specs: ["Air-ride suspension", "Enclosed transport", "GPS tracking", "Climate control"]
  },
  {
    id: 2,
    title: "Heavy Equipment Moving",
    description: "Professional transport for construction and industrial machinery",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    specs: ["Up to 75-ton capacity", "Specialized rigging", "Multi-axle trailers", "Permit handling"]
  },
  {
    id: 3,
    title: "Emergency Recovery",
    description: "Advanced recovery solutions for challenging situations",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
    specs: ["Rotator service", "Underwater recovery", "Winching", "Load shifts"]
  }
];

export default function Showcase() {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section className="py-24 bg-gradient-to-b from-dynamic-black to-dynamic-black-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text text-4xl md:text-5xl font-bold mb-6">
            Specialized Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our premium towing and transport solutions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Service Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-500 ${
                    activeService === service.id
                      ? 'bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white'
                      : 'bg-gradient-service hover:bg-dynamic-black-light text-gray-300'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-80">{service.description}</p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-2/3">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={false}
                  animate={{
                    opacity: activeService === service.id ? 1 : 0,
                    scale: activeService === service.id ? 1 : 0.95,
                    zIndex: activeService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{
                    pointerEvents: activeService === service.id ? "auto" : "none"
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {service.specs.map((spec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: index * 0.1,
                            duration: 0.4,
                            ease: "easeOut"
                          }}
                          className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center"
                        >
                          <span className="text-white text-sm font-medium">
                            {spec}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <a
            href="/services"
            className="inline-flex items-center space-x-2 bg-dynamic-red text-white px-8 py-3 rounded-full hover:bg-dynamic-red-dark transition-colors"
          >
            <span>View All Services</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}