'use client'

import { Card, CardContent } from '@/components/ui/card'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryItems = [
  { id: 1, title: 'Complete Smile Makeover', category: 'Cosmetic', description: 'Veneers + Whitening' },
  { id: 2, title: 'Missing Tooth Restoration', category: 'Implants', description: 'Single Dental Implant' },
  { id: 3, title: 'Teeth Whitening', category: 'Whitening', description: 'Professional Whitening' },
  { id: 4, title: 'Veneer Transformation', category: 'Veneers', description: 'Porcelain Veneers' },
  { id: 5, title: 'Crown Replacement', category: 'Crowns', description: 'Ceramic Crown' },
  { id: 6, title: 'Bridge Work', category: 'Cosmetic', description: 'Multiple Tooth Bridge' },
  { id: 7, title: 'Implant Bridge', category: 'Implants', description: 'Full Mouth Restoration' },
  { id: 8, title: 'Color Correction', category: 'Whitening', description: 'Advanced Whitening' },
  { id: 9, title: 'Smile Design', category: 'Veneers', description: 'Aesthetic Enhancement' },
]

const categories = ['All', 'Cosmetic', 'Implants', 'Whitening', 'Veneers', 'Crowns']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedImage === null) return
    const index = filteredItems.findIndex(item => item.id === selectedImage)
    if (index > 0) {
      setSelectedImage(filteredItems[index - 1].id)
    }
  }

  const handleNext = () => {
    if (selectedImage === null) return
    const index = filteredItems.findIndex(item => item.id === selectedImage)
    if (index < filteredItems.length - 1) {
      setSelectedImage(filteredItems[index + 1].id)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Before & After Gallery</h1>
            <p className="text-xl text-muted-foreground">
              See the beautiful smile transformations we've created for our patients
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setSelectedImage(null)
                }}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="text-left group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 h-full">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">{item.id}</div>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-card rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Display */}
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative">
              <div className="text-center space-y-2">
                <div className="text-6xl font-bold text-primary/30">{selectedImage}</div>
                <p className="text-lg text-muted-foreground">{galleryItems.find(i => i.id === selectedImage)?.title}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white hover:text-primary transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white hover:text-primary transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Info */}
            <div className="p-6 border-t border-border">
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {galleryItems.find(i => i.id === selectedImage)?.title}
              </h3>
              <p className="text-muted-foreground">
                {galleryItems.find(i => i.id === selectedImage)?.description}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {filteredItems.findIndex(i => i.id === selectedImage) + 1} of {filteredItems.length}
                </span>
                <Link href="/appointments">
                  <Button size="sm">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Ready for Your Smile Transformation?</h2>
            <p className="text-lg opacity-90">
              Schedule a consultation today and discover what we can do for your smile.
            </p>
            <Link href="/appointments">
              <Button size="lg" variant="secondary" className="text-base">
                Book Your Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
