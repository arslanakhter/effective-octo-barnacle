import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { loadMarkdown } from "@/utils/markdown";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calendar, CheckCircle2 } from "lucide-react";

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

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadMarkdown(`/content/services/${slug}.md`).then((data) => {
        setService(data);
        setLoading(false);
      });
    }
  }, [slug]);

  const parseFAQs = (content: string) => {
    const faqRegex = /##\s*Frequently Asked Questions\s*([\s\S]*?)(?=\n##\s|\n---\s|$)/i;
    const match = content.match(faqRegex);
    
    if (!match) return { faqs: [], contentWithoutFAQs: content };
    
    const faqSection = match[1];
    const contentWithoutFAQs = content.replace(match[0], '');
    
    const qaRegex = /\*\*Q:\s*(.*?)\*\*\s*\n\s*A:\s*([\s\S]*?)(?=\n\*\*Q:|$)/g;
    const faqs = [];
    let qaMatch;
    
    while ((qaMatch = qaRegex.exec(faqSection)) !== null) {
      faqs.push({
        question: qaMatch[1].trim(),
        answer: qaMatch[2].trim()
      });
    }
    
    return { faqs, contentWithoutFAQs };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  if (!service || !service.frontmatter.title) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  const serviceImage = slug ? imageMap[slug] : null;
  const { faqs, contentWithoutFAQs } = service ? parseFAQs(service.content) : { faqs: [], contentWithoutFAQs: '' };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {serviceImage && (
            <img 
              src={serviceImage} 
              alt={service.frontmatter.title}
              className="w-full h-full object-cover opacity-70"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center max-w-6xl">
          <Link to="/services" className="mb-8 inline-block">
            <Button variant="ghost" className="gap-2 hover:gap-3 transition-all">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Professional Dental Care</span>
          </div>
          <h1 className="font-heading text-6xl font-bold mb-6 leading-tight">
            {service.frontmatter.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {service.frontmatter.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="shadow-elegant border-border/50">
            <CardContent className="p-12">
              <div className="prose prose-lg max-w-none dark:prose-invert 
                prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-0
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-b prose-h2:pb-4 prose-h2:border-border/40
                prose-h3:text-2xl prose-h3:mb-5 prose-h3:mt-8 prose-h3:font-semibold
                prose-h4:text-xl prose-h4:mb-4 prose-h4:mt-6 prose-h4:font-semibold
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                prose-strong:text-foreground prose-strong:font-semibold
                prose-li:text-muted-foreground prose-li:my-2 prose-li:leading-relaxed
                prose-ul:my-6 prose-ul:space-y-2 prose-ul:pl-6
                prose-ol:my-6 prose-ol:space-y-3 prose-ol:pl-6
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic
                first:prose-h1:mt-0 first:prose-h2:mt-0">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {contentWithoutFAQs}
                </ReactMarkdown>
              </div>

              {/* FAQs Section */}
              {faqs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-border/30">
                  <h2 className="font-heading text-3xl font-bold mb-8 text-foreground">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`faq-${index}`}
                        className="border border-border/50 rounded-lg px-6 shadow-soft hover:shadow-elegant transition-all duration-300"
                      >
                        <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CTA Section */}
          <Card className="mt-12 overflow-hidden shadow-glow border-0">
            <CardContent className="p-0">
              <div className="bg-gradient-primary text-white p-12 text-center">
                <h3 className="font-heading text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                  Schedule an appointment to learn more about {service.frontmatter.title.toLowerCase()} and how it can benefit you
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform shadow-elegant">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Appointment
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
