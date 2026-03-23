// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function DownloadSection() {
  return (
    <section id="download" className="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 py-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/10 animate-pulse"></div>
        <div className="absolute left-40 top-10 w-64 h-64 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/3 top-1/4 w-40 h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Paw Relief Today
            </h2>
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              Start free and give your pet the relief they deserve. Available on iOS and Android.
            </p>
            
            <p className="text-white/80 text-lg font-medium">
              Coming Soon to iOS and Android
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
