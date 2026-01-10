// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Dog Owner',
      image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=3B82F6&color=fff&size=128',
      quote: 'Paw Relief has been a game-changer for us! We finally understand what\'s causing our dog\'s discomfort. The AI insights helped us identify that pollen from our backyard was the main trigger.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Cat Owner',
      image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=3B82F6&color=fff&size=128',
      quote: 'The AI insights are incredible. Our vet was so impressed with the detailed reports. It made diagnosing my cat\'s food allergies so much easier and faster.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Multi-Pet Parent',
      image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=3B82F6&color=fff&size=128',
      quote: 'I love the alerting system. It helps me stay on top of my cat\'s medication schedule and my dog\'s vet appointments. I never miss a dose or appointment anymore!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Dog Owner',
      image: 'https://ui-avatars.com/api/?name=David+Thompson&background=3B82F6&color=fff&size=128',
      quote: 'The barcode scanner is brilliant! I can now check every product before I buy it to make sure it doesn\'t contain ingredients my dog is allergic to. This has saved us so many vet visits.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'Cat Owner',
      image: 'https://ui-avatars.com/api/?name=Lisa+Martinez&background=3B82F6&color=fff&size=128',
      quote: 'As someone who struggled with my cat\'s chronic allergies for years, Paw Relief has given me peace of mind. The symptom tracking helps me see patterns I never noticed before.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Dog Owner',
      image: 'https://ui-avatars.com/api/?name=James+Wilson&background=3B82F6&color=fff&size=128',
      quote: 'The environmental alerts are fantastic. I get notified when pollen counts are high, so I can adjust my dog\'s outdoor time. His symptoms have improved dramatically!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">What Pet Parents Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of pet owners who have transformed their pets' lives with Paw Relief.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
