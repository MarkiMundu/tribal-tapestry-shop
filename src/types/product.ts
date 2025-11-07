export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'handicrafts' | 'tribal-wear' | 'decorations';
  image: string;
  description: string;
  artisan: string;
  story: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
