import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, FileText, Clock, Shield } from "lucide-react";

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer: "We accept most major insurance plans including Delta Dental, Blue Cross Blue Shield, Aetna, Cigna, MetLife, and many others. Please contact our office to verify your specific plan."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! We offer flexible payment plans through CareCredit and other financing options to make dental care affordable for everyone."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your insurance card, photo ID, list of current medications, and any relevant medical history. Arrive 15 minutes early to complete new patient paperwork."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend routine checkups and cleanings every six months for most patients. However, some patients may need more frequent visits based on their oral health needs."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we provide emergency dental care. If you have a dental emergency, please call our office immediately and we'll do our best to see you the same day."
  }
];

const paymentOptions = [
  { icon: CreditCard, title: "Insurance", description: "Most major plans accepted" },
  { icon: FileText, title: "CareCredit", description: "Flexible financing available" },
  { icon: Shield, title: "HSA/FSA", description: "Health savings accounts welcome" },
  { icon: Clock, title: "Payment Plans", description: "Custom payment arrangements" }
];

export default function PatientInfo() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">
              Patient Information
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know for your visit
            </p>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">
              Payment Options
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {paymentOptions.map((option, index) => (
                <Card key={index} className="text-center hover:shadow-medium transition-all">
                  <CardContent className="pt-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Insurance Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We accept most major dental insurance plans and will file claims on your behalf. Our team will work with your insurance company to maximize your benefits.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Popular Plans We Accept:</p>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <li>• Delta Dental</li>
                    <li>• Blue Cross Blue Shield</li>
                    <li>• Aetna</li>
                    <li>• Cigna</li>
                    <li>• MetLife</li>
                    <li>• Guardian</li>
                    <li>• United Healthcare</li>
                    <li>• Humana</li>
                    <li>• And many more!</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6 shadow-soft">
                  <AccordionTrigger className="font-semibold text-left hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="font-heading text-3xl">Patient Forms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Save time at your appointment by downloading and completing these forms in advance:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <a href="#" className="text-primary hover:underline">New Patient Registration Form</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <a href="#" className="text-primary hover:underline">Medical History Form</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <a href="#" className="text-primary hover:underline">HIPAA Privacy Policy</a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <a href="#" className="text-primary hover:underline">Financial Policy</a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
