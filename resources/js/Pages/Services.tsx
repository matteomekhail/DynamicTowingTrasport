import { motion } from 'framer-motion';
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
  FaArrowRight
} from 'react-icons/fa';
import Layout from '@/Layouts/Layout';

const services = [
  {
    icon: <FaTruck />,
    title: "Motorsport Towing",
    description: "Specialized transport for high-performance vehicles, race cars, and supercars. Our expertise ensures your valuable assets are handled with exceptional care and precision.",
    image: "https://images.unsplash.com/photo-1605652613258-8a3069d0f573?auto=format&fit=crop&w=1200&q=80",
    category: "Motorsport"
  },
  {
    icon: <FaCar />,
    title: "Prestige & Luxury Towing",
    description: "Premium transport services for luxury and prestige vehicles. Experience unmatched care and attention to detail, ensuring your high-end vehicle arrives in perfect condition.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    category: "Luxury"
  },
  {
    icon: <FaIndustry />,
    title: "Heavy Machinery Transport",
    description: "Specialized transport for machinery up to 8 tonnes including excavators, cherry pickers, bobcats, scissor lifts, and industrial lighting. We offer flexible contracts and site-to-site transport services.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
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

const categories = ["Motorsport", "Luxury", "Industrial", "Events", "Emergency"];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export default function Services() {
  return (
    <Layout title="Our Services">
      <div className="min-h-screen bg-gradient-to-b from-dynamic-black to-dynamic-black-light">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Professional transport solutions for every need
            </p>
          </motion.div>
        </section>

        {/* Featured Services */}
        <section className="relative -mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  className="group relative h-[500px] rounded-3xl overflow-hidden"
                >
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  </div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="mb-6">
                      <div className="bg-dynamic-red/90 backdrop-blur-sm p-4 rounded-2xl inline-block mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-dynamic-red px-8 py-3 rounded-xl flex items-center gap-2 group/btn w-full sm:w-auto justify-center"
                      >
                        Learn More
                        <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services by Category */}
        {categories.filter(cat => cat !== "Featured").map((category, catIndex) => (
          <section key={category} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">{category} Services</h2>
                <div className="w-20 h-1 bg-dynamic-red rounded-full" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(s => s.category === category)
                  .map((service, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-dynamic-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative">
                        <div className="bg-dynamic-red/90 p-4 rounded-2xl inline-block mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                          {service.description}
                        </p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-dynamic-red group-hover:text-white transition-colors flex items-center gap-2"
                        >
                          Learn More
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need Professional Transport Services?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Contact us for a customized solution tailored to your specific requirements
                </p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-dynamic-red px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg group"
                >
                  <FaTruck className="h-5 w-5" />
                  <span>Get Started</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}