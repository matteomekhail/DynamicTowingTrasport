import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leading the industry with innovative towing solutions since 1995
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 text-gray-300"
            >
              <p>
                For over 25 years, Dynamic Towing & Transport has been setting the standard in professional towing and recovery services. What started as a single truck operation has grown into one of the region's most trusted names in vehicle transport and roadside assistance.
              </p>
              <p>
                Our commitment to excellence, investment in cutting-edge technology, and dedication to customer service has earned us numerous industry accolades and, more importantly, the trust of thousands of satisfied customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581112606025-6e91da971d20?auto=format&fit=crop&w=1200&q=80"
                alt="Dynamic Towing & Transport team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '50,000+', label: 'Successful Tows' },
              { number: '24/7', label: 'Service Hours' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}