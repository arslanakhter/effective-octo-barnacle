import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { loadMarkdown } from "@/utils/markdown";
import ReactMarkdown from "react-markdown";
import { Heart, Award, Users, TrendingUp } from "lucide-react";
import officeInterior from "@/assets/office-interior.jpg";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your comfort and well-being are always our top priority"
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Continuous learning and improvement in our practice"
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Proud to serve Wisconsin families for over 15 years"
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "Utilizing the latest technology for better outcomes"
  }
];

export default function About() {
  const [content, setContent] = useState<any>({ frontmatter: {}, content: '' });

  useEffect(() => {
    loadMarkdown('/content/about.md').then(setContent);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">
              {content.frontmatter.title || "About Wisconsin Family Dental"}
            </h1>
            <p className="text-xl text-muted-foreground">
              {content.frontmatter.description || "Dedicated to your dental health and beautiful smiles"}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{content.content}</ReactMarkdown>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={officeInterior} 
                alt="Modern dental office interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all">
                <CardContent className="pt-8 pb-6">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Dr. Sarah Johnson, DDS",
                role: "Lead Dentist",
                bio: "15+ years of experience in comprehensive dentistry with a focus on patient comfort and education."
              },
              {
                name: "Dr. Michael Chen, DDS",
                role: "Cosmetic Specialist",
                bio: "Expert in aesthetic dentistry and smile makeovers, passionate about creating beautiful results."
              },
              {
                name: "Dr. Emily Rodriguez, DDS",
                role: "Pediatric Dentist",
                bio: "Specializes in children's dentistry, making dental visits fun and stress-free for young patients."
              }
            ].map((member, index) => (
              <Card key={index} className="hover:shadow-medium transition-all">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="h-32 w-32 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-1 text-center">{member.name}</h3>
                  <p className="text-primary text-center mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-center text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
