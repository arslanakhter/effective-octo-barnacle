import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="font-heading font-bold text-lg">Wisconsin Dental</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Compassionate care, beautiful smiles. Your trusted dental partner in Wisconsin.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/patient-info" className="text-muted-foreground hover:text-primary transition-colors">Patient Info</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">123 Main Street<br />Madison, WI 53703</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:6085551234" className="text-muted-foreground hover:text-primary transition-colors">(608) 555-1234</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@wisconsindental.com" className="text-muted-foreground hover:text-primary transition-colors">info@wisconsindental.com</a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Office Hours</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Mon-Thu: 8:00 AM - 6:00 PM<br />
              Friday: 8:00 AM - 3:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wisconsin Family Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
