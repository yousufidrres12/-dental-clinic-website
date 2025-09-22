import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Calendar, 
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  Heart,
  Users,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import Counter from "@/components/ui/counter";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Complete Smile Makeover",
      rating: 5,
      date: "March 2024",
      text: "Dr. Martinez and her team completely transformed my smile and my confidence. The process was smooth, comfortable, and the results exceeded all my expectations. I can't stop smiling!",
      result: "Porcelain veneers and teeth whitening"
    },
    {
      name: "Michael Chen",
      treatment: "Dental Implants",
      rating: 5,
      date: "February 2024", 
      text: "After losing two teeth in an accident, I was devastated. Dr. Wilson's implant work was flawless, and now I can't even tell the difference from my natural teeth. Amazing work!",
      result: "Two dental implants with natural-looking crowns"
    },
    {
      name: "Emily Rodriguez",
      treatment: "Invisalign Treatment",
      rating: 5,
      date: "January 2024",
      text: "18 months of Invisalign with Dr. Rodriguez gave me the straight smile I always wanted. The staff was incredibly supportive throughout the entire process.",
      result: "Perfectly aligned teeth without traditional braces"
    },
    {
      name: "James Wilson",
      treatment: "Gum Disease Treatment",
      rating: 5,
      date: "December 2023",
      text: "I was scared about my gum disease, but Dr. Wilson made the treatment painless and effective. My gums are healthier than they've been in years!",
      result: "Complete periodontal health restoration"
    },
    {
      name: "Maria Gonzalez",
      treatment: "Root Canal Therapy",
      rating: 5,
      date: "November 2023",
      text: "I was terrified of getting a root canal, but Dr. Martinez made it completely painless. The staff was so caring and professional throughout the entire process.",
      result: "Pain-free root canal with same-day crown"
    },
    {
      name: "David Kim",
      treatment: "Teeth Whitening",
      rating: 5,
      date: "October 2023",
      text: "Professional whitening at PureDent gave me results I never could have achieved at home. My teeth are several shades whiter and the results have lasted months.",
      result: "Dramatic whitening with long-lasting results"
    }
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Five-Star Reviews", icon: Star },
    { number: 98, suffix: "%", label: "Patient Satisfaction", icon: Heart },
    { number: 5000, suffix: "+", label: "Happy Patients", icon: Users },
    { number: 15, suffix: "+", label: "Awards Won", icon: Award }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // --- Add this hook to detect when the stats section is in view ---
  function useSectionInView(threshold = 0.3) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [threshold]);
    return [ref, inView] as const;
  }

  // Move the hook call outside any callback or IIFE
  const [statsRef, statsInView] = useSectionInView(0.3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Patient Testimonials
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Real Stories from <br />Real Patients
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover why thousands of patients trust PureDent with their oral health 
              and smile transformations through their own words and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* Stats Section */}
      {(() => {
        const maxStat = Math.max(...stats.map(s => s.number));
        const duration = 2000; // ms, all finish together
        return (
          <section className="py-16">
            <div ref={statsRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card 
                    key={index} 
                    className="p-6 text-center hover-lift scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                        <Counter to={stat.number} suffix={stat.suffix} duration={duration} max={maxStat} active={statsInView} />
                      </div>
                      <p className="text-muted-foreground font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured <span className="gradient-text">Patient Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                In-depth experiences from patients who transformed their smiles with us.
              </p>
            </div>
            
            <Card className="p-8 bg-gradient-card hover-lift">
              <CardContent className="p-0">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost" 
                      size="sm"
                      onClick={prevTestimonial}
                      className="hover-glow"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm" 
                      onClick={nextTestimonial}
                      className="hover-glow"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  
                  <div className="mb-4">
                    <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-primary font-medium">{testimonials[currentTestimonial].treatment}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].date}</p>
                  </div>
                  
                  <Badge variant="outline" className="px-3 py-1">
                    <CheckCircle className="h-3 w-3 mr-2" />
                    {testimonials[currentTestimonial].result}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              More <span className="gradient-text">Patient Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read what our patients have to say about their experiences and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of satisfied patients who have transformed their smiles 
              and oral health with PureDent's expert care and personalized treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-glow">
                  <Calendar className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-primary bg-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white">
                  <Star className="h-5 w-5 mr-2" />
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;