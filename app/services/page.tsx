import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'General Dentistry',
    slug: 'general',
    description: 'Comprehensive family dental care including cleanings, exams, and preventive treatments',
    details: 'Regular check-ups, professional cleanings, cavity fillings, and preventive care.',
  },
  {
    title: 'Cosmetic Dentistry',
    slug: 'cosmetic',
    description: 'Transform your smile with teeth whitening, veneers, and smile makeovers',
    details: 'Teeth whitening, porcelain veneers, composite bonding, and smile design.',
  },
  {
    title: 'Dental Implants',
    slug: 'implants',
    description: 'Permanent tooth replacement solutions with natural-looking results',
    details: 'Single implants, implant bridges, and full mouth implant restorations.',
  },
  {
    title: 'Crowns & Bridges',
    slug: 'crowns',
    description: 'Durable restorations for damaged or missing teeth',
    details: 'Porcelain crowns, bridges, and inlays for lasting results.',
  },
  {
    title: 'Root Canal Therapy',
    slug: 'root-canal',
    description: 'Advanced treatment to save teeth and eliminate pain',
    details: 'Endodontic treatment using advanced technologies.',
  },
  {
    title: 'Pediatric Dentistry',
    slug: 'pediatric',
    description: 'Specialized care for children in a fun, comfortable environment',
    details: 'Preventive care, sealants, and kid-friendly treatments.',
  },
]

export const metadata = {
  title: 'Services - Wisconsin Family Dental',
  description: 'Explore our comprehensive dental services including general, cosmetic, and implant dentistry.',
}

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Dental Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.slug} className="hover:shadow-md transition-all duration-300 border-border/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.details}</p>
                  <Link href="/contact">
                    <Button variant="default" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
            <h2 className="text-4xl md:text-5xl font-bold">Not sure which service you need?</h2>
            <p className="text-lg opacity-90">
              Schedule a consultation and we'll help determine the best treatment plan for you.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-base">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
