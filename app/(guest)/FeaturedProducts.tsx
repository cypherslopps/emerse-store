import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturesProductItem = () => {
    return (
    <blockquote className="h-72 rounded-xl grid grid-rows-[1fr_max-content] gap-y-2.5 group"
    >
      <figure className="relative rounded-xl overflow-clip">
        <Image 
          src="/images/item.png"
          alt="category"
          fill
          className="object-center"
        />
      </figure>

      <div className="flex flex-col">
        <Link
            href="/"
            className="font-semibold text-base hover:underline"
        >
            Designer Hoodie
        </Link>
        <span className="opacity-90 text-[15.5px]">$212.31</span>
      </div>
    </blockquote>
    )
}

const FeaturedProducts = () => {
  return (
    <section className="section-container">
    <h1 className="section-title">Featured Products</h1>

    <div className="grid grid-cols-4 gap-5">
      {["Men", "Women", "Accessories", "Footwear"].map(category => (
        <FeaturesProductItem 
          key={category}
        />
      ))}
    </div>
  </section>
  )
}

export default FeaturedProducts