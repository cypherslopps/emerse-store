"use client"

import CartCheckoutCollection from '@/components/CartCheckoutCollection';
import CheckoutForm from '@/components/forms/CheckoutForm';
import useCart from '@/hooks/useCart'
import React from 'react'

const Cart = () => {
    const { totalCartItemsCount } = useCart();

    return (
        <main className="section-container pt-6 md:pt-12 lg:pt-14 space-y-8">
            <h1 className="text-xl sm:text-2xl font-semibold">Shopping Cart {totalCartItemsCount ? (`(${totalCartItemsCount})`) : null}</h1>

            <section className="grid grid-cols-[70%_30%] gap-6">
                {/* Checkout collection */}
                <CartCheckoutCollection />

                {/* Checkout Form */}
                <CheckoutForm />
            </section>
        </main>
    )
}

export default Cart