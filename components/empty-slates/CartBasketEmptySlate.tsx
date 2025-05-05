import React from 'react'
import { Icons } from '../Icons'

const CartBasketEmptySlate = () => {
  return (
    <div className="h-80 flex flex-col items-center justify-center">
      <Icons.basket className="size-12 text-black/80 mb-3" />
      <h1 className="text-xl font-bold">No Cart Items</h1>
      <p className="text-sm text-black/80">Add product(s) to cart.</p>
    </div>
  )
}

export default CartBasketEmptySlate