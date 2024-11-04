import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-24 bg-dynamic-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dynamic-silver mb-6">
            Need a Tow?
          </h2>
          <p className="text-xl text-dynamic-silver/80 mb-12">
            Our dispatch team is ready to assist you 24/7. Call us now or request service online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+61401993669"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-dynamic-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-dynamic-red-dark transition-colors"
            >
              Call Now
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-dynamic-silver border-2 border-dynamic-silver px-8 py-4 rounded-full text-lg font-semibold hover:bg-dynamic-silver/10 transition-colors"
            >
              Request Online
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}