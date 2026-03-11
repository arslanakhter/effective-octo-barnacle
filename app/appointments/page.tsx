'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Clock, Users } from 'lucide-react'

const services = [
  { id: 'cleaning', name: 'Cleaning & Exam', duration: '30 min', price: '$150' },
  { id: 'whitening', name: 'Teeth Whitening', duration: '60 min', price: '$300' },
  { id: 'filling', name: 'Cavity Filling', duration: '45 min', price: '$200' },
  { id: 'crown', name: 'Crown Placement', duration: '90 min', price: '$1,200' },
  { id: 'implant', name: 'Implant Consultation', duration: '60 min', price: '$500' },
  { id: 'orthodontics', name: 'Orthodontics', duration: '45 min', price: '$400' },
]

const timeSlots = [
  '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
]

const today = new Date()
const nextDays = Array.from({ length: 30 }, (_, i) => {
  const date = new Date(today)
  date.setDate(date.getDate() + i)
  return date
})

export const metadata = {
  title: 'Book an Appointment - Wisconsin Family Dental',
  description: 'Schedule your dental appointment online easily.',
}

export default function Appointments() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedService && selectedDate && selectedTime && formData.firstName && formData.email && formData.phone) {
      console.log('Appointment booked:', { selectedService, selectedDate, selectedTime, ...formData })
      setSubmitted(true)
      setTimeout(() => {
        setStep(1)
        setSelectedService('')
        setSelectedDate('')
        setSelectedTime('')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', notes: '' })
        setSubmitted(false)
      }, 3000)
    }
  }

  const selectedServiceName = services.find(s => s.id === selectedService)?.name
  const selectedDateFormatted = selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : ''

  if (submitted) {
    return (
      <div>
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Appointment Confirmed</h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="border-border/50">
                <CardContent className="pt-8 text-center space-y-6">
                  <CheckCircle2 className="h-16 w-16 text-primary mx-auto" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                    <p className="text-muted-foreground">Your appointment has been successfully booked.</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-6 text-left space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Service</p>
                      <p className="font-semibold text-foreground">{selectedServiceName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date & Time</p>
                      <p className="font-semibold text-foreground">{selectedDateFormatted} at {selectedTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Patient</p>
                      <p className="font-semibold text-foreground">{formData.firstName} {formData.lastName}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl text-muted-foreground">
              Schedule a visit with our experienced team in just a few steps
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Step Indicator */}
            <div className="flex justify-between mb-12">
              {[1, 2, 3, 4].map((stepNum) => (
                <div key={stepNum} className="flex flex-col items-center flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold mb-2 ${
                    step >= stepNum ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                  }`}>
                    {stepNum}
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    {stepNum === 1 && 'Service'}
                    {stepNum === 2 && 'Date & Time'}
                    {stepNum === 3 && 'Information'}
                    {stepNum === 4 && 'Confirmation'}
                  </p>
                  {stepNum < 4 && <div className={`h-0.5 w-full ${step > stepNum ? 'bg-primary' : 'bg-secondary'} mt-4`} />}
                </div>
              ))}
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Select a Service</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedService === service.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                          <span>{service.duration}</span>
                          <span className="font-semibold text-primary">{service.price}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                    className="w-full"
                  >
                    Continue
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Select Date & Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label className="text-base mb-3 block font-semibold">Choose a Date</Label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto">
                      {nextDays.map((date, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                          className={`p-3 rounded-lg border-2 text-sm transition-all ${
                            selectedDate === date.toISOString().split('T')[0]
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="font-semibold">{date.getDate()}</div>
                          <div className="text-xs text-muted-foreground">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block font-semibold">Choose a Time</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border-2 text-sm transition-all ${
                            selectedTime === time
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => setStep(1)} variant="outline" className="flex-1">
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="flex-1"
                    >
                      Continue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Patient Information */}
            {step === 3 && (
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(608) 555-1234"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes</Label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Any special requests or concerns?"
                      className="w-full mt-2 p-3 rounded-md border border-input bg-background text-foreground placeholder-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => setStep(2)} variant="outline" className="flex-1">
                      Back
                    </Button>
                    <Button onClick={() => setStep(4)} className="flex-1">
                      Review Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Review & Confirm */}
            {step === 4 && (
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Review Your Booking</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4 bg-secondary/50 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Service</p>
                        <p className="font-semibold text-foreground">{selectedServiceName}</p>
                      </div>
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Date & Time</p>
                        <p className="font-semibold text-foreground">{selectedDateFormatted} at {selectedTime}</p>
                      </div>
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Patient</p>
                      <p className="font-semibold text-foreground">{formData.firstName} {formData.lastName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Contact</p>
                      <p className="font-semibold text-foreground">{formData.email}</p>
                      <p className="font-semibold text-foreground">{formData.phone}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    By clicking confirm, you agree to our appointment terms and cancellation policy.
                  </p>

                  <div className="flex gap-3">
                    <Button onClick={() => setStep(3)} variant="outline" className="flex-1">
                      Back
                    </Button>
                    <Button onClick={handleSubmit} className="flex-1">
                      Confirm Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
