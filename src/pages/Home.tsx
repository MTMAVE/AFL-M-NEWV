import { Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/AnimatedText';
import { Connect } from '../components/Connect';

const HomePage = () => {
  useEffect(() => {
    const vid = document.getElementById('hero-video') as HTMLVideoElement;
    vid?.play().catch(() => console.warn('Unable to autoplay video'));
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-900 to-green-700 overflow-hidden">
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-green-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          </div>
        }>
          <video
            id="hero-video"
            className="absolute inset-0 w-full h-full object-cover z-0"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
          >
            <source
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Suspense>
        
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight font-playfair">
              Affordable Lawn & Maintenance
            </h1>
            <div className="h-20 mb-8">
              <AnimatedText
                words={[
                  "Reliable",
                  "Efficient",
                  "Professional",
                  "Trusted",
                  "Effective"
                ]}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#EF6C00]"
                interval={3000}
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Appointment
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium text-lg"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full mt-8">
          <Connect />
        </div>
      </section>
    </>
  );
};

export default HomePage;