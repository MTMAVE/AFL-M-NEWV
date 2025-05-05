import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, Truck, Touchpad as Couch, ChevronDown, ChevronUp } from 'lucide-react';
import JotformEmbed from 'react-jotform-embed';

interface Service {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  details: string[];
  startingPrice?: string;
}

const services: Service[] = [
  {
    id: 'lawn-mowing',
    icon: <Scissors className="w-8 h-8" />,
    name: 'Lawn Mowing',
    description: 'Professional mowing services to keep your lawn healthy and beautiful.',
    startingPrice: '$45',
    details: [
      'Weekly or bi-weekly service available',
      'Precise cutting height for optimal grass health',
      'Edge trimming included',
      'Clipping removal and cleanup',
      'Seasonal maintenance recommendations'
    ]
  },
  {
    id: 'edging-trimming',
    icon: <Ruler className="w-8 h-8" />,
    name: 'Edging & Trimming',
    description: 'Detailed edge work and trimming for a manicured look.',
    startingPrice: '$35',
    details: [
      'Clean definition between lawn and hardscapes',
      'Precise trimming around obstacles',
      'Sidewalk and driveway edging',
      'Weed removal from edges',
      'Debris cleanup included'
    ]
  },
  {
    id: 'debris-hauling',
    icon: <Truck className="w-8 h-8" />,
    name: 'Debris Hauling',
    description: 'Efficient removal of yard waste and debris.',
    details: [
      'Same-day removal service',
      'Green waste disposal',
      'Construction debris removal',
      'Yard cleanup services',
      'Environmentally responsible disposal'
    ]
  },
  {
    id: 'furniture-removal',
    icon: <Couch className="w-8 h-8" />,
    name: 'Furniture Removal',
    description: 'Professional removal of unwanted furniture and large items.',
    details: [
      'Safe furniture removal',
      'Multiple item discounts',
      'Proper disposal/donation',
      'Indoor and outdoor items',
      'Flexible scheduling available'
    ]
  }
];

const Services = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="services" className="py-16 bg-white">
      {/* Intro Banner */}
      <div className="bg-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Professional lawn care and hauling services tailored to your needs
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                      {service.startingPrice && (
                        <p className="text-green-600 font-medium">Starting at {service.startingPrice}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {expandedService === service.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 border-t pt-4"
                  >
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="text-gray-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors"
                >
                  Schedule This Service
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Schedule Service</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <Suspense fallback={
              <div className="flex items-center justify-center h-96">
                <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              </div>
            }>
              <JotformEmbed src="https://form.jotform.com/your-form-id" />
            </Suspense>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;