import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Timeline } from '../components/ui/timeline';

const ShowcasePage = () => {
  useEffect(() => {
    document.title = 'Our Journey - Affordable Lawn & Maintenance';
  }, []);

  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-normal mb-8">
            Expanding our services and team to better serve the Wenatchee community
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
              alt="Professional lawn care"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg"
              alt="Garden maintenance"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/2132164/pexels-photo-2132164.jpeg"
              alt="Landscaping project"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg"
              alt="Yard maintenance"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-normal mb-8">
            Added new services including debris hauling and seasonal cleanups to meet growing customer demands
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/7061368/pexels-photo-7061368.jpeg"
              alt="Debris hauling"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/3048854/pexels-photo-3048854.jpeg"
              alt="Seasonal cleanup"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-normal mb-4">
            Founded Affordable Lawn & Maintenance with a commitment to quality service
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-sm">
              ✓ Established core lawn maintenance services
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-sm">
              ✓ Built our first loyal customer base
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-sm">
              ✓ Invested in professional equipment
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-sm">
              ✓ Developed service standards
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
              alt="First project"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg"
              alt="Early days"
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Journey</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted name in lawn care and maintenance. Here's how we've grown and evolved over the years.
            </p>
          </motion.div>
        </div>
      </section>

      <Timeline data={timelineData} />
    </div>
  );
};

export default ShowcasePage;