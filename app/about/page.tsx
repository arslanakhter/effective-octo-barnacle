'use client'

import { Card } from '@/components/ui/card'
import { Award, Heart, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">About Wisconsin Family Dental</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Serving families with compassion and excellence since 2005
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-3xl space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 text-center">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Wisconsin Family Dental was founded with a simple mission: to provide exceptional dental care in a welcoming, comfortable environment. Over the past years, we've had the privilege of serving thousands of families and individuals throughout Wisconsin.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team of experienced dentists and caring staff members are committed to creating positive experiences that help patients feel confident about their oral health. We believe that everyone deserves access to quality dental care, and we work hard to make that a reality.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We care about your comfort and well-being throughout your treatment journey.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We pursue the highest standards of quality in everything we do.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace modern techniques and technologies to serve you better.',
  },
]

const team = [
  {
    name: 'Dr. James Anderson',
    role: 'Founder & Lead Dentist',
    bio: 'DDS with 20+ years of experience in family and cosmetic dentistry. Known for his gentle approach and commitment to patient education.',
  },
  {
    name: 'Dr. Sarah Martinez',
    role: 'Cosmetic Dentistry Specialist',
    bio: 'DDS, MS in Prosthodontics. Specializes in smile makeovers and advanced cosmetic procedures with attention to detail.',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Implant Specialist',
    bio: 'DDS with advanced training in dental implantology. Dedicated to restoring smiles with permanent solutions.',
  },
  {
    name: 'Dental Hygienist Team',
    role: 'Professional Care Team',
    bio: 'Our experienced hygienists provide thorough cleanings and preventive care to keep your smile healthy.',
  },
]
