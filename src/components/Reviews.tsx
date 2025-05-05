import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  content: string;
}

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="font-bold text-gray-800">{review.name}</p>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <div className="relative mb-2">
        <Quote className="h-8 w-8 text-green-100 absolute -top-2 -left-2" />
        <p className="text-gray-700 relative z-10 pl-4">{review.content}</p>
      </div>
      
      <div className="mt-auto pt-4">
        <a 
          href="https://www.google.com/maps" 
          className="text-sm text-green-600 hover:text-green-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google
        </a>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  
  useEffect(() => {
    // Simulated reviews data
    const reviewsData: Review[] = [
      {
        id: 1,
        name: "Sarah Johnson",
        rating: 5,
        date: "August 15, 2024",
        content: "Affordable Lawn & Maintenance has been taking care of my yard for the past 2 years and I couldn't be happier. They're always on time, professional, and my lawn has never looked better!"
      },
      {
        id: 2,
        name: "Michael Rodriguez",
        rating: 5,
        date: "July 22, 2024",
        content: "I hired them for a spring cleanup and lawn renovation. The team was knowledgeable and worked efficiently. My lawn went from the worst on the block to the envy of the neighborhood!"
      },
      {
        id: 3,
        name: "Jennifer Adams",
        rating: 4,
        date: "June 10, 2024",
        content: "Great service at a reasonable price. The team is always responsive when I have questions or special requests. Would recommend to anyone looking for reliable lawn care."
      }
    ];
    
    setReviews(reviewsData);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-green-700 mr-2">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">Based on 39 reviews</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/maps" 
            className="inline-block text-green-600 hover:text-green-800 font-medium underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;