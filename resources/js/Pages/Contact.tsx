import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaArrowRight,
  FaWhatsapp
} from 'react-icons/fa';
import Layout from '@/Layouts/Layout';

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "24/7 Emergency Line",
    content: "1-800-TOW-HELP",
    description: "Available round the clock for urgent assistance",
    link: "tel:1800869435"
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "WhatsApp Support",
    content: "+61 400 123 456",
    description: "Quick responses for immediate help",
    link: "https://wa.me/61400123456"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email Us",
    content: "info@dynamictowing.com",
    description: "For quotes and general inquiries",
    link: "mailto:info@dynamictowing.com"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Service Area",
    content: "Sydney Metropolitan Area",
    description: "Covering all Sydney suburbs 24/7",
    link: "#map"
  },
  {
    icon: <FaClock className="w-6 h-6" />,
    title: "Operating Hours",
    content: "24/7 Emergency Service",
    description: "Always ready when you need us",
    link: "#hours"
  }
];

export default function Contact() {
  return (
    <Layout title="Contact Us">
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
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-dynamic-silver max-w-2xl mx-auto">
              Available 24/7 for emergency towing and transport solutions across Sydney
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-service rounded-3xl p-8 shadow-custom relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-dynamic-red/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-dynamic-red/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl font-bold text-dynamic-silver mb-8">Send Us a Message</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-dynamic-silver/80 mb-2 text-sm">First Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-dynamic-silver/80 mb-2 text-sm">Last Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-dynamic-silver/80 mb-2 text-sm">Email Address</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-dynamic-silver/80 mb-2 text-sm">Phone Number</label>
                    <input 
                      type="tel"
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                      placeholder="+61 400 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-dynamic-silver/80 mb-2 text-sm">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white py-4 rounded-xl font-medium shadow-custom flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block group"
                >
                  <div className="bg-gradient-service p-6 rounded-2xl shadow-custom relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-dynamic-red/0 to-dynamic-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-dynamic-red to-dynamic-red-dark rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-dynamic-silver text-lg font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-dynamic-red font-medium mb-1">{info.content}</p>
                        <p className="text-dynamic-silver/60 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 rounded-3xl overflow-hidden shadow-custom h-[400px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-dynamic-red/5 to-transparent pointer-events-none z-10" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.10282421886!2d150.65178800000002!3d-33.847927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1635959481316!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location map"
            />
          </motion.div>

          {/* Emergency CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dynamic-red/20 to-transparent rounded-3xl" />
            <div className="relative bg-gradient-service rounded-3xl p-12 text-center">
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark bg-clip-text text-transparent">
                  Need Emergency Assistance?
                </span>
              </h3>
              <p className="text-dynamic-silver mb-8 text-lg max-w-2xl mx-auto">
                Our team is available 24/7 to help you with any emergency towing needs
              </p>
              <motion.a
                href="tel:1800869435"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white px-8 py-4 rounded-xl font-medium shadow-custom group"
              >
                <FaPhone className="w-5 h-5" />
                <span>1-800-TOW-HELP</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}