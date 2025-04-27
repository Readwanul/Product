import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for a single cart item
interface CartItem {
  unique_id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const { unique_id,name, quantity, price,image } = action.payload;

      const existingItem = state.cartItems.find(item => item.unique_id === unique_id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.price += price; 
      } else {
        state.cartItems.push({ unique_id,name, quantity, price,image });
      }
    },
    removeFromCart(state, action: PayloadAction<{ unique_id: string }>) {
      const { unique_id } = action.payload;

      state.cartItems = state.cartItems.filter(item => item.unique_id !== unique_id);
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
