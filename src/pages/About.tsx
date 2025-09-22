import "@/components/core-values-card.css";
import Counter from "@/components/ui/counter";
import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
 

function CountersSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setActive(entry.intersectionRatio === 1),
      { threshold: 1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 gap-6 slide-up">
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-3xl font-bold gradient-text mb-2">
          <Counter to={15} suffix="+" duration={3500} max={5000} active={active} />
        </div>
        <p className="text-sm text-muted-foreground">Years of Excellence</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-3xl font-bold gradient-text mb-2">
          <Counter to={5000} suffix="+" duration={3500} max={5000} active={active} />
        </div>
        <p className="text-sm text-muted-foreground">Happy Patients</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-3xl font-bold gradient-text mb-2">
          <Counter to={98} suffix="%" duration={3500} max={5000} active={active} />
        </div>
        <p className="text-sm text-muted-foreground">Success Rate</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <div className="text-3xl font-bold gradient-text mb-2">
          <Counter to={24} suffix="/7" duration={3500} max={5000} active={active} />
        </div>
        <p className="text-sm text-muted-foreground">Emergency Care</p>
      </div>
    </div>
  );
}
import { 
  Award, 
  Users, 
  Calendar, 
  Heart, 
  Shield, 
  Microscope,
  Clock,
  CheckCircle
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every patient with kindness, empathy, and respect, understanding that dental visits can be stressful."
    },
    {
      icon: Shield,
      title: "Safety First", 
      description: "State-of-the-art sterilization and infection control protocols ensure the highest safety standards."
    },
    {
      icon: Microscope,
      title: "Innovation",
      description: "Continuous investment in the latest dental technology and treatment methods for optimal outcomes."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results that exceed expectations through meticulous attention to detail."
    }
  ];


  const achievements = [
    "Board Certified Specialists",
    "15+ Years of Excellence", 
    "5000+ Satisfied Patients",
    "Advanced Technology Integration",
    "Continuing Education Leaders",
    "Community Health Advocates"
  ];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              About PureDent
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Dedicated to Your <br />Dental Health & Comfort
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 15 years, PureDent has been at the forefront of modern dentistry, 
              combining advanced technology with personalized care to create exceptional 
              patient experiences and outstanding clinical results.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    PureDent was founded with a simple yet powerful vision: to revolutionize 
                    dental care by making it more comfortable, accessible, and effective for 
                    every patient who walks through our doors.
                  </p>
                  <p>
                    What started as a single practice has grown into a comprehensive dental 
                    center, but our core values remain unchanged. We believe that everyone 
                    deserves access to high-quality dental care in an environment that 
                    prioritizes comfort, trust, and clinical excellence.
                  </p>
                  <p>
                    Today, we're proud to serve thousands of patients with a team of 
                    specialists who are passionate about oral health and committed to 
                    staying at the cutting edge of dental innovation.
                  </p>
                </div>
              </div>
              
              {/* Dynamic Counters Section - starts when fully in view */}
              <CountersSection />
// Section-level intersection observer for counters
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and ensure every patient receives 
              the exceptional care they deserve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-details">
                  <div style={{marginBottom: '1rem'}}>
                    <value.icon className="h-8 w-8 text-[#008bf8]" />
                  </div>
                  <p className="text-title">{value.title}</p>
                  <p className="text-body">{value.description}</p>
                </div>
                <button className="card-button" onClick={() => navigate('/contact')}>Learn more</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recognition & <span className="gradient-text">Achievements</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our commitment to excellence has been recognized by patients and 
                peers throughout our journey.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-card hover-lift scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the PureDent Difference
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of patients who trust us with their oral health. 
              Discover what personalized, advanced dental care feels like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover-glow text-[#008bf8] hover:bg-[#008bf8] hover:text-white" style={{ transition: 'background 0.2s, color 0.2s' }}>
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Visit
                </Button>
              </Link>
              <Link to="/team">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-[#008bf8] hover:bg-[#008bf8] hover:text-white" style={{ transition: 'background 0.2s, color 0.2s' }}>
                  <Users className="h-5 w-5 mr-2" />
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;