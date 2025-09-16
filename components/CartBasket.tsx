import React from 'react'
import { motion } from 'motion/react'
import useCart from '@/hooks/useCart'
import CartBasketCollection from './CartBasketCollection';
import CartBasketEmptySlate from './empty-slates/CartBasketEmptySlate';
import { Icons } from './Icons';

const CartBasket = () => {
  const {
    cartItems,
    closeCart,
    isCartOpen
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
      className='absolute -left-[150%] -translate-x-1/2 w-[23rem] rounded-lg bg-white border border-black/15'
      initial={{ y: 225, opacity: 0 }}
      animate={{ y: 215, opacity: 1 }}
      exit={{ y: 225, opacity: 0 }}
      transition={{ duration: .5, ease: "backInOut" }}
    >
      <header className='flex items-center justify-between border-b border-black/10 p-3.5'>
        <h4 className='text-base font-medium'>Shopping Cart</h4>
        <span 
          onClick={closeCart}
          className="hover:cursor-pointer"
        >
          <Icons.close className='fill-black/55' />
        </span>
      </header>

      {content}
    </motion.div>
  )
}

export default CartBasket