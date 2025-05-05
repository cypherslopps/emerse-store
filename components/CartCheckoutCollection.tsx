import useCart from '@/hooks/useCart'
import Image from 'next/image'
import React from 'react'
import { Icons } from './Icons'
import SlideUpFade from './SlideUpFade'

const CartCheckoutCCollectionItem = ({ 
    id,
    imageSource,
    title,
    price,
    quantity
 }: ICart) => {
    const {
        incrementCartItemQuantity,
        removeCartItemFromCart,
        decrementCartItemQuantity
     } = useCart();

    return (
        <blockquote className="border border-border p-6 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Image 
                    src={imageSource}
                    alt={title}
                    width={120}
                    height={120}
                    className="rounded-md"
                />

                <div>
                    <h1 className="font-semibold">{title}</h1>
                    <div className='flex items-center gap-1 text-[15px] text-black/50 -mt-0.5'>
                        <p>Size: M</p>
                        <span>|</span>
                        <p>Color: Black</p>
                    </div>

                    {/* Cart controls */}
                    <div className='flex items-center gap-2 mt-2'>
                        <div className="border border-border w-11/12 flex text-center rounded-lg hover:cursor-pointer select-none">
                            {/* Cart Quantity Decrease Button */}
                            <span 
                                className="w-[28%] p-1 active:scale-[.97]"
                                onClick={() => decrementCartItemQuantity(id)}
                            >
                                -
                            </span>

                            {/* Cart Item Quantity */}
                            <SlideUpFade 
                                value={quantity}
                                className="flex-1 p-1 active:scale-[.97] border-x border-border" 
                            />

                            {/* Cart Quantity Increase Button */}
                            <span 
                                className="w-[28%] p-1 active:scale-[.97]"
                                onClick={() => incrementCartItemQuantity(id)}
                            >
                                +
                            </span>
                        </div>

                        {/* Remove Cart Item Button */}
                        <span 
                            onClick={() => removeCartItemFromCart(id)}
                            className="hover:cursor-pointer active:scale-[.97]"
                        >
                            <Icons.trash className="text-black/80 size-5" />
                        </span>
                    </div>
                </div>
            </div>

            <p className="text-lg font-bold">${price}</p>
        </blockquote>
    )
}

const CartCheckoutCollection = () => {
    const { cartItems } = useCart();

    return (
        <div className="space-y-3">
            {cartItems.map(c => (
                <CartCheckoutCCollectionItem 
                    key={c.id} 
                    {...c}
                />
            ))}
        </div>
    )
}

export default CartCheckoutCollection