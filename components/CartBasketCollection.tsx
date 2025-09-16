import React from 'react'
import { ScrollArea } from './ui/ScrollArea'
import useCart from '@/hooks/useCart';
import { Icons } from './Icons';
import Image from 'next/image';

const CartBasketCollectionItem = ({ cart }: { cart: ICart }) => {
  const { removeCartItemFromCart } = useCart();
  const { category, title, id, imageSource, price } = cart;


  return (
    <div className="flex items-center justify-between">
      <div className='flex-1 flex items-center gap-x-2'>
        {/* Cart Image */}
        <figure className="w-max p-0.5 border border-black/20 rounded-md relative">
          <Image 
            src={imageSource}
            alt={title}
            className="object-cover rounded-md"
            width={84}
            height={80}
          />

          <span 
            className="absolute -top-1 -left-1.5 bg-black text-white rounded-full p-0.5 hover:cursor-pointer"
            onClick={() => removeCartItemFromCart(id)}
          >
            <Icons.close className='size-3.5' />
          </span>
        </figure>
        
        {/* Cart Description */}
        <div className="flex flex-col">
          <span className='text-[13.2px] uppercase text-gray-500'>{category}</span>
          <p className='text-base -mt-1 mb-0.5 font-bold'>{title}</p>

          <div className="flex gap-1.5">
            <p className="inline-flex items-center gap-0.5">
              <span className="text-[13.5px] text-gray-500">Size:</span>
              <span className="text-[13.5px] font-medium">N/A</span>
            </p>

            <p className="inline-flex items-center gap-0.5">
              <span className="text-[13.5px] text-gray-500">Color:</span>
              <span className="text-[13.5px] font-medium">Black</span>
            </p>
          </div>
        </div>
      </div>

      {/* Cart item price */}
      <p className="font-medium tracking-tight text-base">${price}</p>
    </div>
  )
}

const CartBasketCollection = () => {
  const { 
    totalCartItemsCount, 
    totalCartPrice,
    cartItems 
  } = useCart();

  return (
    <>
      <ScrollArea className="h-[calc(20rem-4rem)]">
        <div className="space-y-2 pt-3 px-3.5">
          {cartItems.map(item => (
            <CartBasketCollectionItem 
              key={item.id}
              cart={item}
            />
          ))}
        </div>
      </ScrollArea>

      <footer className="px-3 h-16 border-t border-black/10 flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <h5 className="text-sm text-black/75">Total Items:</h5>
          <p className="text-base font-semibold">{totalCartItemsCount}</p>
        </div>
        <div className="flex items-center justify-between">
          <h5 className="text-sm text-black/75">Total Price:</h5>
          <p className="text-base font-semibold">${totalCartPrice}</p>
        </div>
      </footer>
    </>
  )
}

export default CartBasketCollection