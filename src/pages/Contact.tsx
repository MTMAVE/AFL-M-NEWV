import { useEffect, Suspense } from 'react';
import JotformEmbed from 'react-jotform-embed';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact - Affordable Lawn & Maintenance';
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-charcoal mb-8 text-center font-display">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-charcoal mb-4 font-display">Get In Touch</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about our services or ready to schedule? Reach out to us and we'll get back to you promptly.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="tel:5096696764"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    (509) 669-6764
                  </a>
                  
                  <a 
                    href="mailto:aflm.bookings@gmail.com"
                    className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    aflm.bookings@gmail.com
                  </a>
                  
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin className="h-5 w-5" />
                    <span>Serving the greater Wenatchee area</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-charcoal mb-4 font-display">Business Hours</h2>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-charcoal mb-6 font-display">Schedule Service</h2>
              <Suspense fallback={
                <div className="flex items-center justify-center h-96">
                  <div className="w-12 h-12 border-4 border-green-200 border-t-accent rounded-full animate-spin"></div>
                </div>
              }>
                <JotformEmbed src="https://form.jotform.com/251179393419162" />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;