"use client";

import { useProducts } from '@/hooks/useProducts';
import Image from 'next/image';
import React from 'react'
import { Button } from './ui/Button';
import useCart from '@/hooks/useCart';

const ProductCollection = () => {
    const { products } = useProducts();
    const { addToCart } = useCart();

    const addItemToCart = (product: IProduct) => {
        addToCart({
            id: product.id,
            title: product.title,
            category: product.category,
            imageSource: product.imageSource,
            price: product.price
        });
    }

    return (
        <div className="grid grid-cols-5 gap-4">
            {products.map(p => (
                <blockquote key={p.id}>
                    <figure>
                        <Image 
                            src={p.imageSource}
                            alt={p.title}
                            width={300}
                            height={200}
                            className="rounded-lg"
                        />
                    </figure>

                    <div className="mt-2">
                        <div className="flex items-center justify-between">
                            <h5 className="font-bold">{p.title}</h5>
                            <span className="bg-black text-white px-5 py-0.5 text-xs rounded-sm uppercase">{p.category}</span>
                        </div>
                        <p className="text-black/80">{p.description}</p>

                        <div className="space-y-1.5 mt-2">
                            <p className="text-sm">
                                <span className="font-medium text-black/70">Price -</span> {" "}
                                <span className="font-bold">${p.price}</span>
                            </p>
                            <Button
                                className="w-full"
                                onClick={() => addItemToCart(p)}
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </blockquote>
            ))}
        </div>
    )
}

export default ProductCollection