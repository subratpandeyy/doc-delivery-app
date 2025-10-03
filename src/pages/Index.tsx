import { Button } from '@/components/ui/button';
import { Pill, Shield, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <Pill className="h-4 w-4" />
              <span>Your Trusted Online Pharmacy</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Order Medicines
              <br />
              <span className="text-primary">From the Comfort of Home</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Get genuine medicines delivered to your doorstep. Safe, secure, and convenient healthcare at your fingertips.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/medicines">
                <Button size="lg" className="text-base">
                  Browse Medicines
                </Button>
              </Link>
              <Link to="/auth">
                <Button size="lg" variant="outline" className="text-base">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose MediCo?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">100% Genuine</h3>
              <p className="text-muted-foreground">All medicines are sourced from licensed manufacturers</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-secondary/10 p-4">
                <Truck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">Get your medicines delivered within 24-48 hours</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-accent/10 p-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Care</h3>
              <p className="text-muted-foreground">Pharmacist support for your health queries</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Pill className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Wide Range</h3>
              <p className="text-muted-foreground">Over 1000+ medicines and healthcare products</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of customers who trust us for their healthcare needs
          </p>
          <Link to="/medicines">
            <Button size="lg" variant="secondary">
              Order Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
