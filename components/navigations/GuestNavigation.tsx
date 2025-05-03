import Link from 'next/link'
import React from 'react'
import { Icons } from '../Icons'
import { Button } from '../ui/Button'
import CartIconButton from '../CartIconButton'

const GuestNavigation = () => {
  return (
    <header className="sticky top-0 w-full px-1">
      <nav className="h-16 flex items-center justify-between px-5 border-b border-gray-100 backdrop-blur-lg">
        <Link
          href="/"
          className="inline-flex items-center gap-1 font-bold"
        >
          <Icons.basket />
          <span className="text-xl">Store</span>
        </Link>

        <div className="inline-flex gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="transparent"
              size="none"
            >
              <Icons.heart className='size-6' />
            </Button>

            {/* Cart Icon Button */}
            <CartIconButton />
          </div>

          <Button className='w-24 font-medium'>
            Login
          </Button>
        </div>
      </nav>

    </header>
  )
}

export default GuestNavigation