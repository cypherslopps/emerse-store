import React from 'react'
import { motion } from 'motion/react'
import useCart from '@/hooks/useCart'
import CartBasketCollection from './CartBasketCollection';
import CartBasketEmptySlate from './empty-slates/CartBasketEmptySlate';

const CartBasket = () => {
  const {
    cartItems
  } = useCart();
  let content = null;

  if (cartItems.length) {
    content = (
      <CartBasketCollection />
    )
  } else {
    content = (
      <CartBasketEmptySlate />
    )
  } 

  return (
    <motion.div 
        className='absolute -left-1/2 -translate-x-1/2 w-56 h-40 bg-red-300 rounded-lg p-4'
        initial={{ y: 115, opacity: 0 }}
        animate={{ y: 110, opacity: 1 }}
        exit={{ y: 150, opacity: 0 }}
        transition={{ duration: .5, ease: "backInOut" }}
    >
      {content}
    </motion.div>
  )
}

export default CartBasket