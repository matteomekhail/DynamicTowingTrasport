import React, { useState, useCallback } from 'react';
import { Link } from '@inertiajs/react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

interface NavItem {
    name: string;
    href: string;
}

interface Route {
    current: (name: string) => boolean;
}

declare function route(name?: string): string & Route;

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // Previene lo scroll quando il menu è aperto
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    React.useLayoutEffect(() => {
        let lastScroll = 0;
        let rafId: number | null = null;

        const checkScroll = (): void => {
            const scrollY = window.scrollY;
            if ((scrollY > 0) !== isScrolled) {
                setIsScrolled(scrollY > 0);
            }
            lastScroll = scrollY;
            rafId = null;
        };

        const handleScroll = (): void => {
            if (rafId === null) {
                rafId = requestAnimationFrame(checkScroll);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    }, [isScrolled]);

    const navItems: NavItem[] = [
        { name: 'About', href: route('about') },
        { name: 'Services', href: route('services') },
        { name: 'Contact', href: route('contact') }
    ];

    const getNavItemClasses = (isActive: boolean): string => `
        px-4 py-2 text-sm font-medium 
        transition-colors duration-150
        ${isActive 
            ? 'text-dynamic-red' 
            : 'text-dynamic-silver hover:text-white'
        }
    `;

    const getMobileNavItemClasses = (isActive: boolean): string => `
        flex items-center justify-between p-4 
        rounded-xl text-lg font-medium
        transition-all duration-300 transform
        ${isActive
            ? 'bg-gradient-to-r from-dynamic-red to-dynamic-red-dark text-white'
            : 'bg-gradient-service text-dynamic-silver hover:text-white'
        }
    `;

    return (
        <>
            <div 
                className={`
                    fixed top-0 left-0 right-0 z-50 
                    ${isScrolled 
                        ? 'bg-black/95 shadow-lg py-2' 
                        : 'bg-transparent py-6'
                    }
                    will-change-transform
                `}
                style={{
                    transition: 'all 0.15s ease-out'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href={route('welcome')} className="flex items-center">
                            <img 
                                src="/img/LogoNoBG.png" 
                                alt="Dynamic Towing" 
                                className={`
                                    transform-gpu
                                    ${isScrolled ? 'h-20' : 'h-28'}
                                `}
                                style={{
                                    transition: 'height 0.15s ease-out'
                                }}
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={getNavItemClasses(
                                            route().current(item.name.toLowerCase())
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            <a
                                href="tel:+61401993669"
                                className="
                                    bg-gradient-to-r from-dynamic-red to-dynamic-red-dark 
                                    text-white px-6 py-2.5 rounded-xl font-medium 
                                    flex items-center gap-2 text-sm group
                                    transition-transform duration-150
                                    hover:scale-[1.02] active:scale-[0.98]
                                    transform-gpu whitespace-nowrap
                                "
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Us Now</span>
                                <ChevronRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* Mobile Menu Button con rotazione */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="
                                md:hidden p-2 rounded-xl 
                                bg-gradient-service text-dynamic-silver 
                                hover:text-white transition-all duration-300
                                relative z-50
                            "
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span 
                                    className={`
                                        absolute left-0 top-0 w-6 h-6 flex items-center justify-center
                                        transition-all duration-300 transform
                                        ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}
                                    `}
                                >
                                    <X className="w-6 h-6" />
                                </span>
                                <span 
                                    className={`
                                        absolute left-0 top-0 w-6 h-6 flex items-center justify-center
                                        transition-all duration-300 transform
                                        ${!isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}
                                    `}
                                >
                                    <Menu className="w-6 h-6" />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu con animazioni migliorate */}
            <div 
                className={`
                    fixed inset-0 z-40 
                    transition-all duration-300 transform
                    pointer-events-none
                    md:hidden
                `}
            >
                {/* Overlay con fade */}
                <div 
                    className={`
                        absolute inset-0 bg-black/95 backdrop-blur-lg
                        transition-opacity duration-300
                        ${isOpen ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                        pointerEvents: isOpen ? 'auto' : 'none'
                    }}
                />

                {/* Menu content con slide */}
                <div 
                    className={`
                        relative h-full overflow-hidden
                        transition-all duration-300 transform
                        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
                    `}
                    style={{
                        pointerEvents: isOpen ? 'auto' : 'none'
                    }}
                >
                    <div className="flex flex-col gap-4 p-8 pt-32">
                        {navItems.map((item, index) => (
                            <div
                                key={item.name}
                                className={`
                                    transform transition-all duration-500 delay-[${index * 100}ms]
                                    ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                                `}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={getMobileNavItemClasses(
                                        route().current(item.name.toLowerCase())
                                    )}
                                >
                                    {item.name}
                                    <ChevronRight className="w-5 h-5" />
                                </Link>
                            </div>
                        ))}

                        <div 
                            className={`
                                transform transition-all duration-500 delay-[400ms]
                                ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
                            `}
                        >
                            <a
                                href="tel:+61401993669"
                                className="
                                    flex items-center justify-between p-4 mt-4 
                                    rounded-xl bg-gradient-to-r from-dynamic-red 
                                    to-dynamic-red-dark text-white font-medium
                                    transition-transform duration-300
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5" />
                                    <span>Call Us Now</span>
                                </div>
                                <ChevronRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;