import { useParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const Category = () => {
  const { category } = useParams();
  const filteredProducts = products.filter((p) => p.category === category);

  const categoryTitles = {
    handicrafts: 'Handicrafts',
    'tribal-wear': 'Tribal Wear',
    decorations: 'Decorations',
  };

  const categoryDescriptions = {
    handicrafts: 'Traditional handcrafted items made with centuries-old techniques',
    'tribal-wear': 'Authentic tribal clothing and accessories with cultural significance',
    decorations: 'Beautiful home décor pieces that bring tribal artistry into your space',
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {categoryTitles[category || ''] || 'Products'}
          </h1>
          <p className="text-muted-foreground text-lg">
            {categoryDescriptions[category || ''] || 'Explore our collection'}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
