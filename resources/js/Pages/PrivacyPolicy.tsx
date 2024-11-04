import Layout from '@/Layouts/Layout';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <div className="min-h-screen bg-dynamic-black py-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-dynamic-black-light/50 rounded-2xl p-8 md:p-12 border border-dynamic-red/10"
          >
            <h1 className="text-4xl font-bold mb-8 text-dynamic-silver">Privacy Policy</h1>
            
            <div className="space-y-8 text-dynamic-silver/80">
              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">1. Information Collection</h2>
                <p>We collect and process certain personal information when you use our towing services, including:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Contact information (name, phone, email)</li>
                  <li>Vehicle details</li>
                  <li>Location data for service delivery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">2. How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Provide emergency towing and roadside assistance</li>
                  <li>Communicate service updates</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">3. Data Security</h2>
                <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">4. Contact Information</h2>
                <p>For privacy-related inquiries, contact us at:</p>
                <p className="mt-2">
                  <a 
                    href="mailto:info.dynamictowing@gmail.com" 
                    className="text-dynamic-red hover:text-dynamic-red-light transition-colors"
                  >
                    info.dynamictowing@gmail.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">5. Updates to This Policy</h2>
                <p>We reserve the right to update this Privacy Policy. Any changes will be posted on this page with an updated revision date.</p>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-dynamic-red/10 text-sm text-dynamic-silver/60">
              Last updated: November 4, 2024
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 