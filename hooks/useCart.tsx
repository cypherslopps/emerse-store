"use client";

import { useState } from 'react';
import { useAppSelector } from './useStoreHooks';

const useCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartStore = useAppSelector((state) => state.cart);
    const cartItems = cartStore.items;
    const totalCartItemsCount = cartStore.totalCartCount;

    // Toggle Cart
    const toggleCart = () => {
        setIsCartOpen(prev => !prev);
    }

    // Add cart item
    const addToCart = () => {

    }

    // Remove Cart item
    const removeCartItem = (cardId: string) => {

    }

    // Clearcart 
    const clearCart = () => {

    }

    return {
        cartItems,
        totalCartItemsCount,
        isCartOpen,
        toggleCart,
        addToCart,
        removeCartItem,
        clearCart
    }
}

export default useCart