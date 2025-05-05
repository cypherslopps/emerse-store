import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ItemImage from "@/public/images/item.png";

const cartItems: ICart[] = [
    {
        id: "fsdf-323",
        category: "shoe",
        title: "Adidas",
        imageSource: ItemImage.src,
        price: 23,
        quantity: 2
    },
    {
        id: "456d-323",
        category: "chair",
        title: "Ikea Markus",
        imageSource: ItemImage.src,
        price: 13.42,
        quantity: 4
    }
];

const initialState: ICartInitialState = {
    cartItems: cartItems,
    isCartBasketOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<Omit<ICart, "quantity">>) => {
            const cartItem = state.cartItems.find(c => c.id === action.payload.id);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        removeCartItem: (state, action: PayloadAction<ICart["id"]>) => {
            state.cartItems = state.cartItems.filter(c => c.id !== action.payload);
        },
        incrementQuantity: (state, action: PayloadAction<ICart["id"]>) => {
            const cartItem = state.cartItems.find(c => c.id === action.payload);

            if (cartItem) cartItem.quantity++;
        },
        decrementQuantity: (state, action: PayloadAction<ICart["id"]>) => {
            const cartItem = state.cartItems.find(c => c.id === action.payload);

            if (cartItem && cartItem.quantity > 1) {
                cartItem.quantity--;
            } else {
                state.cartItems = state.cartItems.filter(c => c.id !== action.payload);
            }
        },
        clearCartItems: (state) => {
            state.cartItems = [];
        },
        openCartBasket: (state) => {
            state.isCartBasketOpen = true;
        },
        closeCartBasket: (state) => {
            state.isCartBasketOpen = false;
        }
    }
})

export const { 
    addCartItem,
    removeCartItem,
    clearCartItems,
    openCartBasket,
    incrementQuantity,
    decrementQuantity,
    closeCartBasket 
} = cartSlice.actions;
export default cartSlice.reducer; 
