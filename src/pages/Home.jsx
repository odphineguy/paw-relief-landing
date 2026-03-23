// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
    <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 lg:pr-16 mb-12 lg:mb-0 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Uncover Your Pet's Allergy Triggers
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-lg leading-relaxed">
              Track symptoms, identify triggers, and manage your pet's allergies better with AI-powered insights and vet-ready reports.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <span className="bg-white/80 text-blue-600 px-10 py-5 rounded-full font-semibold text-lg text-center cursor-default">
                Coming Soon
              </span>
              <a
                href="#features"
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all hover:shadow-2xl transform hover:-translate-y-1 text-center"
              >
                Learn More
              </a>
            </div>

            <div className="space-y-5">
              <div className="flex items-center space-x-4 text-white/90">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">10% of dogs suffer from seasonal allergies</span>
              </div>
              <div className="flex items-center space-x-4 text-white/90">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Save up to $2,300 in lifetime treatment costs</span>
              </div>
              <div className="flex items-center space-x-4 text-white/90">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Early identification prevents chronic discomfort</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            className="w-full lg:w-1/2 z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.div
              className="relative mx-auto flex justify-center"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative" style={{ maxWidth: '500px' }}>
                <img
                  src="/uploads/apple-iphone-15-black-mockup/screenshot-1-portrait.png"
                  alt="Paw Relief App Dashboard"
                  className="w-full h-auto max-w-sm mx-auto rounded-3xl"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    </>
  );
}

export default Home;
