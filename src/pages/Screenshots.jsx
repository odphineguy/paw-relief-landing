// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Marquee } from '../components/Marquee';

function Screenshots() {
  const screenshots = [
    {
      title: 'Dashboard',
      image: '/uploads/screenshot-portrait.png'
    },
    {
      title: 'Allergen Alerts',
      image: '/uploads/screenshot-left.png'
    },
    {
      title: 'Symptom Tracking',
      image: '/uploads/screenshot-portrait.png'
    },
    {
      title: 'Environmental Data',
      image: '/uploads/screenshot-left.png'
    }
  ];

  return (
    <section id="screenshots" className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">See Paw Relief in Action</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how Paw Relief makes tracking and managing your pet's allergies simple and effective.
          </p>
        </motion.div>

        {/* Marquee with fade effect */}
        <div className="relative">
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none"></div>

          <Marquee className="py-6" pauseOnHover={true} repeat={3}>
            {screenshots.map((screenshot) => (
              <div key={screenshot.title} className="mx-4 inline-block">
                <div className="w-full h-[520px] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{screenshot.title}</h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Screenshots;
