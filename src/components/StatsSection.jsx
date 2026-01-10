// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Understanding Pet Allergies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pet allergies are a growing concern, affecting millions of pets and their families. Early identification and tracking can make all the difference.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-5xl font-bold text-blue-600 mb-3">10%</h3>
            <p className="text-gray-700 font-medium">of dogs & cats suffer from seasonal allergies</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-5xl font-bold text-blue-600 mb-3">42%</h3>
            <p className="text-gray-700 font-medium">increase in allergy claims - now #1 pet insurance claim</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-5xl font-bold text-blue-600 mb-3">$2,300</h3>
            <p className="text-gray-700 font-medium">average lifetime treatment costs for dogs</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow text-center transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-5xl font-bold text-blue-600 mb-3">$800+</h3>
            <p className="text-gray-700 font-medium">cost of professional allergy testing</p>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            <strong>Paw Relief</strong> helps you identify patterns at home, enabling preventive treatment and potentially avoiding symptoms entirely. Quality of life improves significantly for both pets and owners with proper allergy management.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default StatsSection;
