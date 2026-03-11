import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { loadAllServices } from "@/utils/markdown";
import { ArrowRight } from "lucide-react";

import rootCanalImg from "@/assets/service-root-canal.jpg";
import crownsBridgesImg from "@/assets/service-crowns-bridges.jpg";
import nightguardImg from "@/assets/service-nightguard.jpg";
import compositeFillingImg from "@/assets/service-composite-filling.jpg";
import implantImg from "@/assets/service-implant.jpg";
import extractionsImg from "@/assets/service-extractions.jpg";
import veneersImg from "@/assets/service-veneers.jpg";
import examCleaningImg from "@/assets/service-exam-cleaning.jpg";

const imageMap: { [key: string]: string } = {
  'root-canal': rootCanalImg,
  'crowns-bridges': crownsBridgesImg,
  'nightguard': nightguardImg,
  'composite-filling': compositeFillingImg,
  'implant-dentistry': implantImg,
  'extractions': extractionsImg,
  'veneers': veneersImg,
  'exam-cleaning': examCleaningImg
};

export default function Services() {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    loadAllServices().then(setServices);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Our Dental Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive dental care solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const serviceImage = imageMap[service.slug];
                
                return (
                  <Card 
                    key={index} 
                    className="shadow-soft hover:shadow-glow transition-all duration-300 overflow-hidden group border-border/50 hover:border-primary/20 bg-card hover:bg-card/80"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-gradient-subtle relative">
                      <img 
                        src={serviceImage} 
                        alt={service.frontmatter.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader className="space-y-4 pb-4">
                      <div className="space-y-2">
                        <CardTitle className="font-heading text-2xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
                          {service.frontmatter.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed text-muted-foreground">
                          {service.frontmatter.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 pb-6">
                      <Link to={`/services/${service.slug}`} className="block">
                        <Button variant="default" className="w-full group/btn shadow-soft hover:shadow-medium">
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-primary text-white border-none shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h2 className="font-heading text-4xl font-bold mb-4">
                Not Sure Which Service You Need?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Schedule a consultation and we'll help determine the best treatment plan for you
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                  Schedule Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
