import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-handicrafts.jpg';

export const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Authentic Tribal
            <span className="block bg-[var(--gradient-earth)] bg-clip-text text-transparent">
              Handicrafts
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Discover handcrafted treasures that tell stories of tradition, culture, and sustainable artistry. Each piece supports tribal communities and preserves ancient crafts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button size="lg" className="bg-[var(--gradient-earth)] hover:opacity-90 transition-opacity">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/category/tribal-wear">
              <Button size="lg" variant="outline" className="border-2 hover:bg-accent/10">
                Shop Tribal Wear
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
