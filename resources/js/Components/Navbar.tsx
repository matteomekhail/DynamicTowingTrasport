import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0));
    }, [scrollY]);

    const navItems = [
        { name: 'About', href: route('about') },
        { name: 'Services', href: route('services') },
        { name: 'Contact', href: route('contact') }
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-dynamic-black/95 backdrop-blur-lg py-2 shadow-lg shadow-dynamic-red/5' 
                        : 'bg-transparent py-6' // Aumentato il padding verticale per accomodare il logo più grande
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="relative z-10"
                        >
                            <Link 
                                href={route('welcome')} 
                                className="flex items-center"
                            >
                                <img 
                                    src="/img/LogoNoBG.png" 
                                    alt="Dynamic Towing" 
                                    className={`transition-all duration-300 ${
                                        isScrolled ? 'h-20' : 'h-28' // Aumentate le dimensioni del logo
                                    }`}
                                />
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                                                route().current(item.name.toLowerCase()) 
                                                    ? 'text-dynamic-red' 
                                                    : 'text-dynamic-silver hover:text-white'
                                            }`}
                                        >
                                            {item.name}
                                            <span className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full transform origin-left transition-transform duration-300 ${
                                                route().current(item.name.toLowerCase())
                                                    ? 'bg-dynamic-red scale-x-100'
                                                    : 'bg-dynamic-red scale-x-0 group-hover:scale-x-100'
                                            }`} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.a
                                href="tel:1234567890"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white px-6 py-2.5 rounded-xl font-medium shadow-custom flex items-center gap-2 text-sm group"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Contact Us</span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden relative z-10 p-2 rounded-xl bg-gradient-service text-dynamic-silver hover:text-white transition-colors"
                        >
                            <span className="sr-only">Toggle menu</span>
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-dynamic-black/95 backdrop-blur-lg md:hidden"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex flex-col gap-4 p-8 pt-32" // Aumentato il padding top per il logo più grande
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all ${
                                            route().current(item.name.toLowerCase())
                                                ? 'bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white'
                                                : 'bg-gradient-service text-dynamic-silver hover:text-white'
                                        }`}
                                    >
                                        {item.name}
                                        <ChevronRight className="w-5 h-5" />
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.a
                                href="tel:1234567890"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center justify-between p-4 mt-4 rounded-xl bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white font-medium"
                            >
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <span>Contact Us</span>
                                </div>
                                <ChevronRight className="w-5 h-5" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;