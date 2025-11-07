import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Collection</h1>
          <p className="text-muted-foreground text-lg">
            Explore authentic tribal handicrafts, each with its own unique story
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-[var(--gradient-earth)]' : ''}
          >
            All Products
          </Button>
          <Button
            variant={selectedCategory === 'handicrafts' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('handicrafts')}
            className={selectedCategory === 'handicrafts' ? 'bg-[var(--gradient-earth)]' : ''}
          >
            Handicrafts
          </Button>
          <Button
            variant={selectedCategory === 'tribal-wear' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('tribal-wear')}
            className={selectedCategory === 'tribal-wear' ? 'bg-[var(--gradient-earth)]' : ''}
          >
            Tribal Wear
          </Button>
          <Button
            variant={selectedCategory === 'decorations' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('decorations')}
            className={selectedCategory === 'decorations' ? 'bg-[var(--gradient-earth)]' : ''}
          >
            Decorations
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
