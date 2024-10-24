import { motion } from 'framer-motion';
import { FaTruck, FaWrench, FaCar, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaTruck className="h-8 w-8" />,
    title: "Heavy Duty Towing",
    description: "Specialized equipment for trucks, buses, and heavy machinery"
  },
  {
    icon: <FaWrench className="h-8 w-8" />,
    title: "Roadside Assistance",
    description: "Quick response for breakdowns, jump-starts, and tire changes"
  },
  {
    icon: <FaCar className="h-8 w-8" />,
    title: "Vehicle Transport",
    description: "Safe and secure transportation for all vehicle types"
  },
  {
    icon: <FaShieldAlt className="h-8 w-8" />,
    title: "Accident Recovery",
    description: "Professional recovery services for accident situations"
  }
];

export default function Services() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive towing and recovery solutions for any situation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-8"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full text-black mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Need Emergency Service?</h3>
            <p className="text-white/90 mb-6">Our team is available 24/7 for immediate assistance</p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Call Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}