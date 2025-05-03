"use client";

import React from 'react'
import { AnimatePresence, motion } from "motion/react";

import { Button } from './ui/Button'
import { Icons } from './Icons'
import useCart from '@/hooks/useCart'
import CartBasket from './CartBasket';

const CartIconButton = () => {
  const { 
    totalCartItemsCount,
    isCartOpen,
    toggleCart 
  } = useCart();

  console.log(isCartOpen)

  return (
    <div className="relative inline-flex justify-center items-center">
      <Button
        variant="transparent"
        size="none"
        onClick={toggleCart}
        className="relative"
      >
        <Icons.shoppingBag className='size-6' />
        {totalCartItemsCount !== 0 && (
          <div className="pointer-events-none absolute -top-2 size-5 -right-2 text-xs bg-red-500 rounded-full flex items-center justify-center border border-white">
            <span className='font-semibold text-white'>{totalCartItemsCount}</span>
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