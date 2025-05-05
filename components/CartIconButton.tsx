"use client";

import React from 'react'
import { AnimatePresence } from "motion/react";

import { Button } from './ui/Button'
import { Icons } from './Icons'
import useCart from '@/hooks/useCart'
import CartBasket from './CartBasket';
import useHandleClickOutside from '@/hooks/useHandleClickOutside';
import SlideUpFade from './SlideUpFade';

const updateCountFontSize = (count: number) => {
  if (count < 10) {
    return "12px"
  } else {
    return "10px"
  }
} 

const CartIconButton = () => {
  const { 
    totalCartItemsCount,
    isCartOpen,
    openCart,
    closeCart 
  } = useCart();
  const { containerRef } = useHandleClickOutside(closeCart, isCartOpen);

  return (
    <div 
      ref={containerRef}  
      className="relative inline-flex justify-center items-center"
    >
      <Button
        variant="transparent"
        size="none"
        onClick={openCart}
        className="relative"
      >
        <Icons.shoppingBag className='size-6' />
        {totalCartItemsCount !== 0 && (
          <div className="pointer-events-none absolute -top-2 size-5 -right-2 bg-red-500 rounded-full flex items-center justify-center border border-white overflow-hidden">
            <SlideUpFade 
              value={totalCartItemsCount}
              style={{ fontSize: updateCountFontSize(totalCartItemsCount) }}
              className="font-semibold text-white"
            />
          </div>
        )}
      </Button>

      {/* Toggle Cart */}
      <AnimatePresence>
        {isCartOpen && <CartBasket />}
      </AnimatePresence>
    </div>
  )
}

export default CartIconButton