


import CustomButton from "@/components/ui/custom-ui-verse-btn";
import HeroButtonOutline from "@/components/ui/hero-btn-outline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Shield, 
  Star, 
  Users, 
  Award, 
  Clock,
  CheckCircle,
  Phone,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/dental-clinic-hero.jpg";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ParallaxHero from "@/components/ParallaxHero";
import HeroButton from "@/components/ui/hero-btn";
import Counter from "@/components/ui/counter";



const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge dental technology for precise, comfortable treatments.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Board-certified dentists and specialists with years of experience in comprehensive dental care.",
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Award-winning practice recognized for excellence in patient care and clinical outcomes.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Convenient scheduling including evenings and weekends to fit your busy lifestyle.",
    },
  ];

  const services = [
    { name: "General Dentistry", popular: false },
    { name: "Cosmetic Dentistry", popular: true },
    { name: "Orthodontics", popular: false },
    { name: "Oral Surgery", popular: false },
    { name: "Dental Implants", popular: true },
    { name: "Periodontics", popular: false },
  ];

  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        {/* Hero Section with Parallax */}
        <ParallaxHero image={heroImage}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight">
            Your Perfect Smile
            <br />
            Starts Here
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Experience world-class dental care with cutting-edge technology, 
            personalized treatment, and a commitment to your comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-7 justify-center items-center">
            <Link to="/contact">
              <HeroButton className="text-base px-6 py-3">
                Book Your Appointment
              </HeroButton>
            </Link>
            <a href="tel:+15551234368">
              <HeroButtonOutline className="text-base px-6 py-3 flex items-center gap-2">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-DENT
              </HeroButtonOutline>
            </a>
          </div>
        </ParallaxHero>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">PureDent</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine advanced technology with compassionate care to deliver 
              exceptional dental experiences that exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="ui-verse-card slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="ui-verse-card__icon">
                  <feature.icon />
                </span>
                <div className="ui-verse-card__content">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-normal text-base">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">Dental Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From routine cleanings to complex procedures, we offer the full spectrum 
              of dental care to keep your smile healthy and beautiful.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="relative p-6 rounded-lg bg-card border hover-lift scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-primary">
                    Popular
                  </Badge>
                )}
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <CustomButton className="px-6 py-3">
                <span className="inline-flex items-center">
                  View All Services
                  <ArrowRight className="h-5 w-5 ml-2" />
                </span>
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-card hover-lift fade-in">
              <CardContent className="p-0 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
                  "PureDent transformed my smile and my confidence. The team's expertise 
                  and care exceeded all my expectations."
                </blockquote>
                <p className="text-muted-foreground font-medium">
                  — Sarah Johnson, Patient since 2020
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Schedule your consultation today and discover the PureDent difference. 
              Your perfect smile is just one appointment away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-glow">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Consultation
                </Button>
              </Link>
              <a href="tel:+15551234368">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-primary hover:bg-primary hover:text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </ParallaxProvider>
  );
};

export default Index;

