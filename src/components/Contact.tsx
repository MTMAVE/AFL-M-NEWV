import { useState } from 'react';

const Contact = () => {
  const [isFormLoading, setIsFormLoading] = useState(true);
  
  // Simulate form loading
  setTimeout(() => {
    setIsFormLoading(false);
  }, 1500);
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Have questions or ready to schedule service? Reach out to us and we'll get back to you promptly.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto relative">
          {isFormLoading ? (
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
              <p className="ml-4 text-gray-600">Loading contact form...</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Needed</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="mowing">Lawn Mowing</option>
                  <option value="edging">Edging & Trimming</option>
                  <option value="fertilization">Fertilization</option>
                  <option value="cleanup">Seasonal Cleanup</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your needs or provide additional details..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 font-medium"
              >
                Send Message
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                We typically respond within 1-2 business days.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;