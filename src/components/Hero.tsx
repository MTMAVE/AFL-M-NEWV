import { useState, useEffect, Suspense } from 'react';
import { ChevronDown } from 'lucide-react';

// Video placeholder while loading
const VideoPlaceholder = () => (
  <div className="absolute inset-0 bg-green-900/50 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
  </div>
);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={<VideoPlaceholder />}>
        {isLoaded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
            onError={(e) => {
              // Fallback to image if video fails to load
              const target = e.target as HTMLVideoElement;
              target.style.display = 'none';
              document.getElementById('video-fallback')!.style.display = 'block';
            }}
          >
            <source
              src="https://player.vimeo.com/external/371579097.sd.mp4?s=fc6c1221eb49eb7f623430b5554e170553781622&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
        
        <div 
          id="video-fallback" 
          className="absolute inset-0 bg-cover bg-center hidden"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg)' }}
        ></div>
      </Suspense>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
          Affordable Lawn & Maintenance
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8">
          Expert maintenance & landscaping services you can trust
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg shadow-lg transition-all duration-300 font-medium text-lg"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get a Free Quote
          </a>
          <button 
            onClick={scrollToServices}
            className="border-2 border-white/80 text-white py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-lg flex items-center"
          >
            View Our Services <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;