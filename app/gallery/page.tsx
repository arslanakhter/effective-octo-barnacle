'use client'

import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filtered = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory)

  const categories = ['all', ...new Set(galleryItems.map((item) => item.category))]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Before & After Gallery</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            See the transformations we've helped our patients achieve
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === 'all' ? 'All' : category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">{item.emoji}</div>
                    <p className="text-muted-foreground font-medium">{item.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium capitalize">
                    {item.category}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-card/50">
        <div className="container mx-auto text-center space-y-6 max-w-2xl">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-muted-foreground text-lg">
            Schedule your consultation today and let's create your smile transformation.
          </p>
          <a href="/contact">
            <Button size="lg">
              Schedule Appointment
            </Button>
          </a>
        </div>
      </section>
    </div>
  )
}

const galleryItems = [
  {
    id: 1,
    title: 'Smile Makeover',
    description: 'Complete cosmetic transformation with veneers and whitening',
    category: 'cosmetic',
    emoji: '😁',
  },
  {
    id: 2,
    title: 'Implant Restoration',
    description: 'Natural-looking implant replacing missing tooth',
    category: 'implants',
    emoji: '✨',
  },
  {
    id: 3,
    title: 'Teeth Whitening',
    description: 'Professional whitening treatment results',
    category: 'cosmetic',
    emoji: '🦷',
  },
  {
    id: 4,
    title: 'Crown Replacement',
    description: 'Damaged tooth restored with custom crown',
    category: 'restorative',
    emoji: '👑',
  },
  {
    id: 5,
    title: 'Ortho Treatment',
    description: 'Straighter teeth with modern orthodontics',
    category: 'orthodontics',
    emoji: '😊',
  },
  {
    id: 6,
    title: 'Bridge Work',
    description: 'Multiple missing teeth replaced with bridge',
    category: 'restorative',
    emoji: '🌉',
  },
  {
    id: 7,
    title: 'Bonding',
    description: 'Tooth repair and aesthetic enhancement',
    category: 'cosmetic',
    emoji: '💎',
  },
  {
    id: 8,
    title: 'Full Restoration',
    description: 'Complete smile redesign with multiple procedures',
    category: 'cosmetic',
    emoji: '🎨',
  },
  {
    id: 9,
    title: 'Extraction & Implant',
    description: 'Problem tooth replaced with implant solution',
    category: 'implants',
    emoji: '🚀',
  },
]
