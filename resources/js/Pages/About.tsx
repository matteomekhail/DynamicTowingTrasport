import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTruck, 
  FaUsers, 
  FaClock, 
  FaAward, 
  FaTools,
  FaShieldAlt,
  FaRocket,
  FaHandshake 
} from 'react-icons/fa';
import Layout from '@/Layouts/Layout';

const stats = [
  { 
    number: '3+', 
    label: 'Years Experience',
    description: 'Leading the industry since 2021'
  },
  { 
    number: '1000+', 
    label: 'Successful Tows',
    description: 'Trusted by thousands of customers'
  },
  { 
    number: '24/7', 
    label: 'Service Hours',
    description: 'Always there when you need us'
  },
  { 
    number: '100%', 
    label: 'Customer Satisfaction',
    description: 'Our commitment to excellence'
  }
];

const values = [
  {
    icon: <FaTruck className="w-6 h-6" />,
    title: "Professional Equipment",
    description: "State-of-the-art towing fleet maintained to the highest standards for optimal performance and reliability.",
    color: "from-dynamic-red to-dynamic-red-dark"
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    title: "Expert Team",
    description: "Certified professionals with extensive industry experience dedicated to providing superior service.",
    color: "from-dynamic-red to-dynamic-red-dark"
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Always Available",
    description: "Round-the-clock service ensuring help is always just a phone call away, any time, any day.",
    color: "from-dynamic-red to-dynamic-red-dark"
  },
  {
    icon: <FaAward className="w-6 h-6" />,
    title: "Quality Service",
    description: "Committed to exceeding customer expectations with unmatched service quality and professionalism.",
    color: "from-dynamic-red to-dynamic-red-dark"
  }
];

export default function About() {
  return (
    <Layout title="About Us">
      <div className="min-h-screen bg-dynamic-black">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-dynamic-red/10 via-transparent to-transparent" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                Our Legacy of
              </span>
              <br />
              <span className="text-dynamic-silver">Excellence</span>
            </h1>
            <p className="text-xl text-dynamic-silver max-w-2xl mx-auto">
              Leading the industry with innovative towing solutions since 1995
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                  Our Story
                </span>
              </h2>
              <p className="text-dynamic-silver/80 text-lg">
                Since 2021, Dynamic Towing has been setting the standard in professional towing and recovery services. What started as a single truck operation has grown into one of the region's most trusted names in vehicle transport and roadside assistance.
              </p>
              <p className="text-dynamic-silver/80 text-lg">
                Our commitment to excellence, investment in cutting-edge technology, and dedication to customer service has earned us numerous industry accolades and, more importantly, the trust of thousands of satisfied customers.
              </p>
              <p className="text-dynamic-silver/80 text-lg">
                Today, we continue to expand our services while maintaining the same level of personalized care and attention that has been our hallmark since day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[500px] rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-service opacity-50" />
              <img
                src="/img/normale.jpg"
                alt="Our team at work"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dynamic-black via-dynamic-black/50 to-transparent" />
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-service p-8 rounded-3xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-dynamic-red/0 to-dynamic-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-5xl font-bold bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-dynamic-silver font-medium text-lg mb-2">{stat.label}</div>
                    <div className="text-dynamic-silver/60 text-sm">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="py-24">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                  Our Core Values
                </span>
              </h2>
              <p className="text-dynamic-silver/80 text-xl max-w-2xl mx-auto">
                What sets us apart in the industry and drives our commitment to excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-service p-8 rounded-3xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-dynamic-red/0 to-dynamic-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex gap-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300`}>
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-dynamic-silver text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-dynamic-silver/60">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}