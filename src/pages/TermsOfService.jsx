import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function TermsOfService() {
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
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-gray-500 mb-8">Last updated: March 2026</p>

            <div className="bg-white rounded-xl p-8 shadow-sm space-y-6">
              <p>
                Welcome to Paw Relief. By downloading, installing, or using the Paw Relief application ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">1. Description of Service</h2>
              <p>
                Paw Relief is a pet health tracking application that allows users to log symptoms, track potential allergy triggers, manage medications, and generate reports. The App may use artificial intelligence to provide insights and analysis based on the data you enter.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">2. Not a Veterinary Service</h2>
              <p>
                Paw Relief is not a substitute for professional veterinary care. The App does not diagnose, treat, or cure any condition. AI-generated insights are for informational purposes only and should not be relied upon as medical advice. Always consult a licensed veterinarian for your pet's health concerns.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information when creating an account and to update your information as needed. You are responsible for all activity that occurs under your account.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">4. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
                <li>Interfere with or disrupt the App's functionality or servers</li>
                <li>Upload malicious content or attempt to gain unauthorized access</li>
                <li>Use the App to collect data about other users without consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">5. Subscriptions and Payments</h2>
              <p>
                Paw Relief offers both free and premium subscription tiers. Premium subscriptions are billed through Apple's App Store using in-app purchases. All payments are processed by Apple and are subject to Apple's terms and conditions. You may cancel your subscription at any time through your device's subscription settings.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">6. Your Data</h2>
              <p>
                You retain ownership of all data you enter into the App, including pet profiles, symptom logs, and medication records. We use your data solely to provide and improve the App's features. For full details on how we handle your data, please refer to our{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">7. AI-Powered Features</h2>
              <p>
                Certain features of the App use third-party artificial intelligence services to analyze your pet's data and generate insights, reports, and recommendations. By using these features, you acknowledge that your pet's health data may be sent to third-party AI providers for processing. No personally identifiable information about you is included in these requests.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">8. Intellectual Property</h2>
              <p>
                The App, including its design, features, code, and content, is owned by Paw Relief and protected by applicable intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">9. Disclaimer of Warranties</h2>
              <p>
                The App is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the App will be uninterrupted, error-free, or free of harmful components. We make no guarantees regarding the accuracy or reliability of any AI-generated content or analysis.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">10. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Paw Relief and its owner shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App. This includes, without limitation, any damages related to decisions made based on the App's AI-generated insights or any harm to your pet.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">11. Account Termination</h2>
              <p>
                You may delete your account at any time by contacting us at{' '}
                <a href="mailto:support@pawrelief.app" className="text-blue-600 hover:text-blue-700">support@pawrelief.app</a>.
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">12. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of the App after any changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">13. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8">14. Contact</h2>
              <p>
                If you have questions about these Terms, contact us at:{' '}
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

export default TermsOfService;
