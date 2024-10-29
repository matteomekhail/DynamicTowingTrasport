import Layout from '@/Layouts/Layout';
import { motion } from 'framer-motion';
import { FaTruck, FaUsers, FaClock, FaAward } from 'react-icons/fa';

const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '50,000+', label: 'Successful Tows' },
    { number: '24/7', label: 'Service Hours' },
    { number: '100%', label: 'Customer Satisfaction' }
];

const values = [
    {
        icon: <FaTruck className="h-8 w-8" />,
        title: "Professional Equipment",
        description: "State-of-the-art towing fleet maintained to the highest standards"
    },
    {
        icon: <FaUsers className="h-8 w-8" />,
        title: "Expert Team",
        description: "Certified professionals with extensive industry experience"
    },
    {
        icon: <FaClock className="h-8 w-8" />,
        title: "Always Available",
        description: "Round-the-clock service for when you need us most"
    },
    {
        icon: <FaAward className="h-8 w-8" />,
        title: "Quality Service",
        description: "Committed to exceeding customer expectations"
    }
];

export default function About() {
    return (
        <Layout title="About Us">
            <div className="pt-20 bg-gradient-to-b from-dynamic-black to-dynamic-black-light">
                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h1 className="gradient-text text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Leading the industry with innovative towing solutions since 1995
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-6 text-gray-300"
                            >
                                <p className="text-lg">
                                    For over 25 years, Dynamic Towing has been setting the standard in professional towing and recovery services. What started as a single truck operation has grown into one of the region's most trusted names in vehicle transport and roadside assistance.
                                </p>
                                <p className="text-lg">
                                    Our commitment to excellence, investment in cutting-edge technology, and dedication to customer service has earned us numerous industry accolades and, more importantly, the trust of thousands of satisfied customers.
                                </p>
                                <p className="text-lg">
                                    Today, we continue to expand our services while maintaining the same level of personalized care and attention that has been our hallmark since day one.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative h-[400px] rounded-2xl overflow-hidden group card-hover"
                            >
                                <img
                                    src="/img/normale.jpg"
                                    alt="Our team at work"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </motion.div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center service-card rounded-2xl p-8 card-hover"
                                >
                                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-gray-300">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-center mb-16"
                        >
                            <h2 className="gradient-text text-4xl font-bold mb-6">Our Values</h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                What sets us apart in the industry
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="service-card rounded-2xl p-8 card-hover"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="bg-gradient-to-r from-dynamic-red-gradient-start to-dynamic-red-gradient-end p-3 rounded-full text-white mr-4">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{value.title}</h3>
                                    </div>
                                    <p className="text-gray-300">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}