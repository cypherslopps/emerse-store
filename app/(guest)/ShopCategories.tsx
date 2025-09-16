import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShopCategoryItem = ({
  title
}: { title: string }) => {
  return (
    <Link 
      href={`/shop/categories?category=${title.toLowerCase()}`}
      className="h-72 rounded-xl grid grid-rows-[1fr_max-content] gap-y-2.5 group"
    >
      <figure className="relative rounded-xl overflow-clip">
        <Image 
          src="/images/item.png"
          alt="category"
          fill
          className="object-center"
        />
      </figure>

      <p className="group-hover:underline text-center font-bold">
        {title}
      </p>
    </Link>
  )
}

const ShopCategories = () => {
  return (
    <section className="section-container pt-14">
      <h1 className="section-title">Shop by Category</h1>

      <div className="grid grid-cols-4 gap-5">
        {["Men", "Women", "Accessories", "Footwear"].map(category => (
          <ShopCategoryItem 
            key={category}
            title={category}
          />
        ))}
      </div>
    </section>
  )
}

export default ShopCategories