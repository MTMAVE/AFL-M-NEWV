import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { HighlighterItem, HighlightGroup, Particles } from "./ui/highlighter";

export function Connect() {
  return (
    <section className="relative mx-auto max-w-5xl px-4">
      <HighlightGroup className="group h-full">
        <div className="group/item h-full" data-aos="fade-down">
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/98">
              <Particles
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color="#2B5329"
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]">
                    <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2">
                      <img
                        src="https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg"
                        alt="Lawn care"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute bottom-12 left-14 rounded-3xl border border-primary/20 bg-primary/10 px-2 py-1.5 text-xs text-primary transition-colors group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                      Lawn Care
                    </div>
                    <div className="absolute left-2 top-20 rounded-3xl border border-primary/20 bg-primary/10 px-2 py-1.5 text-xs text-primary transition-colors group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                      Maintenance
                    </div>
                    <div className="absolute bottom-20 right-1 rounded-3xl border border-primary/20 bg-primary/10 px-2 py-1.5 text-xs text-primary transition-colors group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                      Hauling
                    </div>
                    <div className="absolute right-12 top-10 rounded-3xl border border-primary/20 bg-primary/10 px-2 py-1.5 text-xs text-primary transition-colors group-hover:border-accent/20 group-hover:bg-accent/10 group-hover:text-accent">
                      Landscaping
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl md:text-4xl">
                          Questions about our services?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-center text-gray-600">
                      Get in touch with us today!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link
                        to="/contact"
                        className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-lg transition-colors duration-300"
                      >
                        Contact Us
                      </Link>
                      <a
                        href="tel:5096696764"
                        className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <Phone className="h-4 w-4" />
                        <span>(509) 669-6764</span>
                      </a>
                      <a
                        href="mailto:aflm.bookings@gmail.com"
                        className="flex items-center gap-2 bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Email Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}