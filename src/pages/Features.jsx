import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const features = [
  {
    id: 'barcode-scanner',
    title: 'Barcode Scanner',
    description: 'Scan pet food and product barcodes to instantly identify ingredients that may trigger your pet\'s allergies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
      </svg>
    ),
    screenshot: '/uploads/screenshot-portrait.png',
    position: 'left-top'
  },
  {
    id: 'ai-insights',
    title: 'AI-Powered Insights',
    description: 'Get intelligent analysis comparing symptoms, triggers, and environmental data to help you and your vet make better decisions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
      </svg>
    ),
    screenshot: '/uploads/screenshot-portrait.png',
    position: 'left-bottom'
  },
  {
    id: 'symptom-tracking',
    title: 'Symptom Tracking',
    description: 'Track and log your pet\'s symptoms over time to identify patterns and correlations with environmental factors.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
    ),
    screenshot: '/uploads/screenshot-portrait.png',
    position: 'left-middle'
  },
  {
    id: 'report-exporting',
    title: 'Vet-Ready Reports',
    description: 'Generate comprehensive, professional reports of your pet\'s health data to share seamlessly with your veterinarian.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
      </svg>
    ),
    screenshot: '/uploads/screenshot-left.png',
    position: 'right-top'
  },
  {
    id: 'alert-system',
    title: 'Smart Alerts',
    description: 'Set reminders for vet appointments, medications, treatments, and more to ensure consistent care for your pet.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
      </svg>
    ),
    screenshot: '/uploads/screenshot-left.png',
    position: 'right-middle'
  },
  {
    id: 'pollen-alerts',
    title: 'Environmental Alerts',
    description: 'Receive real-time pollen and air quality alerts to help you manage your pet\'s outdoor activities and minimize exposure.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
      </svg>
    ),
    screenshot: '/uploads/screenshot-left.png',
    position: 'right-bottom'
  }
];

function Features() {
  const [activeFeature, setActiveFeature] = useState('barcode-scanner');

  const getActiveScreenshot = () => {
    const feature = features.find(f => f.id === activeFeature);
    return feature ? feature.screenshot : features[0].screenshot;
  };

  return (
    <section id="features" className="py-20 bg-white min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Powerful Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to track, manage, and understand your pet's allergies in one comprehensive app.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          {/* Left Features - Desktop Only */}
          <div className="hidden lg:block w-full lg:w-1/3 space-y-12 lg:pr-8 z-10">
            {features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-end text-right cursor-pointer ${activeFeature === feature.id ? 'scale-105' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                animate={{ opacity: activeFeature === feature.id ? 1 : 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold mr-4">{feature.title}</h3>
                  <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow ${activeFeature === feature.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
                    {feature.icon}
                  </div>
                </div>
                <p className="text-gray-600 max-w-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center Phone */}
          <motion.div 
            className="w-full lg:w-1/3 py-12 lg:py-0 z-20 flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <img 
                  src={getActiveScreenshot()} 
                  alt="App Screenshot" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Features - Desktop Only */}
          <div className="hidden lg:block w-full lg:w-1/3 space-y-12 lg:pl-8 z-10">
            {features.slice(3).map((feature, index) => (
              <motion.div
                key={index + 3}
                className={`flex flex-col items-start cursor-pointer ${activeFeature === feature.id ? 'scale-105' : ''}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                animate={{ opacity: activeFeature === feature.id ? 1 : 0.8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-center mb-3">
                  <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow ${activeFeature === feature.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600 max-w-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Features - Below Screenshot */}
        <div className="block lg:hidden mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={`flex flex-col items-center text-center cursor-pointer transition-all duration-300 p-6 rounded-xl ${activeFeature === feature.id ? 'bg-blue-50 scale-105' : 'bg-gray-50 opacity-80 hover:opacity-100'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex flex-col items-center mb-3">
                  <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-3 ${activeFeature === feature.id ? 'text-blue-600' : 'text-gray-600'}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
