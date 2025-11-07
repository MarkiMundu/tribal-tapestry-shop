import { Hero } from '@/components/Hero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Heart, Leaf } from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Mission Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Authentic Craftsmanship</h3>
              <p className="text-muted-foreground text-sm">
                Every piece is handcrafted using traditional techniques passed down through generations
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Empowering Communities</h3>
              <p className="text-muted-foreground text-sm">
                Your purchase directly supports tribal artisans and their families
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sustainable Practices</h3>
              <p className="text-muted-foreground text-sm">
                Natural materials sourced responsibly with minimal environmental impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Collection</h2>
              <p className="text-muted-foreground">Handpicked treasures from our artisan partners</p>
            </div>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Every Product Tells a Story</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Behind every handcrafted piece is an artisan with years of expertise, carrying forward traditions that have shaped their communities for centuries. When you choose Tribal Crafts, you're not just buying a product – you're preserving cultural heritage and supporting sustainable livelihoods.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-[var(--gradient-earth)] hover:opacity-90 transition-opacity">
                Discover Their Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/category/handicrafts" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={products.find(p => p.category === 'handicrafts')?.image}
                  alt="Handicrafts"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 flex items-end">
                  <h3 className="text-2xl font-bold p-6 text-foreground">Handicrafts</h3>
                </div>
              </div>
            </Link>
            <Link to="/category/tribal-wear" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={products.find(p => p.category === 'tribal-wear')?.image}
                  alt="Tribal Wear"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 flex items-end">
                  <h3 className="text-2xl font-bold p-6 text-foreground">Tribal Wear</h3>
                </div>
              </div>
            </Link>
            <Link to="/category/decorations" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src={products.find(p => p.category === 'decorations')?.image}
                  alt="Decorations"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 flex items-end">
                  <h3 className="text-2xl font-bold p-6 text-foreground">Decorations</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
