import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  unique_id: string;
  name: string;
  quantity: number;
  price: number; // price per unit
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
    // ✅ Add or increase quantity
    addToCart(state, action: PayloadAction<CartItem>) {
      const { unique_id, name, quantity, price, image } = action.payload;

      const existingItem = state.cartItems.find(
        (item) => item.unique_id === unique_id
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        // ❌ Don't change unit price here
      } else {
        state.cartItems.push({ unique_id, name, quantity, price, image });
      }
    },

    // ✅ Subtract quantity or remove item if quantity hits 0
    minusfromCart(state, action: PayloadAction<{ unique_id: string }>) {
      const { unique_id } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.unique_id === unique_id
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.unique_id !== unique_id
          );
        }
      }
    },

    // ✅ Remove an item entirely
    removeFromCart(state, action: PayloadAction<{ unique_id: string }>) {
      const { unique_id } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.unique_id !== unique_id
      );
    },

    // ✅ Clear all items
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  minusfromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
