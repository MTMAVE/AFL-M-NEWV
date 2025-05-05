import { useState, useEffect, Suspense } from 'react';

interface PortfolioImage {
  url: string;
  alt: string;
}

// Placeholder component while images are loading
const ImagePlaceholder = () => (
  <div className="bg-gray-200 rounded-lg aspect-[4/3] animate-pulse flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
  </div>
);

// Lazy loaded image component
const LazyImage: React.FC<{ image: PortfolioImage }> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-md group">
      {!isLoaded && <ImagePlaceholder />}
      <img
        src={image.url}
        alt={image.alt}
        loading="lazy"
        className={`w-full aspect-[4/3] object-cover transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={(e) => {
          // Fallback for failed images
          const target = e.target as HTMLImageElement;
          target.src = 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg';
        }}
      />
      <div className="absolute inset-0 bg-green-800/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white font-medium text-center px-4">{image.alt}</p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [images, setImages] = useState<PortfolioImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate fetching images
  useEffect(() => {
    // These are placeholder lawn and landscaping images
    const portfolioImages: PortfolioImage[] = [
      { url: 'https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg', alt: 'Freshly Cut Lawn' },
      { url: 'https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg', alt: 'Garden Landscaping' },
      { url: 'https://images.pexels.com/photos/2132164/pexels-photo-2132164.jpeg', alt: 'Backyard Transformation' },
      { url: 'https://images.pexels.com/photos/6508455/pexels-photo-6508455.jpeg', alt: 'Residential Lawn Care' },
      { url: 'https://images.pexels.com/photos/7061368/pexels-photo-7061368.jpeg', alt: 'Commercial Property Maintenance' },
      { url: 'https://images.pexels.com/photos/3048854/pexels-photo-3048854.jpeg', alt: 'Seasonal Cleanup' }
    ];
    
    setTimeout(() => {
      setImages(portfolioImages);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Browse through our portfolio to see examples of our quality workmanship and attention to detail.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Suspense fallback={<div className="text-center py-10">Loading gallery...</div>}>
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <ImagePlaceholder key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <LazyImage key={index} image={image} />
                ))}
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;