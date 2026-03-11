'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Insurance() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = insuranceProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Insurance & Payments</h1>
            <p className="text-xl text-muted-foreground">
              We accept most major insurance plans. Making quality dental care affordable.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-12">
          {/* Search */}
          <div className="max-w-md mx-auto w-full">
            <Label htmlFor="search" className="block mb-2 font-semibold">
              Search Insurance Provider
            </Label>
            <Input
              id="search"
              placeholder="Search by provider name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Insurance Providers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((provider) => (
              <Card key={provider.id} className="border-border/50 hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {provider.services.map((service) => (
                      <div key={service} className="flex items-center space-x-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No providers found. Try a different search term or contact us.
            </div>
          )}

          {/* Coverage Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Coverage Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coverageTypes.map((type) => (
                <Card key={type.title} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{type.description}</p>
                    <div className="space-y-2">
                      {type.coverage.map((item) => (
                        <div key={item} className="flex items-start space-x-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Payment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentOptions.map((option) => (
                <Card key={option.title} className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <Card className="border-border/50">
              <CardContent className="p-0">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className={`p-6 ${index !== faqs.length - 1 ? 'border-b border-border' : ''}`}>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center space-y-4 py-12">
            <h2 className="text-4xl font-bold">Questions About Your Coverage?</h2>
            <p className="text-lg text-muted-foreground">
              Our team can help verify your benefits and answer any insurance questions.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const insuranceProviders = [
  {
    id: 1,
    name: 'United Dental',
    services: ['Preventive', 'Basic', 'Major', 'Orthodontics'],
  },
  {
    id: 2,
    name: 'Blue Cross',
    services: ['Preventive', 'Basic', 'Major'],
  },
  {
    id: 3,
    name: 'Aetna',
    services: ['Preventive', 'Basic', 'Major', 'Implants'],
  },
  {
    id: 4,
    name: 'Cigna',
    services: ['Preventive', 'Basic', 'Major'],
  },
  {
    id: 5,
    name: 'Delta Dental',
    services: ['Preventive', 'Basic', 'Major', 'Orthodontics'],
  },
  {
    id: 6,
    name: 'Guardian',
    services: ['Preventive', 'Basic', 'Major', 'Implants'],
  },
  {
    id: 7,
    name: 'MetLife',
    services: ['Preventive', 'Basic', 'Major'],
  },
  {
    id: 8,
    name: 'Principal',
    services: ['Preventive', 'Basic', 'Major'],
  },
  {
    id: 9,
    name: 'Medicare',
    services: ['Limited Coverage'],
  },
]

const coverageTypes = [
  {
    title: 'Preventive Care',
    description: 'Usually covered at 100% with no deductible',
    coverage: [
      'Cleanings and exams',
      'X-rays',
      'Fluoride treatments',
      'Sealants',
    ],
  },
  {
    title: 'Basic Restorative',
    description: 'Typically covered at 70-80% after deductible',
    coverage: [
      'Fillings',
      'Root canals',
      'Extractions',
      'Periodontal therapy',
    ],
  },
  {
    title: 'Major Restorative',
    description: 'Usually covered at 50% after deductible',
    coverage: [
      'Crowns and bridges',
      'Dentures',
      'Implants (some plans)',
      'Complex extractions',
    ],
  },
  {
    title: 'Orthodontics',
    description: 'Coverage varies by plan (50-50% common)',
    coverage: [
      'Braces',
      'Clear aligners',
      'Retainers',
      'Lifelong maximum usually $1,500-2,000',
    ],
  },
]

const paymentOptions = [
  {
    title: 'Insurance',
    description:
      'We file your insurance claims directly with most major providers.',
  },
  {
    title: 'Payment Plans',
    description:
      'Flexible financing options for out-of-pocket costs and major procedures.',
  },
  {
    title: 'Credit Cards',
    description:
      'We accept all major credit cards including Visa, Mastercard, and American Express.',
  },
  {
    title: 'Cash',
    description:
      'Special discounts available for patients paying in cash or check.',
  },
]

const faqs = [
  {
    id: 1,
    question: 'Do you file insurance claims for me?',
    answer:
      'Yes, we file insurance claims directly with your insurance provider. You only pay your portion of the cost.',
  },
  {
    id: 2,
    question: 'What if my insurance doesnt cover a procedure?',
    answer:
      'We offer flexible payment plans to make treatments affordable. Contact our office to discuss options.',
  },
  {
    id: 3,
    question: 'Do you accept Medicare?',
    answer:
      'Medicare typically covers limited dental services. Contact us to verify coverage for your specific needs.',
  },
  {
    id: 4,
    question: 'Can I pay in installments?',
    answer:
      'Yes, we offer payment plans for major procedures. Speak with our office staff about setting up an arrangement.',
  },
]
