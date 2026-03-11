import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { loadMarkdown } from "@/utils/markdown";
import { toast } from "sonner";

export default function Contact() {
  const [content, setContent] = useState<any>({ frontmatter: {} });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    loadMarkdown('/content/contact.md').then(setContent);
  }, []);

  const { frontmatter } = content;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch to schedule your appointment or ask any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-heading">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        {frontmatter.address || "123 Main Street, Madison, WI 53703"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href={`tel:${frontmatter.phone}`} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {frontmatter.phone || "(608) 555-1234"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href={`mailto:${frontmatter.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {frontmatter.email || "info@wisconsindental.com"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <div className="text-muted-foreground whitespace-pre-line text-sm">
                        {frontmatter.hours || "Mon-Fri: 8:00 AM - 5:00 PM"}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary text-white border-none shadow-medium">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    Emergency Care Available
                  </h3>
                  <p className="text-white/90 text-sm">
                    If you have a dental emergency, please call us immediately. We'll do our best to see you the same day.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="font-heading">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-medium max-w-6xl mx-auto">
            <CardHeader>
              <CardTitle className="font-heading">Visit Our Office</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-muted flex items-center justify-center">
                <iframe
                  src={frontmatter.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
