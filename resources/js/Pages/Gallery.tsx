import Layout from '@/Layouts/Layout';
import { motion } from 'framer-motion';

const galleryItems = [
  {
    id: 1,
    title: "Flatbed Towing",
    category: "Professional",
    image: "https://images.unsplash.com/photo-1589739900509-6914473714ba?auto=format&fit=crop&w=1200&q=80",
    description: "Professional flatbed towing services"
  },
  {
    id: 2,
    title: "Heavy Duty Recovery",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1589739900266-5c1ee7fd0ff6?auto=format&fit=crop&w=1200&q=80",
    description: "Heavy-duty vehicle recovery services"
  },
  {
    id: 3,
    title: "Emergency Towing",
    category: "Emergency",
    image: "https://images.unsplash.com/photo-1589739901533-5a8a12c9d353?auto=format&fit=crop&w=1200&q=80",
    description: "24/7 emergency towing assistance"
  },
  {
    id: 4,
    title: "Roadside Assistance",
    category: "Service",
    image: "https://images.unsplash.com/photo-1589739901375-0a06d8aaf5d2?auto=format&fit=crop&w=1200&q=80",
    description: "Professional roadside assistance"
  },
  {
    id: 5,
    title: "Equipment Transport",
    category: "Transport",
    image: "https://images.unsplash.com/photo-1562592306-34656bd7c67e?auto=format&fit=crop&w=1200&q=80",
    description: "Specialized equipment transportation"
  },
  {
    id: 6,
    title: "Accident Recovery",
    category: "Recovery",
    image: "https://images.unsplash.com/photo-1589739900647-f6c72d7d4877?auto=format&fit=crop&w=1200&q=80",
    description: "Professional accident scene recovery"
  }
];

export default function Gallery() {
  return (
    <Layout title="Our Gallery">
      <div className="pt-20 bg-gradient-to-b from-dynamic-black to-dynamic-black-light">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our fleet and see our professional towing services in action
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl bg-dynamic-black-light"
                >
                  <div className="aspect-w-16 aspect-h-12 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-2 text-sm bg-dynamic-red text-white rounded-full">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-16 text-center"
            >
              <p className="text-gray-300 mb-8">
                Need our services? We're available 24/7 for all your towing needs.
              </p>
              <a
                href="/contact"
                className="inline-block bg-dynamic-red text-white px-8 py-3 rounded-full hover:bg-dynamic-red-dark transition-colors"
              >
                Contact Us Now
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}