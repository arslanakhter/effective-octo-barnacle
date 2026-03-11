import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Award, Users, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Your comfort and well-being are always our top priority',
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Continuous learning and improvement in our practice',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'Proud to serve Wisconsin families for over 15 years',
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Utilizing the latest technology for better outcomes',
  },
]

const team = [
  {
    name: 'Dr. Sarah Johnson, DDS',
    role: 'Lead Dentist',
    bio: '15+ years of experience in comprehensive dentistry with a focus on patient comfort and education.',
  },
  {
    name: 'Dr. Michael Chen, DDS',
    role: 'Cosmetic Specialist',
    bio: 'Expert in aesthetic dentistry and smile makeovers, passionate about creating beautiful results.',
  },
  {
    name: 'Dr. Emily Rodriguez, DDS',
    role: 'Pediatric Dentist',
    bio: 'Specializes in children\'s dentistry, making dental visits fun and stress-free for young patients.',
  },
]

export const metadata = {
  title: 'About Us - Wisconsin Family Dental',
  description: 'Learn about our experienced dentists and commitment to excellent patient care.',
}

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Wisconsin Dental</h1>
            <p className="text-xl text-muted-foreground">
              Dedicated to your dental health and beautiful smiles
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Wisconsin Family Dental was founded with a simple mission: to provide compassionate, high-quality dental care to families across Wisconsin. For over 15 years, we've been committed to creating beautiful, healthy smiles while making every patient feel welcome and comfortable.
                </p>
                <p>
                  Our practice was built on the belief that everyone deserves access to excellent dental care in a friendly, modern environment. From routine cleanings to complex cosmetic procedures, we have the expertise and technology to meet all your dental needs.
                </p>
                <p>
                  We continuously invest in the latest dental technology and ongoing education to ensure our team stays at the forefront of modern dentistry. Your smile is our success story.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="h-32 w-32 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center border-border/50">
                  <CardContent className="pt-8 pb-6">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="h-32 w-32 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center text-primary/30">
                    <Users className="h-16 w-16" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-center text-foreground">{member.name}</h3>
                  <p className="text-primary text-center mb-3 text-sm font-medium">{member.role}</p>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
