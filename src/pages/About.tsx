import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users, Leaf, Target } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Affordable Lawn & Maintenance';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
            alt="Lawn care background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair mb-6">Our Story</h1>
            <p className="text-xl text-green-100">
              Since 2019, we've been transforming landscapes and exceeding expectations
              with our commitment to quality and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To provide exceptional lawn care and maintenance services that enhance the beauty
                and value of our clients' properties while maintaining the highest standards of
                professionalism and environmental responsibility.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold">Customer Focus</h3>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Leaf className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold">Eco-Friendly</h3>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Target className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold">Excellence</h3>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <Shield className="h-8 w-8 text-accent mb-2" />
                  <h3 className="font-semibold">Reliability</h3>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <img
                src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg"
                alt="Professional lawn care"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-2xl font-playfair">
                  "Creating beautiful outdoor spaces that bring joy to our community."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-playfair mb-6">Ready to Transform Your Landscape?</h2>
            <p className="text-xl text-green-100 mb-8">
              Let's work together to create the outdoor space you've always dreamed of.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-green-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;