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
import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import { useEffect } from "react";
import { PageProps } from '@/types';

const serviceLocations = [
  "Sydney Metropolitan Area",
  "Wollongong",
  "Shellharbour",
  "Canberra",
  "Melbourne",
  "Goulburn",
  "Newcastle"
];

const contactInfo = [
  {
    icon: <FaPhone className="w-6 h-6" />,
    title: "24/7 Emergency Line",
    content: "+61 401 993 669",
    description: "Available round the clock for urgent assistance",
    link: "tel:+61401993669"
  },
  {
    icon: <FaWhatsapp className="w-6 h-6" />,
    title: "WhatsApp Support",
    content: "+61 401 993 669",
    description: "Quick responses for immediate help",
    link: "https://wa.me/61401993669"
  },
  {
    icon: <FaEnvelope className="w-6 h-6" />,
    title: "Email Us",
    content: "info.dynamictowing@gmail.com",
    description: "For quotes and general inquiries",
    link: "mailto:info.dynamictowing@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    title: "Service Areas",
    content: "Multiple Locations Available",
    description: "Covering major cities and regions",
    link: "#map",
    locations: serviceLocations
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
  const form = useForm({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    form.post('/send-email', {
      preserveScroll: true,
      onSuccess: () => {
        toast('Email sent successfully!', {
          description: "We'll get back to you soon.",
          duration: 5000,
        });
        form.reset();
      },
      onError: () => {
        toast('Failed to send email', {
          description: "Please try again later.",
          duration: 5000,
        });
      }
    });
  }

  return (
    <Layout title="Contact Us">
      <div className="min-h-screen bg-dynamic-black pb-32">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-dynamic-silver/80 mb-2 text-sm">First Name</label>
                      <input 
                        type="text"
                        value={form.data.firstName}
                        onChange={e => form.setData('firstName', e.target.value)}
                        className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-dynamic-silver/80 mb-2 text-sm">Last Name</label>
                      <input 
                        type="text"
                        value={form.data.lastName}
                        onChange={e => form.setData('lastName', e.target.value)}
                        className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-dynamic-silver/80 mb-2 text-sm">Email Address</label>
                    <input 
                      type="email"
                      value={form.data.email}
                      onChange={e => form.setData('email', e.target.value)}
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-dynamic-silver/80 mb-2 text-sm">Phone Number</label>
                    <input 
                      type="tel"
                      value={form.data.phone}
                      onChange={e => form.setData('phone', e.target.value)}
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red"
                      placeholder="+61 400 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-dynamic-silver/80 mb-2 text-sm">Message</label>
                    <textarea 
                      rows={4}
                      value={form.data.message}
                      onChange={e => form.setData('message', e.target.value)}
                      className="w-full px-4 py-3 bg-dynamic-black-light rounded-xl border-0 text-dynamic-silver placeholder-dynamic-silver/50 focus:ring-2 focus:ring-dynamic-red resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={form.processing}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white py-4 rounded-xl font-medium shadow-custom flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {form.processing ? 'Sending...' : 'Send Message'}
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
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
                      <div className="w-12 h-12 bg-gradient-to-r from-dynamic-red to-dynamic-red-dark rounded-xl flex items-center justify-center shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-dynamic-silver text-lg font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-dynamic-red font-medium mb-1">{info.content}</p>
                        <p className="text-dynamic-silver/60 text-sm">{info.description}</p>
                        {info.locations && (
                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {info.locations.map((location) => (
                              <span 
                                key={location} 
                                className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-dynamic-black-light text-dynamic-silver/80 border border-dynamic-red/20 hover:border-dynamic-red/40 transition-colors duration-200"
                              >
                                {location}
                              </span>
                            ))}
                          </div>
                        )}
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
            <div className="absolute inset-0 bg-gradient-to-r from-dynamic-red/20 to-transparent rounded-3xl pb-12" />
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
                href="tel:+61401993669"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white px-8 py-4 rounded-xl font-medium shadow-custom group"
              >
                <FaPhone className="w-5 h-5" />
                <span>+61 401 993 669</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}