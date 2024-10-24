import { motion } from 'framer-motion';

export default function Technology() {
  return (
    <div className="pt-20 bg-black min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Advanced Technology</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leveraging cutting-edge solutions for safer and more efficient towing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1592840062661-a5f66d12ec13?auto=format&fit=crop&w=1200&q=80"
                alt="Advanced towing technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">GPS Fleet Tracking</h3>
                <p className="text-gray-400">
                  Real-time location tracking ensures the nearest available truck is dispatched to your location, minimizing response times and maximizing efficiency.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Dispatch System</h3>
                <p className="text-gray-400">
                  Our state-of-the-art dispatch system coordinates all operations, providing real-time updates and ensuring seamless communication between our team and customers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Advanced Recovery Equipment</h3>
                <p className="text-gray-400">
                  Modern hydraulic systems and specialized recovery equipment allow us to handle any situation safely and efficiently.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Digital Dispatch", description: "Automated system for faster response" },
              { title: "Live Tracking", description: "Real-time vehicle location updates" },
              { title: "Smart Scheduling", description: "AI-powered route optimization" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}