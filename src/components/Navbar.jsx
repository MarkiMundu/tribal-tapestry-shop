import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { NavLink } from '@/components/NavLink';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-[var(--gradient-earth)] bg-clip-text text-transparent">
              Tribal Crafts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              All Products
            </NavLink>
            <NavLink
              to="/category/handicrafts"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              Handicrafts
            </NavLink>
            <NavLink
              to="/category/tribal-wear"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              Tribal Wear
            </NavLink>
            <NavLink
              to="/category/decorations"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              Decorations
            </NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs flex items-center justify-center text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                end
                className="text-sm font-medium text-muted-foreground"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="text-sm font-medium text-muted-foreground"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                All Products
              </NavLink>
              <NavLink
                to="/category/handicrafts"
                className="text-sm font-medium text-muted-foreground"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Handicrafts
              </NavLink>
              <NavLink
                to="/category/tribal-wear"
                className="text-sm font-medium text-muted-foreground"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tribal Wear
              </NavLink>
              <NavLink
                to="/category/decorations"
                className="text-sm font-medium text-muted-foreground"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Decorations
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
