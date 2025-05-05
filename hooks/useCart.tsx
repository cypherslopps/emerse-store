"use client";

import { useAppDispatch, useAppSelector } from './useStoreHooks';
import { addCartItem, closeCartBasket, decrementQuantity, incrementQuantity, openCartBasket, removeCartItem } from '@/store/cart/cart.slice';

const useCart = () => {
    const dispatch = useAppDispatch();
    const cartStore = useAppSelector((state) => state.cart);
    const cartItems = cartStore.cartItems;
    const totalCartItemsCount = cartItems.length && (cartItems.reduce((a,c) => a + c.quantity, 0));
    const isCartOpen = cartStore.isCartBasketOpen;
    const totalCartPrice = cartItems.length && cartItems.reduce((a,c: ICart) => a + (c.price * c.quantity), 0);

    // Add cart item
    const addToCart = (item: Omit<ICart, "quantity">) => {
        dispatch(addCartItem(item));
    }

    // Remove Cart item
    const removeCartItemFromCart = (cartId: ICart["id"]) => {
        dispatch(removeCartItem(cartId));
    }

    // Increment Cart Item Quantity
    const incrementCartItemQuantity = (cartId: ICart["id"]) => {
        dispatch(incrementQuantity(cartId));
    }

    // Decrement Cart Item Quantity
    const decrementCartItemQuantity = (cartId: ICart["id"]) => {
        dispatch(decrementQuantity(cartId));
    }
 
    // Clearcart 
    const clearCart = () => {

    }

    // Open cart basket
    const openCart = () => {
        dispatch(openCartBasket());
    }

    // Close cart basket
    const closeCart = () => {
        dispatch(closeCartBasket());
    }

    return {
        cartItems,
        totalCartItemsCount,
        totalCartPrice,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeCartItemFromCart,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        clearCart
    }
}

export default useCart