import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Support() {
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

          <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                Have questions or need help with Paw Relief? We're here to assist you.
              </p>
              <a
                href="mailto:support@pawrelief.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@pawrelief.com
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-4">
                Check out our Help Center for answers to common questions.
              </p>
              <Link
                to="/#help-center"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Visit Help Center
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Account Deletion</h2>
              <p className="text-gray-600 mb-4">
                To request deletion of your account and associated data, please email us at{' '}
                <a href="mailto:support@pawrelief.com" className="text-blue-600 hover:text-blue-700">
                  support@pawrelief.com
                </a>
                {' '}with the subject line "Account Deletion Request".
              </p>
              <p className="text-gray-500 text-sm">
                We will process your request within 30 days.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">App Information</h2>
              <ul className="text-gray-600 space-y-2">
                <li><strong>App Name:</strong> Paw Relief</li>
                <li><strong>Developer:</strong> Paw Relief Team</li>
                <li><strong>Support Email:</strong> support@pawrelief.com</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Support;
