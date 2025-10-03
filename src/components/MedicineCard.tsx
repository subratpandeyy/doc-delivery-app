import { Medicine } from '@/types/medicine';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, FileText } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export const MedicineCard = ({ medicine }: { medicine: Medicine }) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/auth');
      return;
    }
    addToCart(medicine, 1);
    toast.success(`${medicine.name} added to cart`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={medicine.image} 
          alt={medicine.name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">{medicine.name}</CardTitle>
          {medicine.requiresPrescription && (
            <Badge variant="secondary" className="shrink-0">
              <FileText className="mr-1 h-3 w-3" />
              Rx
            </Badge>
          )}
        </div>
        <CardDescription>{medicine.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{medicine.description}</p>
        <p className="mt-2 text-xs text-muted-foreground">By {medicine.manufacturer}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-primary">₹{medicine.price}</p>
          <p className="text-xs text-muted-foreground">
            {medicine.stock > 0 ? `${medicine.stock} in stock` : 'Out of stock'}
          </p>
        </div>
        <Button 
          onClick={handleAddToCart} 
          disabled={medicine.stock === 0}
          size="sm"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};
