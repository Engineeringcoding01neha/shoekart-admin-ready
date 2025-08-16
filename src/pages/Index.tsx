import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star, Truck, Shield, HeartHandshake } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Premium Collection",
      description: "Curated selection of top brand shoes"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "Free delivery on all orders"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payment",
      description: "100% secure checkout process"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Customer Care",
      description: "24/7 support for all your needs"
    }
  ];

  const brands = ['Nike', 'Adidas', 'Converse', 'Vans', 'Puma', 'New Balance'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Welcome to ShoeKart
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover premium shoes from top brands. Step into comfort, style, and quality.
          </p>
          <div className="space-x-4">
            <Button size="lg" onClick={() => navigate('/products')}>
              Shop Now
            </Button>
            {!user && (
              <Button variant="outline" size="lg" onClick={() => navigate('/auth')}>
                Sign Up
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShoeKart?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand) => (
              <Badge key={brand} variant="secondary" className="text-lg py-2 px-6">
                {brand}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect Shoes?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our extensive collection and find the perfect pair for every occasion.
          </p>
          <Button size="lg" onClick={() => navigate('/products')}>
            Start Shopping
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
