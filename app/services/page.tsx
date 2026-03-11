'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Stethoscope,
  Sparkles,
  Award,
  Shield,
  Clock,
  Users,
  Zap,
  Smile,
} from 'lucide-react'

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Comprehensive dental care for every age and need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="p-6 hover:shadow-lg transition-all">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link href={`/services/${service.id}`}>
                  <Button variant="link" className="p-0 h-auto">
                    Learn More →
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50">
        <div className="container mx-auto text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl font-bold">
            Don't see what you're looking for?
          </h2>
          <p className="text-muted-foreground text-lg">
            Contact us to discuss your specific dental needs. Our team is here to help.
          </p>
          <Link href="/contact">
            <Button size="lg">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    id: 'exam-cleaning',
    name: 'Exams & Cleanings',
    description:
      'Regular dental exams and professional cleanings are the foundation of good oral health. We recommend visits every 6 months.',
    icon: Stethoscope,
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dentistry',
    description:
      'Enhance your smile with teeth whitening, veneers, bonding, and other cosmetic procedures.',
    icon: Sparkles,
  },
  {
    id: 'implants',
    name: 'Dental Implants',
    description:
      'Permanent tooth replacement that looks and feels natural. Perfect for missing teeth.',
    icon: Award,
  },
  {
    id: 'crowns',
    name: 'Crowns & Bridges',
    description:
      'Restore damaged or missing teeth with durable crowns and bridges tailored to your smile.',
    icon: Shield,
  },
  {
    id: 'root-canal',
    name: 'Root Canal Therapy',
    description:
      'Save your tooth with advanced root canal treatment. Fast, effective pain relief.',
    icon: Zap,
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics',
    description:
      'Straighten your teeth with modern braces and clear aligner options.',
    icon: Smile,
  },
  {
    id: 'extractions',
    name: 'Extractions',
    description:
      'When necessary, we perform gentle tooth extractions with minimal discomfort.',
    icon: Clock,
  },
  {
    id: 'nightguard',
    name: 'Nightguards',
    description:
      'Custom-fitted nightguards to protect your teeth from grinding and clenching.',
    icon: Users,
  },
]
