import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, Truck, Touchpad as Couch } from 'lucide-react';
import JotformEmbed from 'react-jotform-embed';

interface Service {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
  pricing: {
    base: string;
    details: string[];
  };
  features: string[];
}

const services: Service[] = [
  {
    id: 'lawn-mowing',
    icon: <Scissors className="w-8 h-8" />,
    name: 'Lawn Mowing',
    description: 'Professional mowing services to keep your lawn healthy and beautiful.',
    pricing: {
      base: 'Starting at $45/visit',
      details: [
        'Up to ¼ acre: $45-65',
        '¼ to ½ acre: $65-95',
        '½ to 1 acre: $95-145',
        'Custom pricing for larger properties'
      ]
    },
    features: [
      'Weekly or bi-weekly service plans available',
      'Precision cutting height adjustment',
      'Edge trimming included',
      'Clipping removal and cleanup',
      'Seasonal maintenance recommendations'
    ]
  },
  {
    id: 'lawn-maintenance',
    icon: <Ruler className="w-8 h-8" />,
    name: 'Full Lawn Maintenance',
    description: 'Comprehensive lawn care package for year-round beauty.',
    pricing: {
      base: 'Custom packages from $200/month',
      details: [
        'Basic Package: $200-300/month',
        'Premium Package: $300-450/month',
        'Estate Package: Custom pricing',
        'Seasonal contracts available'
      ]
    },
    features: [
      'Regular mowing and edging',
      'Seasonal fertilization',
      'Weed control treatment',
      'Leaf and debris removal',
      'Annual aeration service included'
    ]
  },
  {
    id: 'debris-hauling',
    icon: <Truck className="w-8 h-8" />,
    name: 'Debris Hauling',
    description: 'Efficient removal of yard waste and debris.',
    pricing: {
      base: 'From $75 per load',
      details: [
        'Small load (up to 1 ton): $75',
        'Medium load (1-2 tons): $125',
        'Large load (2-3 tons): $175',
        'Multiple load discounts available'
      ]
    },
    features: [
      'Same-day service available',
      'Green waste disposal included',
      'Construction debris removal',
      'Complete yard cleanup',
      'Environmentally responsible disposal'
    ]
  },
  {
    id: 'furniture-removal',
    icon: <Couch className="w-8 h-8" />,
    name: 'Furniture Removal',
    description: 'Professional removal of unwanted furniture and large items.',
    pricing: {
      base: 'Starting at $75 per item',
      details: [
        'Single item: $75',
        '2-3 items: $125',
        '4+ items: Custom quote',
        'Whole house clearance available'
      ]
    },
    features: [
      'Safe and efficient removal',
      'Multiple item discounts',
      'Donation service available',
      'Indoor and outdoor items',
      'Flexible scheduling options'
    ]
  }
];

const ServicesPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Services - Affordable Lawn & Maintenance';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-charcoal mb-8 text-center font-display">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Professional lawn care and maintenance services at competitive rates. 
            Get your free, personalized quote today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal">{service.name}</h3>
                      <p className="text-accent font-medium">{service.pricing.base}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Pricing Guide:</h4>
                    <ul className="space-y-1">
                      {service.pricing.details.map((detail, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Service Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button
                    onClick={() => {
                      setSelectedService(service.id);
                      setShowForm(true);
                    }}
                    className="w-full bg-accent hover:bg-primary text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Request Free Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-charcoal font-display">
                Request Free Quote - {services.find(s => s.id === selectedService)?.name}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <Suspense fallback={
              <div className="flex items-center justify-center h-96">
                <div className="w-12 h-12 border-4 border-green-200 border-t-accent rounded-full animate-spin"></div>
              </div>
            }>
              <JotformEmbed src="https://form.jotform.com/251179393419162" />
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;