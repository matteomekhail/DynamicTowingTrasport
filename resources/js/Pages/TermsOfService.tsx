import Layout from '@/Layouts/Layout';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <Layout title="Terms of Service">
      <div className="min-h-screen bg-dynamic-black py-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-dynamic-black-light/50 rounded-2xl p-8 md:p-12 border border-dynamic-red/10"
          >
            <h1 className="text-4xl font-bold mb-8 text-dynamic-silver">Terms of Service</h1>
            
            <div className="space-y-8 text-dynamic-silver/80">
              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">1. Service Agreement</h2>
                <p>By using Dynamic Towing's services, you agree to these terms. Our services include:</p>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>24/7 Emergency towing services</li>
                  <li>Roadside assistance</li>
                  <li>Vehicle transport</li>
                  <li>Accident recovery</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">2. Service Areas</h2>
                <p>We provide services in the following areas:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Sydney Metropolitan Area</li>
                  <li>Wollongong</li>
                  <li>Shellharbour</li>
                  <li>Canberra</li>
                  <li>Melbourne</li>
                  <li>Goulburn</li>
                  <li>Newcastle</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">3. Service Rates & Payment</h2>
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Rates vary based on service type, distance, and time of day</li>
                  <li>Payment is required upon service completion</li>
                  <li>We accept major credit cards and cash payments</li>
                  <li>Additional fees may apply for after-hours services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">4. Liability & Insurance</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>We maintain comprehensive insurance coverage</li>
                  <li>Customers must provide accurate vehicle information</li>
                  <li>We are not liable for pre-existing vehicle damage</li>
                  <li>Service is subject to safe operating conditions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-dynamic-silver mb-4">5. Contact Information</h2>
                <p>For questions about these terms or our services:</p>
                <div className="mt-2 space-y-2">
                  <p>
                    <a 
                      href="tel:+61401993669" 
                      className="text-dynamic-red hover:text-dynamic-red-light transition-colors"
                    >
                      +61 401 993 669
                    </a>
                  </p>
                  <p>
                    <a 
                      href="mailto:info.dynamictowing@gmail.com" 
                      className="text-dynamic-red hover:text-dynamic-red-light transition-colors"
                    >
                      info.dynamictowing@gmail.com
                    </a>
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-8 pt-8 border-t border-dynamic-red/10 text-sm text-dynamic-silver/60">
              Last updated: November 2024
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
} 