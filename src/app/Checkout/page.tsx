'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAppSelector, useAppDispatch } from '@/app/store/hook'
import { clearCart } from '@/app/store/slice';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { CreditCard } from 'lucide-react';

const Checkout = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const cartItems = useAppSelector((state) => state.counter.cartItems);

  // ✅ Calculate total using Redux state
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Handle redirect if cart is empty (with useEffect)
  useEffect(() => {
    if (cartItems.length === 0) {
      router.push('/')
    }
  }, [cartItems, router]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      dispatch(clearCart());
      toast('Order placed successfully!');
      router.push('/');
    }, 1500);
  };

  if (cartItems.length === 0) return null;

  return (
  <section className="px-4 py-8 sm:px-6 md:px-10">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">
        Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12">
          {/* Shipping Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-white rounded-xl shadow-md p-6 border">
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div
                    key={item.unique_id}
                    className="flex justify-between items-center py-3"
                  >
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-500"> × {item.quantity}</span>
                    </div>
                    <span>৳{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t space-y-3">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>৳{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between pt-4 border-t text-lg font-semibold">
                  <span>Total</span>
                  <span>৳{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-teal-600 hover:bg-teal-700 h-12 text-base"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Place Order
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-gray-400 mt-4">
                By placing your order, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
);

};

export default Checkout;
