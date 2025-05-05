import { Phone, Mail, Star } from 'lucide-react';

const DepositBox = () => {
  return (
    <div className="max-w-2xl mx-auto rounded-lg p-6 bg-black/50 backdrop-blur-sm text-white">
      <h2 className="text-center text-white font-medium text-lg mb-6">SCHEDULE YOUR SERVICE</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info Column */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact</h3>
          
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-white" />
            <a 
              href="tel:5096696764" 
              className="text-white hover:text-green-300 transition-colors underline"
            >
              (509) 669-6764
            </a>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="h-5 w-5 text-white" />
            <a 
              href="mailto:aflm.bookings@gmail.com" 
              className="text-white hover:text-green-300 transition-colors underline"
            >
              aflm.bookings@gmail.com
            </a>
          </div>
        </div>
        
        {/* Google Rating Column */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Google Rating</h3>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-sm">Based on 39 reviews</p>
          <a 
            href="https://business.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-white hover:text-green-300 transition-colors underline"
          >
            View our business profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default DepositBox;