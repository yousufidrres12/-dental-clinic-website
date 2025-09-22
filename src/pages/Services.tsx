import AdvancedTechEthereumCard from "@/components/AdvancedTechEthereumCard";
import "@/components/AdvancedTechEthereumCard.css";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import "@/components/advtech-card.css";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smile, 
  Shield, 
  Zap, 
  Scissors, 
  Calendar,
  CheckCircle,
  Star,
  Clock,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      id: "general",
      name: "General Dentistry",
      icon: Shield,
      description: "Essential care for optimal oral health"
    },
    {
      id: "cosmetic", 
      name: "Cosmetic Dentistry",
      icon: Smile,
      description: "Enhance your smile's beauty"
    },
    {
      id: "restorative",
      name: "Restorative Care",
      icon: Award,
      description: "Repair and restore function"
    },
    {
      id: "specialized",
      name: "Specialized Care",
      icon: Zap,
      description: "Advanced treatment options"
    }
  ];

  const services = {
    general: [
      {
        name: "Routine Cleanings & Exams",
        description: "Comprehensive oral health assessments with professional cleaning to prevent cavities and gum disease.",
        duration: "60 min",
        popular: false
      },
      {
        name: "Digital X-Rays",
        description: "State-of-the-art digital imaging for accurate diagnosis with minimal radiation exposure.",
        duration: "15 min", 
        popular: false
      },
      {
        name: "Fluoride Treatments",
        description: "Protective fluoride applications to strengthen tooth enamel and prevent decay.",
        duration: "20 min",
        popular: false
      },
      {
        name: "Oral Cancer Screenings",
        description: "Early detection screenings using advanced technology for oral health monitoring.",
        duration: "30 min",
        popular: false
      }
    ],
    cosmetic: [
      {
        name: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter, more radiant smile in just one visit.",
        duration: "90 min",
        popular: true
      },
      {
        name: "Porcelain Veneers",
        description: "Custom-crafted veneers to correct imperfections and create your perfect smile.",
        duration: "2-3 visits",
        popular: true
      },
      {
        name: "Invisalign®",
        description: "Clear aligner therapy to straighten teeth discreetly without traditional braces.",
        duration: "12-18 months",
        popular: true
      },
      {
        name: "Composite Bonding",
        description: "Tooth-colored resin to repair chips, gaps, and minor imperfections seamlessly.",
        duration: "60-90 min",
        popular: false
      }
    ],
    restorative: [
      {
        name: "Dental Implants",
        description: "Permanent tooth replacement solution that looks and feels like natural teeth.",
        duration: "3-6 months",
        popular: true
      },
      {
        name: "Crowns & Bridges",
        description: "Custom restorations to repair damaged teeth or replace missing teeth.",
        duration: "2-3 visits",
        popular: false
      },
      {
        name: "Root Canal Therapy",
        description: "Gentle, pain-free treatment to save infected teeth and eliminate discomfort.",
        duration: "60-90 min",
        popular: false
      },
      {
        name: "Dentures",
        description: "Complete or partial dentures designed for comfort, function, and natural appearance.",
        duration: "4-6 weeks",
        popular: false
      }
    ],
    specialized: [
      {
        name: "Oral Surgery",
        description: "Advanced surgical procedures including extractions and jaw surgery by certified specialists.",
        duration: "Varies",
        popular: false
      },
      {
        name: "Periodontal Treatment",
        description: "Comprehensive gum disease treatment and prevention with specialized periodontal care.",
        duration: "Multiple visits",
        popular: false
      },
      {
        name: "TMJ/TMD Treatment",
        description: "Diagnosis and treatment of jaw joint disorders for pain relief and improved function.",
        duration: "Ongoing",
        popular: false
      },
      {
        name: "Sleep Apnea Therapy",
        description: "Custom oral appliances to treat sleep apnea and improve sleep quality.",
        duration: "2-4 weeks",
        popular: false
      }
    ]
  };

  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Comprehensive Dental Care <br />for Every Need
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From routine cleanings to advanced cosmetic procedures, our full range 
              of dental services ensures your smile receives the specialized care it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-1 bg-muted/50">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <category.icon className="h-6 w-6 mb-2" />
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs text-muted-foreground data-[state=active]:text-white/80 mt-1">
                    {category.description}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(services).map(([categoryId, categoryServices]) => (
              <TabsContent key={categoryId} value={categoryId}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categoryServices.map((service, index) => (
                    <Card 
                      key={index} 
                      className="p-6 hover-lift slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-0">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold">{service.name}</h3>
                          {service.popular && (
                            <Badge className="bg-gradient-primary">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{service.duration}</span>
                          </div>
                          <Button variant="outline" size="sm" className="hover-glow">
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced <span className="gradient-text">Technology</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We invest in the latest dental technology to provide more accurate diagnoses, 
              comfortable treatments, and superior results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Impressions",
                description: "Precise 3D scanning eliminates messy traditional impressions for better fitting restorations."
              },
              {
                title: "Laser Dentistry",
                description: "Minimally invasive laser treatments for gum therapy and oral surgery with faster healing."
              },
              {
                title: "CBCT 3D Imaging",
                description: "Three-dimensional imaging provides detailed views for accurate implant placement and diagnosis."
              }
            ].map((tech, index) => (
              <AdvancedTechEthereumCard
                key={index}
                title={tech.title}
                subtitle={tech.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule a consultation to discuss your specific needs and discover 
              how our comprehensive services can improve your oral health and smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-glow">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <Link to="/testimonials">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300">
                  <Star className="h-5 w-5 mr-2" />
                  View Testimonials
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;