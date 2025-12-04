import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  tags?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-highlight text-highlight-foreground font-medium px-3 py-1">
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
          aria-label="Agregar a favoritos"
        >
          <Heart className="w-5 h-5 text-foreground" />
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button className="w-full rounded-full" size="sm">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Agregar
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-serif text-xl font-bold text-primary">
            ${product.price}
            <span className="text-sm font-normal text-muted-foreground ml-1">MXN</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;