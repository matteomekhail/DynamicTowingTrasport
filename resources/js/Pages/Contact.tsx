import Layout from '@/Layouts/Layout';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhone className="h-6 w-6" />,
    title: "24/7 Emergency Line",
    content: "1-800-TOW-HELP",
    link: "tel:1800869435"
  },
  {
    icon: <FaEnvelope className="h-6 w-6" />,
    title: "Email Us",
    content: "info@dynamictowing.com",
    link: "mailto:info@dynamictowing.com"
  },
  {
    icon: <FaMapMarkerAlt className="h-6 w-6" />,
    title: "Service Area",
    content: "Sydney Metropolitan Area",
    link: "#map"
  },
  {
    icon: <FaClock className="h-6 w-6" />,
    title: "Operating Hours",
    content: "24/7 Emergency Service",
    link: "#hours"
  }
];

export default function Contact() {
  return (
    <Layout title="Contact Us">
      <div className="pt-20 bg-gradient-to-b from-gray-800 to-gray-700">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Available 24/7 for all your towing and transport needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-dynamic-black to-dynamic-black-light rounded-2xl p-8 shadow-custom"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dynamic-red transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dynamic-red transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dynamic-red transition-colors"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-dynamic-red-gradient-start to-dynamic-red-gradient-end text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-6 bg-gradient-to-br from-dynamic-black to-dynamic-black-light rounded-xl shadow-custom hover:shadow-lg transition-all"
                  >
                    <div className="bg-gradient-to-r from-dynamic-red-gradient-start to-dynamic-red-gradient-end p-3 rounded-full text-white mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl overflow-hidden shadow-custom h-[400px] mb-16"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.10282421886!2d150.65178800000002!3d-33.847927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1635959481316!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              ></iframe>
            </motion.div>

            {/* Emergency Call Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="bg-gradient-to-r from-dynamic-red-gradient-start to-dynamic-red-gradient-end rounded-2xl p-8 text-center shadow-custom"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Need Emergency Assistance?</h3>
              <p className="text-white/90 mb-6">Our team is ready to help 24/7</p>
              <a
                href="tel:1800869435"
                className="inline-block bg-white text-dynamic-red px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call Now: 1-800-TOW-HELP
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}