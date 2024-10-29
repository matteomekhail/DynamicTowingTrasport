import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useScroll } from 'framer-motion';

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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-dynamic-black' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href={route('welcome')} className="flex items-center">
                            <img src="/img/LogoNoBG.png" alt="Dynamic Towing" className="h-24 w-auto" />
                        </Link>
                    </motion.div>
                    
                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-dynamic-silver hover:text-white px-3 py-2 text-sm font-medium ${
                                            route().current(item.name.toLowerCase()) ? 'text-dynamic-red' : ''
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dynamic-silver hover:text-white p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-dynamic-black"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-dynamic-silver hover:text-white block px-3 py-2 text-base font-medium ${
                                    route().current(item.name.toLowerCase()) ? 'text-dynamic-red' : ''
                                }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}

export default Navbar;