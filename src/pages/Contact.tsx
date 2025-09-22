import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  Users,
  Shield
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    isEmergency: false
  });

  const services = [
    "General Consultation", 
    "Routine Cleaning",
    "Cosmetic Dentistry",
    "Dental Implants",
    "Orthodontics/Invisalign",
    "Emergency Treatment",
    "Other"
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM", 
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              Contact & Appointments
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Schedule Your Visit <br />Today
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your journey to optimal oral health? Contact us to schedule 
              your appointment or consultation. We're here to answer all your questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-lift scale-in">
              <CardContent className="p-0">
                <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">(555) 123-DENT</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover-lift scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-0">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">hello@puredent.com</p>
                <p className="text-sm text-muted-foreground">24-hour response</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover-lift scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-0">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground mb-2">123 Dental Avenue</p>
                <p className="text-sm text-muted-foreground">New York, NY 10001</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover-lift scale-in" style={{ animationDelay: "0.3s" }}>
              <CardContent className="p-0">
                <AlertCircle className="h-8 w-8 text-destructive mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Emergency</h3>
                <p className="text-muted-foreground mb-2">(555) 911-DENT</p>
                <p className="text-sm text-muted-foreground">24/7 urgent care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div className="slide-up">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold mb-6 gradient-text">
                    Book Your Appointment
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Service Needed</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your concerns, questions, or special needs..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover-glow"
                      size="lg"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Office Info & Hours */}
            <div className="space-y-8 slide-up">
              {/* Office Hours */}
              <Card className="p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">Office Hours</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-destructive font-medium">Emergency Line</span>
                      <span className="font-medium">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">What to Expect</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comprehensive consultation and examination
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Detailed treatment plan discussion
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Insurance and payment options review
                    </p>
                    <p className="flex items-start">
                      <span className="inline-block h-2 w-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Comfortable, relaxing environment
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Insurance & Payment */}
              <Card className="p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold">Insurance & Payment</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <p>We accept most major insurance plans and offer flexible payment options including:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Most PPO insurance plans
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Flexible payment plans
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        CareCredit financing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary mr-2" />
                        Cash discount available
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our <span className="gradient-text">Modern Facility</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conveniently located in the heart of the healthcare district with 
              ample parking and easy access to public transportation.
            </p>
          </div>
          
          <Card className="p-8 hover-lift fade-in">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Our Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">PureDent Dental Care</p>
                        <p className="text-muted-foreground">
                          123 Dental Avenue<br />
                          Healthcare District<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3">Transportation & Parking</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Free on-site parking available</li>
                        <li>• 2 blocks from Metro Station</li>
                        <li>• Multiple bus routes nearby</li>
                        <li>• Wheelchair accessible entrance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg flex items-center justify-center h-64 lg:h-auto">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Click for directions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;