import { useEffect } from 'react';

const PortfolioPage = () => {
  useEffect(() => {
    document.title = 'Portfolio - Affordable Lawn & Maintenance';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio content from existing Portfolio component */}
            {/* Will be expanded in future updates */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;