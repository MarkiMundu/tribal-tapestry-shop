import { Product } from '@/types/product';
import basketImage from '@/assets/product-basket.jpg';
import potteryImage from '@/assets/product-pottery.jpg';
import textileImage from '@/assets/product-textile.jpg';
import wallArtImage from '@/assets/product-wall-art.jpg';
import jewelryImage from '@/assets/product-jewelry.jpg';
import clothingImage from '@/assets/product-clothing.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Handwoven Tribal Basket',
    price: 45.99,
    category: 'handicrafts',
    image: basketImage,
    description: 'Beautiful handwoven basket with traditional geometric patterns, crafted using age-old techniques passed down through generations.',
    artisan: 'Crafted by the Warli artisans of Maharashtra',
    story: 'This exquisite basket is woven using natural fibers sourced from sustainable forests. Each pattern tells a story of harvest celebrations and community unity. The artisans spend weeks perfecting each piece, ensuring every weave carries the soul of their ancestral craft.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Traditional Clay Pottery',
    price: 32.50,
    category: 'handicrafts',
    image: potteryImage,
    description: 'Authentic terracotta pottery with hand-painted tribal motifs, perfect for home decoration or functional use.',
    artisan: 'Made by Gond tribal potters',
    story: 'Created using clay from riverbanks, this pottery is shaped on traditional wheels and fired in earthen kilns. The geometric patterns are inspired by nature and tribal folklore, painted using natural pigments. Each vase represents months of mastery and cultural preservation.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Embroidered Tribal Shawl',
    price: 68.00,
    category: 'tribal-wear',
    image: textileImage,
    description: 'Luxurious hand-embroidered shawl featuring intricate tribal patterns in forest green and terracotta hues.',
    artisan: 'Woven by Bhil tribe weavers',
    story: 'This shawl takes over a month to complete, with each thread carefully chosen and dyed using natural ingredients. The patterns represent the changing seasons and forest life. Wearing this shawl connects you to centuries of textile artistry and sustainable practices.',
    inStock: true,
  },
  {
    id: '4',
    name: 'Carved Wooden Wall Art',
    price: 89.99,
    category: 'decorations',
    image: wallArtImage,
    description: 'Intricately carved wooden mandala showcasing exceptional craftsmanship and attention to detail.',
    artisan: 'Carved by Santhal woodworkers',
    story: 'Sourced from fallen trees in protected forests, this piece is hand-carved over weeks using traditional chisels. The mandala design symbolizes cosmic unity and nature\'s balance. Each groove and curve represents the artisan\'s deep connection with their craft and environment.',
    inStock: true,
  },
  {
    id: '5',
    name: 'Beaded Tribal Necklace',
    price: 28.75,
    category: 'tribal-wear',
    image: jewelryImage,
    description: 'Handcrafted necklace made with natural wooden beads and traditional tribal design elements.',
    artisan: 'Created by Toda tribe artisans',
    story: 'Each bead is individually hand-carved and polished using natural oils. The color variations come from different wood types, each with spiritual significance. This necklace has been worn in tribal ceremonies for generations, symbolizing strength and community.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Traditional Tribal Tunic',
    price: 95.00,
    category: 'tribal-wear',
    image: clothingImage,
    description: 'Handwoven cotton tunic with authentic tribal embroidery and traditional patterns.',
    artisan: 'Handcrafted by Munda tribe weavers',
    story: 'This tunic is woven on traditional looms using organic cotton and natural dyes. The embroidery patterns are unique to the Munda tribe, representing agricultural cycles and harvest blessings. Every stitch is a prayer for prosperity and connection to the earth.',
    inStock: true,
  },
];
