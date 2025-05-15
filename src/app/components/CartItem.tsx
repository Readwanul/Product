import { useAppDispatch } from "../store/hook";
import { addToCart, minusfromCart, removeFromCart } from "../store/slice";
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  unique_id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  
}

const CartItem = ({
  unique_id,
  name,
  quantity,
  price,
  image,
}: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ unique_id, name, quantity: 1, price, image }));
  };

  const handleMinusFromCart = () => {
    dispatch(minusfromCart({ unique_id }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ unique_id }));
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 py-6">
      {/* Image */}
      <div className="w-full sm:w-24 h-24 overflow-hidden rounded-md bg-muted">
        <img
          src={`https://admin.refabry.com/storage/product/${image}`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 w-full">
        <h3 className="text-lg font-semibold">{name}</h3>


        <div className="flex items-center justify-between mt-2">
          {/* Quantity Control */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleMinusFromCart}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleAddToCart}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Remove Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={handleRemove}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Total Price */}
      <div className="text-right font-semibold min-w-[80px]">
        ৳{(price).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
