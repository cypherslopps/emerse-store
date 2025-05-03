import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartInitialState = {
    items: [],
    totalCartCount: 0,
    totalCartPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<ICart>) => {
            state.items.push(action.payload);
        },
        removeCartItem: (state, action: PayloadAction<ICart["id"]>) => {
            
        },
        clearCartItems: (state) => {
            
        }
    }
})

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer; 
