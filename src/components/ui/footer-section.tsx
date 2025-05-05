import { MapPin, Phone, Mail } from "lucide-react"

function Footerdemo() {
  return (
    <footer className="relative border-t bg-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-semibold font-display">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block text-gray-400 transition-colors hover:text-accent">
                Home
              </a>
              <a href="/about" className="block text-gray-400 transition-colors hover:text-accent">
                About Us
              </a>
              <a href="/services" className="block text-gray-400 transition-colors hover:text-accent">
                Services
              </a>
              <a href="/contact" className="block text-gray-400 transition-colors hover:text-accent">
                Contact
              </a>
            </nav>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold font-display">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <p>Serving the greater Wenatchee area</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:5096696764" className="hover:text-accent transition-colors">
                  (509) 669-6764
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:aflm.bookings@gmail.com" className="hover:text-accent transition-colors">
                  aflm.bookings@gmail.com
                </a>
              </div>
            </address>
            
            <div className="mt-6 text-sm text-gray-400">
              <p>Business Hours:</p>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-center md:flex-row">
          <p className="text-sm text-gray-400">
            © 2019-{new Date().getFullYear()} Affordable Lawn & Maintenance. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-gray-400 transition-colors hover:text-accent">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 transition-colors hover:text-accent">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }