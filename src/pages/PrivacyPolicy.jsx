import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold text-blue-500 mb-2 border-b-2 border-blue-500 pb-3">
            Paw Relief Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-gray-500 mb-8">Last updated: January 2026</p>

            <div className="bg-white rounded-xl p-8 shadow-sm space-y-6">
              <p>
                Paw Relief ("we", "our", or "the app") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Information We Collect</h2>

              <p className="font-semibold text-gray-900">Account Information</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Email address and password (for authentication)</li>
              </ul>

              <p className="font-semibold text-gray-900">Pet Information</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pet name, breed, age, and weight</li>
                <li>Pet photos</li>
                <li>Known allergies</li>
              </ul>

              <p className="font-semibold text-gray-900">Health & Medical Data</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Symptom logs (type, severity, notes)</li>
                <li>Trigger logs (environmental factors, foods)</li>
                <li>Medication and treatment records</li>
                <li>Veterinarian information</li>
              </ul>

              <p className="font-semibold text-gray-900">Food & Product Data</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Barcode scans and product information</li>
                <li>Ingredient lists from scanned products</li>
              </ul>

              <p className="font-semibold text-gray-900">Location Data</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Approximate location (used only for local allergen and air quality alerts)</li>
                <li>Location is not stored permanently</li>
              </ul>

              <p className="font-semibold text-gray-900">Analytics Data</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>App usage statistics</li>
                <li>Crash reports and performance data</li>
                <li>Device type and operating system version</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">How We Use Your Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and maintain the app's features</li>
                <li>To track and analyze your pet's allergy patterns</li>
                <li>To generate veterinarian reports</li>
                <li>To display relevant allergen alerts based on your location</li>
                <li>To improve app performance and fix bugs</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Data Storage & Security</h2>
              <p>
                Your data is stored securely using Supabase, a trusted cloud database provider. We use industry-standard encryption for data transmission and storage. Your password is hashed and never stored in plain text.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. Your data may be shared only in these circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>With service providers who assist in operating the app (database hosting, analytics)</li>
                <li>If required by law or to protect our legal rights</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Third-Party Services</h2>
              <p>The app uses the following third-party services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Supabase</strong> — database and authentication</li>
                <li><strong>Expo</strong> — app development platform and analytics</li>
                <li><strong>Open Food Facts</strong> — product/ingredient database for barcode scanning</li>
                <li><strong>Open-Meteo</strong> — weather and air quality data</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and associated data</li>
                <li>Export your data</li>
              </ul>
              <p>To exercise these rights, contact us at the email below.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Children's Privacy</h2>
              <p>
                Paw Relief is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">Contact Us</h2>
              <p>
                If you have questions about this privacy policy or your data, contact us at:{' '}
                <a href="mailto:support@pawrelief.app" className="text-blue-600 hover:text-blue-700">
                  support@pawrelief.app
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
