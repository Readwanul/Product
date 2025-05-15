'use client';

import { useAppSelector, useAppDispatch } from "../store/hook";
import { removeFromCart, clearCart } from "../store/slice"; 
import { minusfromCart,addToCart } from "../store/slice";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartList = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.counter.cartItems);

  const handleRemove = (unique_id: string) => {
    dispatch(removeFromCart({ unique_id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto py-8 px-4">

      {cartItems.length === 0 ? (
        <div className="container px-4 py-16 md:px-6 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products">
          <Button className="bg-teal-600 hover:bg-teal-700">
            Start Shopping
          </Button>
        </Link>
      </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.unique_id}
              className="flex flex-col sm:flex-row items-center sm:items-start bg-gray-100 p-6 rounded-lg shadow-md gap-6"
            >
              <Image
                src={`https://admin.refabry.com/storage/product/${item.image}`}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />

              <div className="flex-1 w-full">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-gray-600 mt-2">Price: ৳ {item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>

              <button
                className="text-red-500 hover:text-red-700 font-medium mt-4 sm:mt-0"
                onClick={() => handleRemove(item.unique_id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8">
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-800"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-800">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
