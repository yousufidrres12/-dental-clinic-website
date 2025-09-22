import { Card, CardContent } from "@/components/ui/card";
import "../team-support-card.css";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  Users,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Martinez",
      title: "Lead Dentist & Founder",
      specialties: ["General Dentistry", "Cosmetic Dentistry", "Implantology"],
      education: "DDS, Harvard School of Dental Medicine",
      experience: "15+ years",
      description: "Dr. Martinez is passionate about creating beautiful, healthy smiles through personalized care and advanced techniques. She founded PureDent with the vision of making dental care comfortable and accessible for everyone.",
      certifications: ["Board Certified", "Invisalign Provider", "Implant Specialist"]
    },
    {
      name: "Dr. Michael Chen", 
      title: "Oral Surgeon",
      specialties: ["Oral Surgery", "Dental Implants", "TMJ Treatment"],
      education: "DDS, UCSF; Oral Surgery Residency, Mayo Clinic",
      experience: "12+ years",
      description: "Specializing in complex oral surgeries and dental implants, Dr. Chen combines surgical expertise with a gentle approach to ensure patient comfort during all procedures.",
      certifications: ["Board Certified Oral Surgeon", "AAOMS Fellow", "IV Sedation Certified"]
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "Orthodontist", 
      specialties: ["Orthodontics", "Invisalign", "TMJ Disorders"],
      education: "DDS, NYU College of Dentistry; Orthodontics, Columbia University",
      experience: "10+ years",
      description: "Dr. Rodriguez specializes in creating perfect smiles through modern orthodontic techniques, with particular expertise in clear aligner therapy and complex bite corrections.",
      certifications: ["Board Certified Orthodontist", "Diamond Invisalign Provider", "Damon System Certified"]
    },
    {
      name: "Dr. James Wilson",
      title: "Periodontist",
      specialties: ["Periodontics", "Gum Surgery", "Bone Grafting"],
      education: "DDS, University of Pennsylvania; Periodontics Residency, UCLA",
      experience: "14+ years", 
      description: "An expert in gum health and periodontal therapy, Dr. Wilson uses the latest techniques to treat gum disease and restore oral health with minimal discomfort.",
      certifications: ["Board Certified Periodontist", "Laser Therapy Specialist", "Regenerative Therapy Expert"]
    }
  ];

  const support = [
    {
      name: "Lisa Thompson",
      title: "Practice Manager",
      description: "Ensuring smooth operations and exceptional patient experiences for over 8 years at PureDent."
    },
    {
      name: "Maria Gonzalez", 
      title: "Lead Dental Hygienist",
      description: "RDH with 12+ years of experience in preventive care and patient education."
    },
    {
      name: "Jennifer Kim",
      title: "Treatment Coordinator", 
      description: "Helping patients understand their treatment options and coordinating care for optimal outcomes."
    },
    {
      name: "Robert Davis",
      title: "Dental Assistant",
      description: "CDA certified with expertise in chairside assistance and patient comfort management."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Meet the Experts Behind <br />Your Perfect Smile
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our board-certified dentists and specialists bring years of experience, 
              advanced training, and a passion for excellence to every patient interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Dental Specialists</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Board-certified professionals with specialized training in their respective fields.
            </p>
          </div>
          <div className="space-y-12">
            {teamMembers.map((doctor, index) => (
              <Card 
                key={index} 
                className="p-8 hover-lift slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Doctor Info */}
                    <div className="lg:col-span-2">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
                        <p className="text-lg text-primary font-medium mb-3">{doctor.title}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {doctor.specialties.map((specialty, i) => (
                            <Badge key={i} variant="outline">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {doctor.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4 text-primary" />
                          <span>{doctor.education}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{doctor.experience} Experience</span>
                        </div>
                      </div>
                    </div>
                    {/* Certifications */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold mb-4 flex items-center">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        Certifications
                      </h4>
                      <div className="space-y-2">
                        {doctor.certifications.map((cert, i) => (
                          <div key={i} className="flex items-center space-x-2 text-sm">
                            <div className="h-2 w-2 bg-primary rounded-full" />
                            <span>{cert}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-6 bg-gradient-primary hover-glow">
                        Book with {doctor.name.split(' ')[1]}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our <span className="gradient-text">Support Team</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Dedicated professionals who ensure your visit is comfortable, 
                  efficient, and exceeds your expectations at every step.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {support.map((member, index) => {
                  const images = [team1, team2, team3, team4];
                  return (
                    <div
                      key={index}
                      className="card-client scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="user-picture">
                        <img
                          src={images[index]}
                          alt={member.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <p className="name-client">{member.name}
                        <span>{member.title}</span>
                      </p>
                      <p className="text-sm mt-2 mb-2">{member.description}</p>
                      <div className="social-media">
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                          </svg>
                          <span className="tooltip-social">Twitter</span>
                        </a>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                          </svg>
                          <span className="tooltip-social">Instagram</span>
                        </a>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                          </svg>
                          <span className="tooltip-social">Facebook</span>
                        </a>
                        <a href="#">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                          </svg>
                          <span className="tooltip-social">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <Card className="p-8 bg-gradient-card hover-lift fade-in">
                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold mb-4">
                        Ready to Meet Our Team?
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        Schedule a consultation and experience personalized care from our expert team.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-muted-foreground">(555) 123-DENT</p>
                      </div>
                      <div className="text-center">
                        <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-muted-foreground">hello@puredent.com</p>
                      </div>
                      <div className="text-center">
                        <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                        <h3 className="font-semibold mb-2">Visit</h3>
                        <p className="text-muted-foreground">123 Dental Avenue</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="/contact">
                        <Button size="lg" className="bg-gradient-primary hover-glow">
                          <Calendar className="h-5 w-5 mr-2" />
                          Schedule Your Visit
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      );
}
export default Team;