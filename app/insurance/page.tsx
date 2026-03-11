'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Check, X } from 'lucide-react'

export default function Insurance() {
  const [searchTerm, setSearchTerm] = useState('')

  const filtered = insuranceProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Insurance & Payments</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We accept most major insurance plans. Making quality dental care affordable.
          </p>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto space-y-12">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <Label htmlFor="search" className="block mb-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((provider) => (
              <Card key={provider.id} className="p-6">
                <h3 className="font-semibold mb-4">{provider.name}</h3>
                <div className="space-y-2">
                  {provider.services.map((service) => (
                    <div key={service} className="flex items-center space-x-2 text-sm">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No providers found. Try a different search term or contact us.
            </div>
          )}

          {/* Coverage Info */}
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Coverage Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coverageTypes.map((type) => (
                <Card key={type.title} className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.coverage.map((item) => (
                      <div key={item} className="flex items-start space-x-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentOptions.map((option) => (
                <Card key={option.title} className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm">{option.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id} className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center space-y-4">
            <h2 className="text-2xl font-bold">Questions About Your Coverage?</h2>
            <p className="text-muted-foreground">
              Our team can help verify your benefits and answer any insurance questions.
            </p>
            <a href="/contact">
              <Button size="lg">Contact Our Team</Button>
            </a>
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
