import { useEffect } from 'react';

const ReviewsPage = () => {
  useEffect(() => {
    document.title = 'Reviews - Affordable Lawn & Maintenance';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Customer Reviews</h1>
          <div className="max-w-6xl mx-auto">
            {/* Reviews content from existing Reviews component */}
            {/* Will be expanded in future updates */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;