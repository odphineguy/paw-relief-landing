import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is Paw Relief?',
    answer: 'Paw Relief is a comprehensive pet allergy tracking app that helps you identify triggers, manage symptoms, and make better decisions for your pet\'s health. We use AI to analyze patterns and provide actionable insights.'
  },
  {
    question: 'How does the barcode scanner work?',
    answer: 'Simply scan the barcode on any pet food or product, and Paw Relief will instantly show you the ingredients. If any ingredients match your pet\'s known allergens, you\'ll receive an alert before making a purchase.'
  },
  {
    question: 'Can I track multiple pets?',
    answer: 'Yes! The Free plan allows you to track 1 pet, while the Premium plan ($9.99/month) supports up to 4 pets. Each pet has its own profile with individualized tracking and insights.'
  },
  {
    question: 'How accurate are the AI insights?',
    answer: 'Our AI analyzes patterns in your pet\'s symptoms, environmental data, and triggers to identify correlations. While highly accurate, we always recommend consulting with your veterinarian for medical decisions.'
  },
  {
    question: 'Can I share reports with my vet?',
    answer: 'Absolutely! Paw Relief generates professional, comprehensive reports that you can export in multiple formats (PDF, CSV) and share directly with your veterinarian via email.'
  },
  {
    question: 'What environmental data does the app track?',
    answer: 'Paw Relief tracks pollen levels, air quality, temperature, humidity, and other environmental factors in your area that may affect your pet\'s allergies. You\'ll receive alerts when conditions are unfavorable.'
  },
  {
    question: 'Is my pet\'s data secure?',
    answer: 'Yes, security is our top priority. We use industry-standard encryption to protect your data, and we never share your pet\'s information with third parties without your explicit consent.'
  },
  {
    question: 'How much does Paw Relief cost?',
    answer: 'Paw Relief offers a Free plan with basic features for 1 pet, or Premium ($9.99/month) which includes up to 4 pets, AI-powered insights & reports, and shareable Vet reports.'
  }
];

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="border-b border-gray-200 py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button 
        className="w-full flex justify-between items-center text-left hover:text-blue-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="flex-shrink-0"
        >
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
}

function HelpCenter() {
  return (
    <section id="help-center" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We're here to help. Find answers to common questions about Paw Relief.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="mailto:support@pawrelief.com" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HelpCenter;
