import { motion } from 'framer-motion';
import { FaTruck, FaTools, FaPhoneAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaTruck className="h-8 w-8" />,
    title: "Professional Fleet",
    description: "Modern tow trucks equipped for any situation"
  },
  {
    icon: <FaTools className="h-8 w-8" />,
    title: "Expert Service",
    description: "Certified operators with years of experience"
  },
  {
    icon: <FaPhoneAlt className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock emergency response team"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-dynamic-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-dynamic-red rounded-full text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dynamic-silver mb-4">{feature.title}</h3>
              <p className="text-dynamic-silver/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}