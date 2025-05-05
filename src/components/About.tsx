import { motion } from 'framer-motion';
import { Award, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      {/* Hero Section */}
      <div className="relative bg-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            About Affordable Lawn & Maintenance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Delivering dependable lawn care and hauling solutions with integrity and care since 2019.
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2019, Affordable Lawn & Maintenance began with a simple mission: to provide quality lawn care services at reasonable prices. What started as a small operation has grown into a trusted name in our community.
            </p>
            <p className="text-gray-600">
              We take pride in our work and believe in building lasting relationships with our clients through reliability, transparency, and exceptional service. Our team's dedication to quality and attention to detail has earned us a reputation as one of the most dependable lawn care services in the area.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <img 
              src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg" 
              alt="Team at work" 
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Trusted Professionals</h3>
              <p className="text-gray-600">Years of experience and dedication to quality service make us your reliable choice.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Timely Service</h3>
              <p className="text-gray-600">We respect your time and always aim to complete projects on schedule.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We stand behind our work with a 100% guarantee.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Lawn?</h2>
          <p className="text-gray-600 mb-8">Get in touch today for a free quote and experience the difference of working with professionals who care.</p>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Get My Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;