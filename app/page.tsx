import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Star, Smile, Sparkles, Shield, Users, Award } from 'lucide-react'

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive family dental care including cleanings, exams, and preventive treatments',
    icon: Shield,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with teeth whitening, veneers, and smile makeovers',
    icon: Sparkles,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent tooth replacement solutions with natural-looking results',
    icon: Smile,
  },
]

const features = [
  'Board-Certified Dentists',
  'Advanced Technology',
  'Comfortable Facilities',
  'Flexible Scheduling',
  'Insurance Accepted',
  'Emergency Care',
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    content: 'Dr. Johnson and her team made me feel so comfortable. My smile has never looked better!',
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    content: 'Professional, caring, and thorough. I recommend them to everyone.',
  },
  {
    name: 'Emily Martinez',
    role: 'Patient',
    content: 'Best dental experience I\'ve ever had. The whole team is amazing!',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary pointer-events-none" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Your Smile, <span className="text-primary">Our Priority</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Excellence in dental care with a personal touch. Experience compassionate treatment in our modern facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="text-base">
                  Schedule Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Wisconsin Dental?</h2>
              <p className="text-lg text-muted-foreground">
                Excellence backed by experience and care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary transition-colors"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dental solutions for the whole family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="hover:shadow-md transition-all duration-300 border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <Link href="/services">
                      <Button variant="ghost" className="group p-0 h-auto">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from our satisfied patients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready for a Beautiful Smile?</h2>
            <p className="text-lg opacity-90">
              Schedule your appointment today and experience the difference professional dental care can make.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-base">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
