'use client';

import { useAppSelector, useAppDispatch } from "../store/hook";
import {clearCart} from "../store/slice";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CartItem from "../components/CartItem";

const CartList = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.counter.cartItems);

const cartTotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  const handleClearCart = () => {
    if (confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-16 md:px-6 text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link href="/Product">
          <Button className="bg-teal-600 hover:bg-teal-700">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center pb-4 border-b">
              <h2 className="font-semibold text-lg">
                Cart Items ({cartItems.length})
              </h2>
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
            </div>

            <div className="divide-y">
              {cartItems.map((item) => (
                <CartItem
                  key={item.unique_id}
                  unique_id={item.unique_id}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="font-semibold text-lg pb-4 border-b">Order Summary</h2>

            <div className="py-4 space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>৳{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>৳{cartTotal.toFixed(2)}</span>
              </div>

              <Link href="/Checkout">
                <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default CartList;
