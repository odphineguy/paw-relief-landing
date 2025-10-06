// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Pricing() {
  const pricingPlans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: '7 days',
      description: 'Try all features risk-free',
      features: [
        'Full access to all features',
        'Unlimited symptom tracking',
        'AI-powered insights',
        'Barcode scanner',
        'Report generation',
        'Smart alerts',
        'Environmental data',
        'No credit card required'
      ],
      cta: 'Start Free Trial',
      highlighted: false,
      badge: 'Most Popular'
    },
    {
      name: 'Standard',
      price: '$9.99',
      period: 'per month',
      description: 'Perfect for single pet owners',
      features: [
        'Track up to 2 pets',
        'Unlimited symptom tracking',
        'AI-powered insights',
        'Barcode scanner',
        'Basic report generation',
        'Smart alerts & reminders',
        'Environmental alerts',
        'Email support'
      ],
      cta: 'Choose Standard',
      highlighted: false
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'per month',
      description: 'Best for multi-pet families',
      features: [
        'Track unlimited pets',
        'Advanced AI insights',
        'Priority barcode database',
        'Custom report templates',
        'Advanced analytics',
        'Priority support',
        'Vet collaboration tools',
        'Export to multiple formats',
        'Family sharing (up to 5 users)'
      ],
      cta: 'Go Premium',
      highlighted: true,
      badge: 'Best Value'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Flexible Plans for Every Pet Parent</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Choose the plan that works best for you and your furry friends. All plans include a 7-day free trial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl p-8 relative ${plan.highlighted ? 'ring-4 ring-yellow-400 scale-105' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#download"
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 text-blue-600 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-white/90 text-lg">
            All plans include a 7-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
