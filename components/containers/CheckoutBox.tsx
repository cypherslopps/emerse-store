import React from 'react'
import { Button, buttonVariants } from '../ui/Button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useCart from '@/hooks/useCart';

const CheckoutBox = () => {
  const { totalCartPrice, cartItems } = useCart();

  return (
    <div className="h-max p-5 rounded-lg border border-border">
      <h4 className="text-lg font-semibold">Cart Summary</h4>
      
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <p className="text-black/80">Subtotal</p>
          <span className="text-base font-semibold tracking-tight">${Number(totalCartPrice).toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between border-b border-border pb-4">
          <p className="text-black/80">Shipping</p>
          <span className="text-sm opacity-90">Calculated at checkout</span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-black/80">Total</p>
          <span className="text-base font-semibold tracking-tight">${Number(totalCartPrice).toLocaleString()}</span>
        </div>

      </div>

      <footer className="mt-6 space-y-3">
        <Button 
          size="action"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </Button>

        <Link
          href="/products"
          className={cn(buttonVariants({ variant: "outline", size: "action" }))}
        >
          Continue Shopping
        </Link>
      </footer>
    </div>
  )
}

export default CheckoutBox;