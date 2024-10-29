import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

const services = [
  { name: 'Motorsport Towing', href: route('services') },
  { name: 'Luxury Transport', href: route('services') },
  { name: 'Machinery Transport', href: route('services') },
  { name: 'Event Services', href: route('services') },
  { name: 'Breakdown Service', href: route('services') }
];

const contactInfo = [
  { icon: <FaPhone />, text: '1-800-TOW-HELP', href: 'tel:1800869435' },
  { icon: <FaEnvelope />, text: 'info@dynamictowing.com', href: 'mailto:info@dynamictowing.com' },
  { icon: <FaMapMarkerAlt />, text: 'Sydney Metropolitan Area', href: '#' }
];

const socialLinks = [
  { icon: <FaFacebook />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter' }
];

function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <Link href={route('welcome')} className="block mb-6">
              <img
                src="/img/LogoNOBG.png"
                alt="Dynamic Towing & Transport"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Professional towing and transport solutions for any situation, available 24/7.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-dynamic-red transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-dynamic-silver mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-dynamic-red transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-dynamic-silver mb-4">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center text-gray-400 hover:text-dynamic-red transition-colors"
                  >
                    <span className="mr-2">{contact.icon}</span>
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold text-dynamic-silver mb-4">Service Areas</h3>
            <p className="text-gray-400">
              Serving the greater Sydney metropolitan area and surrounding regions. Available for
              interstate transport and specialized services nationwide.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dynamic Towing & Transport - Professional Hooker. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href={route('welcome')} className="text-gray-400 hover:text-dynamic-red text-sm">
                Privacy Policy
              </Link>
              <Link href={route('welcome')} className="text-gray-400 hover:text-dynamic-red text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;