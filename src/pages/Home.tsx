import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Star, Stethoscope, Sparkles, Wrench } from "lucide-react";
import { loadMarkdown } from "@/utils/markdown";
import ReactMarkdown from "react-markdown";
import heroImage from "@/assets/hero-clinic.jpg";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceCosmetic from "@/assets/service-cosmetic.jpg";
import officeInterior from "@/assets/office-interior.jpg";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive care for your whole family",
    icon: Stethoscope,
    link: "/services#general-dentistry"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with confidence",
    icon: Sparkles,
    link: "/services#cosmetic-dentistry"
  },
  {
    title: "Dental Implants",
    description: "Permanent solutions for missing teeth",
    icon: Wrench,
    link: "/services#dental-implants"
  }
];

const features = [
  "Experienced, Board-Certified Dentists",
  "State-of-the-Art Technology",
  "Comfortable, Modern Facilities",
  "Flexible Scheduling Options",
  "Most Insurance Plans Accepted",
  "Emergency Care Available"
];

export default function Home() {
  const [content, setContent] = useState<any>({ frontmatter: {}, content: '' });

  useEffect(() => {
    loadMarkdown('/content/home.md').then(setContent);
  }, []);

  const { frontmatter } = content;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {frontmatter.title || "Welcome to Wisconsin Family Dental"}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
            {frontmatter.heroText || "Compassionate Care, Beautiful Smiles"}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 shadow-glow animate-fade-in">
              {frontmatter.ctaText || "Schedule Appointment"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Why Choose Wisconsin Dental?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence in dental care with a personal touch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-soft hover:shadow-medium transition-all"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button variant="ghost" className="group-hover:text-primary">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from real people
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Outstanding experience! The staff is incredibly friendly and professional. Dr. Smith took the time to explain everything and made me feel completely comfortable."
                </p>
                <p className="font-semibold">- Sarah M.</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "I've been going to Wisconsin Family Dental for 5 years now. They're always on time, thorough, and genuinely care about their patients."
                </p>
                <p className="font-semibold">- James T.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-none shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-4xl font-bold mb-4">
                Ready to Transform Your Smile?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Schedule your appointment today and experience the difference
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="shadow-medium">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
